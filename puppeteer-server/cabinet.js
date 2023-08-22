const puppeteer = require("puppeteer");
require("dotenv").config();
const cheerio = require("cheerio")

const equalObject = (obj1, obj2) => {
    obj1 = Object.entries(obj1)
    obj2 = Object.entries(obj2)
    if (obj1.length !== obj2.length) {
        return false
    }

    for (let i = 0; i < obj1.length; i++) {
        if (obj1[i][1] !== obj2[i][1]) {
            return false
        }
    }
    return true
}

const getCabinetData = async (login, pass) => {
    const url = "https://cabinet.ztu.edu.ua/site/schedule"
    const loginPage = "https://cabinet.ztu.edu.ua/site/login"
    let lessons = []

    let browser

    try {
        browser = await puppeteer.launch({
            args: ["--disable-setuid-sandbox", "--no-sandbox", "--single-process", "--no-zygote",],
            executablePath: process.env.NODE_ENV === "production" ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath(),
        });

        const page = await browser.newPage()
        await page.goto(loginPage)

        await page.$eval("#loginform-username", (el, login) => el.value = login, login)
        await page.$eval("#loginform-password", (el, pass) => el.value = pass, pass)
        await page.click("#login-form > div:nth-child(6) > button")
        await page.waitForSelector("body > div > div > div.site-index > div > div > a:nth-child(2)")
        await page.goto(url)

        const exp = await page.$eval("body > div.wrap > div", el => el.innerHTML)
        let ex = await page.$eval("body > div.wrap > div", el => el.innerHTML)
        let ind = ex.indexOf("<h2>")
        let ind2 = ex.indexOf("<style>")

        ex = ex.substring(ind, ind2)
        ex = ex.split("<div style=\"color:#DDD; display: none;\">")


        let para = 1

        const $ = cheerio.load(exp)
        const day = $(".pair")

        day.each(function () {

            let time = $(this).find(".pair div:nth-child(1) div:nth-child(1)").text()
            let subject = $(this).find(".pair div:nth-child(1) div:nth-child(2)").text()
            let type = $(this).find(".pair div:nth-child(1) div:nth-child(3)").text()
            let room = $(this).find(".pair div:nth-child(1) div:nth-child(4)").text()
            let teacher = $(this).find(".pair div:nth-child(1) div:nth-child(5)").text()

            let temp = ex[para].split("</div>")
            let text = temp[0].trim()
            let links = temp[1]
            links = links.replace("<div style=\"font-size:1.5em;\">", "").trim()
            para++

            lessons.push({time, subject, type, room, teacher, text, links})
        })

    } catch (err) {
        console.error(err)
        return {
            data: null,
            error: true,
            errorMessage: err.message
        }
    } finally {
        await browser?.close()
    }

    if (lessons.length >= 2) {
        if (equalObject(lessons[lessons.length - 1], lessons[lessons.length - 2])) {
            return {
                data: lessons.slice(0, lessons.length - 1),
                error: false,
                errorMessage: null
            }
        }
        return {
            data: lessons,
            error: false,
            errorMessage: null
        }
    }
    return {
        data: lessons,
        error: false,
        errorMessage: null,
    }


}

module.exports = {getCabinetData};
