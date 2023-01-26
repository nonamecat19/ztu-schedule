import {CardType} from "../types/card/card";

const GetCards = (): CardType[] => {
    return [
        {
            type: 'pra',
            subject: 'Frontend-розробка',
            teacher: 'Фуріхата Д.В.',
            room: 'ОЦ 1',
            time: '10:00 - 11:30',
            disabled: true,
            other: true,
        },
        {
            type: 'pra',
            subject: 'Програмування мовою Python',
            teacher: 'Фуріхата Д.В.',
            room: '257',
            time: '10:00 - 11:30',
            disabled: false,
            other: false,
        },
        {
            type: 'pra',
            subject: 'Технології розробки додатків .NET Core',
            teacher: 'Чижмотря О.В.',
            room: '653',
            time: '10:00 - 11:30',
            disabled: true,
            other: false,
        },
        {
            type: 'pra',
            subject: 'Backend-розробка',
            teacher: 'Чижмотря О.Г.',
            room: '444',
            time: '10:00 - 11:30',
            disabled: false,
            other: true,
        },
        {
            type: 'pra',
            subject: 'Фізкультура',
            teacher: 'Курилло Т.В.',
            room: '123',
            time: '10:00 - 11:30',
            disabled: true,
            other: true,
        },
    ]
}


export default GetCards