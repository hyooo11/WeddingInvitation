import dynamic from "next/dynamic";
import Main from "@/component/Main";
const Calendar = dynamic(() => import("@/component/Calendar"), {
  ssr: false,
});
import Gallery from "@/component/Gallery";
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
      <Gallery />
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
