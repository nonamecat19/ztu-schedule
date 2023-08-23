import SchedulePage from '../../src/pages/SchedulePage'
import React from 'react'
import getSchedule from "../../src/lib/getSchedule";
import getGroups from "../../src/lib/getGroups";

export default function Group({data, error}) {
    return <SchedulePage
        propsData={data}
        error={error}
    />
}

export async function getStaticProps(ctx) {

    const { group } = ctx.params;

    let schedule = await getSchedule(group)
    return {
        props: {
            ...schedule,
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const paths = []
    const {data} = await getGroups()

    for (let {courses} of data) {
        for (let {data} of courses) {
            for (let {link} of data) {
                paths.push({
                    params: {
                        group: link
                    }
                })
            }
        }
    }

    for (let {params} of paths) {
        console.log(params)
    }

    return {paths, fallback: 'blocking'}
}
