import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreContext } from '@/data/context/StoreConext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StoreContext>
			<Component {...pageProps} />
		</StoreContext>
	)
}
