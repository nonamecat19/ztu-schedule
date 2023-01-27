import create from 'zustand'



export const useScheduleStore = create((set) => ({
    count: 0,
    currentGroupFirst: true,

    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 }))
}))


