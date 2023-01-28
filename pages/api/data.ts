import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://rozklad.ztu.edu.ua/schedule/group/%D0%92%D0%A2-21-1'
    let data
    await axios.get(url)
        .then(response => {
            data = response.data
        })
        .catch(error => {
            console.log(error)
        })
    res
        .status(200)
        .json(data)
}