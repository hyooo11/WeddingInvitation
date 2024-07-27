"use client";
import { useEffect } from "react";
import { getGeoCode } from "@/api/GeoCodeAPI";
import CopyToClipboard from "@/util/CopyToClipboard";

const Map = () => {
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
      initMap(res.addresses[0].y, res.addresses[0].x);
    });
  }, []);

  return (
    <div>
      <div>
        <p>MJ컨벤션 웨딩홀</p>
        <CopyToClipboard text="경기도 부천시 소사구 소사본동 65-7(경인로 386)" />
      </div>
      <div id="map" style={{ height: "200px" }}></div>
      <div>
        <button>네이버 지도에서 보기</button>
        <button>카카오맵에서 보기</button>
      </div>
      <div>
        지하철 이용 시: 1호선, 서해선 &gt; 소사역 1번출구 건너편 좌측(70m)
        <br />
        일반 버스 이용 시 : 소사어울마당삼거리 · MJ 컨벤션 : 19, 83, 88, 88-1
        소사어울마당 삼거리 : 53, 60-1 소사역 · 소사지구대 : 19, 53, 83, 88 소사
        푸르지오 : 56, 56-1, 60
        <br />
        자가용 이용 시 네비게이션 입력 - 부천시 소사구 소사본동 65-7번지
        서울외곽순환고속도로(시흥IC) - 소사본3동 - 소사구청 옆
      </div>
    </div>
  );
};

export default Map;