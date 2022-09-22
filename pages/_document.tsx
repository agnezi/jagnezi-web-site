import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"
          defer
        />
        <meta name="description" content="Home of my portfolio" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <body className="dark:bg-black bg-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
