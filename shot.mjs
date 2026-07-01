import { chromium } from 'playwright';
const [,, url, out, w='1440', full='1'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport:{ width:+w, height:900 }, deviceScaleFactor:2 });
await p.goto(url, { waitUntil:'networkidle' });
await p.waitForTimeout(600);
await p.screenshot({ path:out, fullPage: full==='1' });
await b.close();
