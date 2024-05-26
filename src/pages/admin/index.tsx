import Layout from '@/components/template/Layout'
import PageTitle from '@/components/template/PageTitle'
import { QrCodeIcon } from '@heroicons/react/16/solid'

export default function AdminPages() {
	return (
		<Layout>
			<PageTitle
				icon={<QrCodeIcon className="h-6 w-6" />}
				main="Dashboard"
				sub="SiahWiki"
			/>
		</Layout>
	)
}
