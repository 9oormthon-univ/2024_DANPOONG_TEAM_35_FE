import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router's useNavigate

function LoadingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); // Navigation 훅 사용

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // 로딩 상태를 숨김
      navigate("/complete-letter"); // "/complete-letter"로 라우팅
    }, 2000);

    return () => clearTimeout(timer); // 타이머 정리
  }, [navigate]);

  if (!isVisible) {
    return null; // 로딩이 끝나면 아무것도 렌더링하지 않음
  }

  return (
    <Overlay>
      <LoadingContainer>
        <LoadingImage src="/src/assets/icons/loading.png" alt="Loading" />
        <LoadingText>로딩 중...</LoadingText>
      </LoadingContainer>
    </Overlay>
  );
}

export default LoadingPage;

// 스타일 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 검정색 투명 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 최상위 레이어 */
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const LoadingContainer = styled.div`
  text-align: center;
`;

const LoadingImage = styled.img`
  width: 300px;
  height: 350px;
  margin-bottom: 10px;
`;

const LoadingText = styled.p`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
