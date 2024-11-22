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
          <KakaoLogin>
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
