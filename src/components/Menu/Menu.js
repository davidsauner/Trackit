import { Footer, StyledLink, ContentProgressbar, CircularProgressbarContainer } from "./styled"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useContext } from "react"
import { ProgressContext } from "../../contexts/ProgressContext"

export default function Menu() {
  const { progress } = useContext(ProgressContext)

  return (
    <Footer>
      <StyledLink to="/habitos">Hábitos</StyledLink>

      <ContentProgressbar>
        <CircularProgressbarContainer>
          <Link to="/hoje">
            <CircularProgressbar
              value={progress}
              text={"Hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
          </Link>
        </CircularProgressbarContainer>
      </ContentProgressbar>

      <StyledLink to="/historico">Histórico</StyledLink>
    </Footer>
  )
}