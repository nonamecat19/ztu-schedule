import React from 'react'
import './ScheduleCard.module.scss'
import {Card, Tooltip} from "@nextui-org/react";
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
        <Card css={{p: "$5", m: '$4', w: "300px", h: '170px', border: 'none', background: '#171717'}}>
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
        </Card>
    )
}

export default ScheduleCard

