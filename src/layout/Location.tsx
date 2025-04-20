"use client";
import { useEffect, useState } from "react";
import { getGeoCode } from "@/api/GeoCodeAPI";
import Button from "@/components/Button";
import CopyToClipboard from "@/util/CopyToClipboard";
import data from "@/data.json";
import { SiNaver } from "react-icons/si";
import { SiKakao } from "react-icons/si";
import { BsChatFill } from "react-icons/bs";

const Location = () => {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  const initMap = (lat: number, lng: number) => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 15,
    });
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: map,
    });
  };

  useEffect(() => {
    getGeoCode().then((res) => {
      setLat(res.addresses[0].y);
      setLng(res.addresses[0].x);
      initMap(res.addresses[0].y, res.addresses[0].x);
    });
  }, []);


  const openMap = {
    naver: () => window.open(`http://map.naver.com/index.nhn?enc=utf8&level=2&lng=${lng}&lat=${lat}&pinTitle=MJ컨벤션&pinType=SITE`),
    kakao: () => window.open(`https://map.kakao.com/?urlX=455447.999999999&urlY=1106257.9999999981&urlLevel=3&itemId=27339651&q=MJ%EC%BB%A8%EB%B2%A4%EC%85%98&srcid=27339651&map_type=TYPE_MAP`)
  }

  return (
    <div className="Location">
      <div className="inner">
        <div className="h2">
          <p className="eng">location</p>
          <p className="tit">오시는 길</p>
        </div>
        <p className="hollymolly">MJ컨벤션 3층 다이너스티홀</p>
        <CopyToClipboard text="경기도 부천시 소사구 소사본동 65-7(경인로 386)" />

        <div id="map" style={{ height: "200px" }}></div>
        <div className="map_btn_area">
          <button onClick={openMap.naver} className="naver">
            <span className="icon"><SiNaver /></span>
            <span className="btn">네이버 지도에서 보기</span>
          </button>
          <button onClick={openMap.kakao} className="kakao">
            <span className="icon"><BsChatFill /></span>
            <span className="btn">카카오 지도에서 보기</span>
          </button>
        </div>

        <ul className="desc">
          <li>
            <h3>지하철 이용 시</h3>
            <span>1호선, 서해선 &gt; 소사역 1번출구 건너편 좌측(70m)</span>
          </li>
          <li>
            <h3>일반 버스 이용 시</h3>
            <span>소사어울마당삼거리 · MJ 컨벤션 : 19, 83, 88, 88-1</span>
            <span>소사어울마당 삼거리 : 53, 60-1</span>
            <span>소사역 · 소사지구대 : 19, 53, 83, 88 </span>
            <span>소사 푸르지오 : 56, 56-1, 60</span>
          </li>
          <li>
            <h3>자가용 이용 시 </h3>
            <span>네비게이션 입력- 부천시 소사구 소사본동 65-7번지</span>
            <span>서울외곽순환고속도로(시흥IC) - 소사본3동 - 소사구청 옆</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Location;
