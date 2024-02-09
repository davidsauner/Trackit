import { Container, Avatar } from "./styled"
import logo from "../../assets/logo-mini.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function Header() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Link to="/hoje">
        <img src={logo} alt="TrackIt" />
      </Link>

      <Avatar src={user.image} alt="Imagem de perfil" />
    </Container>
  )
}
