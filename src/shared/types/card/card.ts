export type CardType = {
    type: 'lec' | 'lab' | 'pra' | 'con',
    subject: string,
    teacher: string,
    room: string,
    time: string,
    disabled: boolean,
    other: boolean
}