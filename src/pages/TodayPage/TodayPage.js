import { useContext, useEffect, useState } from "react"
import HabitCheckCard from "../../components/HabitCheckCard/HabitCheckCard"
import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import StyledTitle from "../../components/StyledTitle"
import { HabitsAmountText } from "./styled"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"
import StyledSubtitle from "../../components/StyledSubtitle"
import apiToday from "../../services/apiToday"
import dayjs from "dayjs"
import weekDays from "../../constants/weekDays"
import { ProgressContext } from "../../contexts/ProgressContext"

export default function TodayPage() {
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { user } = useContext(UserContext)
    const { progress, setProgress } = useContext(ProgressContext)

    useEffect(getTodaysHabits, [])

    function getTodaysHabits() {
        apiToday.getToday(user.token)
            .then(res => {
                setIsLoading(false)
                const apiHabits = res.data
                setHabits(apiHabits)

                const doneHabits = apiHabits.filter(h => h.done === true)
                const calc = ((doneHabits.length / apiHabits.length) * 100).toFixed(0)
                setProgress(calc)

            })
            .catch(err => {
                setIsLoading(false)
                if (!user.token) {
                    alert("Faça login")
                } else {
                    alert(err.response.data.message)
                }

            })
    }

    return (
        <ScreenWithBars>
            <>
                <StyledTitle>{weekDays[dayjs().day()].name}, {dayjs().date()}/{dayjs().month() + 1} </StyledTitle>
                <HabitsAmountText doneAmount={progress}>
                    {progress === 0 ? "Nenhum hábito concluído ainda" : `${progress}% dos hábitos concluídos`}
                </HabitsAmountText>
            </>

            {isLoading ? (
                <ThreeDots height={80} width={80} color={"#126ba5"} />
            ) : (
                habits.length === 0 ? (
                    <StyledSubtitle>Você não tem nenhum hábito cadastrado hoje</StyledSubtitle>
                ) : (
                    habits.map(h => (
                        <HabitCheckCard
                            key={h.id}
                            id={h.id}
                            name={h.name}
                            done={h.done}
                            currentSequence={h.currentSequence}
                            highestSequence={h.highestSequence}
                            getTodaysHabits={getTodaysHabits}
                        />
                    ))
                )
            )}
        </ScreenWithBars>
    )
}