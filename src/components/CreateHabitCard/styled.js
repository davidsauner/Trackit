import styled from "styled-components"

export const Form = styled.form`
  display: ${(props) => props.isOpened ? "initial" : "none"};
  width: 100%;
  height: 180px;
  margin-bottom: 5px;
  padding: 18px;
  background: #FFFFFF;
  border-radius: 5px; 
`

export const ButtonsContainer = styled.div`
  margin-bottom: 25px;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`

export const CloseButton = styled.button`
  width: 85px;
  height: 35px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: transparent;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
  color: #52B6FF;
  border: none;
`

export const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: #52B6FF;
  border-radius: 5px;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;
`