import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import StyledTitle from "../../components/StyledTitle"
import { ContainerCalendar, StyledCalendar } from "./styled"
import 'react-calendar/dist/Calendar.css'
import dayjs from "dayjs"
import apiHistory from "../../services/apiHistory"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function HistoryPage() {
    const [history, setHistory] = useState([])
    const { user } = useContext(UserContext)

    useEffect(handleHistory, [])

    function handleHistory() {
        apiHistory.getHistory(user.token)
            .then(res => setHistory(res.data))
            .catch(err => alert(err.response.data.message))
    }

    function completedAllHabits(habits) {
        const doneHabits = habits.filter(h => h.done)
        return doneHabits.length === habits.length
    }

    const sucessDays = history.filter(day => completedAllHabits(day.habits))
    const failureDays = history.filter(day => !completedAllHabits(day.habits))

    function getClassName({ date }) {
        const formattedDate = dayjs(date).format("DD/MM/YYYY")

        if (failureDays.find(f => f.day === formattedDate)) {
            return "failure"
        }

        if (sucessDays.find(s => s.day === formattedDate)) {
            return "success"
        }
    }

    function handleDayClick(date) {
        const clickedDate = dayjs(date).format("DD/MM/YYYY")
        if (!sucessDays.find(s => s.day === clickedDate) && !failureDays.find(f => f.day === clickedDate)) {
            alert("Não há hábitos nesse dia")
        } else {
            const daysHistory = history.find(x => x.day === clickedDate)
            let alertText = `Tarefas do dia ${clickedDate}:`
            daysHistory.habits.map(h => alertText += `\n * ${h.name}: ${!h.done ? "Não" : ""} Completa`)
            alert(alertText)
        }
    }

    return (
        <ScreenWithBars>
            <StyledTitle>Histórico</StyledTitle>
            <ContainerCalendar>
                <StyledCalendar
                    tileClassName={getClassName}
                    locale="pt-BR"
                    formatDay={(_, date) => dayjs(date).format("DD")}
                    onClickDay={(date) => handleDayClick(date)}
                />

            </ContainerCalendar>
        </ScreenWithBars>
    )
}