// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import stats from '@/data/db/stats'
import type { Stats } from '@/data/db/stats'

export default function handler(req: NextApiRequest, res: NextApiResponse<Stats>) {
	res.status(200).json(stats)
}