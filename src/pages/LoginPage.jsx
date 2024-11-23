import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Container,
  LoginBox,
  Title,
  Form,
  Input,
  LoginButton,
  SocialLogin,
  KakaoLogin,
  KakaoIcon,
  SignUpLink,
  ForgotPassword,
  SignUpButton,
  SectionTitle,
} from "../components/Modal/LoginPage.style";
import { useState } from "react";

const LoginPage = () => {
  const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  const onSubmitHandler = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/api/user/login`,
        {
          email: email,
          password: password,
        }
      );
      const { result } = response.data;

      if (result?.accessToken) {
        localStorage.setItem("accessToken", result.accessToken);
        console.log(
          "로그인 성공, 토큰 저장:",
          localStorage.getItem("accessToken")
        );
        navigate("/");
      } else {
        console.error("로그인 실패: accessToken이 없습니다.");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>로그인하기</Title>
        <SectionTitle>이메일로 로그인</SectionTitle>
        <Form>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해 주세요"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={onSubmitHandler}>로그인</LoginButton>
        </Form>
        <SocialLogin>
          <KakaoLogin onClick={handleKakaoLogin}>
            <KakaoIcon />
            카카오 로그인
          </KakaoLogin>
        </SocialLogin>
        <SignUpLink>
          <SignUpButton>이메일로 회원가입</SignUpButton>
          <ForgotPassword>비밀번호가 기억나지 않으세요?</ForgotPassword>
        </SignUpLink>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
