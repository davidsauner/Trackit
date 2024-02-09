import weekDays from "../../constants/weekDays"
import { Days, StyledDay } from "./styled"

export default function WeekDayButtons({ selectedDays, setSelectedDays, isLoading }) {

    function handleDay(day) {
        if (selectedDays.includes(day)) {
            const newDays = selectedDays.filter(d => d !== day)
            setSelectedDays(newDays)
        } else {
            setSelectedDays([...selectedDays, day])
        }
    }

    return (
        <Days disabled={isLoading}>
            {weekDays.map(weekDay => (
                <StyledDay
                    key={weekDay.id}
                    isSelected={selectedDays.includes(weekDay.id)}
                    onClick={() => handleDay(weekDay.id)}
                >
                    {weekDay.day}
                </StyledDay>
            ))}
        </Days>
    )
}