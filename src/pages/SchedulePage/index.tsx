import React, {useEffect, useState} from 'react'
import './SchedulePage.module.scss'
import CardColumn from "../../features/CardColumn";
import {GroupDataType, ColumnType, WeekType} from "../../shared/types/card/card";
import ScheduleHeader from "../../components/ScheduleHeader";
import {isMobile} from "react-device-detect";
import {useScheduleStore} from "../../store/store";
import DayPick from "../../components/DayPick";

interface Props {
    data: any
    error: boolean
}

function SchedulePage({data}: Props) {
    let group: GroupDataType = data
    const currentWeekStore = useScheduleStore(state => state['currentWeekFirst'])
    let currentWeek: WeekType = group[currentWeekStore ? 1 : 0]

    const [mobile, setMobile] = useState<boolean>(false)
    const mobileSelected = useScheduleStore(state => state['mobileDay'])
    const handleResize = () => {
        setMobile(window.innerWidth < 1025)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
    })

    let currentDay = new Date().getDay() - 1
    if (!data[0][0].length)
        return (<h1>Помилка! Спробуйте пізніше або відправте відгук в телеграм на @NoNameCat</h1>)


    return (
        <div className='min-h-screen bg-bg'>
            <ScheduleHeader/>
            <DayPick/>
            <div className="SchedulePage bg-bg flex justify-center">
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
                                data={currentWeek[mobileSelected]}
                            />
                        </div>
                        :
                        currentWeek.map((el: ColumnType, index: number) => {
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
        </div>

    )
}

export default SchedulePage

