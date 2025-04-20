"use client";
import { FaLink } from "react-icons/fa";
import { useEffect } from "react";
import Toast from "@/components/Toast";
import { useToast } from "@/hook/useToast";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Shared = () => {
  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    // Kakao SDK가 이미 로드되어 있지 않다면 로드
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
      script.integrity = "sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka";
      script.crossOrigin = "anonymous";
      script.onload = () => {
        window.Kakao.init(kakaoKey);
        console.log("Kakao SDK Initialized");
      };
      document.head.appendChild(script);
    } else {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoKey);
      }
    }
  }, [kakaoKey]);

  const shareMessage = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "text",
        text: "동현💛진희의 결혼식에 초대합니다!",
        link: {
          mobileWebUrl: "https://wedding-invitation-umber-phi.vercel.app",
          webUrl: "https://wedding-invitation-umber-phi.vercel.app",
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: "https://wedding-invitation-umber-phi.vercel.app",
              webUrl: "https://wedding-invitation-umber-phi.vercel.app",
            },
          },
        ],
      });
    }
  };

  // ✅ 링크 복사 함수
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("링크가 클립보드에 복사되었습니다!", "success");
    } catch (err) {
      showToast("복사에 실패했습니다. 브라우저 권한을 확인해주세요.");
    }
  };

  return (
    <div className="shared">
      <div className="item">
        <button onClick={copyLink}><FaLink /></button>
        <p className="txt">링크주소 복사하기</p>
      </div>
      <div className="item">
        <button onClick={shareMessage}>
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            alt="카카오톡 공유 보내기 버튼"
          />
        </button>
        <p className="txt">카카오톡 공유하기</p>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default Shared;
