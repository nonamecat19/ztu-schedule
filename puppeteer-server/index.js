const express = require("express")
const { getCabinetData } = require("./cabinet")
const cors = require('cors');
const app = express()

const PORT = process.env.PORT || 4000
app.use(cors())
app.get("/cabinet", async (req, res) => {
  if (!req.query.login || !req.query.pass) {
    res.json({
      data: null,
      error: true,
      errorMessage: 'NO_CREDENTIALS'
    })
  }
  res.json(await getCabinetData(req.query.login, req.query.pass))
})

app.get("/health", (req, res) => {
  res.send("Render Puppeteer server is up and running!")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
