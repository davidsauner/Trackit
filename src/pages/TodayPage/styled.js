import styled from "styled-components"

export const HabitsAmountText = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 28px;
  color: ${(props) => props.doneAmount !== 0 ? "#8FC549" : "#BABABA"};
  align-self: flex-start;
`