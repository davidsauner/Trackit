import { useState } from "react";
import styled from "styled-components";
import colors from "../assets/colors/colors";
export default function AddHabits({
  setShowAddHabits,
  dayselect,
  Dayselect,
  // setNewHabits,
  // newhabits,
  saveNewHabit,
  setDaySelect,
}) {
  const { select, noselect } = colors;
  const [newhabits, setNewHabits] = useState("");
  const [daysform, setDayForm] = useState([]);
  console.log(daysform);

  function Dayselect(index) {
    const newday = dayselect.map((v, i) => {
      if (i === index) {
        return {
          ...v,
          select: !v.select,
        };
      } else {
        return { ...v };
      }
    });
    setDaySelect(newday);
    const daysnumber = newday
      .filter((v) => {
        if (v.select === true) {
          return v;
        } else {
          return "";
        }
      })
      .map((v) => v.name);

    setDayForm(daysnumber);
  }

  function saveNewHabit() {
    console.log({
      name: newhabits,
      days: daysform,
    });
  }

  return (
    <>
      <AddHabitsContainer>
        <InputAddNameHabit
          placeholder="nome do hábito"
          onChange={(e) => setNewHabits(e.target.value)}
          value={newhabits}
        />
        <DaysContainer>
          {dayselect.map((v, i) =>
            v.select ? (
              <Day onClick={() => Dayselect(i)} key={i} color={select}>
                {v.weekday}
              </Day>
            ) : (
              <Day onClick={() => Dayselect(i)} key={i} color={noselect}>
                {v.weekday}
              </Day>
            )
          )}
        </DaysContainer>
        <SaveContainer>
          <CancelButton onClick={() => setShowAddHabits(false)}>
            Cancelar
          </CancelButton>
          <SaveButton onClick={saveNewHabit}>Salvar</SaveButton>
        </SaveContainer>
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
const InputAddNameHabit = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
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
const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.63636px;
  color: white;
  border-color: white;
  &:hover {
    cursor: pointer;
  }
`;
const CancelButton = styled.p`
  width: 69px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #52b6ff;
  &:hover {
    cursor: pointer;
  }
`;
const SaveContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
