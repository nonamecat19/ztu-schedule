import {create} from 'zustand'
import {persist, devtools, createJSONStorage} from "zustand/middleware";

interface ScheduleStore {
    count: number
    currentGroupFirst: boolean
    currentWeekFirst: boolean
    selectCurrentGroup: (action: boolean) => void
    selectCurrentWeek: (action: boolean) => void
    mobileDay: number
    selectMobileDay: (action: number) => void
    // increment: () => void;
    // decrement: () => void;
}

export const useScheduleStore = create(devtools(persist((set) => ({
    count: 0,
    currentGroupFirst: true,
    selectCurrentGroup: (action: boolean) => set({currentGroupFirst: action}),
    currentWeekFirst: true,
    selectCurrentWeek: (action: boolean) => set({currentWeekFirst: action}),
    mobileDay: 0,
    selectMobileDay: (action: number) => set({mobileDay: action}),

// increment: () => set((state) => ({ count: state.count + 1 })),
// decrement: () => set((state) => ({ count: state.count - 1 }))
}), {
    name: 'schedule-storage',
    storage: createJSONStorage(() => localStorage),
})))





