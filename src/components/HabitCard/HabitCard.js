import React, { useContext } from 'react'
import trashIcon from "../../assets/dump.svg"
import { Container, Title } from './styled'
import WeekDayButtons from "../../components/WeekDayButtons/WeekDayButtons"
import apiHabits from '../../services/apiHabits'
import { UserContext } from '../../contexts/UserContext'

function HabitCard({ id, name, days, getHabitsList }) {
    const { user } = useContext(UserContext)

    function handleDelete() {
        const confirmation = window.confirm("Tem certeza que deseja deletar esse hábito?")

        if (confirmation) {
            apiHabits.deleteHabit(user.token, id)
                .then(res => {
                    getHabitsList()
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        }

    }

    return (
        <Container>
            <Title>{name}</Title>
            <WeekDayButtons selectedDays={days} />
            <img src={trashIcon} onClick={handleDelete} alt="Ícone Deletar" />
        </Container>
    )
}

export default HabitCard