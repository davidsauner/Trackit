import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import RegisterForm from "./RegisterForm";

export default function Registration() {
  return (
    <>
      <RegistrationContainer>
        <Logoimg src={logo} />

        <RegisterForm />

        <RegisterPhrase>Já tem uma conta? Faça login!</RegisterPhrase>
      </RegistrationContainer>
    </>
  );
}

const RegistrationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e5e5e5;
`;
const Logoimg = styled.img``;

const RegisterPhrase = styled.p`
  margin-top: 10px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  &:hover {
    cursor: pointer;
  }
`;
