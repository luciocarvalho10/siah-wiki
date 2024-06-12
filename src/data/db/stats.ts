import users from '@/data/db/users'
import articles from '@/data/db/articles'
import categories from '@/data/db/categories'

export type Stats = {
	users: number
	articles: number
	categories: number
}

const stats: Stats = {
	users: users.length,
	articles: articles.length,
	categories: categories.length,
}

export default stats