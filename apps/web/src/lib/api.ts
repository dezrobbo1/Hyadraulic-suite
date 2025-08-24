const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
export async function api(path, init){ const r = await fetch(`${API}/api${path}`, { ...init }); if(!r.ok) throw new Error(await r.text()); return r.json() }
