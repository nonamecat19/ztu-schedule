import React from 'react'
import './ScheduleCard.module.scss'
import {Tooltip} from "@nextui-org/react";
import {CardType} from "../../shared/types/card/card";
import CardContent from '../CardContent';

interface Props {
    data: CardType
    time: string
}

function ScheduleCard({data, time}: Props) {

    const currentGroup: number = 0
    const nonCurrentGroup: number = 1

    return (
        <div
            className='bg-[#171717] m-2 rounded-2xl relative
            2xl:h-[170px] 2xl:w-[290px] 2xl:p-4
             xl:h-[160px]  xl:w-[18.5vw]  xl:p-4
             lg:h-[130px]  lg:w-[18.5vw]  lg:px-1.5 lg:py-1

            '
        >
            <CardContent
                data={data[currentGroup]}
                time={time}
            />
            {
                typeof data[nonCurrentGroup] === 'number' || (
                    <Tooltip
                        className='bg-another rounded-xl absolute w-12 h-7 bottom-1.5 right-1.5'
                        content="В цей час є пара в іншої підгрупи"
                        color="invert"
                    />
                )
            }
        </div>

    )
}

export default ScheduleCard

