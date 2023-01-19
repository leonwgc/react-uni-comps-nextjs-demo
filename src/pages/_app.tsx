import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider, createGlobalStyle } from 'react-uni-comps';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(245, 247, 250);
    font-size: 14px;
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti,
    'Microsoft Yahei', Tahoma, Simsun, sans-serif;
    line-height: 1.5715;
  }
  *{
    box-sizing: border-box;;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>test nextjs</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="leonwgc try nextjs" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider color={'#005cff'}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Script>{`console.log('app started')`}</Script>
    </>
  );
}
