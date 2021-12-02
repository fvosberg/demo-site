import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GOOGLE_TAG_MANAGER_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        </Head>
        <body className="antialiased bg-body text-body font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
