import Header from "../Topo-Menu/Header";
import Footer from "../Topo-Menu/Footer";
import person from "../assets/img/persondefault.jpg";
import styled from "styled-components";
export default function Today() {
  return (
    <>
      <Header imgperfil={person} />
      <ListHabitsContainer>
        <TitleContainer></TitleContainer>
      </ListHabitsContainer>
      <Footer />
    </>
  );
}
const ListHabitsContainer = styled.div`
  width: 100vw;
  height: 75vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #e5e5e5;
`;
const TitleContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  margin-top: 15px;
  align-items: center;
  justify-content: space-around;
`;
