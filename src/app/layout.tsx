import { NAME_PROJ } from '../constants/seo.constants';
import './globals.scss';
import { Providers } from './providers';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Toaster } from 'sonner';

const zen = Noto_Sans({
	variable: '--font-zen',
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	style: 'normal',
	subsets: ['cyrillic', 'latin']
});

export const metadata: Metadata = {
	title: { default: NAME_PROJ, template: `%s | ${NAME_PROJ}` },
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${zen.className} ${zen.className} antialiased`}>
				<Providers>{children}</Providers>
				<Toaster
					theme='dark'
					position='bottom-right'
					duration={1500}
				/>
			</body>
		</html>
	);
}
