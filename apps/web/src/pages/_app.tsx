import { useEffect } from 'react'
export default function MyApp({ Component, pageProps }){
  useEffect(()=>{ if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(console.error) },[])
  return <Component {...pageProps} />
}
