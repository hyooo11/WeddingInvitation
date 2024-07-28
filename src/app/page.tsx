import dynamic from "next/dynamic";
import Main from "@/layout/Main";
const Calendar = dynamic(() => import("@/layout/Calendar"), {
  ssr: false,
});
import Gallery from "@/layout/Gallery";
const Location = dynamic(() => import("@/layout/Location"), {
  ssr: false,
});
import Account from "@/layout/Account";
import GuestBookList from "@/layout/GuestBookList";
import GuestBookForm from "@/layout/GuestBookForm";

export default function Home() {
  return (
    <div className="Wrapper">
      <Main />
      <Calendar />
      <Gallery />
      <Location />
      <div className="h2">신랑 신부에게</div>
      <GuestBookList />
      <GuestBookForm />
      <div className="h2">마음 전하실 곳</div>
      <Account />
      <h2>링크공유</h2>
    </div>
  );
}
