import React from 'react'
import './SchedulePage.module.scss'
import ScheduleCard from "../../components/ScheduleCard";
import GetCards from "../../shared/mocks/cards";
interface Props {

}

function SchedulePage({}: Props) {
    return(
        <div className="SchedulePage">
            {
                GetCards().map(
                    (data, index) => {
                        return (
                            <ScheduleCard
                                key={index}
                                {...data}
                            />
                        )
                    }
                )
            }
        </div>
    )
}
export default SchedulePage

