import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';
import MyServerAnalyticsConnector from './MyServerAnalyticsConnector.jsx';

export default defineConfig({
  shopify: () => ({
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STORE_DOMAIN || 'rotate-test.myshopify.com',
    storefrontToken:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN ||
      'aabcd35cccd09b9e5cb247a9f242414a',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [MyServerAnalyticsConnector],
});

// a0603620c521844359317831d9bde769

// 36170efe08be8dd7dcdd9967ed0a102b
