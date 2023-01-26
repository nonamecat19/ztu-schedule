import React from 'react'
import './SchedulePage.module.scss'
import GetCards from "../../shared/mocks/cards";
import CardRow from "../../features/CardRow";
import {GroupDataType, RowType, WeekType} from "../../shared/types/card/card";

interface Props {

}

function SchedulePage({}: Props) {

    let group: GroupDataType = GetCards()

    let firstWeek: WeekType = group[0]

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
        <div className="SchedulePage bg-bg min-h-screen">
            {
                firstWeek.map((data: RowType, index: number) => {
                    return (
                        <CardRow
                            key={index}
                            data={data}
                            time={timeLessons[index]}
                        />
                    )
                })
            }
        </div>
    )
}

export default SchedulePage

