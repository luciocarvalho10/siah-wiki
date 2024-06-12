import PageTitle from '@/components/pages/PageTitle'
import Stat from '@/components/pages/Stat'
import { Stats } from '@/data/db/stats'
import { baseApiUrl } from '@/globais'
import { HomeIcon, FolderIcon, NewspaperIcon, UserIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

export default function Dashboard() {
    const statsEmpty: Stats = {
        users: 0,
        articles: 0,
        categories: 0,
    }
    const [stats, setStats] = useState<Stats>(statsEmpty)

    async function getStats() {
		const res = await fetch(`${baseApiUrl}/stats`)
        const stats: Stats = await res.json()
        setStats(stats)
	}

    useEffect(() => {
        getStats()
    }, [])

	return (
		<div>
			<PageTitle
				icon={<HomeIcon className="mr-2 h-[35px] w-[35px]" />}
				main="Dashboard"
				sub="SiahWiki"
			/>
			<div className="stats flex flex-wrap justify-between">
				<Stat
					title="Categorias"
					value={stats.categories}
					icon={<FolderIcon className="h-20 w-20" />}
					color="#d54d50"
				/>
				<Stat
					title="Artigos"
					value={stats.articles}
					icon={<NewspaperIcon className="h-20 w-20" />}
					color="#3bc480"
				/>
				<Stat
					title="Usuários"
					value={stats.users}
					icon={<UserIcon className="h-20 w-20" />}
					color="#3282cd"
				/>
			</div>
		</div>
	)
}
