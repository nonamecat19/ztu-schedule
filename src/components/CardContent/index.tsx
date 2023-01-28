import React from 'react'
import './CardContent.module.scss'
import {LessonType} from "../../shared/types/card/card"
import {Text} from "@nextui-org/react";
import {BsFillPersonFill} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";
import Lesson from '../Lesson';
import {isMobile} from "react-device-detect";

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
           text-2xl
    `

    const detailsMobile = `
        2xl:text-md
        xl:text-sm
        lg:text-4xl
           text-2xl
    `

    const detailsItemPC = `flex w-[160px]`

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
        md:text-lg
        text-4xl
    `

    const subjectMobile = `
        2xl:text-xl
        xl:text-lg
        lg:text-7xl
        md:text-lg
        text-4xl
    `

    const subjectContainerPC = `
        flex justify-center items-center text-center 
        lg:h-[60px] 
        md:h-[35px] 
        sm:h-[45px] 
        h-[120px]
    `

    const subjectContainerMobile = `
        flex justify-center items-center text-center 
        lg:h-[210px] 
        md:h-[35px] 
        sm:h-[45px] 
        h-[120px]
    `

    const {type, subject, teacher, room} = data
    return (
        <>
            <div className="flex justify-between items-center">
                <Lesson type={type} />
                <Text className={isMobile ? timeMobile : timeMobile}>
                    {time}
                </Text>
            </div>
            <div className={isMobile ? subjectContainerMobile : subjectContainerMobile}>
                <Text className={isMobile ? subjectMobile : subjectMobile}>
                    {subject}
                </Text>
            </div>
            <div className={isMobile ? detailsContainerMobile : detailsContainerMobile}>
                <div className={isMobile ? detailsItemMobile : detailsItemMobile}>
                    <div className={isMobile ? detailsIconMobile : detailsIconMobile}>
                        <BsFillPersonFill size={isMobile ? 22 : 16}/>
                    </div>
                    <Text
                        className={isMobile ? detailsMobile : detailsMobile}
                    >
                        {teacher}
                    </Text>
                </div>
                <div className={isMobile ? detailsItemMobile : detailsItemMobile}>
                    <div className={isMobile ? detailsIconMobile : detailsIconMobile}>
                        <FaMapMarkerAlt size={isMobile ? 22 : 16}/>
                    </div>
                    <Text
                        className={isMobile ? detailsMobile : detailsMobile}
                    >
                        {room}
                    </Text>
                </div>
            </div>

        </>
    )
}
export default CardContent

