import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px;
  margin: 5px 0;
  background: #FFFFFF;
  border-radius: 5px;
  position: relative;

  img {
    width: 15px;
    position: absolute;
    top: 12px;
    right: 12px;
  }
`

export const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;
  word-break: break-all;
  width: 80%;
  color: #666666;
`