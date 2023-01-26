import React from 'react'
import './ScheduleCard.module.scss'
import {Card, Text, Tooltip} from "@nextui-org/react";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
import {CardType} from "../../shared/types/card/card";
import LessonType from "../LessonType";

interface Props extends CardType {

}

function ScheduleCard({type, subject, teacher, room, time, disabled, other}: Props) {
    return (
        <Card css={{p: "$9", m: '$6', w: "300px", h: '170px', border: 'none'}}>
            {
                disabled || (
                    <>
                        <div className="flex justify-between items-center">
                            <LessonType type={type} />
                            <Text className='rounded-md text-md text-center'>
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
            {
                other && (
                    <Tooltip
                        className='bg-another rounded-xl absolute w-12 h-7 bottom-1.5 right-1.5'
                        content="В цей час є пара в іншої підгрупи"
                        color="invert"
                    />
                )
            }
        </Card>
    )
}

export default ScheduleCard

