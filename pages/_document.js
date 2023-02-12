import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';
import React from "react";
export default function Document() {

  return (
    // <Html lang="uk" className="debug-screens">
    <Html lang="uk">
        <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
