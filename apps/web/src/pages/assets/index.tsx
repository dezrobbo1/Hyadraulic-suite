import useSWR from 'swr'; import { api } from '../../lib/api'
export default function Assets(){ const {data,error}=useSWR('/assets',api); if(error) return <div>Error: {String(error)}</div>; if(!data) return <div>Loading…</div>;
return <main style={{padding:24}}><h1>Assets</h1><ul>{data.map((a:any)=>(<li key={a.id}>{a.tag} — {a.make||''} {a.model||''}</li>))}</ul></main> }
