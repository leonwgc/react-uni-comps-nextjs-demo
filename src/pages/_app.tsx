import type { AppProps } from 'next/app';
import { ThemeProvider } from 'react-uni-comps';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider color={'#005cff'}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
