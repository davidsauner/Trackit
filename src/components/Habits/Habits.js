import Header from "../Topo-Menu/Header";
import Footer from "../Topo-Menu/Footer";
import person from "../assets/img/persondefault.jpg";
import styled from "styled-components";
import ListHabits from "./ListHabits";
import AddHabits from "./AddHabits";
import { useState } from "react";
import UserHabits from "./UserHabits";
export default function Habits() {
  const dias = [
    { name: 0, weekday: "D" },
    { name: 1, weekday: "S" },
    { name: 2, weekday: "T" },
    { name: 3, weekday: "Q" },
    { name: 4, weekday: "Q" },
    { name: 5, weekday: "S" },
    { name: 6, weekday: "S" },
  ];

  const [showAddHabits, setShowAddHabits] = useState(false);
  const [dayselect, setDaySelect] = useState(dias);

  return (
    <>
      <HabtisContainer>
        <Header imgperfil={person} />
        <ListHabitsContainer>
          <TitleContainer>
            <TitleHabitsList>Meus hábitos</TitleHabitsList>
            <ButtonPlus onClick={() => setShowAddHabits(true)}>+</ButtonPlus>
          </TitleContainer>

          {showAddHabits && (
            <AddHabits
              setShowAddHabits={setShowAddHabits}
              dayselect={dayselect}
              setDaySelect={setDaySelect}
            />
          )}
          <ListHabits dias={dias} />
        </ListHabitsContainer>
        <Footer />
      </HabtisContainer>
    </>
  );
}

const HabtisContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
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
const ButtonPlus = styled.button`
  width: 40px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.63636px;
  color: white;
  border-color: #52b6ff;
  &:hover {
    cursor: pointer;
  }
`;
const TitleHabitsList = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #126ba5;

  line-height: 29px;
`;
