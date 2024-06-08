import PageTitle from '@/components/pages/PageTitle'
import { Cog8ToothIcon } from '@heroicons/react/16/solid'

export default function AdminPages() {
	return (
		<PageTitle
			icon={<Cog8ToothIcon className="h-[35px] w-[35px] mr-2" />}
			main="Administração"
			sub="SiahWiki"
		/>
	)
}
