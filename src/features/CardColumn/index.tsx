import React from 'react'
import './CardColumn.module.scss'
import ScheduleCard from "../../components/ScheduleCard";
import {ColumnType} from "../../shared/types/card/card";

interface Props {
    data: ColumnType
}

function CardColumn({data}: Props) {

    const timeLessons = [
        '8:30-9:50',
        '10:00-11:20',
        '11:40-13:00',
        '13:30-14:50',
        '15:00-16:20',
        '16:30-17:50',
        '18:00-19:20'
    ]

    return (
        <div className="CardRow flex-column items-center">
            {
                data.map((el, index: number) => {
                    return (
                        <ScheduleCard
                            data={el}
                            time={timeLessons[index]}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardColumn

