// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import categories from '@/data/db/categories'
import type { Category } from '@/data/db/categories'

export default function handler(req: NextApiRequest, res: NextApiResponse<Category>) {
	const sendCategory = (C: Category) => res.status(200).json(C)

	const ReqCategoryId = Number(req.query.id)
    const category: Category[] = categories.filter(c => c.id === ReqCategoryId)

	category.length === 1 ? sendCategory(category[0]) : res.status(204).send //.send()
}