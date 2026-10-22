import { readFile, writeFile, readdir } from 'node:fs/promises';
const pages = {};
for (const [route, path] of Object.entries({ '/': 'index.html', '/world/': 'world/index.html', '/characters/': 'characters/index.html', '/story/': 'story/index.html' })) {
  const html = await readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
  pages[route] = { title: html.match(/<title>(.*?)<\/title>/s)[1], body: html.match(/<body[^>]*>([\s\S]*)<\/body>/)[1].replace(/href="\/(world\/|characters\/|story\/)?"/g, (_, path = '') => `href="#/${path}"`) };
}
const assets = await readdir(new URL('../dist/_astro/', import.meta.url));
let css = '';
for (const asset of assets.filter(asset => asset.endsWith('.css'))) css += await readFile(new URL(`../dist/_astro/${asset}`, import.meta.url), 'utf8');
const serialized = JSON.stringify(pages).replace(/</g, '\\u003c');
const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ねがいのフルート — プレビュー</title><style>${css}</style></head><body>${pages['/'].body}<script>const pages=${serialized};function render(){const route=location.hash.slice(1);if(route==='main'){document.querySelector('#main')?.focus();return;}const page=pages[route]||pages['/'];document.body.innerHTML=page.body;document.title=page.title;window.scrollTo(0,0);}addEventListener('hashchange',render);if(location.hash&&location.hash!=='#main')render();</script></body></html>`;
await writeFile(new URL('../negai-preview.html', import.meta.url), html);
console.log('Created negai-preview.html (standalone, no network required)');
