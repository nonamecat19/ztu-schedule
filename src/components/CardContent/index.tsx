import React from 'react'
import './CardContent.module.scss'
import {LessonType} from "../../shared/types/card/card"
import {Text} from "@nextui-org/react";
import {BsFillPersonFill} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";
import Lesson from '../Lesson';

interface Props {
    data: LessonType
}

function CardContent({data}: Props) {
    if (typeof data === 'number')
        return <></>

    const {type, subject, teacher, room, time} = data
    return (
        <>
            <div className="flex justify-between items-center">
                <Lesson type={type} />
                <Text className='rounded-md text-md text-center mr-2'>
                    {time}
                </Text>
            </div>
            <div className="flex justify-center items-center text-center h-[60px]">
                <Text className='text-xl'>
                    {subject}
                </Text>
            </div>
            <div className="flex">
                <div className='mt-[6px] mr-[6px]'>
                    <BsFillPersonFill/>
                </div>
                <Text>{teacher}</Text>
            </div>
            <div className="flex">
                <div className='mt-[6px] mr-[6px]'>
                    <FaMapMarkerAlt/>
                </div>
                <Text>{room}</Text>
            </div>
        </>
    )
}
export default CardContent

