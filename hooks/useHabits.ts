import { useRecoilState } from "recoil"
import { habitsAtom } from "../app/habitsState"

export const useHabits = () => {
    const [habits, setHabits] = useRecoilState(habitsAtom)

    const setNewHabit = (text: string) => {
        setHabits((prevHabits) => [
            ...prevHabits,
            { id: prevHabits.length, text, completed: false }
        ])
    }

    return { habits, setNewHabit }
}
