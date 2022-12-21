import styled from "styled-components";
import logoname from "../assets/img/track.png";

export default function Header({ imgperfil }) {
  return (
    <>
      <HeaderContainer>
        <ImgLogo src={logoname} />
        <PerfilImg src={imgperfil} />
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const ImgLogo = styled.img`
  width: 175px;
  height: 55px;
  margin-left: 20px;
  object-fit: cover;
`;
const PerfilImg = styled.img`
  width: 51px;
  height: 51px;
  object-fit: cover;
  border-radius: 50px;
  margin-right: 20px;
`;
