"use client";
import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import Button from "@/components/Button";
import { formatDate } from "@/util/format";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Toast from "@/components/Toast";
import { useToast } from "@/hook/useToast";

// zod 스키마 정의
const schema = z.object({
  name: z.string().trim().nonempty('이름을 입력해주세요.').max(10, '이름은 10자 이하로 입력해주세요.'),
  password: z.string().trim().nonempty('비밀번호를 입력해주세요.').max(8, '비밀번호는 8자 이하로 입력해주세요.'),
  message: z.string().trim().nonempty('내용을 입력해주세요.').max(50, '내용은 50자 이하로 입력해주세요.')
})

// 폼 데이터 타입
type FormData = z.infer<typeof schema>;

const GuestbookForm = () => {
  const { toast, showToast, hideToast } = useToast();
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  //submit
  const onSubmit = (data: FormData) => {
    const today = new Date()
    const createAt = formatDate(today)

    const name = data.name;
    const password = data.password;
    const message = data.message;

    const messagesRef = ref(database, "messageList");
    push(messagesRef, { createAt, name, password, message }).then(() => {
      showToast("방명록이 등록되었습니다.", "success");
      reset();
    });
  };

  return (
    <div className="GuestbookForm">
      <div className="inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_wrap">
            <div className="writer">
              <div className="input_box">
                <input
                  type="text"
                  placeholder="이름"
                  {...register("name")}
                />
                {errors.name && (
                  <p className='error_txt'>{errors.name.message}</p>
                )}
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder="비밀번호"
                  {...register("password")}
                />
                {errors.password && (
                  <p className='error_txt'>{errors.password.message}</p>
                )}
              </div>
            </div>
            <div className="input_box">
              <textarea
                placeholder="축하메세지를 남겨주세요."
                {...register("message")}
              />
              {errors.message && (
                <p className='error_txt'>{errors.message.message}</p>
              )}
            </div>
          </div>
          <Button type='submit' text="등록하기" />
        </form>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default GuestbookForm;
