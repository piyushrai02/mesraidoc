import { Html, Head, Main, NextScript } from 'next/document'

// Declares the page language (`<html lang="en">`) for search engines,
// screen readers and browser translation. Without a custom Document,
// Next.js renders `<html>` with no `lang` attribute.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
