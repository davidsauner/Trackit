import styled from "styled-components"

export const StyledDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding-bottom: 2px;
  border: ${(props) => props.isSelected ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  background: ${(props) => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
  color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
`

export const Days = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
`