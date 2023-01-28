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
            <div className="flex justify-center items-center text-center lg:h-[60px] md:h-[35px] sm:h-[45px] h-[60px]">
                <Text className='
                    2xl:text-xl
                    xl:text-lg
                    md:text-lg
                    text-xl
                '>
                    {subject}
                </Text>
            </div>
            <div className="lg:flex-col flex ml-1">
                <div className="flex w-[160px]">
                    <div className='2xl:mt-[2px] xl:mt-[2px] lg:mt-[0px] md:mt-[6px] sm:mt-[6px] xs:mt-[6px] mt-[6px] mr-[6px]'>
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
                <div className="flex w-[160px]">
                    <div className='2xl:mt-[2px] xl:mt-[2px] lg:mt-[0px] md:mt-[6px] sm:mt-[6px] xs:mt-[6px] mt-[6px] mr-[6px]'>
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
            </div>

        </>
    )
}
export default CardContent

