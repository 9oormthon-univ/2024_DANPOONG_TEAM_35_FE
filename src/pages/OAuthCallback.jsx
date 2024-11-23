import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoLogin = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      console.log(code);
      if (!code) {
        alert("로그인 실패: 인증 코드가 없습니다.");
        navigate("/login");
        return;
      }

      try {
        // 서버로 로그인 요청
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/callback`,
          {
            params: { code },
          }
        );
        console.log(result);

        const { isSuccess, message, result } = response.data;

        if (isSuccess && result) {
          // 사용자 정보 및 토큰 저장
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("nickName", result.nickName);
          localStorage.setItem("email", result.email);

          // 홈 페이지로 이동
          console.log("되는중ㅁ임");
          navigate("/");
        } else {
          // 서버에서 받은 메시지 출력
          alert(
            `로그인 실패: ${message || "서버에서 인증을 완료하지 못했습니다."}`
          );
          navigate("/login");
        }
      } catch (error) {
        console.error("로그인 처리 중 오류 발생:", error);

        // 에러 메시지 처리
        if (error.response?.status === 403) {
          alert("로그인 실패: 인증 문제가 발생했습니다.");
        } else {
          alert("로그인 처리 중 문제가 발생했습니다. 다시 시도해주세요.");
        }

        navigate("/login");
      }
    };

    handleKakaoLogin();
  }, []);

  // 로그인 처리 중 화면에 메시지 표시
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      로그인 처리 중입니다. 잠시만 기다려주세요...
    </div>
  );
};

export default OAuthCallback;
