import data from "@/data.json";
import FadeInWhenVisible from "@/components/FadeInWhenVisible"; // 추가
import FlowerRain from "@/components/FlowerRain";

const Main = () => {
  return (
    <div className="Main">


      <figure className="banner">
        <FlowerRain />
        <img src={data.weddingInfo.bannerImg} />
      </figure>

      <FadeInWhenVisible>
        <div className="greeting">
          <div className="inner">
            <div className="h2">
              <p className="eng">greetings</p>
              <p className="tit">{data.greeting.title}</p>
            </div>
            <div className="message">{data.greeting.message}</div>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};
export default Main;
