import type { AppProps } from 'next/app';
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
      <GlobalStyle />
      <ThemeProvider color={'#005cff'}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
