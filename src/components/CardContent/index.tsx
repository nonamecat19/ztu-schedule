import React from 'react'
import './CardContent.module.scss'
import {LessonType} from "../../shared/types/card/card"
import {Text} from "@nextui-org/react";
import {BsFillPersonFill} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";
import Lesson from '../Lesson';
import {isMobile} from "react-device-detect";
import subjectRename from "../../shared/utils/subjectRename";

interface Props {
    data: LessonType
    time: string
}

function CardContent({data, time}: Props) {
    if (typeof data === 'number')
        return <></>


    const detailsContainerPC = `
        flex ml-1
        lg:flex-col 
    `

    const detailsContainerMobile = `
        flex ml-4
    `

    const detailsPC = `
        2xl:text-md
        xl:text-sm
        lg:text-xs
           text-xl
    `

    const detailsMobile = `
        2xl:text-md
        xl:text-sm
        lg:text-4xl
           text-xl
    `

    const detailsItemPC = `flex w-[200px]`

    const detailsItemMobile = `flex w-[300px]`


    const detailsIconPC = `
        mt-[6px] mr-[6px]
        2xl:mt-[2px] 
        xl:mt-[2px] 
        lg:mt-[0px] 
        md:mt-[6px] 
        sm:mt-[6px] 
        xs:mt-[6px] 
    `

    const detailsIconMobile = `
        mt-[6px] mr-[6px]
        2xl:mt-[2px] 
        xl:mt-[2px] 
        lg:mt-[6px] 
        md:mt-[6px] 
        sm:mt-[6px] 
        xs:mt-[6px] 
    `

    const timePC = `
        rounded-md text-center mr-2
        2xl:text-md
        xl:text-sm
        lg:text-xs
    `

    const timeMobile = `
        rounded-md text-center mr-2
        2xl:text-md
         xl:text-sm
         lg:text-3xl lg: mr-4
         md:text-xl
         sm:text-xl
            text-xl
    `

    const subjectPC = `
        2xl:text-xl
        xl:text-lg
        lg:text-base
        md:text-2xl
        sm:text-xl
        text-lg
    `

    const subjectMobile = `
        2xl:text-xl
        xl:text-lg
        lg:text-7xl
        md:text-4xl
        text-3xl
    `

    const subjectContainerPC = `
        flex justify-center items-center text-center 
        lg:h-[60px] 
        md:h-[70px] 
        sm:h-[45px] 
        h-[40px]
    `

    const subjectContainerMobile = `
        flex justify-center items-center text-center 
        lg:h-[210px] 
        md:h-[130px] 
        sm:h-[130px] 
        h-[120px]
    `

    const {type, subject, teacher, room} = data
    return (
        <>
            <div className="flex justify-between items-center">
                <Lesson type={type} />
                <Text className={isMobile ? timeMobile : timePC}>
                    {time}
                </Text>
            </div>
            <div className={isMobile ? subjectContainerMobile : subjectContainerPC}>
                <Text className={isMobile ? subjectMobile : subjectPC}>
                    {limitStr(subjectRename(subject), 30)}
                </Text>
            </div>
            <div className={isMobile ? detailsContainerMobile : detailsContainerPC}>
                <div className={isMobile ? detailsItemMobile : detailsItemPC}>
                    <div className={isMobile ? detailsIconMobile : detailsIconPC}>
                        <BsFillPersonFill/>
                    </div>
                    <Text
                        className={isMobile ? detailsMobile : detailsPC}
                    >
                        {initials(teacher)}
                    </Text>
                </div>
                <div className={isMobile ? detailsItemMobile : detailsItemPC}>
                    <div className={isMobile ? detailsIconMobile : detailsIconPC}>
                        <FaMapMarkerAlt/>
                    </div>
                    <Text
                        className={isMobile ? detailsMobile : detailsPC}
                    >
                        {room}
                    </Text>
                </div>
            </div>
        </>
    )
}
const limitStr = (str: string, n: number): string => {
    return str.length >= n
        ? str.slice(0, n - 3) + '...'
        : str
}

const initials = (str: string): string => {
    return str
        .split(/\s+/)
        .map((word,index) =>
            index
                ? word.substring(0,1).toUpperCase() + '.'
                : word
        )
        .join(' ');
}
export default CardContent

