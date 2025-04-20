import Main from "@/layout/Main";

import Calendar from '@/layout/Calendar'
import Gallery from "@/layout/Gallery";
import Location from "@/layout/Location"
import Account from "@/layout/Account";
import GuestBookList from "@/layout/GuestBookList";
import GuestBookForm from "@/layout/GuestBookForm";
import Shared from "@/layout/Shared";
import Subbanner from "@/layout/Subbanner";
import Footer from "@/layout/Footer";
import Information from "@/layout/Information";
import FadeInWhenVisible from "@/components/FadeInWhenVisible"; // 추가

export default function Home() {
  return (
    <div className="Wrapper">
      <Main />
      <FadeInWhenVisible>
        <Calendar />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Gallery />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Location />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Information />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="h2">
          <p className="eng">guest book</p>
          <p className="tit">방명록</p>
        </div>
        <GuestBookForm />
        <GuestBookList />
      </FadeInWhenVisible>

      <FadeInWhenVisible>

        <div className="h2">
          <p className="eng">account</p>
          <p className="tit">마음 전하실 곳</p>
        </div>
        <Account />
      </FadeInWhenVisible>
      <Subbanner />
      {/* <h2>링크공유</h2> */}
      <Shared />
      <Footer />
    </div>
  );
}
