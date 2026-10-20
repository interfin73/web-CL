const fs=require('fs');
const c=JSON.parse(fs.readFileSync(__dirname+'/content/site.json','utf8'));
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const url=v=>{if(!v)return '';if(String(v).startsWith('/uploads/'))return esc(v);const u=new URL(v);if(!['https:','http:'].includes(u.protocol))throw Error('Enlace no permitido');return esc(v)};
const songs=c.songs.map(s=>`<article><a class="song-card" href="${url(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="Escuchar ${esc(s.title)} en Spotify"><div class="cover spotify-cover"><img src="${url(s.cover)}" alt="Portada de ${esc(s.title)}" loading="lazy" width="300" height="300"></div><div class="track-info"><div><h3>${esc(s.title)}</h3><p>${esc(s.credits)}</p></div><span class="disc" aria-hidden="true">↗</span></div><span class="spotify-link">Escuchar en Spotify ↗</span></a></article>`).join('');
if(c.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))throw Error('Correo no válido');
let h=fs.readFileSync(__dirname+'/templates/index.html','utf8').replace(/\{\{(\w+)\}\}/g,(_,key)=>{if(key==='songs')return songs;if(key==='contact_href')return c.email?'mailto:'+esc(c.email):'#contacto';if(!(key in c))throw Error('Campo desconocido: '+key);return key.endsWith('_image')?url(c[key]):esc(c[key]).replace(/\n/g,'<br>');});
if(h.includes('{{'))throw Error('Contenido sin renderizar');fs.writeFileSync(__dirname+'/dist/index.html',h);console.log('Web generada correctamente.');
