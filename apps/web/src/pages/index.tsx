import Link from 'next/link'
export default function Home(){
  return <main style={{padding:24,fontFamily:'system-ui'}}>
    <h1>Hydraulic Fittings Suite</h1>
    <ul><li><Link href="/jobs">Jobs</Link></li><li><Link href="/assets">Assets</Link></li></ul>
    <p>Set <code>NEXT_PUBLIC_API_URL</code> to your API URL.</p>
  </main>
}
