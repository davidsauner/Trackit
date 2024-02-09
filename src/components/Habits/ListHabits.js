import styled from "styled-components";
import UserHabits from "./UserHabits";
export default function ListHabits({ dias }) {
  return (
    <>
      <ListOfHabitsContainer>
        <UserHabits dias={dias} />
        <HabitsDescription>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </HabitsDescription>
      </ListOfHabitsContainer>
    </>
  );
}
const ListOfHabitsContainer = styled.div`
  width: 338px;
  height: 74px;
  margin: 20px;
`;
const HabitsDescription = styled.p`
  font-weight: 400;
  font-size: 17.976px;
  color: #666666;
`;
