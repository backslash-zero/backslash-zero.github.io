import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/MainLayout'
import Head from 'next/head'
import AppHead from '../components/head/AppHead'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<AppHead/>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default MyApp
