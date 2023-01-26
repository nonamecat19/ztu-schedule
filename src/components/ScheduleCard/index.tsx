import React from 'react'
import './ScheduleCard.module.scss'
import {Card, Text} from "@nextui-org/react";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
import {CardType} from "../../shared/types/card/card";

interface Props extends CardType {

}

function ScheduleCard({type, subject, teacher, room, time}: Props) {
    return (
        <Card css={{p: "$9", m: '$6', w: "300px", h: '170px', border: 'none'}}>
            <div className="flex justify-between items-center">
                <Text className='bg-lec px-4 rounded-md text-bg text-md w-16 text-center'>
                    {type}
                </Text>
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
        </Card>
    )
}

export default ScheduleCard

