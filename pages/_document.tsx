import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="dark:bg-black bg-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
