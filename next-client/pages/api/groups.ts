import {NextApiRequest, NextApiResponse} from "next";
import getGroups from "../../src/lib/getGroups";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(await getGroups())
}