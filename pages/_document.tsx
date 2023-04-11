import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-slate-950 dark:text-slate-100 bg-slate-50 text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
