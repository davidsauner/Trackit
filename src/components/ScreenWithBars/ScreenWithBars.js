import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import { Container } from "./styled"

export default function ScreenWithBars({ children }) {
    return (
        <Container>
            <Header />
            {children}
            <Menu />
        </Container>
    )
}