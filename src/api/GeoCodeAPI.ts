//주소 위도경도 변환
export const getGeoCode = async () => {
  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const secretId = process.env.NEXT_PUBLIC_NAVER_SECRET_ID;
  const address = "경기 부천시 소사구 경인로 386";

  if (!clientId || !secretId) {
    console.error("Missing Naver API credentials");
    return null;
  }

  const response = await fetch(`/map-geocode/v2/geocode?query=${address}`, {
    headers: {
      "X-NCP-APIGW-API-KEY-ID": clientId,
      "X-NCP-APIGW-API-KEY": secretId,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
