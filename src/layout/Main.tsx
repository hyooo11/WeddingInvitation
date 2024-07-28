import data from "@/data.json";

const Main = () => {
  return (
    <div className="Main">
      <figure className="banner">
        <img src={data.weddingInfo.bannerImg} />
      </figure>
      <div className="greeting">
        <div className="inner">
          <div className="h2 font-bold">{data.greeting.title}</div>
          <div className="message">{data.greeting.message}</div>
        </div>
      </div>
    </div>
  );
};
export default Main;
