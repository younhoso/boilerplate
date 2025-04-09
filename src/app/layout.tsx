import type { ReactNode } from 'react';

import type { Viewport } from 'next';

import CustomThemeProvider from '@/provider/CustomThemeProvider';
import ReactQueryProvider from '@/provider/ReactQueryProvider';

import { PRETENDARD } from '../libs/fonts';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

interface Props extends PropsWithChildren {}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ko">
      <body className={PRETENDARD.className}>
        <CustomThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </CustomThemeProvider>
        <div id="modalPortal" />
      </body>
    </html>
  );
};

export default RootLayout;
