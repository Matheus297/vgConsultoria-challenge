import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { MainProvider } from '@/context/MainContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<MainProvider>
				<Head>
					<title>Teste Front-End - BNP</title>
				</Head>

				<Component {...pageProps} />
			</MainProvider>
		</>
	);
}

