import React from 'react'
import {CabinetElement} from "../../shared/types/cabinet"
import {Text} from '@nextui-org/react'
import './CabinetModalItem.module.scss'

interface Props extends CabinetElement{

}

function CabinetModalItem({links, subject, teacher, time, type}: Props) {
    function createMarkup() {
        return {__html: links};
    }

    return(
        <div className="CabinetModalItem bg-[#1a1c1f] p-2 my-2 rounded-lg lg:w-[860px] text-center">
            <Text
                className={(type === 'Лекція' ? 'bg-[#6e1523]' : 'bg-[#3b0d5e]') + ' rounded-md'}
            >
                {time} - {subject} {teacher}
            </Text>
            <div dangerouslySetInnerHTML={createMarkup()}/>
        </div>
    )
}
export default CabinetModalItem

