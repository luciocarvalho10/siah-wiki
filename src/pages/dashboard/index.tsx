import PageTitle from '@/components/pages/PageTitle'
import Stat from '@/components/pages/Stat'
import { baseApiUrl } from '@/globais'
import { HomeIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

export default function Dashboard() {
    const [stats, setStats] = useState({})

    function getStats() {

    }

	return (
		<div>
			<PageTitle
				icon={<HomeIcon className="mr-2 h-[35px] w-[35px]" />}
				main="Dashboard"
				sub="SiahWiki"
			/>
		</div>
	)
}
