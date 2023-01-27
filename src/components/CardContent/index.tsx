import React from 'react'
import './CardContent.module.scss'
import {LessonType} from "../../shared/types/card/card"
import {Text} from "@nextui-org/react";
import {BsFillPersonFill} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";
import Lesson from '../Lesson';

interface Props {
    data: LessonType
    time: string
}

function CardContent({data, time}: Props) {
    if (typeof data === 'number')
        return <></>

    const {type, subject, teacher, room} = data
    return (
        <>
            <div className="flex justify-between items-center">
                <Lesson type={type} />
                <Text className='rounded-md  text-center mr-2
                    2xl:text-md
                    xl:text-sm
                    lg:text-xs
                '>
                    {time}
                </Text>
            </div>
            <div className="flex justify-center items-center text-center h-[60px]">
                <Text className='
                    2xl:text-xl
                    xl:text-lg
                '>
                    {subject}
                </Text>
            </div>
            <div className="flex">
                <div className='2xl:mt-[6px] xl:mt-[2px] mr-[6px]'>
                    <BsFillPersonFill/>
                </div>
                <Text
                    className='
                    2xl:text-md
                    xl:text-sm
                    lg:text-xs
                    '
                >
                    {teacher}
                </Text>
            </div>
            <div className="flex">
                <div className='2xl:mt-[6px] xl:mt-[2px] mr-[6px]'>
                    <FaMapMarkerAlt/>
                </div>
                <Text
                    className='
                    2xl:text-md
                    xl:text-sm
                    lg:text-xs
                    '
                >
                    {room}
                </Text>
            </div>
        </>
    )
}
export default CardContent

