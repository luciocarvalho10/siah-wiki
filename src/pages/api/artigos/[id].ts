// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import articles from '@/data/db/articles'
import type { Article } from '@/data/db/articles'

export default function handler(req: NextApiRequest, res: NextApiResponse<Article>) {
	const sendArticle = (A: Article) => res.status(200).json(A)

	const ReqArticleId = Number(req.query.id)
    const article: Article[] = articles.filter(a => a.id === ReqArticleId)

	article.length === 1 ? sendArticle(article[0]) : res.status(204).send //.send()
}