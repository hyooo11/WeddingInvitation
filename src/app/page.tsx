import dynamic from "next/dynamic";
import Main from "@/component/Main";
import Calendar from "@/component/Calendar";
const Location = dynamic(() => import("@/component/Location"), {
  ssr: false,
});
import Account from "@/component/Account";
import GuestBookForm from "@/component/GuestBookForm";
import GuestBookList from "@/component/GuestBookList";

export default function Home() {
  return (
    <div className="Wrapper">
      <Main />
      <Calendar />
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
