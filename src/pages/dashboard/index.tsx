import PageTitle from '@/components/template/PageTitle'
import { HomeIcon } from '@heroicons/react/16/solid'

export default function Dashboard() {
	return (
		<PageTitle
			icon={<HomeIcon className="h-6 w-6 mr-2" />}
			main="Dashboard"
			sub="SiahWiki"
		/>
	)
}
