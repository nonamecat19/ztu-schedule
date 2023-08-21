import SchedulePage from '../src/pages/SchedulePage'
import React from 'react'
import getSchedule from "../src/lib/getSchedule";

function Schedule({data, error}) {
    return <SchedulePage
        propsData={data}
        error={error}
    />
}

// export async function getServerSideProps() {
//     let schedule = await getSchedule()
//     return {props: schedule}
// }

export async function getStaticProps() {
    let schedule = await getSchedule()
    return {
        props: {
            ...schedule,
        },
        revalidate: 60
    }
}


export default Schedule