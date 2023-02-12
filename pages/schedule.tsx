import SchedulePage from '../src/pages/SchedulePage'
import React from 'react'
import axios from "axios";
import cheerio from "cheerio";

function Schedule({data, error}) {
    return <SchedulePage
        propsData={data}
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
    let data = await getSchedule()
    return {
        props:
            {
                data: data,
                error: false
            }
    }
}


function getType(str) {
    if (str.includes("Лабораторна"))
        return "lab"
    if (str.includes("Лекція"))
        return "lec"
    if (str.includes("Практика"))
        return "pra"
    if (str.includes("Консультація"))
        return "con"
    return ''
}

async function getSchedule() {

    const url = "https://rozklad.ztu.edu.ua/schedule/group/%D0%92%D0%A2-21-1?new"
    let schedule = []
    let daySchedule = []

    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)

        const day = $("td")

        day.each(function () {
            let str = $(this).text()
            let block, obj1, obj2

            block = str.includes("Лабораторна") ? "one" : 'variative'

            for (let i = 1; i <= 2; i++) {
                let groups = $(this).find("." + block + ":nth-child(" + i + ") div:nth-child(1)").text()
                let subject = $(this).find("." + block + ":nth-child(" + i + ") .subject").text()
                let room = $(this).find("." + block + ":nth-child(" + i + ") .room").text().trim()
                let teacher = $(this).find("." + block + ":nth-child(" + i + ") .teacher").text()

                $(this).find("." + block + ":nth-child(" + i + ") .room").remove()
                let type = $(this).find("." + block + ":nth-child(" + i + ") div:nth-child(3)").text().trim()

                str = $(this).find("." + block + ":nth-child(" + i + ")").text()
                type = getType(str)

                if (i === 1) {
                    if (groups === '' && subject === '')
                        obj1 = 0
                    else
                        obj1 = {groups, type, subject, teacher, room}
                } else {
                    if (groups === '' && subject === '')
                        obj2 = 0
                    else
                        obj2 = {groups, type, subject, teacher, room}
                }

            }

            if (!(obj1 === 0 && obj2 === 0) && block === "variative")
                daySchedule = [obj1]
            else
                daySchedule = [obj1, obj2]

            schedule.push(daySchedule)

        })

        //формування днів та тижнів
        const MAX_LESSONS = 69
        let k = 0
        let counter = 0

        let column1 = []
        let column2 = []
        let week1 = []
        let week2 = []

        for (let i = 0; i < 5; i++) {
            for (let index = 0; index < schedule.length; index++) {
                if (index === k) {
                    counter++
                    k += 5
                    if (counter <= 7)
                        column1.push(schedule[index])
                    else
                        column2.push(schedule[index])
                }
            }
            week1.push(column1)
            week2.push(column2)
            column1 = []
            column2 = []
            k -= MAX_LESSONS
            counter = 0
        }

        schedule = [week1, week2]

        // const parser = new j2cp()
        // const csv = parser.parse(schedule)
        // fs.writeFileSync("./schedule.csv", csv)


        // console.log(schedule)
        // console.log(schedule[0][0]) //понеділок 1 тижня
        // console.log(schedule[1][0]) //понеділок 2 тижня
        // console.log(schedule[0][1]) //вівторок 1 тижня
        // console.log(schedule[1][4]) //п'ятниця 2 тижня
        // console.log(schedule[1][4][0]) //п'ятниця 2 тижня 1 пара

        return schedule
    } catch (err) {
        console.error(err)
    }
}

export default Schedule