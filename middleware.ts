import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'hy',
  localePrefix: 'as-needed'
});

const isPublicRoute = createRouteMatcher(['/', '/(hy|ru|en)/:path*', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  return intlMiddleware(request);
});

export const config = {
  matcher: ['/', '/(hy|ru|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
