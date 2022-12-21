import { useState } from "react";
import styled from "styled-components";
import colors from "../assets/colors/colors";

const habits = [
  {
    id: 1,
    name: "Nome do hábito",
    days: [1, 3, 5],
  },
  {
    id: 2,
    name: "Nome do hábito 2",
    days: [1, 3, 4, 6],
  },
];

export default function UserHabits({ dias }) {
  const { select, noselect } = colors;
  const [dayselect, setDaySelect] = useState(dias);
  console.log(dayselect);

  return (
    <>
      <AddHabitsContainer>
        <DaysContainer>
          {dayselect.map((v, i) =>
            v.select ? (
              <Day key={i} color={select}>
                {v.weekday}
              </Day>
            ) : (
              <Day key={i} color={noselect}>
                {v.weekday}
              </Day>
            )
          )}
        </DaysContainer>
      </AddHabitsContainer>
    </>
  );
}

const AddHabitsContainer = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const DaysContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: space-around;
`;
const Day = styled.button`
  width: 30px;
  height: 30px;
  background: ${(p) => p.color};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;
