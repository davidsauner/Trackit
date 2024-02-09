import { useContext } from "react"
import checkIcon from "../../assets/check.svg"
import { UserContext } from "../../contexts/UserContext"
import apiToday from "../../services/apiToday"
import { Container, DetailsContainer, Title, Paragraph, CurrentSequence, HighestSequence, CheckMarkContainer } from "./styled"

export default function HabitCheckCard({ id, name, done, currentSequence, highestSequence, getTodaysHabits }) {
    const { user } = useContext(UserContext)

    function handleCheck() {
        if (done) {
            apiToday.uncheckHabit(user.token, id)
                .then(() => getTodaysHabits())
                .catch((err) => alert(err.response.data.message))
        } else {
            apiToday.checkHabit(user.token, id)
                .then(() => getTodaysHabits())
                .catch((err) => alert(err.response.data.message))
        }
    }

    return (
        <Container>
            <DetailsContainer>
                <Title>{name}</Title>
                <Paragraph>
                    Sequência atual:
                    <CurrentSequence done={done}>
                        {currentSequence} dias
                    </CurrentSequence>
                </Paragraph>
                <Paragraph>
                    Seu recorde:
                    <HighestSequence currentSequenceIsHighest={currentSequence === highestSequence}>
                        {highestSequence} dias
                    </HighestSequence>
                </Paragraph>
            </DetailsContainer>

            <CheckMarkContainer done={done} onClick={handleCheck}>
                <img alt="check.svg" src={checkIcon} />
            </CheckMarkContainer>
        </Container>
    )
}