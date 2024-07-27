import dynamic from "next/dynamic";
import Main from "@/component/Main";
import Account from "@/component/Account";
import GuestBookForm from "@/component/GuestBookForm";
import GuestBookList from "@/component/GuestBookList";

const Location = dynamic(() => import("@/component/Location"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h2>메인 이미지</h2>
      <Main />
      <h2>초대문구</h2>
      <div>
        <h2>캘린더</h2>
        <div>
          0000년 00월 00일 00:00
          <br />
          동현❤️진희의 결혼식이 0일 남았습니다.
        </div>
      </div>
      <h2>갤러리</h2>
      <h2>오시는 길</h2>
      <Location />
      <h2>신랑 신부에게-방명록</h2>
      <GuestBookForm />
      <GuestBookList />
      <h2>마음 전하실 곳</h2>
      <Account />
      <h2>링크공유</h2>
    </div>
  );
}
