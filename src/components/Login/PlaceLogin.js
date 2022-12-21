import { useState } from "react";
import styled from "styled-components";

export default function PlaceLogin() {
  const [loginform, setLoginForm] = useState({ email: "", password: "" });

  function handleLoginForm(e) {
    const { name, value } = e.target;
    setLoginForm({ ...loginform, [name]: value });
  }
  console.log(loginform);

  function requestLogin() {}
  return (
    <>
      <InputContainer>
        <InputLogin
          name="email"
          value={loginform.email}
          onChange={handleLoginForm}
          type="email"
          placeholder="Nome"
        />
        <InputLogin
          name="password"
          value={loginform.passoword}
          onChange={handleLoginForm}
          type="password"
          placeholder="Password"
        />
      </InputContainer>
      <LoginButton onClick={requestLogin}>Entrar</LoginButton>
    </>
  );
}
const InputLogin = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 5px;
`;
const LoginButton = styled.button`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
