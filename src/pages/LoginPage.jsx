import React from "react";
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

const LoginPage = () => {
  const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <Container>
      <LoginBox>
        <Title>로그인하기</Title>
        <SectionTitle>이메일로 로그인</SectionTitle>
        <Form>
          <Input type="email" placeholder="이메일 주소를 입력해 주세요" />
          <Input type="password" placeholder="비밀번호를 입력해 주세요" />
          <LoginButton>로그인</LoginButton>
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
