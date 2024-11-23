import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-bottom: 50px;
`;

const SignupText = styled.div`
  padding-top: 20%;
  padding-left: 8%;
  font-size: 18px;
  font-weight: 600;
`;

const Context = styled.div`
  padding-top: 10px;
  padding-left: 8%;
  font-size: 12px;
  font-weight: 400;
  color: #71727a;
`;

const ItemText = styled.div`
  padding-top: 50px;
  padding-left: 8%;
  font-size: 14px;
  font-weight: 500;
`;

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/api/user/signup`,
      {
        email: email,
        password: password,
      }
    );
    console.log(response);
  };

  return (
    <>
      <SignupText>회원가입</SignupText>
      <ItemText>이메일</ItemText>
      <input
        name="email"
        value={email}
        placeholder="name@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <ItemText>비밀번호</ItemText>
      <input
        type="password" // 비밀번호 입력 시 보안을 위해 type="password" 사용
        name="password"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onSubmitHandler}>sub</button>
    </>
  );
}

export default SignUp;
