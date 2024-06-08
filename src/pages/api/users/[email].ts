// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import users from '@/data/db/users'
import type {User} from '@/data/db/users'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const sendUser = (U: User) => res.status(200).json(U)

	const ReqUserEmail: User | any = req.query.email
    const user: User[] = users.filter(u => u.email === ReqUserEmail)

	user.length === 1 ? sendUser(user[0]) : res.status(204).send //.send()
}