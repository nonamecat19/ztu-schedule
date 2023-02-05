import SchedulePage from '../src/pages/SchedulePage'
import React from 'react'
import axios from "axios";

function Schedule({data}) {
  return <SchedulePage
    data={data}
  />
}

export async function getServerSideProps(){
  let data: any = []
  await axios.get('http://127.0.0.1:3000/api/data/')
      .then(response => {
        data = response.data
      })
  return {props: {data: data}}
}

export default Schedule