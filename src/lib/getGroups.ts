import axios from "axios";
import cheerio from "cheerio";


export default async function getGroups(): Promise<any> {
    const url = `https://rozklad.ztu.edu.ua/schedule/group`

    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        const facultyList = $("body > div").last().children()
        const data = []
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

        return data

    } catch (err) {
        console.error(err)
    }
}