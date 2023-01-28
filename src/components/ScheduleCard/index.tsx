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

    const currentGroupFirst = useScheduleStore<boolean>(state => state['currentGroupFirst'])

    useScheduleStore<void>(state => state['selectCurrentGroup'])

    const classPC = `
        bg-[#171717] m-2 rounded-2xl relative
        2xl:h-[170px] 2xl:w-[290px]  2xl:p-4
        xl:h-[160px]  xl:w-[18.5vw]  xl:p-4
        lg:h-[130px]  lg:w-[18.5vw]  lg:px-1.5 lg:py-1
        md:h-[100px]  md:w-[50vw]    md:px-1.5 md:py-1
        sm:h-[110px]  sm:w-[70vw]    sm:px-1.5 sm:py-1
           h-[210px]     w-[85vw]       px-1.5    py-1
    `
    const classMobile = `
        bg-[#171717] m-4 rounded-2xl relative
        2xl:h-[170px] 2xl:w-[290px] 2xl:p-4
         xl:h-[160px]  xl:w-[18.5vw] xl:p-4
         lg:h-[330px]  lg:w-[90vw]   lg:px-1.5 lg:py-1
         md:h-[250px]  md:w-[90vw]   md:px-1.5 md:py-1
         sm:h-[220px]  sm:w-[90vw]   sm:px-1.5 sm:py-1
            h-[210px]     w-[90vw]      px-1.5    py-1
    `

    return (
        <div
            className={isMobile ? classMobile : classMobile}
        >
            {/*Змінити класи*/}
            <CardContent
                data={data[currentGroupFirst ? 0 : 1]}
                time={time}
            />
            {
                typeof data[currentGroupFirst ? 1 : 0] === 'number' || (
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

