import { DASHBOARD_PAGES } from './config/pages-url.config';
import { EnumTokens } from './services/auth-token.service';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, response: NextResponse) {
	const { cookies, url } = request;

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
	const isAuthPage = url.includes('/auth');

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url));
	}
	if (isAuthPage) {
		return NextResponse.next();
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/auth', url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/i/:path*', '/auth/:path*']
};
