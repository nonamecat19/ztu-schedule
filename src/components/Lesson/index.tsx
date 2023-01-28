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
        <Text
            className={`${typeClass} rounded-lg text-center 
            xl:w-32 xl:text-md
            lg:w-28 lg:text-md
            md:w-32 md:text-md
            sm:w-32 sm:text-md
               w-32    text-md
            `}
        >
            {typeText}
        </Text>
    )
}
export default Lesson

