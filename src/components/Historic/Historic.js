import styled from "styled-components";
import Calendar from "react-calendar";
export default function Historic() {
  return (
    <Container>
      <Title>Histórico</Title>
      <ContainerCalendar>
        <StyledCalendar />
      </ContainerCalendar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 18px;

  display: flex;
  flex-direction: column;

  background-color: #f2f2f2;
`;

const Title = styled.h2`
  font-size: 22px;
  line-height: 29px;

  padding-top: 100px;

  color: #126ba5;
`;

const ContainerCalendar = styled.div`
  height: 75%;

  margin-bottom: 30px;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;

  margin-top: 12px;

  border: none;
  border-radius: 10px;
`;
