import React, {useEffect, useState} from 'react'
import './SchedulePage.module.scss'
import GetCards from "../../shared/mocks/cards";
import CardColumn from "../../features/CardColumn";
import {GroupDataType, ColumnType, WeekType} from "../../shared/types/card/card";
import ScheduleHeader from "../../components/ScheduleHeader";
import {isMobile} from "react-device-detect";

interface Props {
    data: any
}

function SchedulePage({data}: Props) {
    let group: GroupDataType = data
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
                    mobile || isMobile
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
                        firstWeek.map((el: ColumnType, index: number) => {
                            return (
                                <div
                                    className={currentDay === index ? 'bg-gradient-to-b from-currentDayEdges via-currentDayCenter to-currentDayEdges' : ''}
                                    key={index}
                                >
                                    <CardColumn
                                        data={el}
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

