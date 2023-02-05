import create from 'zustand'

interface ScheduleStore {
    count: number;
    currentGroupFirst: boolean;
    currentWeekFirst: boolean;
    selectCurrentGroup: (action: boolean) => void;
    selectCurrentWeek: (action: boolean) => void;
    // increment: () => void;
    // decrement: () => void;
}

export const useScheduleStore = create<ScheduleStore>((set) => ({
    count: 0,
    currentGroupFirst: true,
    selectCurrentGroup: (action: boolean) => set({ currentGroupFirst: action }),
    currentWeekFirst: true,
    selectCurrentWeek: (action: boolean) => set({ currentWeekFirst: action }),
    // increment: () => set((state) => ({ count: state.count + 1 })),
    // decrement: () => set((state) => ({ count: state.count - 1 }))
}));


