import React, {useState} from 'react'
import './DayPick.module.scss'
import {Button} from "@nextui-org/react";

interface Props {

}

function DayPick({}: Props) {

    const [currentDay, setCurrentDay] = useState<number>(0)
    let days = ['пн', 'вт', 'ср', 'чт', 'пт']

    const changeDayHandler = (num: number) => setCurrentDay(num)

    return(
        <div className="DayPick bg-bg flex justify-around py-3">
            {
                days.map((element, index) => {

                    return (
                        <Button
                            shadow
                            color={index === currentDay ? 'error' : 'secondary'}
                            auto
                            key={index}
                            className={(index === currentDay ? 'bg-[#f31260]' : 'bg-[#9750dd]') + ' text-lg px-8'}
                            onClick={() => changeDayHandler(index)}
                        >
                            {element}
                        </Button>
                    )
                })
            }
        </div>
    )
}
export default DayPick

