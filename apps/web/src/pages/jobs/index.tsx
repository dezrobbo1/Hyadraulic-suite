import useSWR from 'swr'; import { api } from '../../lib/api'
export default function Jobs(){ const {data,error}=useSWR('/jobs',api); if(error) return <div>Error: {String(error)}</div>; if(!data) return <div>Loading…</div>;
return <main style={{padding:24}}><h1>Jobs</h1><ul>{data.map((j:any)=>(<li key={j.id}>{j.description||'Job'} — {j.status}</li>))}</ul></main> }
