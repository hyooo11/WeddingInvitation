"use client";
import data from "@/data.json";
import { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSaturday,
  isSunday,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  sub,
} from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜
  const [targetDate, setTargetDate] = useState(new Date(data.weddingInfo.date)); //결혼식 디데이

  const dDay = format(targetDate, "yyyy년 MM월 dd일");

  const monthStart = startOfMonth(targetDate); // 현재 달의 시작 날짜 (2023-08-01)
  const monthEnd = endOfMonth(monthStart); // 현재 달의 마지막 날짜 (2023-08-31)
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // 현재 달의 첫 주 시작 날짜 (2023-07-30)
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 }); // 현재 달의 마지막 주 마지막 날짜 (2023-09-02)
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const daysInMonth = days.map((day) => ({
    day: format(day, "dd"),
    isDDay: format(targetDate, "dd") !== format(day, "dd") ? false : true,
    issunday: isSunday(day),
    isSaturday: isSaturday(day),
    rest: format(targetDate, "MM") !== format(day, "MM") ? true : false,
  }));

  // 실시간 업데이트를 위한 useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  const daysRemaining = differenceInDays(targetDate, currentDate);
  const hoursRemaining = differenceInHours(
    sub(targetDate, { days: daysRemaining }),
    currentDate
  );
  const minutesRemaining = differenceInMinutes(
    sub(targetDate, { days: daysRemaining, hours: hoursRemaining }),
    currentDate
  );
  const secondsRemaining = differenceInSeconds(
    sub(targetDate, {
      days: daysRemaining,
      hours: hoursRemaining,
      minutes: minutesRemaining,
    }),
    currentDate
  );

  const count = `${daysRemaining}일 ${hoursRemaining}시간 ${minutesRemaining}분 ${secondsRemaining}초`;

  return (
    <div className="Calendar">
      <div className="title">{dDay}</div>
      <div>
        <div className="week">
          {week.map((data, index) => {
            return <span key={index}>{data}</span>;
          })}
        </div>
        <div className="day">
          {daysInMonth.map((data, index) => {
            return (
              <span
                className={
                  data.isDDay
                    ? "dday"
                    : data.rest
                    ? "rest"
                    : data.issunday
                    ? "sun"
                    : data.isSaturday
                    ? "satur"
                    : "default"
                }
                key={index}
              >
                {data.day}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <div>{dDay}</div>
        <div>동현❤️진희의 결혼식이 {count} 남았습니다.</div>
      </div>
    </div>
  );
};

export default Calendar;
