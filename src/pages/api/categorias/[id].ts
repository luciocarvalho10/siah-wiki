// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import categorias from '@/data/db/categorias'
import type { Categoria } from '@/data/db/categorias'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const sendCategoria = (C: Categoria) => res.status(200).json(C)

	const ReqCategoriaId: Categoria | any = req.query.id
    const categoria: Categoria[] = categorias.filter(c => c.id === ReqCategoriaId)

	categoria.length === 1 ? sendCategoria(categoria[0]) : res.status(204).send //.send()
}