import { atom } from "recoil";
import { Habit } from "../models";

export const habitsAtom = atom<Habit[]>({
    key: "habits",
    default: []
})