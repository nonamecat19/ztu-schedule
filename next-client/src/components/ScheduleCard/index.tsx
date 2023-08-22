import React from 'react'
import './ScheduleCard.module.scss'
import {Tooltip} from "@nextui-org/react";
import {CardType} from "../../shared/types/card/card";
import CardContent from '../CardContent';
import {useScheduleStore} from "../../store/store";
import {isMobile} from "react-device-detect";
interface Props {
    data: CardType
    time: string
}

function ScheduleCard({data, time}: Props) {

    const currentGroupSecond = useScheduleStore<boolean>(state => state['currentGroupFirst'])

    let currentIndex
    if (data.length == 1 || !currentGroupSecond)
        currentIndex = 0;
    else
        currentIndex = 1

    let secondInder
    if (data.length == 2 && !currentGroupSecond)
        secondInder = 1
    else
        secondInder = 0

    useScheduleStore<void>(state => state['selectCurrentGroup'])

    const classPC = `
        bg-[#202020] m-2 rounded-2xl relative
        2xl:h-[170px] 2xl:w-[290px]  2xl:p-4
        xl:h-[160px]  xl:w-[18.5vw]  xl:p-4
        lg:h-[130px]  lg:w-[18.5vw]  lg:px-1.5 lg:py-1
        md:h-[120px]  md:w-[90vw]    md:px-1.5 md:py-1
        sm:h-[110px]  sm:w-[90vw]    sm:px-1.5 sm:py-1
           h-[105px]     w-[90vw]       px-1.5    py-1
    `
    const classMobile = `
        bg-[#202020] m-4 rounded-2xl relative
        2xl:h-[170px] 2xl:w-[290px] 2xl:p-4
         xl:h-[160px]  xl:w-[18.5vw] xl:p-4
         lg:h-[330px]  lg:w-[90vw]   lg:px-1.5 lg:py-1
         md:h-[220px]  md:w-[90vw]   md:px-1.5 md:py-1
         sm:h-[220px]  sm:w-[90vw]   sm:px-1.5 sm:py-1
            h-[160px]     w-[90vw]      px-1.5    py-1
    `

    return (
        <div
            className={isMobile ? classMobile : classPC}
        >
            <CardContent
                data={data[currentIndex]}
                time={time}
            />
            {
                typeof data[secondInder] === 'number' || (
                    <Tooltip
                        className='bg-another rounded-xl absolute w-12 bottom-1.5 right-1.5 lg:h-7 h-9'
                        content="В цей час є пара в іншої підгрупи"
                        color="invert"
                    />
                )
            }
        </div>
    )
}





export default ScheduleCard

