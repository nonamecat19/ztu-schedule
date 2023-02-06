import React from 'react'
import './DayPick.module.scss'
import {Button, Text} from "@nextui-org/react";
import {useScheduleStore} from "../../store/store";

interface Props {

}

function DayPick({}: Props) {

    const currentDay = useScheduleStore<number>(state => state['mobileDay'])

    let days = ['пн', 'вт', 'ср', 'чт', 'пт']

    const changeDayHandler = useScheduleStore(state => state['selectMobileDay'])

    return(
        <div className="DayPick bg-bg  justify-around py-3 w-[87%] lg:hidden flex">
            {
                days.map((element, index) => {

                    return (
                        <Button
                            shadow
                            color={index === currentDay ? 'error' : 'secondary'}
                            auto
                            key={index}
                            className={(index === currentDay ? 'bg-[#f31260]' : 'bg-[#9750dd]') + ' text-lg px-4'}
                            onPress={() => changeDayHandler(index)}
                        >
                            <Text
                                h3
                                className='text-md'
                            >
                                {element}
                            </Text>
                        </Button>
                    )
                })
            }
        </div>
    )
}
export default DayPick

