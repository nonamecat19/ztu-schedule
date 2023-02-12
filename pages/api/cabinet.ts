import {NextApiRequest, NextApiResponse} from "next"
import {config} from "dotenv"
import express from "express"
import cheerio from "cheerio"
import {CabinetInfo} from "../../src/shared/types/cabinet";
import chromium from "chrome-aws-lambda";
import playwright from "playwright-core";

const app = express()
config()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(await getCabinet())
}

app.use(express.json({extended: false}))

const equalObject = (obj1, obj2): boolean => {
    obj1 = Object.entries(obj1)
    obj2 = Object.entries(obj2)
    if (obj1.length !== obj2.length)
        return false

    for (let i = 0; i < obj1.length; i++)
        if (obj1[i][1] !== obj2[i][1])
            return false
    return true
}

async function getCabinet(week?, day?): Promise<CabinetInfo> {
    const url = "https://cabinet.ztu.edu.ua/site/schedule"
    const loginPage = "https://cabinet.ztu.edu.ua/site/login"

    const browser = await playwright.chromium.launch({
        args: [...chromium.args, "--font-render-hinting=none"],
        executablePath:
            process.env.NODE_ENV === "production"
                ? await chromium.executablePath
                : "/usr/local/bin/chromium",
        headless:
            process.env.NODE_ENV === "production" ? chromium.headless : true,
    });

    const page = await browser.newPage()
    // await page.goto(loginPage)
    // // @ts-ignore
    // await page.$eval("#loginform-username", (el) => el.value = "vt211_zks")
    // // @ts-ignore
    // await page.$eval("#loginform-password", (el) => el.value = "700170")
    // await page.click("#login-form > div:nth-child(6) > button")
    // await page.waitForSelector("body > div > div > div.site-index > div > div > a:nth-child(2)")
    // await page.goto(url)
    //
    // const exp = await page.$eval("body > div.wrap > div", (el) => el.innerHTML)
    // let ex = await page.$eval("body > div.wrap > div", (el) => el.innerHTML)
    // let ind = ex.indexOf("<h2>")
    // let ind2 = ex.indexOf("<style>")
    // ex = ex.substring(ind, ind2)
    // // @ts-ignore
    // ex = ex.split("<div style=\"color:#DDD; display: none;\">")

    let lessons = []
    // let para = 1
    // try {
    //     const $ = cheerio.load(exp)
    //     const day = $(".pair")
    //
    //     day.each(function () {
    //
    //         let time = $(this).find(".pair div:nth-child(1) div:nth-child(1)").text()
    //         let subject = $(this).find(".pair div:nth-child(1) div:nth-child(2)").text()
    //         let type = $(this).find(".pair div:nth-child(1) div:nth-child(3)").text()
    //         let room = $(this).find(".pair div:nth-child(1) div:nth-child(4)").text()
    //         let teacher = $(this).find(".pair div:nth-child(1) div:nth-child(5)").text()
    //
    //         let temp = ex[para].split("</div>")
    //         let text = temp[0].trim()
    //         let links = temp[1]
    //         links = links.replace("<div style=\"font-size:1.5em;\">", "").trim()
    //         para++
    //
    //         lessons.push({time, subject, type, room, teacher, text, links})
    //     })
    //
    // } catch (err) {
    //     console.error(err)
    // }
    // await browser.close()
    //
    // if (lessons.length >= 2) {
    //     if (equalObject(lessons[lessons.length - 1], lessons[lessons.length - 2]))
    //         return lessons.slice(0, lessons.length - 1)
    //     return lessons
    // }
    return lessons
}