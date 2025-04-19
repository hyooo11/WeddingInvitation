import dynamic from "next/dynamic";
import Main from "@/layout/Main";

import Calendar from '@/layout/Calendar'
import Gallery from "@/layout/Gallery";
import Location from "@/layout/Location"
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
      <div className="h2">
        <p className="eng">guest book</p>
        <p className="tit">방명록</p>
      </div>
      <GuestBookForm />
      <GuestBookList />
      <div className="h2">
        <p className="eng">account</p>
        <p className="tit">마음 전하실 곳</p>
      </div>
      <Account />
      <h2>링크공유</h2>
    </div>
  );
}
