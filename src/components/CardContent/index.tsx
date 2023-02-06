import React, {useState} from 'react'
import './CardContent.module.scss'
import {LessonType} from "../../shared/types/card/card"
import {Text, Modal} from "@nextui-org/react";
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
    const [visible, setVisible] = useState(false);
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
           text-lg
    `

    const detailsMobile = `
        2xl:text-md
        xl:text-sm
        lg:text-4xl
           text-lg
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
            text-lg
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
        text-xl
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
        h-[80px]
    `
    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false)

    function LessonModal({data}) {
        let currentData: LessonType = data
        if (typeof currentData === 'number')
            return <></>

        let {subject, teacher, room, groups} = currentData

        return (
            <Modal
                closeButton
                aria-labelledby="modal-title2"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <div className="flex flex-col">
                        <Text
                            size={20}
                        >
                            {subject}
                        </Text>
                        <Text
                            size={20}
                        >
                            {teacher}
                        </Text>
                        <Text
                            size={20}
                        >
                            {room}
                        </Text>
                        <Text
                            size={20}
                        >
                            {groups}
                        </Text>
                    </div>

                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }

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
                <Text
                    className={(isMobile ? subjectMobile : subjectPC) + ' hover:cursor-pointer'}
                    onClick={handler}
                >
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
                        {roomFixer(room)}
                    </Text>
                </div>
            </div>


            <LessonModal data={data}/>

        </>
    )
}
const limitStr = (str: string, n: number): string => {
    return str.length >= n
        ? str.slice(0, n - 3) + '...'
        : str
}

const roomFixer = (str: string): string => str.slice(0, 3) === 'Дис' ? 'Дис.' : str

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

