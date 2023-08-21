import {NextApiRequest, NextApiResponse} from "next";
import getSchedule from "../../src/lib/getSchedule";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(await getSchedule())
}