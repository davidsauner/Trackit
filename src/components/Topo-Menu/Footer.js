import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
const percentage = 66;
export default function Footer() {
  return (
    <>
      <FooterContainer>
        <PlaceMenu>Hábitos</PlaceMenu>
        <Link to={"/today"}>
          <Example>
            <CircularProgressbar
              value={percentage}
              text={`Hoje`}
              background
              backgroundPadding={5}
              strokeWidth={10}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                textSize: "18px",
              })}
            />
          </Example>
        </Link>
        <PlaceMenu>Histórico</PlaceMenu>
      </FooterContainer>
    </>
  );
}
const FooterContainer = styled.div`
  width: 100vw;
  height: 100px;
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Example = styled.div`
  display: flex;
  align-items: center;

  width: 91px;
  height: 91px;
  margin-bottom: 20px;
`;
const PlaceMenu = styled.p`
  font-weight: 400;
  font-size: 17.976px;
  color: #52b6ff;
`;
