import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import {ColumnType, GroupDataType, WeekType} from "../../src/shared/types/card/card";
const cheerio = require("cheerio")

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(await getSchedule())
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

async function getSchedule(): Promise<GroupDataType> {
    const url = "https://rozklad.ztu.edu.ua/schedule/group/%D0%92%D0%A2-21-1?new"
    let schedule = []
    let daySchedule = []

    try {
        const response = await axios(url)
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

        const MAX_LESSONS: number = 69
        let k: number = 0
        let counter: number = 0

        let column1: ColumnType | any = []
        let column2: ColumnType | any = []
        let week1: WeekType | any = []
        let week2: WeekType | any = []

        for (let i: number = 0; i < 5; i++) {
            for (let index: number = 0; index < schedule.length; index++) {
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

        return [week1, week2]
    } catch (err) {
        console.error(err)
    }
}