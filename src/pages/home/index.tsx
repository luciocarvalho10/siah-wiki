import Layout from '@/components/template/Layout'
import PageTitle from '@/components/template/PageTitle'
import { HomeIcon } from '@heroicons/react/16/solid'

export default function Home() {
	return (
		<Layout>
			<PageTitle
				icon={<HomeIcon className="h-6 w-6" />}
				main="Dashboard"
				sub="SiahWiki"
			/>
		</Layout>
	)
}
