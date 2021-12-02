import Document, { Html, Head, Main, NextScript } from 'next/document'

const GOOGLE_TAG_MANAGER_ID = process.env.GOOGLE_TAG_MANAGER_ID;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
            `
          }}/>
          <link rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        </Head>
        <body className="antialiased bg-body text-body font-body">
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
