import WeekDayButtons from "../WeekDayButtons/WeekDayButtons"
import { Form, ButtonsContainer, Footer, CloseButton, SaveButton } from "./styled"
import StyledInput from "../StyledInput"
import { useContext, useState } from "react"
import apiHabits from "../../services/apiHabits"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"

export default function CreateHabitCard({ isOpened, setIsOpened, getHabitsList }) {
    const [form, setForm] = useState({ name: "" })
    const [days, setDays] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(UserContext)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleCreate(e) {
        e.preventDefault()
        setIsLoading(true)

        const body = { ...form, days }
        apiHabits.createHabit(user.token, body)
            .then(res => {
                setIsLoading(false)
                setForm({ name: "" })
                setDays([])
                setIsOpened(false)
                getHabitsList()
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }

    return (
        <Form isOpened={isOpened} onSubmit={handleCreate}>
            <ButtonsContainer>
                <StyledInput
                    name="name"
                    placeholder="nome do hábito"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.name}
                    onChange={handleForm}
                />
                <WeekDayButtons
                    selectedDays={days}
                    setSelectedDays={setDays}
                    isLoading={isLoading}
                />
            </ButtonsContainer>

            <Footer>
                <CloseButton
                    type="button"
                    disabled={isLoading}
                    onClick={() => setIsOpened(false)}
                >
                    Cancelar
                </CloseButton>

                <SaveButton
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Salvar"}
                </SaveButton>
            </Footer>
        </Form>
    )
}