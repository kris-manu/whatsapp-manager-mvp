const BASE=import.meta.env.VITE_API_URL||'http://localhost:3000';
export async function api<T=any>(path:string,options:RequestInit={}){const r=await fetch(BASE+path,{...options,headers:{'Content-Type':'application/json',...(options.headers||{})}});if(!r.ok)throw new Error(await r.text());return r.json() as Promise<T>}
