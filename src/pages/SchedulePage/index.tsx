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

    return (
        <div className="SchedulePage">
            {
                firstWeek.map((data: RowType, index: number) => {
                    return (
                        <CardRow
                            key={index}
                            data={data}
                        />
                    )
                })

            }

        </div>
    )
}

export default SchedulePage

