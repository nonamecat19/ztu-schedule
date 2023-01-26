export type NonEmptyLessonType = {
    type: 'lec' | 'lab' | 'pra' | 'con',
    subject: string,
    teacher: string,
    room: string,
    time: string,
    disabled: boolean,
    other: boolean
}

export type LessonType = NonEmptyLessonType | 0

export type CardType = [LessonType, LessonType]

export type ColumnType = [CardType, CardType, CardType, CardType, CardType, CardType, CardType]

export type WeekType = [ColumnType, ColumnType, ColumnType, ColumnType, ColumnType]

export type GroupDataType = [WeekType, WeekType]