import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LoginBox = styled.div`
  width: 350px;
  padding: 50px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
  color: #666666;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 입력 필드 간의 거리 */
  margin-bottom: 40px;
`;

export const Input = styled.input`
  height: 44px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  outline: none;
  background-color: white;

  &:focus {
    border-color: #3333ff;
  }
`;

export const LoginButton = styled.button`
  height: 44px;
  background-color: #e2edf8;
  color: #4181d7;
  border: 1px solid #4181d7;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #4181d7;
    color: white;
  }
`;

export const SocialLogin = styled.div`
  margin-bottom: 4px; /* 카카오 로그인 버튼과 회원가입 링크 간 거리 */
`;

export const KakaoLogin = styled.button`
  width: 100%;
  height: 44px;
  background-color: #fee500;
  color: #3b1d1d;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #fcd900;
  }
`;

export const KakaoIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #3b1d1d;
  border-radius: 50%;
  margin-right: 8px;
`;

export const SignUpLink = styled.div`
  margin-top: 20px; /* 전체 회원가입/비밀번호 링크 상단 거리 */
`;

export const SignUpButton = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  margin-bottom: 10px;
  background-color: #e0e0e0;
  color: #333333;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d6d6d6;
  }
`;

export const ForgotPassword = styled.div`
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #333333;
  }
`;
