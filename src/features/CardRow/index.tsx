import React from 'react'
import './CardRow.module.scss'
import ScheduleCard from "../../components/ScheduleCard";
import {RowType} from "../../shared/types/card/card";

interface Props {
    data: RowType
}

function CardRow({data}: Props) {

    const currentDay = 2

    return(
        <div className="CardRow flex">
            {
                data.map(
                    (data, index) => {
                        return (
                            <div
                                className={currentDay === index ? 'bg-currentDay' : ''}
                                key={index}
                            >
                                <ScheduleCard
                                    data={data}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
export default CardRow

