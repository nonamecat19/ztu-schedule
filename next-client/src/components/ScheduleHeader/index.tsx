import React, {useEffect, useState} from 'react'
import {useScheduleStore} from "../../store/store";
import {Switch, Text, Navbar, Badge, Modal, Button, Loading} from "@nextui-org/react";
import {TbMenu2} from "react-icons/tb";
import {MdSchedule} from "react-icons/md";
import fetcher from "../../shared/utils/fetcher";
import CabinetModal from "../CabinetModal";
import useSWR from 'swr';

function ScheduleHeader({}) {
    const [url, setUrl] = useState<string>('')

    useEffect(() => {
        setUrl(`https://puppeteer-server.onrender.com/cabinet?login=${localStorage?.getItem('ztu-login') ?? ''}&pass=${localStorage?.getItem('ztu-password') ?? ''}`)
    }, [])

    const { data, error, isLoading } = useSWR(url, fetcher)

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false)

    const [cabinetVisible, setCabinetVisible] = useState(false);
    const cabinetHandler = () => setCabinetVisible(true);
    const closeCabinetHandler = () => setCabinetVisible(false)

    return (
        <>
            <div className='lg:hidden block'>
                <Button
                    disabled={isLoading}
                    color={'secondary'}
                    auto
                    className={(isLoading ? "bg-[#202020]" : "bg-[#9750dd]") + ' p-2 fixed left-2 top-3 z-[5]'}
                    shadow={!isLoading}
                    onPress={cabinetHandler}
                    icon={isLoading ? <Loading color="secondary"/>: <MdSchedule size={20}/>}
                />
                {(isLoading && !error) || (
                    <CabinetModal
                        visible={cabinetVisible}
                        closeHandler={closeCabinetHandler}
                        data={data?.data}
                    />
                )}
                <Button
                    color="secondary"
                    auto
                    className='bg-[#9750dd] p-2 fixed right-2 top-3 z-[5]'
                    shadow
                    onPress={handler}
                    icon={<TbMenu2/>}
                />
                <Modal
                    closeButton
                    blur
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Body>
                        <Navbar.Content>
                            <ToHome/>
                        </Navbar.Content>
                        <div className='flex flex-col space-y-3 w-full h-20'>
                            <GroupChanger/>
                            <WeekChanger/>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

            <div className="ScheduleHeader bg-bg pt-4 pb-2 lg:block hidden">
                <Navbar.Content activeColor='secondary' hideIn="xs" variant='highlight-solid'>
                    <div className="flex w-full justify-around">
                        <Button
                            disabled={isLoading}
                            color={'secondary'}
                            auto
                            className={(isLoading ? "bg-[#202020]" : "bg-[#9750dd]") + ' p-2 w-16 z-[5]'}
                            shadow={!isLoading}
                            onPress={cabinetHandler}
                            icon={isLoading ? <Loading color="secondary"/>: <MdSchedule size={20}/>}
                        />
                        {(isLoading && !error) || (
                            <CabinetModal
                                visible={cabinetVisible}
                                closeHandler={closeCabinetHandler}
                                data={data?.data}
                            />
                        )}
                        <ToHome/>
                        <GroupChanger/>
                        <WeekChanger/>
                    </div>
                </Navbar.Content>
            </div>
        </>
    )
}


function ToHome() {
    return (
        <Badge color="secondary" enableShadow disableOutline isSquared css={{padding: 0}}>
            <Navbar.Link
                href="/"
                css={{
                    width: '400px',
                    fontSize: '2rem',
                    padding: '0 40px'
                }}
            >
                <Text
                    css={{
                        padding: 0,
                        fontSize: '1.3rem'
                    }}
                >
                    ВТ-21-1
                </Text>

            </Navbar.Link>
        </Badge>
    )
}

function GroupChanger() {
    const selectCurrentGroup = useScheduleStore(state => state['selectCurrentGroup'])
    const currentGroup = useScheduleStore(state => state['currentGroupFirst'])
    const changeGroupHandler = (event) => selectCurrentGroup(event.target.checked)
    return (
        <ChangerWrapper
            checked={currentGroup}
            onChange={changeGroupHandler}
            text={(currentGroup ? 'Друга' : 'Перша') + ' підгрупа'}
        />
    )
}

function WeekChanger() {
    const selectCurrentWeek = useScheduleStore(state => state['selectCurrentWeek'])
    const currentWeek = useScheduleStore(state => state['currentWeekFirst'])
    const changeWeekHandler = (event) => selectCurrentWeek(event.target.checked)
    return (
        <ChangerWrapper
            checked={currentWeek}
            onChange={changeWeekHandler}
            text={(currentWeek ? 'Другий' : 'Перший') + ' тиждень'}
        />
    )
}

function ChangerWrapper({checked, onChange, text}) {
    return (
        <div className="flex justify-between">
            <Text
                h1
                size={60}
                css={{
                    fontSize: '1.2rem',
                    width: '160px',
                    textAlign: 'center'
                }}
                weight="light"
            >
                {text}
            </Text>
            <Switch
                shadow
                color="secondary"
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}


export default ScheduleHeader

