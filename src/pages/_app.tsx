import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { StoreContext } from '@/data/context/StoreConext'
import Layout from '@/components/template/Layout'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StoreContext>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StoreContext>
	)
}
