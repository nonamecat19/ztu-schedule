import SchedulePage from '../src/pages/SchedulePage'
import React from 'react'
import axios, {AxiosResponse} from "axios";
import {GroupDataType} from "../src/shared/types/card/card";

function Schedule({data, error}) {
    return <SchedulePage
        data={data}
        error={error}
    />
}

export async function getServerSideProps() {
    // let data: any = null
    // let error: boolean = false
    // await axios('http://127.0.0.1:3000/api/data/')
    //     .then((response: AxiosResponse<GroupDataType>) => data = response.data)
    //     .catch(() => error = true)
    // return {
    //     props:
    //         {
    //             data: data,
    //             error: error
    //         }
    // }
    return {
        props:
            {
                data: [[[]]],
                error: false
            }
    }
}

export default Schedule