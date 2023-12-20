import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // es una regular expression para englobar todo lo que puede tener acceso.
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};