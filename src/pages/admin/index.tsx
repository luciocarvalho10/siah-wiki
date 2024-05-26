import PageTitle from '@/components/template/PageTitle'
import { Cog8ToothIcon } from '@heroicons/react/16/solid'

export default function AdminPages() {
	return (
		<PageTitle
			icon={<Cog8ToothIcon className="h-6 w-6 mr-2" />}
			main="Administração"
			sub="SiahWiki"
		/>
	)
}
