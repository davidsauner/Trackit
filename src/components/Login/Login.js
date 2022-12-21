import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import PlaceLogin from "./PlaceLogin";
export default function Login() {
  return (
    <>
      <LoginContainer>
        <Logoimg src={logo} />

        <PlaceLogin />

        <Link to={"/registration"}>
          <RegisterPhrase>Não tem uma conta? Cadastre-se!</RegisterPhrase>
        </Link>
      </LoginContainer>
    </>
  );
}
const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e5e5e5; ;
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
