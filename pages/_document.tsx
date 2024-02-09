import { Seo } from "@/src/components/Head";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Seo />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
