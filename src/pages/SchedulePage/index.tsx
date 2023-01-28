import React, {useEffect, useState} from 'react'
import './SchedulePage.module.scss'
import GetCards from "../../shared/mocks/cards";
import CardColumn from "../../features/CardColumn";
import {GroupDataType, ColumnType, WeekType} from "../../shared/types/card/card";
import ScheduleHeader from "../../components/ScheduleHeader";

interface Props {

}

function SchedulePage({}: Props) {

    let group: GroupDataType = GetCards()
    let firstWeek: WeekType = group[0]


    const [mobile, setMobile] = useState<boolean>(false)
    const [mobileSelected, setMobileSelected] = useState<number>(1)
    const handleResize = () => {
        setMobile(window.innerWidth < 1025)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
    })

    let currentDay = 2

    return (
        <>
            <div>
                <ScheduleHeader/>
            </div>

            <div className="SchedulePage bg-bg max-h-screen flex justify-center">
                {
                    mobile
                        ?
                        <div
                            className={
                                currentDay === mobileSelected
                                    ? 'bg-gradient-to-b from-currentDayEdges via-currentDayCenter to-currentDayEdges'
                                    : ''
                            }
                        >
                            <CardColumn
                                data={firstWeek[mobileSelected]}
                            />
                        </div>
                        :
                        firstWeek.map((data: ColumnType, index: number) => {
                            return (
                                <div
                                    className={currentDay === index ? 'bg-gradient-to-b from-currentDayEdges via-currentDayCenter to-currentDayEdges' : ''}
                                    key={index}
                                >
                                    <CardColumn
                                        data={firstWeek[mobileSelected]}
                                    />
                                </div>
                            )
                        })
                }
            </div>
        </>

    )
}

export default SchedulePage

