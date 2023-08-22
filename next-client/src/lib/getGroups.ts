import axios from "axios";
import cheerio from "cheerio";
import {BaseApi} from "../shared/types/api";
import {GroupType} from "../shared/types/groups";

export default async function getGroups(): Promise<BaseApi<GroupType[]>> {
    const url = `https://rozklad.ztu.edu.ua/schedule/group`
    const data: GroupType[] = []

    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        const facultyList = $("body > div").last().children()

        facultyList.each(function () {
            const name = $(this).find('h4').text()
            const courses = []

            const coursesList = $(this).find('div.col.l2.s6.m4')
            coursesList.each(function () {
                const courseName = $(this).find('h5').text()
                const groupsData = []

                const groups = $(this).find('a.collection-item')
                groups.each(function () {
                    groupsData.push({
                        name: $(this).contents().filter(function () {
                            return this.type === 'text'
                        }).text().trim(),
                        link: $(this).attr('href').replace('/schedule/group/', '')
                    })
                })

                courses.push({
                    name: courseName,
                    data: groupsData
                })
            })

            data.push({
                name,
                courses
            })
        })

        return {
            data,
            error: false,
            errorMessage: null
        }

    } catch (err) {
        console.error(err)
        return {
            data: null,
            error: true,
            errorMessage: err.errorMessage
        }
    }
}