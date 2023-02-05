import React from 'react'
import './ScheduleHeader.module.scss'
import {useScheduleStore} from "../../store/store";
import {Switch, Text, Navbar, Badge} from "@nextui-org/react";

interface Props {

}

function ScheduleHeader({}: Props) {

    const selectCurrentGroup = useScheduleStore(state => state['selectCurrentGroup'])
    const selectCurrentWeek = useScheduleStore(state => state['selectCurrentWeek'])
    const currentGroup = useScheduleStore(state => state['currentGroupFirst'])
    const currentWeek = useScheduleStore(state => state['currentWeekFirst'])

    const changeGroupHandler = (event) => {
        selectCurrentGroup(event.target.checked)
    }

    const changeWeekHandler = (event) => {
        selectCurrentWeek(event.target.checked)
    }

    return (
        <>
            <div className="ScheduleHeader bg-bg pt-4 pb-2">
                <Navbar.Content activeColor='secondary' hideIn="xs" variant='highlight-solid'>
                    <div className="flex w-full justify-around">

                        <Badge color="secondary" enableShadow disableOutline isSquared css={{padding: 0}}>
                            <Navbar.Link
                                href="/"
                                css={{
                                    width: '400px',
                                    fontSize: '2rem'
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


                        <div className="flex">

                            <Text
                                h1
                                size={60}
                                css={{
                                    fontSize: '1.2rem',
                                    width: '200px',
                                    textAlign: 'center'
                                }}
                                weight="light"
                            >
                                {currentGroup ? 'Друга' : 'Перша'} підгрупа
                            </Text>
                            <Switch
                                shadow
                                color="secondary"
                                checked={currentGroup}
                                onChange={changeGroupHandler}
                            />
                        </div>

                        <div className="flex">
                            <Text
                                h1
                                size={60}
                                css={{
                                    fontSize: '1.2rem',
                                    width: '200px',
                                    textAlign: 'center'
                                }}
                                weight="light"
                            >
                                {currentWeek ? 'Другий' : 'Перший'} тиждень
                            </Text>
                            <Switch
                                shadow
                                color="secondary"
                                checked={currentWeek}
                                onChange={changeWeekHandler}
                            />
                        </div>

                    </div>
                </Navbar.Content>
            </div>
        </>
    )
}

export default ScheduleHeader

