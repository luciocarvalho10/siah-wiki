import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { StoreContext } from '@/data/context/StoreConext'
import Layout from '@/components/template/Layout'
import { Lato }from 'next/font/google'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StoreContext>
			<style
				jsx
				global
			>{`
				* {
					font-family: ${lato.style.fontFamily};
				}
			`}</style>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StoreContext>
	)
}
