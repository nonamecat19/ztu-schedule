import React from 'react'
import './ScheduleHeader.module.scss'
import {useScheduleStore} from "../../store/store";

interface Props {

}

function ScheduleHeader({}: Props) {

    const selectCurrentGroup = useScheduleStore(state => state['selectCurrentGroup'])
    const onButtonClick = () => selectCurrentGroup(true)
    const onButtonClick2 = () => selectCurrentGroup(false)

    return(
        <div className="ScheduleHeader bg-bg flex justify-around">
            <button onClick={onButtonClick}>first</button>
            <button onClick={onButtonClick2}>second</button>
        </div>
    )
}
export default ScheduleHeader

