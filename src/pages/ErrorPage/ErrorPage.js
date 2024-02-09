import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import StyledTitle from "./../../components/StyledTitle"
import StyledSubtitle from "./../../components/StyledSubtitle"

export default function ErrorPage() {
    return (
        <ScreenWithBars>
            <StyledTitle>Erro 404</StyledTitle>
            <StyledSubtitle>Página não encontrada</StyledSubtitle>
        </ScreenWithBars>
    )
}