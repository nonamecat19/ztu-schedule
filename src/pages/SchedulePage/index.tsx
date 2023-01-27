import React from 'react'
import './SchedulePage.module.scss'
import GetCards from "../../shared/mocks/cards";
import CardColumn from "../../features/CardColumn";
import {GroupDataType, ColumnType, WeekType} from "../../shared/types/card/card";

interface Props {

}

function SchedulePage({}: Props) {

    let group: GroupDataType = GetCards()

    let firstWeek: WeekType = group[0]


    let currentDay = 2

    return (
        <div className="SchedulePage bg-bg max-h-screen flex justify-center">
            {
                firstWeek.map((data: ColumnType, index: number) => {
                    return (
                        <div
                            className={currentDay === index ? 'bg-gradient-to-b from-currentDayEdges via-currentDayCenter to-currentDayEdges' : ''}
                            key={index}
                        >
                            <CardColumn
                                key={index}
                                data={data}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SchedulePage

