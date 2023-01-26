import React from 'react'
import './CardRow.module.scss'
import ScheduleCard from "../../components/ScheduleCard";
import {RowType} from "../../shared/types/card/card";

interface Props {
    data: RowType
    time: string
}

function CardRow({data, time}: Props) {

    const currentDay = 2

    return (
        <div className="CardRow flex justify-center">
            {
                data.map((data, index: number) => {
                    return (
                        <div
                            className={currentDay === index ? 'bg-gradient-to-r from-currentDayEdges via-currentDayCenter to-currentDayEdges' : ''}
                            key={index}
                        >
                            <ScheduleCard
                                data={data}
                                time={time}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardRow

