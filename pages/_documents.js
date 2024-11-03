// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logoot.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="logoot.png"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logoot.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Quanto costa creare un app? calcola il preventivo</title>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="app, preventivo, costo, sviluppo, otacon, software, ai, automazione, tech" />
        <meta property="og:title" content="logoot.png" />
        <meta property="og:description" content="logoot.png" />
        <meta property="og:image" content="%PUBLIC_URL%/logoot.png" />
        <meta property="og:url" content="https://www.quantocostaunapplicazione.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="logoot.png" />
        <meta name="twitter:description" content="logoot.png" />
        <meta name="twitter:image" content="%PUBLIC_URL%/logoot.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
