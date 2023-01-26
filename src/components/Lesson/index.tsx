import React from 'react'
import './Lesson.module.scss'
import {Text} from "@nextui-org/react";

interface Props {
    type: 'lec' | 'lab' | 'pra' | 'con',
}

function Lesson({type}: Props) {

    let text: {
        [key: string]: [string, string]
    } = {
        'lec': ['Лекція', 'bg-lecture'],
        'lab': ['Лабораторна', 'bg-consult'],
        'pra': ['Практика', 'bg-laboratory'],
        'con': ['Консультація', 'bg-practice']
    }
    const [typeText, typeClass] = text[type]
    return(
        <Text className={`${typeClass} px-4 rounded-lg text-md w-32 text-center`}>
            {typeText}
        </Text>
    )
}
export default Lesson

