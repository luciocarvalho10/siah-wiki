import PageTitle from '@/components/template/PageTitle'
import { HomeIcon } from '@heroicons/react/16/solid'

export default function Dashboard() {
	return (
		<PageTitle
			icon={<HomeIcon className="h-[35px] w-[35px] mr-2" />}
			main="Dashboard"
			sub="SiahWiki"
		/>
	)
}
