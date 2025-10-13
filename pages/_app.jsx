import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  )
}
