import HabitCard from "../../components/HabitCard/HabitCard"
import CreateHabitCard from "../../components/CreateHabitCard/CreateHabitCard"
import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import plusIcon from "../../assets/plus.svg"
import { CreateHabitContainer, Button } from "./styled"
import StyledTitle from "../../components/StyledTitle"
import StyledSubtitle from "../../components/StyledSubtitle"
import apiHabits from "../../services/apiHabits"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"
import { ProgressContext } from "../../contexts/ProgressContext"
import apiToday from "../../services/apiToday"

export default function HabitsPage() {
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [createHabitOpened, setCreateHabitOpened] = useState(false)
    const { user } = useContext(UserContext)
    const { setProgress } = useContext(ProgressContext)

    useEffect(getHabitsList, [])

    function getTodaysHabits() {
        apiToday.getToday(user.token)
            .then(res => {
                const apiHabits = res.data
                const doneHabits = apiHabits.filter(h => h.done === true)
                const calc = ((doneHabits.length / apiHabits.length) * 100).toFixed(0)
                setProgress(calc)
            })
            .catch(err => alert(err.response.data.message))
    }

    function getHabitsList() {
        apiHabits.getHabits(user.token)
            .then(res => {
                setIsLoading(false)
                setHabits(res.data)
                getTodaysHabits()
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }

    return (
        <ScreenWithBars>

            <CreateHabitContainer>
                <StyledTitle>Meus hábitos</StyledTitle>
                <Button onClick={() => setCreateHabitOpened(!createHabitOpened)}>
                    <img src={plusIcon} alt="Ícone Adicionar" />
                </Button>
            </CreateHabitContainer>

            <CreateHabitCard
                isOpened={createHabitOpened}
                setIsOpened={setCreateHabitOpened}
                getHabitsList={getHabitsList}
            />

            {isLoading ? (
                <ThreeDots height={80} width={80} color={"#126ba5"} />
            ) : (
                habits.length === 0 ? (
                    <StyledSubtitle>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </StyledSubtitle>
                ) : (
                    habits.map(h => (
                        <HabitCard
                            key={h.id}
                            id={h.id}
                            name={h.name}
                            days={h.days}
                            getHabitsList={getHabitsList}
                        />
                    ))
                )
            )}
        </ScreenWithBars>
    )
}