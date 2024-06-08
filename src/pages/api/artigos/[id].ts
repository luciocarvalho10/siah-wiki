// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import artigos from '@/data/db/artigos'
import type { Artigo } from '@/data/db/artigos'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const sendArtigo = (A: Artigo) => res.status(200).json(A)

	const ReqArtigoId: Artigo | any = req.query.id
    const artigo: Artigo[] = artigos.filter(a => a.id === ReqArtigoId)

	artigo.length === 1 ? sendArtigo(artigo[0]) : res.status(204).send //.send()
}