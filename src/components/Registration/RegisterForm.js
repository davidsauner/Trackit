import { useState } from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";

export default function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function registerUser() {}

  return (
    <>
      <InputContainer>
        <InputRegistration
          value={form.email}
          onChange={handleForm}
          name="email"
          type="email"
          placeholder="Email"
        />
        <InputRegistration
          value={form.name}
          onChange={handleForm}
          name="name"
          type="text"
          placeholder="Nome"
        />
        <InputRegistration
          value={form.image}
          onChange={handleForm}
          name="image"
          type="url"
          placeholder="Imagem de perfil"
        />
        <InputRegistration
          value={form.password}
          onChange={handleForm}
          name="password"
          type="password"
          placeholder="Password"
        />
      </InputContainer>
      <LoginButton onClick={registerUser}>Cadastrar</LoginButton>
    </>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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
const InputRegistration = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 5px;
`;
