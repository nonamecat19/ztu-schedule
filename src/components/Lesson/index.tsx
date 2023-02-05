import React from 'react'
import './Lesson.module.scss'
import {Text} from "@nextui-org/react";
import {isMobile} from "react-device-detect";

interface Props {
    type: 'lec' | 'lab' | 'pra' | 'con',
}

function Lesson({type}: Props) {

    let text: {
        [key: string]: [string, string]
    } = {
        'lec': ['Лекція', 'bg-lecture'],
        'lab': ['Лабораторна', 'bg-laboratory'],
        'pra': ['Практика', 'bg-practice'],
        'con': ['Консультація', 'bg-consult']
    }
    const [typeText, typeClass] = text[type]

    const classPC = `${typeClass} rounded-lg text-center 
        xl:w-32 xl:text-md
        lg:w-28 lg:text-md
        md:w-32 md:text-md
        sm:w-32 sm:text-md
           w-32    text-md
    `

    const classMobile = `${typeClass} 
        rounded-lg text-center mt-2 ml-2 p-1
        xl:w-32 xl:text-md
        lg:w-56 lg:text-3xl
        md:w-32 md:text-md
        sm:w-32 sm:text-md
           w-32    text-md
    `

    return(
        <Text
            className={isMobile ? classMobile : classPC}
        >
            {typeText}
        </Text>
    )
}
export default Lesson

