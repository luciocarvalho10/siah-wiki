import users from '@/data/db/users'
import artigos from '@/data/db/artigos'
import categorias from '@/data/db/categorias'

export type Stats = {
	users: number
	artigos: number
	categorias: number
}

const stats: Stats = {
	users: users.length,
	artigos: artigos.length,
	categorias: categorias.length,
}

export default stats