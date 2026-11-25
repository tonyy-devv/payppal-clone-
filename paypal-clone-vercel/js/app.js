const $=s=>document.querySelector(s);
const H=(el,html)=>{el.innerHTML=html;return el;};
const wait=ms=>new Promise(r=>setTimeout(r,ms));

/* ================= ICONS ================= */
const I={
 search:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.6-4.6"/></svg>',
 bell:'<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.75"><path d="M6 17.6V10.3a6 6 0 0 1 12 0v7.3"/><path d="M3.2 17.9h17.6" stroke-width="1.9"/><rect x="11" y="19.8" width="2" height="1.6" rx=".8" fill="#fff" stroke="none"/></svg>',
 pp:(c='#fff',s=16)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${c}"><path d="M8.3 21.5H4.6a.5.5 0 0 1-.5-.6L7 3a.7.7 0 0 1 .7-.6h6.4c3.5 0 5.6 1.8 5 5.3-.6 3.7-3.1 5.4-6.6 5.4H10l-1 6.5-.7 1.9z"/><path d="M19.6 8.6c.9.9 1.2 2.2.9 3.9-.6 3.5-3 5-6.3 5h-1.5l-.8 4.6H9.3l.4-2.6.7-4.4h2.1c4 0 6.7-2 7.1-6.5z" opacity=".55"/></svg>`,
 trophy:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.2" stroke-linejoin="round"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v4M8 20h8"/></svg>',
 chev:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c7c7cc" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
 chevd:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l7 7 7-7"/></svg>',
 x:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 back:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
 plus:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
 qr:'<svg width="17" height="17" viewBox="5.5 3 52 51" fill="none"><g stroke="#000" stroke-width="4.6" stroke-linejoin="miter"><rect x="9.3" y="6.3" width="17.4" height="16.4" rx="0.3"/><rect x="37.3" y="6.3" width="17.4" height="16.4" rx="0.3"/><rect x="9.3" y="34.3" width="17.4" height="16.4" rx="0.3"/></g><g fill="#000"><rect x="35" y="32" width="4.4" height="13" rx="0.4"/><circle cx="44.6" cy="34.4" r="2.7"/><circle cx="53.8" cy="34.4" r="2.7"/><rect x="42.2" y="41.6" width="14.8" height="4.4" rx="0.4"/><rect x="52.6" y="41.6" width="4.4" height="11.4" rx="0.4"/><rect x="35" y="48.2" width="5.4" height="4.8" rx="1.6"/><rect x="43.4" y="48.2" width="5.8" height="4.8" rx="1.6"/></g></svg>',
 qrw:'<svg width="16" height="16" viewBox="5.5 3 52 51" fill="none"><g stroke="#fff" stroke-width="4.6" stroke-linejoin="miter"><rect x="9.3" y="6.3" width="17.4" height="16.4" rx="0.3"/><rect x="37.3" y="6.3" width="17.4" height="16.4" rx="0.3"/><rect x="9.3" y="34.3" width="17.4" height="16.4" rx="0.3"/></g><g fill="#fff"><rect x="35" y="32" width="4.4" height="13" rx="0.4"/><circle cx="44.6" cy="34.4" r="2.7"/><circle cx="53.8" cy="34.4" r="2.7"/><rect x="42.2" y="41.6" width="14.8" height="4.4" rx="0.4"/><rect x="52.6" y="41.6" width="4.4" height="11.4" rx="0.4"/><rect x="35" y="48.2" width="5.4" height="4.8" rx="1.6"/><rect x="43.4" y="48.2" width="5.8" height="4.8" rx="1.6"/></g></svg>',
 link:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3A4 4 0 0 0 13 5.3l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/></svg>',
 info:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#c7c7cc" stroke-width="2"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 7.8v.4" stroke-linecap="round"/></svg>',
 store:(c='#000',s=18)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"><path d="M4 9.5 5.3 4.5h13.4L20 9.5"/><path d="M4 9.5h16v1.2a2.7 2.7 0 0 1-5.3 0 2.7 2.7 0 0 1-5.4 0 2.7 2.7 0 0 1-5.3 0z"/><path d="M5.5 13v6.5h13V13"/></svg>`,
 filter:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>',
 cardi:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg>',
 money:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="3" y="6.5" width="18" height="11" rx="2"/><circle cx="12" cy="12" r="2.3"/></svg>',
 swap:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h13l-3.5-3.5M19 16H6l3.5 3.5"/></svg>',
 cal:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 10h16M8 3.5v4M16 3.5v4" stroke-linecap="round"/></svg>',
 ppl:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><circle cx="12" cy="9" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.3 7-5.3s6.2 1.7 7 5.3" stroke-linecap="round"/></svg>',
 cart:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2.5l2.2 11h10.6L20.5 8H7"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>',
 bldg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"><path d="M4 20h16M6 20V9h12v11M3.5 9 12 4l8.5 5M9.5 12.5v4.5M14.5 12.5v4.5"/></svg>',
 house:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"><path d="M4 11 12 4.5l8 6.5v9H4z"/></svg>',
 bag:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
 copy:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
 spark:'<svg width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7z"/></svg>',
 undo:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7 4.5 11.5 9 16"/><path d="M5 11.5h10a4.5 4.5 0 0 1 0 9h-3"/></svg>',
 help:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1"><circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.5a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.5v.4M12 16.8v.3" stroke-linecap="round"/></svg>',
 warn:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linejoin="round"><path d="M12 4 21 19.5H3z"/><path d="M12 10v4.5M12 17v.3" stroke-linecap="round"/></svg>',
 phone:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linejoin="round"><path d="M6 3.5h3l1.5 4.5-2 1.3a11 11 0 0 0 6.2 6.2l1.3-2 4.5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.7a2 2 0 0 1 2-2.2z"/></svg>',
 env:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
 msg:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9"><path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5z"/></svg>',
 grp:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round"><circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c.5-3.2 2.7-5 5.5-5s5 1.8 5.5 5"/><path d="M15.5 6a3 3 0 0 1 0 5.5M17 14.3c2 .6 3.2 2.2 3.5 4.7"/></svg>',
 split:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/></svg>',
 tapbig:'<svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#8fa3c8" stroke-width="1.4" stroke-linecap="round"><rect x="4" y="3" width="10" height="18" rx="2"/><path d="M17 9a4 4 0 0 1 0 6M19.5 7a7 7 0 0 1 0 10"/></svg>',
 subsbig:'<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#8fa3c8" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 14h4M7 16.5h7"/></svg>',
 pen:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>'
};
const NAV={
 home:['<svg class="o" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M3.8 10.3 12 3.6l8.2 6.7V20.2H3.8z"/></svg><svg class="f" viewBox="0 0 24 24" fill="currentColor"><path d="M3.3 10.1 12 3l8.7 7.1v10.6H3.3z"/></svg>','Home'],
 send:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 20V4.5M3.8 8.2 7.5 4.5l3.7 3.7"/><path d="M16.5 4v15.5M12.8 15.8l3.7 3.7 3.7-3.7"/></svg>','Send'],
 me:['<svg class="o" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="7.8" r="3.9"/><path d="M4.5 20.5c0-4.4 3.4-6.8 7.5-6.8s7.5 2.4 7.5 6.8z" stroke-linejoin="round"/></svg><svg class="f" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7.8" r="4.3"/><path d="M4 21c0-4.8 3.6-7.4 8-7.4s8 2.6 8 7.4z"/></svg>','Me'],
 tap:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8.5 9a5 5 0 0 1 0 6"/><path d="M12 6.5a9.5 9.5 0 0 1 0 11"/><path d="M15.5 4a14 14 0 0 1 0 16"/></svg>','Tap']
};

/* ================= DATA ================= */
// third-party merchants are shown as generic colour tiles with their plain name (no logos reproduced)
const spot=[['Temu','20%','#f45a1a','TEMU',13],['SHOP APO…','5%','#fff','SA',16,'#e2001a'],['Get Your G…','3%','#fff','GYG',13,'#ff5533'],['Montblanc','5%','#111','✱',22,'#fff',1],['Bürosho…','5%','#f26a1b','b',24],['Notebook…','1%','#f26a1b','NB',13],['omio','1%','#fff','o',22,'#1b2c6b'],['Treatwell','1%','#fff','tw',15,'#ff5c39']];
const promos=[
 {t:'Performance<br>meets innovation',cb:'10% Cashback',bg:'linear-gradient(170deg,#7f35f0 0%,#6a22d8 60%,#5b18c4 100%)',brand:'Dyson',ill:'vac'},
 {t:'0% installment<br>payments at ALDI TALK',bg:'linear-gradient(180deg,#0c2347 0%,#33465f 55%,#6a6f78 100%)',brand:'ALDI TALK',ill:'phone'},
 {t:'Get tickets &amp; enter<br>for a chance to win',bg:'radial-gradient(circle at 30% 70%,#d33ba0 0%,transparent 40%),radial-gradient(circle at 80% 30%,#4f6bf0 0%,transparent 45%),linear-gradient(170deg,#3a1b6d,#5a2a8a 60%,#2a1450)',brand:'EVENTIM',ill:'ticket'}
];
const big=[['Otto','#fff','OTTO','#e2001a',22],['AliExpress','#fff','AliExpress','#e62e04',13],['Amazon','#26b5e8','amazon','#fff',18],['NORMA24','#000','NORMA','#fff',14,1],['XXXLutz','#fff','XXXL','#d4001a',20],['Tchibo','#0d3a6d','Tchibo','#fff',16],['Kleinanzeigen','#c6f033','kleinanzeigen','#10301a',11],['Sports Direct','#fff','SPORTS DIRECT','#d70f1d',11]];
const gad=[['Grover',null,'#fff','Grover','#f2194e',14],['Honor','1%','#000','HONOR','#fff',14,1],['Playstation',null,'#fff','PS','#0a3e96',22],['Foto Erhardt',null,'#fff','FOTO ERHARDT','#c00',9],['Noblechairs',null,'#111','♛','#fff',26],['Xiaomi',null,'#ff6a00','mi','#fff',30,1],['EcoFlow','5%','#2c2c2e','EF','#fff',20]];
const trav=[['BahnCard',null,'#fff','DB','#e2001a',22],['Opodo',null,'#9b0f12','opodo','#ffd400',15],['lastminute.com',null,'#e5007d','lm','#fff',22],['Agoda',null,'#fff','agoda','#333',16],['Vueling',null,'#fff','vueling','#333',14,0,'#ffdc00'],['B&B HOTELS',null,'#0b3a26','B&B','#d6f03a',18],['ITA Airways','5%','#1b7a3c','ITA','#fff',20],['Parken und Flie…','1%','#fff','P','#2276c4',26]];
const instL=[['HP','#1aa0e0','hp','#fff',44],['Megabad','#fff','MEGABAD','#111',13],['Xiaomi','#ff6a00','mi','#fff',40],['Samsung','#000','SAMSUNG','#fff',13],['Notebooksbilliger','#fff','NBB','#ef7d00',22]];
const people=[
 {n:'Nike',m:'1 payment',st:1},{n:'Lukas Fischer',m:'10+ payments',c:'#eee',i:'✝',fc:'#000'},{n:'Emanuel Martinovic',m:'1 payment',c:'#6c5a8a',ph:1},
 {n:'David Richter',m:'3 payments',c:'#fff',i:'DR',fc:'#000'},{n:'Markus Weber',m:'5 payments',c:'#6a8f4a',ph:1},{n:'Luz Truc-Linh Le',m:'1 payment',c:'#a07150',ph:1},
 {n:'ho nam le',m:'4 payments',c:'#fff',i:'HL',fc:'#000'},{n:'Michael Gold',m:'1 payment',c:'#fff',i:'MG',fc:'#000'},{n:'Samer Darouiche',m:'1 payment',c:'#c0473a',ph:1},
 {n:'Felix Von Zabiensky',m:'1 payment',c:'#4f8a6a',ph:1},{n:'Hanna Skiba',m:'1 payment',c:'#fff',i:'HS',fc:'#000'},{n:'Leonie Haspel',m:'1 payment',c:'#fff',i:'LH',fc:'#000'},
 {n:'Stefan Koch',m:'1 payment',c:'#000',i:'',ring:1},{n:'Daniel Neumann',m:'1 payment',c:'#8a6a5a',ph:1},{n:'Lukas Fischer',m:'4 payments',c:'#fff',i:'JM',fc:'#000'},{n:'KOHL GmbH & Co. KG',m:'1 payment',st:1}
];
const J={c:'#eee',i:'✝',fc:'#000'};
const tx=[
 ['November',[
  {n:'Nike',m:'19 Nov · Money sent<br>"Sol Knit Brown one"',a:'-214,90 US$',st:1,open:1},
  {n:'Lukas Fischer',m:'19 Nov · Money received',a:'+1.450,00 €',...J},
  {n:'Lukas Fischer',m:'19 Nov · Money sent',a:'-62,00 €',again:1,...J},
  {n:'Nike',m:'19 Nov · Refund',a:'+18,50 US$',st:1},
  {n:'Nike',m:'19 Nov · Payment',a:'-7,99 US$',st:1,track:1},
  {n:'Emma Wagner',m:'17 Nov · Money received',a:'+720,00 €',c:'#3a3a3c',i:'EW',hold:1}]],
 ['September',[
  {n:'Lukas Fischer',m:'19 Sep · Money sent',a:'-35,00 €',again:1,...J},
  {n:'adidas',m:'19 Sep · Refund',a:'+1.090,00 US$',c:'#4a5bd8',ph:1},
  {n:'Lukas Fischer',m:'19 Sep · Money sent',a:'-148,00 €',again:1,...J},
  {n:'adidas',m:'18 Sep · Payment',a:'-1.090,00 US$',c:'#4a5bd8',ph:1,ref:1},
  {n:'Lukas Fischer',m:'18 Sep · Money received',a:'+410,00 €',...J},
  {n:'Spotify',m:'18 Sep · Payment',a:'-3,99 €',c:'#fff',i:'',fc:'#000'},
  {n:'Lukas Fischer',m:'17 Sep · Money received',a:'+2,40 €',...J},
  {n:'Lukas Fischer',m:'17 Sep · Money received<br>"Bruce wayne"',a:'+275,00 €',...J}]],
 ['August',[
  {n:'Zalando SE',m:'7 Aug · Payment',a:'-320,00 €',st:1},
  {n:'Lukas Fischer',m:'7 Aug · Money received<br>"Noch ein cebt bahaha"',a:'+1,00 €',...J}]],
 ['July',[
  {n:'Vodafone',m:'25 Jul · Payment',a:'-12,00 €',c:'#fff',i:'V',fc:'#003d8f',sm:1},
  {n:'Bolt',m:'24 Jul · Payment',a:'-4,49 €',c:'#3cc13b',i:'',fc:'#fff'},
  {n:'Jonas Becker',m:'18 Jul · Money received',a:'+0,60 €',c:'#5a4a3a',ph:1},
  {n:'Jonas Becker',m:'18 Jul · Money received',a:'+23,80 €',c:'#5a4a3a',ph:1},
  {n:'Vodafone',m:'16 Jul · Payment',a:'-1,00 €',c:'#fff',i:'V',fc:'#003d8f',sm:1},
  {n:'Zara',m:'5 Jul · Payment',a:'-89,95 €',st:1}]],
 ['June',[
  {n:'Leon Schäfer',m:'29 Jun · Money received',a:'+15,00 €',c:'#fff',ph:1,dark:1},
  {n:'Vodafone',m:'25 Jun · Payment',a:'-12,00 €',c:'#fff',i:'V',fc:'#003d8f',sm:1},
  {n:'Paul Hoffmann',m:'24 Jun · Money received<br>"danke fürs essen"',a:'+40,00 €',c:'#fff',ph:1,dark:1},
  {n:'Mia Keller',m:'24 Jun · Money sent',a:'-512,00 €',c:'#fff',ph:1,dark:1,again:1},
  {n:'Leon Schäfer',m:'21 Jun · Money received',a:'+6,99 €',c:'#fff',ph:1,dark:1},
  {n:'Leon Schäfer',m:'18 Jun · Money received',a:'+3,00 €',c:'#fff',ph:1,dark:1},
  {n:'Leon Schäfer',m:'18 Jun · Money received',a:'+185,00 €',c:'#fff',ph:1,dark:1}]],
 ['May',[
  {n:'Microsoft',m:'31 May · Payment',a:'-2,00 €',c:'#fff',i:'',ref:1},
  {n:'Spotify',m:'24 May · Payment',a:'-24,97 €',c:'#fff',i:'',fc:'#000'},
  {n:'Leon Schäfer',m:'22 May · Money received',a:'+50,00 €',c:'#000',ring:1,i:''},
  {n:'David Richter',m:'22 May · Money received',a:'+0,50 €',c:'#3a3a3c',i:'DR'},
  {n:'Leon Schäfer',m:'20 May · Money received',a:'+8,00 €',c:'#000',ring:1,i:''},
  {n:'Vodafone',m:'16 May · Payment',a:'-1,00 €',c:'#fff',i:'V',fc:'#003d8f',sm:1}]],
 ['April',[{n:'Vodafone',m:'16 Apr · Payment',a:'-4,00 €',c:'#fff',i:'V',fc:'#003d8f',sm:1}]],
 ['March',[{n:'Vodafone',m:'16 Mar · Payment',a:'-1,00 €',c:'#fff',i:'V',fc:'#003d8f',sm:1}]]
];

/* ================= BACKSTAGE STATE ================= */
const BK_KEY='ppclone_backstage_v1';
const TX_VERSION=3;                                // bump when the default transaction set changes
const DEFAULT_BAL='0,02 €';
const DEFAULT_TX=JSON.parse(JSON.stringify(tx));   // snapshot of the shipped transactions
let BAL=DEFAULT_BAL;                                // the balance shown across the app

// editable profile / identity (placeholder data, not real)
const DEFAULT_ID={name:'Zlarp',email:'hello@zlarp.io',phone:'+49 157 33920148',addr1:'Beispielstraße 42',addr2:'10115 Berlin',ppme:'@Zlarp'};
let ID={...DEFAULT_ID};

function bkLoad(){
  try{
    const s=JSON.parse(localStorage.getItem(BK_KEY)||'null');
    if(s){
      if(typeof s.bal==='string') BAL=s.bal;
      if(Array.isArray(s.tx) && s.txv===TX_VERSION){ tx.length=0; s.tx.forEach(g=>tx.push(g)); } // ignore stale tx sets
      if(s.id && typeof s.id==='object') ID={...DEFAULT_ID, ...s.id};
    }
  }catch(e){}
}
function bkSave(){ try{ localStorage.setItem(BK_KEY, JSON.stringify({bal:BAL, tx, txv:TX_VERSION, id:ID})); }catch(e){} }
function bkResetAll(){
  try{ localStorage.removeItem(BK_KEY); }catch(e){}
  BAL=DEFAULT_BAL;
  ID={...DEFAULT_ID};
  tx.length=0; JSON.parse(JSON.stringify(DEFAULT_TX)).forEach(g=>tx.push(g));
}
const subs=[['Discord Inc','#5865f2','◕',1],['SoundCloud Global Limited & Co. KG'],['SoundCloud Global Limited & Co. KG'],['SoundCloud Global Limited & Co. KG'],['SoundCloud Global Limited & Co. KG'],['Perplexity AI, Inc.','#0f2a2a','✳'],['LinkedIn Ireland','#0a66c2','in']];
const curs=[['🇪🇺','Euro','EUR'],['🇦🇪','United Arab Emirates Dirham','AED'],['🇦🇷','Argentine Peso','ARS'],['🇦🇺','Australian Dollar','AUD'],['🇧🇦','Bosnia-Herzegovina Convertible Mark','BAM'],['🇧🇩','Bangladeshi Taka','BDT'],['🇧🇬','Bulgarian Lev','BGN'],['🇧🇭','Bahraini Dinar','BHD'],['🇧🇮','Burundian Franc','BIF'],['🇧🇴','Bolivian Boliviano','BOB'],['🇧🇷','Brazilian Real','BRL'],['🇧🇹','Bhutanese Ngultrum','BTN'],['🇧🇼','Botswanan Pula','BWP'],['🇨🇦','Canadian Dollar','CAD'],['🇨🇭','Swiss Franc','CHF'],['🇨🇱','Chilean Peso','CLP'],['🇩🇴','Dominican Peso','DOP'],['🇪🇬','Egyptian Pound','EGP'],['🇪🇷','Eritrean Nakfa','ERN'],['🇪🇹','Ethiopian Birr','ETB'],['🇫🇯','Fijian Dollar','FJD'],['🇬🇧','British Pound','GBP'],['🇬🇲','Gambian Dalasi','GMD'],['🇬🇳','Guinean Franc','GNF'],['🇬🇹','Guatemalan Quetzal','GTQ'],['🇭🇰','Hong Kong Dollar','HKD'],['🇭🇳','Honduran Lempira','HNL'],['🇭🇺','Hungarian Forint','HUF'],['🇮🇩','Indonesian Rupiah','IDR'],['🇮🇱','Israeli New Shekel','ILS'],['🇮🇳','Indian Rupee','INR'],['🇯🇲','Jamaican Dollar','JMD'],['🇯🇴','Jordanian Dinar','JOD'],['🇰🇪','Kenyan Shilling','KES'],['🇰🇲','Comorian Franc','KMF'],['🇰🇷','South Korean Won','KRW'],['🇱🇰','Sri Lankan Rupee','LKR'],['🇲🇦','Moroccan Dirham','MAD'],['🇲🇬','Malagasy Ariary','MGA'],['🇲🇲','Myanmar Kyat','MMK'],['🇲🇺','Mauritian Rupee','MUR'],['🇲🇿','Mozambican Metical','MZN'],['🇳🇴','Norwegian Krone','NOK'],['🇳🇵','Nepalese Rupee','NPR'],['🇳🇿','New Zealand Dollar','NZD'],['🇴🇲','Omani Rial','OMR'],['🇵🇪','Peruvian Sol','PEN'],['🇵🇭','Philippine Peso','PHP'],['🇵🇰','Pakistani Rupee','PKR'],['🇺🇸','US Dollar','USD']];

/* ================= HELPERS ================= */
const PERSON=(c)=>`<svg width="100%" height="100%" viewBox="0 0 36 36"><rect width="36" height="36" fill="${c}"/><circle cx="18" cy="14" r="6" fill="rgba(255,255,255,.75)"/><path d="M6 36c1.5-8 6.5-11 12-11s10.5 3 12 11z" fill="rgba(255,255,255,.75)"/></svg>`;
function av(p,s=36){return avBase(p,s).replace(/<\/div>$/,(p.n&&!p.st?slot('avatar-'+slug(p.n)):'')+'</div>');}
function avBase(p,s=36){
  const st=`width:${s}px;height:${s}px;position:relative;`;
  if(p.st) return `<div class="av" style="${st}background:#fff">${I.store('#000',s*.5)}</div>`;
  if(p.ph) return `<div class="av" style="${st}">${p.dark?PERSON('#d1d1d6').replace('rgba(255,255,255,.75)','#636366').replace('rgba(255,255,255,.75)','#636366'):PERSON(p.c)}</div>`;
  if(p.ring) return `<div class="av" style="${st}background:#000;box-shadow:inset 0 0 0 1.5px #fff"></div>`;
  return `<div class="av" style="${st}background:${p.c||'#3a3a3c'};color:${p.fc||'#fff'};font-size:${p.sm?8:s*.36}px">${p.i??p.n[0]}</div>`;
}
function tabsHTML(id,items,cur,qr){
  return `<div class="tabs"><div class="row" id="${id}"><div class="ind"></div>${items.map(([k,l])=>`<div class="st${k===cur?' on':''}" data-k="${k}">${l}</div>`).join('')}</div>${qr?`<div class="qr press">${I.qr}</div>`:''}</div>`;
}
function moveInd(row,instant){
  if(row.id==='metabs'){const on=row.querySelector('.st.on'),ind=row.querySelector('.ind');if(instant)ind.style.transition='none';ind.style.left=on.offsetLeft+'px';ind.style.width=on.offsetWidth+'px';if(instant){ind.offsetWidth;ind.style.transition='';}
    const idx=[...row.querySelectorAll('.st')].indexOf(on);row.scrollTo({left:idx>=2?Math.min(30,row.scrollWidth-row.clientWidth):0,behavior:instant?'auto':'smooth'});return;}
  const on=row.querySelector('.st.on'),ind=row.querySelector('.ind'); if(!on)return;
  if(instant)ind.style.transition='none';
  ind.style.left=on.offsetLeft+'px'; ind.style.width=on.offsetWidth+'px';
  if(instant){ind.offsetWidth;ind.style.transition='';}
  const r=row; const tgt=on.offsetLeft-(r.clientWidth-on.offsetWidth)/2; r.scrollTo({left:Math.max(0,tgt),behavior:instant?'auto':'smooth'});
}
function bindTabs(row,cb){
  row.querySelectorAll('.st').forEach(s=>s.onclick=()=>{
    if(s.classList.contains('on'))return;
    row.querySelectorAll('.st').forEach(x=>x.classList.remove('on')); s.classList.add('on'); moveInd(row); cb(s.dataset.k);
  });
  requestAnimationFrame(()=>moveInd(row,true));
}
function toast(html){const t=$('#toast');t.innerHTML=html;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),2200);}

/* ================= NAV ================= */
const S={tab:'home',send:'transfer',me:'accounts',amt:'0',cur:'EUR',rcp:null,poolSeen:false};
function renderNav(){
  H($('#tabbar'),Object.entries(NAV).map(([k,[svg,l]])=>`<div class="tb${k===S.tab?' on':''}" data-k="${k}">${svg}<span>${l}</span></div>`).join(''));
  $('#tabbar').querySelectorAll('.tb').forEach(t=>t.onclick=()=>go(t.dataset.k));
}
const rendered={};
function go(t){
  if(t==='tap'){openTap();return;}
  // dismiss any open overlay (balance page, add money, flow, detail, sheets) so tab nav is visible
  const ov=document.querySelectorAll('.page.on,.sheet.on,.scrim.on');
  if(ov.length) ov.forEach(el=>el.classList.remove('on'));
  if(t===S.tab){ if(!ov.length){const sc=$('#v-'+t+' .scroll'); sc&&sc.scrollTo({top:0,behavior:'smooth'});} return; }
  S.tab=t; renderNav();
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+t));
  if(!rendered[t]){rendered[t]=1;({send:renderSend,me:renderMe})[t]?.();}
}

/* ================= HOME ================= */
/* Image slots: drop your own files into ./assets/<key>.png (or .jpg) and they replace the placeholder.
   Nothing is bundled — placeholders are neutral by design. */
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

/* imgSrc: use an inlined data-URI map (__A) when present (single-file bundle),
   otherwise load the real file from assets/ (multi-file project). */
function imgSrc(key){return (typeof __A!=='undefined'&&__A[key])?__A[key]:'assets/'+key+'.png';}
function slot(key,fit){return `<img class="slot${fit==='contain'?' contain':''}" src="${imgSrc(key)}" alt="" draggable="false" onerror="if(!this.dataset.j){this.dataset.j=1;this.src='assets/${key}.jpg'}else this.remove()">`;}

const SPOT=[['Temu','20%','#f45a1a'],['SHOP APOTHEKE','5%','#fff','#e2001a'],['Get Your Guide','3%','#fff','#ff5533'],['Montblanc','5%','#111','#fff'],['Büroshop24','5%','#f26a1b'],['Notebooksbilliger','1%','#f26a1b',null,1],['omio','1%','#fff','#1b2c6b',1],['Treatwell','1%','#fff','#ff5c39',1]];
const PROMOS=[
 {k:'dyson',t:'Performance<br>meets innovation',cb:'10% Cashback',brand:'Dyson',bg:'linear-gradient(170deg,#8a3cf5 0%,#6a22d8 55%,#5414c0 100%)'},
 {k:'aldi-talk',t:'0% installment<br>payments at ALDI TALK',brand:'ALDI TALK',bg:'linear-gradient(180deg,#0b1d3d 0%,#22345a 45%,#4c5876 75%,#6e7480 100%)'},
 {k:'eventim',t:'Get tickets &amp; enter<br>for a chance to win',brand:'EVENTIM',terms:1,bg:'radial-gradient(circle at 25% 75%,rgba(214,60,160,.85),transparent 42%),radial-gradient(circle at 80% 25%,rgba(80,110,240,.8),transparent 45%),linear-gradient(170deg,#3a1b6d,#5a2a8a 60%,#2a1450)'}
];
const BIG=[['Otto','#fff','#e2001a'],['AliExpress','#fff','#e62e04'],['Amazon','#26b5e8','#fff'],['NORMA24','#000','#fff'],['XXXLutz','#fff','#d4001a'],['Tchibo','#0d3a6d','#fff'],['Kleinanzeigen','#c6f033','#10301a'],['Sports Direct','#fff','#d70f1d']];
const GAD=[['Grover',null,'#fff','#f2194e'],['Honor','1%','#000','#fff'],['Playstation Direct',null,'#fff','#0a3e96'],['Astro Gaming','1%','#9a9a9e','#fff'],['Foto Erhardt',null,'#fff','#c00'],['Noblechairs',null,'#111','#fff'],['Xiaomi',null,'#ff6a00','#fff'],['EcoFlow','5%','#2c2c2e','#fff']];
const TRAV=[['BahnCard',null,'#fff','#e2001a'],['Opodo',null,'#9b0f12','#ffd400'],['lastminute.com',null,'#e5007d','#fff'],['Agoda',null,'#fff','#333'],['Vueling',null,'#fff','#333'],['B&B HOTELS',null,'#0b3a26','#d6f03a'],['ITA Airways','5%','#1b7a3c','#fff'],['Parken und Fliegen','1%','#fff','#2276c4']];
const INST=[['HP','#1aa0e0','#fff'],['Megabad','#fff','#111'],['Xiaomi','#ff6a00','#fff'],['Samsung','#000','#fff'],['Alternate','#000','#e2001a']];
const ini=n=>n.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/).map(w=>w[0]).join('').slice(0,3).toUpperCase();

/* neutral fallback marks: initials only, never a logo */
const mark=(n,fc,size)=>`<span class="mk" style="color:${fc||'#fff'};font-size:${size}px">${ini(n)}</span>`;

function homeContent(){
  return `
  <div class="hs qcards">
    <div class="qc press" id="qc-bal"><div class="t">PayPal balance<div class="ppbox rel"><img class="slot contain" src="${imgSrc('paypal-balance')}" alt="" draggable="false"></div></div><div class="big">${BAL}</div></div>
    <div class="qc press"><div class="t">Rewards<div class="ppbox" style="background:#000"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M6.6 2.8h10.8v5.8a5.4 5.4 0 0 1-10.8 0z"/><path d="M6.6 5H4.9a2.6 2.6 0 0 0 0 5.2h2.2M17.4 5h1.7a2.6 2.6 0 0 1 0 5.2h-2.2"/><path d="M12 14.2v4.6M7.6 20.2h8.8"/></svg></div></div><div><div class="big">0 points</div><div class="small">Available to redeem</div></div></div>
    <div class="qc press"><div class="t">PayPal Card<div class="rel" style="width:46px;height:30px;border-radius:5px;background:#0a2a8a">${slot('card-paypal')}</div></div><div style="display:flex;align-items:flex-end;gap:8px"><div class="small" style="flex:1">Pay contactless in stores with PayPal. Just tap and pay.</div><div class="bell" style="width:28px;height:28px">${I.chev.replace('#c7c7cc','#fff')}</div></div></div>
    <div class="qc press"><div class="t">Banks and cards<div class="bkic"><span class="bkc"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"><path d="M2.5 9.3 12 3.5l9.5 5.8z"/><path d="M5.5 10.5v7.5M10 10.5v7.5M14 10.5v7.5M18.5 10.5v7.5M2.5 20.5h19" stroke-width="2.6"/></svg></span><span class="bkc" style="margin-left:-13px"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"><rect x="2.5" y="5.5" width="19" height="13" rx="1"/><path d="M2.5 9.5h19M12.5 14.5h5.5"/></svg></span></div></div><div style="display:flex;align-items:flex-end;gap:8px"><div class="small" style="flex:1">Add payment methods</div><div class="bell" style="width:28px;height:28px">${I.plus}</div></div></div>
    <div style="width:4px"></div>
  </div>
  <div class="h-deals">Deals in the <span class="sky">spotlight</span></div>
  <div class="hs stores">${SPOT.map(([n,cb,bg,fc,one])=>`<div class="sc"><div class="c rel" style="background:${bg};${bg==='#111'?'box-shadow:inset 0 0 0 1px #48484a;':''}">${mark(n,fc,13)}${slot('spotlight-'+slug(n))}</div><div class="n">${n}</div><div class="cb">${one?cb+' Cashback':cb+'<br>Cashback'}</div></div>`).join('')}<div style="width:2px"></div></div>

  <div class="stk" id="stk">${PROMOS.map((p,i)=>`<div class="cfc" data-i="${i}" style="background:${p.bg}"><img class="cfc-img" src="${imgSrc('promo-'+p.k)}" alt="" draggable="false" onerror="this.style.display='none'"></div>`).join('')}</div>
  <div class="dots" id="stkdots">${PROMOS.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>
  <div class="caution">Caution! Borrowing money costs money.</div>

  ${section('Big stores. <span class="sky">Bigger selection.</span>',BIG.map(([n,bg,fc])=>tile('store-'+slug(n),n,null,bg,fc)))}

  <div class="navy pis"><div class="h2">Pay in stores<br>with PayPal</div><div class="p">Just tap your phone, pay, and be on your way.</div>
    <div class="rel ph pisimg">${I.tapbig}${slot('pay-in-stores')}</div>
    <button class="slate press">Set Up</button></div>

  ${section('Discover <span class="sky">new gadgets</span>',GAD.map(([n,cb,bg,fc])=>tile('gadget-'+slug(n),n,cb,bg,fc)))}
  ${section('<span class="sky">Pack up</span> and roll out',TRAV.map(([n,cb,bg,fc])=>tile('travel-'+slug(n),n,cb,bg,fc)))}

  <div class="navy" style="padding-top:24px"><div class="h2">Manage your<br>subscriptions all in<br>one place</div>
    <div class="rel ph" style="height:190px;margin:12px 0;border-radius:12px;background:transparent">${I.subsbig}${slot('subscriptions','contain')}</div>
    <button class="slate press" style="margin-top:0" onclick="go('me');setTimeout(()=>meTab('subscriptions'),60)">View Subscriptions</button></div>

  <div class="inst"><div class="h2">Pay in installments online<br>with <span class="sky">0% interest</span></div>
    <div class="icf" id="icf">${INST.map(([n,bg,fc],i)=>`<div class="icc" data-i="${i}"><div class="lg rel" style="background:${bg};${bg==='#000'?'box-shadow:inset 0 0 0 1px #3a3a3c':''}">${mark(n,fc,26)}${slot('installments-'+slug(n),'contain')}</div><div class="nm">${n}</div></div>`).join('')}</div>
    <div class="dots" id="icdots">${INST.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div></div>
  <div class="fine">Cashback applies to Pay Now or Pay Later. Caution! Credit can incur costs in case of late payment.*</div>
  <div class="fine" style="padding-bottom:28px">*Subject to credit check. Term of 3, 6, 12 or 24 months. Order values from €99 to €10,000 (depending on term). Representative example: effective annual interest rate and fixed borrowing rate of 0.00% p.a. Net loan amount and total amount €1,000. 12 monthly installments of €83.33.</div>`;
}
function tile(key,n,cb,bg,fc){return `<div class="tile"><div class="sq rel" style="background:${bg}">${mark(n,fc,22)}${slot(key,'contain')}</div><div class="n">${n}</div>${cb?`<div class="cb">${cb} Cashback</div>`:''}</div>`;}
function section(title,items){return `<div class="sec"><div class="h">${title}</div><div class="hs tiles">${items.join('')}<div style="width:5px"></div></div></div>`;}

/* skeleton of the home layout (shown on first load + pull-to-refresh) */
function homeSkeleton(){
  const circ=Array.from({length:6},()=>`<div style="width:50px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:6px"><div class="sk" style="width:50px;height:50px;border-radius:50%"></div><div class="sk" style="width:52px;height:9px;border-radius:3px"></div><div class="sk" style="width:52px;height:9px;border-radius:3px"></div><div class="sk" style="width:52px;height:9px;border-radius:3px"></div></div>`).join('');
  return `<div style="display:flex;gap:8px;padding:14px 12px 0;overflow:hidden"><div class="sk" style="width:196px;height:106px;border-radius:12px;flex-shrink:0"></div><div class="sk" style="width:196px;height:106px;border-radius:12px;flex-shrink:0"></div></div>
   <div style="padding:22px 12px 0"><div class="sk" style="height:13px;border-radius:4px"></div><div class="sk" style="height:13px;border-radius:4px;margin-top:6px"></div></div>
   <div style="display:flex;gap:20px;padding:18px 16px 0;overflow:hidden">${circ}</div>
   <div style="padding:26px 12px 0"><div class="sk" style="height:26px;border-radius:13px"></div><div class="sk" style="height:26px;border-radius:13px;margin-top:18px"></div><div class="sk" style="height:360px;border-radius:20px;margin-top:18px"></div></div>`;
}

let homeGen=0;
function renderHome(){
  const h=$('#home');
  h.innerHTML=`<div id="hin">
    <div class="search"><div class="sbox press">${I.search}<span>Stores, help, and more</span></div><div class="bell press">${I.bell}<span class="bdg">3</span></div></div>
    <div id="ptr"><svg class="aspin" id="aspin" width="30" height="30" viewBox="0 0 30 30">${Array.from({length:8},(_,i)=>`<line x1="15" y1="1.8" x2="15" y2="9.6" transform="rotate(${i*45} 15 15)"/>`).join('')}</svg></div>
    <div id="hbody"></div></div>`;
  loadHome(0,true);
  pullToRefresh(h,$('#hbody'),refreshHome);
}
async function loadHome(startCard,first){
  const b=$('#hbody'),gen=++homeGen;
  b.innerHTML=homeSkeleton();
  await wait(first?650:1150); if(gen!==homeGen)return;
  b.innerHTML=`<div${first?' class="pane" style="animation-duration:.45s"':''}>${homeContent()}</div>`;
  $('#qc-bal').onclick=openBalance;
  cardStack($('#stk'),$('#stkdots'),startCard);
  coverflow($('#icf'),$('#icdots'),{n:INST.length,every:1050,place:(d)=>{
    const a=Math.abs(d),s=Math.sign(d);
    if(a===0)return {t:'translate3d(0,0,0) rotateY(0) scale(1)',f:'none',z:5,o:1};
    if(a===1)return {t:`translate3d(${s*82}px,4px,-90px) rotateY(${-s*24}deg) scale(.86)`,f:'brightness(.7)',z:4,o:1};
    return {t:`translate3d(${s*128}px,8px,-170px) rotateY(${-s*30}deg) scale(.74)`,f:'brightness(.45)',z:3,o:1};
  }});
}
let refreshN=0;
async function refreshHome(){ refreshN++; await loadHome(refreshN%PROMOS.length); }

/* ---------- pull to refresh (matches recording) ----------
   spinner is pinned 18pt below the cards' resting top, BEHIND the content.
   pulling slides the content down and reveals it spoke by spoke (clockwise from top).
   release: content holds 72pt down while it spins -> content comes back up as skeletons,
   sliding over the spinner -> dark shimmer sweeps -> real content appears. */
function pullToRefresh(scroller,content,onRefresh,ptrEl){
  const ptr=ptrEl||$('#ptr'),spin=ptr.querySelector('.aspin'),spokes=[...spin.children],HOLD=72,TRIG=64;
  let y0=null,d=0,busy=false,active=false;
  const set=(px,ms,ease)=>{content.style.transition=ms?`transform ${ms}ms ${ease||'var(--ease)'}`:'none';content.style.transform=px?`translateY(${px}px)`:'';};
  const prog=p=>{const n=Math.floor(p*8+.001);spokes.forEach((s,i)=>s.style.opacity=i<n?1:0);};
  const start=y=>{if(busy||scroller.scrollTop>0)return;y0=y;d=0;active=false;};
  const move=(y,e)=>{if(y0==null)return;const dy=y-y0;if(dy<-4&&!active){y0=null;return;}if(dy<=0&&!active)return;active=true;if(e&&e.cancelable)e.preventDefault();
    d=Math.max(0,dy)*.55/(1+Math.max(0,dy)/700);set(d);ptr.style.opacity=1;prog(Math.min(Math.max(d-14,0)/(TRIG-14),1));};
  const end=async()=>{if(y0==null)return;y0=null;if(!active)return;
    if(d>=TRIG){busy=true;spokes.forEach(x=>x.style.opacity='');spin.classList.add('go');set(HOLD,300);if(navigator.vibrate)navigator.vibrate(8);
      const early=!!ptr.dataset.early;let r=early?onRefresh():null;   // Me: skeleton appears while still held down
      await wait(620);                         // spinning, content held down
      if(!early)r=onRefresh();                 // Home: swaps content to skeleton on the way back up
      await wait(30);set(0,340,'cubic-bezier(.25,.8,.3,1)');   // skeleton slides back up over the spinner
      await wait(360);spin.classList.remove('go');prog(0);
      await r;busy=false;}
    else {set(0,320);setTimeout(()=>{if(!busy)prog(0);},320);}};
  scroller.addEventListener('touchstart',e=>start(e.touches[0].clientY),{passive:true});
  scroller.addEventListener('touchmove',e=>move(e.touches[0].clientY,e),{passive:false});
  scroller.addEventListener('touchend',end);
  scroller.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')start(e.clientY);});
  window.addEventListener('pointermove',e=>{if(e.pointerType==='mouse')move(e.clientY);});
  window.addEventListener('pointerup',e=>{if(e.pointerType==='mouse')end();});
  let acc=0,wt;scroller.addEventListener('wheel',e=>{if(busy||scroller.scrollTop>0||e.deltaY>=0){acc=0;return;}acc+=-e.deltaY;
    d=Math.min(acc*.45,110);set(d);prog(Math.min(Math.max(d-14,0)/(TRIG-14),1));clearTimeout(wt);wt=setTimeout(()=>{y0=0;active=true;acc=0;end();},140);},{passive:true});
}

/* ---------- promo card stack: drag, tilt, fly off, next springs forward ---------- */
function cardStack(box,dots,start){
  const cards=[...box.children],n=cards.length;let order=cards.map((_,i)=>(i+start)%n),timer,dragging=false;
  const P=[{t:'translate3d(0,0,0) rotateY(0) rotate(0) scale(1)',f:'none',z:5},
           {t:'translate3d(62px,52px,-60px) rotateY(-30deg) scale(.86)',f:'brightness(.5) saturate(.8)',z:4},
           {t:'translate3d(-62px,52px,-60px) rotateY(30deg) scale(.86)',f:'brightness(.5) saturate(.8)',z:3}];
  function lay(anim=true){order.forEach((ci,pos)=>{const c=cards[ci],p=P[Math.min(pos,2)];c.style.transition=anim?'':'none';c.style.transform=p.t;c.style.filter=p.f;c.style.zIndex=p.z;c.style.opacity=1;});
    [...dots.children].forEach((x,i)=>x.classList.toggle('on',i===order[0]));}
  /* swipe: the next card slides out from behind and grows to the front,
     the old front card slides across, shrinks and tucks in behind on the other side (no auto-advance) */
  function fly(dir){
    const old=order[0];
    order=dir<0?[order[1],order[2],order[0]]:[order[2],order[0],order[1]];
    order.forEach((ci,pos)=>{const c=cards[ci],p=P[pos];
      c.style.transition='transform .55s cubic-bezier(.25,.9,.3,1),filter .45s ease';
      c.style.transform=p.t;c.style.filter=p.f;
      if(ci===old){c.style.zIndex=6;setTimeout(()=>{c.style.zIndex=p.z;},170);} else c.style.zIndex=p.z;});
    [...dots.children].forEach((x,i)=>x.classList.toggle('on',i===order[0]));
  }
  const auto=()=>{};
  let sx=0,sy=0,dx=0,t0=0,lock=null;
  const down=(x,y)=>{sx=x;sy=y;dx=0;t0=performance.now();dragging=true;lock=null;cards[order[0]].style.transition='none';};
  const mv=(x,y,e)=>{if(!dragging)return;dx=x-sx;const dy=y-sy;if(lock==null&&(Math.abs(dx)>6||Math.abs(dy)>6))lock=Math.abs(dx)>Math.abs(dy)?'x':'y';
    if(lock!=='x')return;if(e&&e.cancelable)e.preventDefault();cards[order[0]].style.transform=`translate3d(${dx*.9}px,${Math.abs(dx)*.05}px,0) rotate(${dx*.035}deg)`;};
  const up=()=>{if(!dragging)return;dragging=false;if(lock!=='x'){cards[order[0]].style.transition='';return;}const v=Math.abs(dx)/(performance.now()-t0);
    if(Math.abs(dx)>70||v>.45)fly(Math.sign(dx));else{const c=cards[order[0]];c.style.transition='transform .45s cubic-bezier(.25,.9,.3,1)';c.style.transform=P[0].t;}};
  box.addEventListener('touchstart',e=>down(e.touches[0].clientX,e.touches[0].clientY),{passive:true});
  box.addEventListener('touchmove',e=>mv(e.touches[0].clientX,e.touches[0].clientY,e),{passive:false});
  box.addEventListener('touchend',up);
  box.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){e.preventDefault();down(e.clientX,e.clientY);}});
  window.addEventListener('pointermove',e=>{if(e.pointerType==='mouse')mv(e.clientX,e.clientY);});
  window.addEventListener('pointerup',e=>{if(e.pointerType==='mouse')up();});
  lay(false);auto();
}

/* generic coverflow with autoplay + swipe (installments) */
function coverflow(box,dots,{n,every,place}){
  const cards=[...box.children]; let cur=0,timer;
  function lay(){
    cards.forEach((c,i)=>{let d=i-cur; if(d>n/2)d-=n; if(d<-n/2)d+=n; const p=place(d);
      c.style.transform=p.t;c.style.filter=p.f;c.style.zIndex=p.z;c.style.opacity=p.o;});
    [...dots.children].forEach((x,i)=>x.classList.toggle('on',i===cur));
  }
  const to=k=>{cur=(k+n)%n;lay();};
  const auto=()=>{clearInterval(timer);timer=setInterval(()=>{if(!document.body.contains(box))return clearInterval(timer);to(cur+1);},every);};
  let sx=null;
  box.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
  box.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>30){to(cur+(dx<0?1:-1));auto();}});
  box.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')sx=e.clientX;});
  box.addEventListener('pointerup',e=>{if(e.pointerType!=='mouse'||sx==null)return;const dx=e.clientX-sx;sx=null;if(Math.abs(dx)>30){to(cur+(dx<0?1:-1));auto();}});
  lay(); auto();
}

/* ---------- PayPal balance page ---------- */
async function openBalance(){
  const p=$('#balpage');
  const head=`<div class="bhead"><div class="bback press" id="bb">${I.back.replace('width="16" height="16"','width="19" height="19"').replace('stroke-width="2.6"','stroke-width="2.2"')}</div><div class="btitle">PayPal balance</div></div>`;
  p.innerHTML=head+`<div class="bscroll" id="bscroll">
     <div class="bcard" style="height:167px"><div class="sk" style="height:14px;width:42%;margin-bottom:12px"></div><div class="sk" style="height:22px;width:28%"></div></div>
     <div class="sk" style="height:48px;margin:25px 16px 0;border-radius:14px"></div>
     <div class="bra"><div>Recent activity</div></div>
     ${Array.from({length:5},()=>`<div class="brow"><div class="sk" style="width:40px;height:40px;border-radius:50%;flex-shrink:0"></div><div style="flex:1"><div class="sk" style="height:12px;width:50%;margin:4px 0 9px"></div><div class="sk" style="height:12px;width:32%"></div></div><div class="sk" style="height:12px;width:56px;margin-top:4px"></div></div>`).join('')}</div>`;
  p.classList.add('on'); $('#bb').onclick=()=>p.classList.remove('on');
  await wait(700); if(!p.classList.contains('on'))return;
  const rows=tx[0][1].slice(0,5).map((t,i)=>({...t,m:i===2?'19 Nov · Money sent<br>"Der huyyyyy"':t.m,ref:t.track?1:t.ref}))
    .concat(tx[1][1].slice(0,4));
  $('#bscroll').innerHTML=`<div class="pane">
     <div class="bcard"><div class="bal-l">Available balance</div><div class="bal-v">${BAL}</div>
       <div class="bal-btns"><button class="press bt-g" id="btr">Transfer</button><button class="press bt-w" id="bam">Add Money</button></div></div>
     <div class="bcard bcard2"><div class="pis-t">Pay in stores with<br><span class="sky2">PayPal</span></div>
       <div class="pis-row"><div class="pis-d">Get the PayPal card for contactless payments right from your phone. Terms apply.</div><button class="press bt-w pis-b">Set Up</button></div></div>
     <div class="bra"><div>Recent activity</div><span class="bchev press">${I.chev.replace('#c7c7cc','#fff').replace('width="15" height="15"','width="14" height="14"')}</span></div>
     ${rows.map((t,i)=>`<div class="brow"${i===0?' data-open':''}>${av(t,40)}<div class="bt"><div class="bn">${t.n}</div><div class="bm">${t.m}</div>${t.ref?'<span class="btag">Refunded</span>':''}</div><div class="ba${t.a[0]==='+'?' g':''}">${t.a}</div></div>`).join('')}
     <div style="height:24px"></div></div>`;
  $('#bscroll').querySelector('[data-open]').onclick=()=>openDetail();
  $('#bam').onclick=()=>moneySheet('add');
  $('#btr').onclick=()=>moneySheet('transfer');
}
async function moneySheet(kind){
  const sh=$('#sheet');sh.style.top='auto';
  sh.innerHTML=`<div class="grab"></div><div style="position:absolute;right:14px;top:14px" class="xb" data-close>${I.x}</div>
    <div style="padding:52px 16px 30px;display:flex;flex-direction:column;gap:10px" id="msb">${'<div class="sk" style="height:46px;border-radius:8px"></div>'.repeat(3)}</div>`;
  openSheet(sh);
  await wait(900); if(!sh.classList.contains('on'))return;
  if(kind==='transfer'){
    $('#msb').innerHTML=[['bldg','Transfer to bank','Arrives in 1–2 business days'],['cardi','Transfer to card','Arrives in minutes · fee applies']].map(([ic,t,d],i)=>`<div class="ct pane" style="padding:10px 4px;animation-delay:${i*.05}s"><span class="circ" style="width:38px;height:38px">${I[ic].replace('currentColor','#fff')}</span><div><div class="nm">${t}</div><div class="mt">${d}</div></div><div class="inf">${I.chev}</div></div>`).join('');
    return;
  }
  closeSheet(); await wait(260); openAddMoney();
}
const AM={v:'0'};
function fmtGroup(v){const [i,d]=v.split('.');const g=i.replace(/\B(?=(\d{3})+(?!\d))/g,'.');return d!==undefined?g+','+d:g;}
const EU_FLAG=(()=>{let s='';for(let i=0;i<12;i++){const a=i*Math.PI/6-Math.PI/2;s+=`<circle cx="${(12+6.8*Math.cos(a)).toFixed(1)}" cy="${(12+6.8*Math.sin(a)).toFixed(1)}" r="1.15" fill="#ffd617"/>`;}return `<svg width="21" height="21" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11.5" fill="#0a3fa8"/>${s}</svg>`;})();

async function openAddMoney(){
  const p=$('#addpage');AM.v='0';
  p.innerHTML=`<div style="flex:1;display:flex;align-items:center;justify-content:center"><div class="spin"></div></div>`;
  p.classList.add('on');
  await wait(800); if(!p.classList.contains('on'))return;
  p.innerHTML=`<div class="pbar" style="justify-content:center;position:relative"><span class="amttl">Next</span><div class="xb" id="amx" style="position:absolute;right:16px;top:50%;transform:translateY(-50%)">${I.x}</div></div>
   <div class="pane" style="flex:1;display:flex;flex-direction:column">
    <div class="amt" style="padding-top:52px"><div class="v" id="amv"></div><div id="amsub" style="font-size:10.5px;color:#c7c7cc;margin-top:12px;transition:opacity .25s">Available balance: ${BAL} EUR</div><div class="curp" style="border:none;margin-top:12px;gap:8px;font-size:14px"><span class="euflag">${EU_FLAG}</span>EUR</div></div>
    <div style="flex:1"></div>
    <div style="padding:0 16px 16px">
     <div class="qchips" id="qchips">${[10,25,50,100].map(v=>`<button data-v="${v}">${v} €</button>`).join('')}</div>
     <div class="keys" id="amkeys">${['1','2','3','4','5','6','7','8','9',',','0','del'].map(k=>`<div class="key" data-k="${k}">${k==='del'?'<svg width="23" height="23" viewBox="0 0 24 24" fill="#fff"><path d="M8.5 5h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11L2.5 12z"/><path d="M11 9.5l5 5M16 9.5l-5 5" stroke="#141414" stroke-width="2.2" stroke-linecap="round"/></svg>':k}</div>`).join('')}</div>
     <button class="wbtn wide amnext" id="amnext">Next</button></div></div>`;
  const draw=pop=>{const s=fmtGroup(AM.v);const v=$('#amv');v.innerHTML=[...s].map((c,i)=>pop&&i===s.length-1?`<span class="d">${c}</span>`:c).join('')+'<sup>€</sup>';
    v.style.fontSize=(s.length>7?44:s.length>5?58:72)+'px';const z=AM.v==='0';$('#amsub').style.opacity=z?1:0;$('#amsub').style.height=z?'':'0';
    $('#qchips').classList.toggle('on',!z);$('#qchips').querySelectorAll('button').forEach(b=>b.classList.toggle('sel',b.dataset.v===AM.v));};
  draw();
  $('#amkeys').querySelectorAll('.key').forEach(k=>k.onpointerdown=()=>{
    k.classList.remove('flash');void k.offsetWidth;k.classList.add('flash');
    const c=k.dataset.k;let a=AM.v;
    if(c==='del')a=a.length>1?a.slice(0,-1):'0';
    else if(c===','){if(!a.includes('.'))a+='.';}
    else if(a.includes('.')&&a.split('.')[1].length>=2)a=null;
    else if(a==='0')a=c; else if(a.replace('.','').length<8)a+=c; else a=null;
    if(a===null){const v=$('#amv');v.classList.remove('shake');void v.offsetWidth;v.classList.add('shake');return;}
    AM.v=a;draw(c!=='del');});
  $('#qchips').querySelectorAll('button').forEach(b=>b.onclick=()=>{AM.v=b.dataset.v;draw(true);});
  $('#amx').onclick=()=>p.classList.remove('on');
  $('#amnext').onclick=()=>{if(AM.v==='0'){const v=$('#amv');v.classList.remove('shake');void v.offsetWidth;v.classList.add('shake');return;}
    const add=parseFloat(AM.v)||0; bkSetBal(bkParse(BAL)+add); bkSave(); bkApplyBalance(); if(rendered.me) renderMe();
    p.classList.remove('on');toast(`<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#5ccf8b"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>Adding ${fmtGroup(AM.v)} € to your balance`);};
}

/* ================= SEND ================= */
function renderSend(){
  const s=$('#send');
  s.innerHTML=`<div class="hdr"><div class="ttl">Send</div><div class="bell press">${I.bell}<span class="bdg">3</span></div></div>
   ${tabsHTML('sendtabs',[['transfer','Transfer'],['contacts','Contacts'],['pool','Pool'],['split','Split'],['more','More']],S.send,1)}
   <div id="sendpane" style="flex:1;position:relative;overflow:hidden"></div>`;
  bindTabs($('#sendtabs'),k=>{S.send=k;sendPane();});
  sendPane();
}
function sendPane(){
  const p=$('#sendpane'); p.innerHTML=''; const k=S.send;
  const w=document.createElement('div'); w.className='pane'; w.style.cssText='position:absolute;inset:0;overflow-y:auto';
  p.appendChild(w);
  if(k==='transfer')paneTransfer(w);
  else if(k==='contacts')paneContacts(w);
  else if(k==='pool')panePool(w);
  else if(k==='split')paneSplit(w);
  else w.innerHTML=`<div style="padding:30px 16px;color:var(--sub);font-size:14px">${['Request money','Pay bills','Send a gift','Crypto'].map(t=>`<div class="prow" style="padding:14px 0;border-bottom:1px solid #222"><div style="flex:1;color:#fff;font-weight:600">${t}</div>${I.chev}</div>`).join('')}</div>`;
}
function fmtAmt(){const [i,d]=S.amt.split('.');return d!==undefined?`${i},${d}`:i;}
function sym(){return {EUR:'€',USD:'$',GBP:'£'}[S.cur]||S.cur;}
function paneTransfer(w){
  w.style.overflow='hidden';
  w.innerHTML=`<div class="amt"><div class="v" id="amtv"></div><button class="curp press" id="curp"><span class="glob"></span>${S.cur}${I.chevd}</button></div>
   <div class="kp"><div class="keys">${['1','2','3','4','5','6','7','8','9',',','0','del'].map(k=>`<div class="key" data-k="${k}">${k==='del'?'<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8.5 5h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11L2.5 12z"/><path d="M11 9.5l5 5M16 9.5l-5 5" stroke="#2c2c2e" stroke-width="2.2" stroke-linecap="round"/></svg>':k}</div>`).join('')}</div>
   <div class="two"><button class="wbtn">Request</button><button class="wbtn" id="sendgo">Send</button></div></div>`;
  drawAmt();
  w.querySelectorAll('.key').forEach(k=>k.onpointerdown=()=>key(k.dataset.k));
  $('#curp').onclick=openCurrency;
  $('#sendgo').onclick=()=>{ if(S.amt==='0'||+S.amt.replace(',','.')===0){$('#amtv').classList.remove('shake');void $('#amtv').offsetWidth;$('#amtv').classList.add('shake');return;} openFlow(); };
}
function drawAmt(last){
  const v=$('#amtv'); if(!v)return; const s=fmtAmt();
  const chars=[...s].map((c,i)=>i===s.length-1&&last?`<span class="d">${c}</span>`:c).join('');
  v.innerHTML=`${chars}<sup>${sym()}</sup>`;
  v.style.fontSize=(s.length>6?48:s.length>4?60:72)+'px';
}
function key(k){
  let a=S.amt; const prev=a;
  if(k==='del'){a=a.length>1?a.slice(0,-1):'0';if(a.endsWith('.'))a=a;}
  else if(k===','){if(!a.includes('.'))a+='.';}
  else{ if(a.includes('.')&&a.split('.')[1].length>=2)a=null; else if(a==='0')a=k; else if(a.replace('.','').length<7)a+=k; else a=null; }
  if(a===null){const v=$('#amtv');v.classList.remove('shake');void v.offsetWidth;v.classList.add('shake');return;}
  S.amt=a; drawAmt(k!=='del'&&a!==prev);
  if(navigator.vibrate)navigator.vibrate(5);
}
function skelRows(n,box){return Array.from({length:n},()=>`<div style="display:flex;gap:12px;align-items:center;padding:10px 16px"><div class="sk" style="width:36px;height:36px;border-radius:50%"></div><div style="flex:1"><div class="sk" style="height:11px;width:55%;margin-bottom:7px"></div><div class="sk" style="height:9px;width:30%"></div></div></div>`).join('');}
async function paneContacts(w){
  w.innerHTML=`<div class="osearch">${I.search}<span>Name, phone, email, @username</span></div>
   <div class="lsrow"><button class="press">${I.link}Link</button><button class="press">${I.qrw}Scan</button></div><div id="clist">${skelRows(6)}</div>`;
  await wait(550); const l=$('#clist'); if(!l)return;
  l.innerHTML=people.map((p,i)=>`<div class="ct" style="animation:fin .4s ${i*0.025}s var(--ease) both" data-i="${i}">${av(p)}<div><div class="nm">${p.n}</div><div class="mt">${p.m}</div></div><div class="inf">${I.info}</div></div>`).join('')+'<div style="height:20px"></div>';
  l.querySelectorAll('.ct').forEach(c=>c.onclick=()=>{S.rcp=people[+c.dataset.i];openFlow(true);});
}
async function panePool(w){
  if(!S.poolSeen){
    w.innerHTML=`<div style="padding:24px 16px"><div class="sk" style="height:14px;margin-bottom:14px"></div><div class="sk" style="height:48px;margin-bottom:22px"></div><div class="sk" style="height:14px;margin-bottom:14px"></div><div class="sk" style="height:82px"></div></div>`;
    await wait(500); if(S.send!=='pool')return; S.poolSeen=true; openPoolSheet(()=>{ if(S.send==='pool')poolForm(w); });
  } else poolForm(w);
}
function poolForm(w){
  w.innerHTML=`<div class="pane" style="padding:18px 16px;display:flex;flex-direction:column;min-height:100%">
   <div style="font-size:15px;font-weight:700;margin-bottom:10px">Start a pool</div>
   <div class="field">Pool name<span style="position:absolute;right:12px;bottom:10px;font-size:11px">0/70</span></div>
   <div style="font-size:15px;font-weight:700;margin:22px 0 10px">Suggestions</div>
   <div style="display:flex;flex-wrap:wrap;gap:8px">${[['🎉','Party'],['🎈','Birthday'],['✈️','Trip'],['🎁','Gift'],['💒','Wedding']].map(([e,t])=>`<button class="chip press">${e} ${t}</button>`).join('')}</div>
   <div style="flex:1;min-height:60px"></div>
   <div style="text-align:center;font-size:12.5px;color:#c7c7cc;margin-bottom:12px">Active pools live in the <span class="ul" style="text-decoration-thickness:1px" onclick="go('me')">Me tab</span>.</div>
   <button class="wbtn wide press" style="flex:none" onclick="openPoolSheet()">Next</button></div>`;
}
async function paneSplit(w){
  w.innerHTML=`<div style="padding:10px 16px 0"><div class="sk" style="width:214px;height:214px;margin:6px auto 0;border-radius:6px"></div></div>`;
  await wait(380); if(S.send!=='split')return;
  const R=78,pos=[-110,-25,65,155];
  w.innerHTML=`<div class="pane" style="display:flex;flex-direction:column;min-height:100%;padding:0 16px">
    <div class="split-ill"><svg width="200" height="200" viewBox="0 0 200 200" style="position:absolute;inset:0;animation:rot 40s linear infinite">
      <circle cx="100" cy="100" r="${R}" fill="none" stroke="#5bc8f5" stroke-width="20" stroke-dasharray="44 9" stroke-linecap="butt" style="animation:ringin 1s var(--ease) both"/></svg>
      <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-28deg);animation:fin .6s .2s var(--ease) both"><div style="width:74px;height:58px;background:#f2f2f2;border-radius:3px;box-shadow:2px 4px 10px rgba(0,0,0,.4);padding:7px 8px">${'<div style="height:3px;background:#bbb;margin:4px 0;border-radius:2px"></div>'.repeat(5)}</div></div>
      <div style="position:absolute;left:112px;top:112px;font-size:22px;animation:fin .5s .45s var(--ease) both">🪙</div>
      ${pos.map((a,i)=>{const r=a*Math.PI/180;return `<div style="position:absolute;left:${100+Math.cos(r)*R-19}px;top:${100+Math.sin(r)*R-19}px;width:38px;height:38px;border-radius:50%;border:2.5px solid #fff;overflow:hidden;animation:popin .5s ${.25+i*.12}s var(--spring) both">${PERSON(['#7a6a5a','#c58a7a','#4a5a6a','#b07050'][i])}</div>`}).join('')}
    </div>
    <div style="font-size:31px;font-weight:800;line-height:1.05;letter-spacing:-.5px;margin-top:22px"><span class="sky">Split up</span> group<br>expenses with<br>ease</div>
    <div style="font-size:13px;color:#e5e5ea;line-height:1.4;margin-top:10px">Ask people to pay their share for dinner, trips, rent, whatever -- it doesn't need to be awkward.</div>
    <div style="flex:1;min-height:16px"></div>
    <div style="border:1px solid var(--c3);border-radius:14px;padding:12px 14px;display:flex;gap:10px;align-items:center;font-size:13px;margin-bottom:12px">${I.split}Decide who owes what, or split evenly</div>
    <button class="wbtn wide press" style="flex:none;margin-bottom:14px">Start a Split</button></div>`;
}

/* ---------- pool sheet with gauge ---------- */
function arcPath(r,a0,a1){const p=a=>[100+r*Math.cos(a*Math.PI/180),100+r*Math.sin(a*Math.PI/180)];const[x0,y0]=p(a0),[x1,y1]=p(a1);return `M${x0} ${y0}A${r} ${r} 0 ${a1-a0>180?1:0} 1 ${x1} ${y1}`;}
function openPoolSheet(onClose){
  const sh=$('#sheet');
  sh.style.top='44px';
  sh.innerHTML=`<div class="grab"></div><div style="position:absolute;right:16px;top:16px" class="xb" data-close>${I.x}</div>
   <div style="flex:1;overflow-y:auto;padding:0 16px">
    <div style="position:relative;width:190px;height:190px;margin:34px auto 0">
      <svg width="190" height="190" viewBox="0 0 200 200"><path d="${arcPath(80,135,405)}" fill="none" stroke="#c7c7cc" stroke-width="16" stroke-linecap="round"/><path id="gfill" d="${arcPath(80,135,405)}" pathLength="100" fill="none" stroke="#5bc8f5" stroke-width="16" stroke-linecap="round" stroke-dasharray="0 100"/></svg>
      <div id="gval" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:800;letter-spacing:-.5px">€0</div>
      <div id="gav" style="position:absolute;width:30px;height:30px;border-radius:50%;border:2px solid #fff;overflow:hidden;margin:-15px 0 0 -15px;transition:none">${PERSON('#c58a7a')}</div>
    </div>
    <div style="font-size:27px;font-weight:800;line-height:1.08;letter-spacing:-.4px;margin-top:18px"><span class="sky">Pool money</span><br>together for gifts<br>trips and more</div>
    <div style="border:1px solid #3a3a3c;border-radius:16px;padding:16px 14px;margin-top:26px;display:flex;flex-direction:column;gap:22px;font-size:13px;line-height:1.4">
      <div style="display:flex;gap:12px">${I.grp}<div>Friends, family, or coworkers can chip in together for shared experiences and gifts.</div></div>
      <div style="display:flex;gap:12px">${I.msg}<div>Anyone can share a pool link via text, WhatsApp, Messenger, and more.</div></div></div>
    <div style="font-size:11px;color:#c7c7cc;text-align:center;line-height:1.4;margin:22px 0 10px">Everyone except the pool organizer can hide their names. Pool transactions and notes are always visible. <span class="ul" style="text-decoration-thickness:1px">More on Pools</span></div>
   </div>
   <div style="padding:6px 16px 18px"><button class="wbtn wide" data-close>Start Pooling</button></div>`;
  openSheet(sh,onClose);
  gauge();
}
async function gauge(){
  const f=$('#gfill'),v=$('#gval'),avt=$('#gav'); if(!f)return;
  const path=f; const L=path.getTotalLength();
  const steps=[[10,.07,'#c58a7a'],[100,.22,'#7a6a5a'],[200,.38,'#d6a07a'],[350,.62,'#4a5a6a']];
  let from=[0,0];
  for(const [val,pc,col] of steps){
    if(!document.body.contains(f))return;
    avt.innerHTML=PERSON(col); avt.animate([{transform:'scale(.3)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:350,easing:'cubic-bezier(.34,1.4,.5,1)'});
    await tween(900,t=>{const e=1-Math.pow(1-t,3);const p=from[1]+(pc-from[1])*e,n=from[0]+(val-from[0])*e;
      f.setAttribute('stroke-dasharray',`${p*100} 100`);v.textContent='€'+Math.round(n);
      const pt=path.getPointAtLength(L*Math.max(p,.001));avt.style.left=(pt.x*.95)+'px';avt.style.top=(pt.y*.95)+'px';});
    from=[val,pc]; await wait(700);
  }
}
function tween(d,fn){return new Promise(r=>{const t0=performance.now();const s=t=>{const k=Math.min((t-t0)/d,1);fn(k);k<1?requestAnimationFrame(s):r();};requestAnimationFrame(s);});}
let sheetCb=null;
function openSheet(sh,cb){sheetCb=cb||null;$('#scrim').classList.add('on');requestAnimationFrame(()=>sh.classList.add('on'));
  sh.querySelectorAll('[data-close]').forEach(b=>b.onclick=closeSheet);$('#scrim').onclick=closeSheet;dragClose(sh,closeSheet);}
function closeSheet(){const sh=$('#sheet');sh.classList.remove('on');$('#scrim').classList.remove('on');const cb=sheetCb;sheetCb=null;setTimeout(()=>{cb&&cb();},280);}
function dragClose(sh,fn){
  let y0=null,dy=0; const g=sh.querySelector('.grab')||sh;
  const st=e=>{y0=(e.touches?e.touches[0]:e).clientY;sh.style.transition='none';};
  const mv=e=>{if(y0==null)return;dy=Math.max(0,(e.touches?e.touches[0]:e).clientY-y0);sh.style.transform=`translateY(${dy}px)`;};
  const en=()=>{if(y0==null)return;y0=null;sh.style.transition='';sh.style.transform='';if(dy>110)fn();dy=0;};
  g.onpointerdown=st;window.addEventListener('pointermove',mv);window.addEventListener('pointerup',en);
}

/* ---------- currency ---------- */
async function openCurrency(){
  const sh=$('#sheet'); sh.style.top='38px';
  sh.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;position:relative;padding:18px 16px 10px"><div style="font-size:13.5px;font-weight:600">Currency options</div><div class="xb" style="position:absolute;right:16px;top:12px" data-close>${I.x}</div></div>
   <div id="curbody" style="flex:1;display:flex;align-items:center;justify-content:center"><div class="spin"></div></div>`;
  openSheet(sh);
  await wait(650);
  const b=$('#curbody'); if(!b)return; b.style.display='block'; b.style.overflowY='auto';
  b.innerHTML=`<div class="osearch" style="margin:4px 16px 8px;animation:fade .3s both">${I.search}<span>Search by country</span></div>`+curs.map(([f,n,c],i)=>`<div class="ct" style="animation:fin .35s ${Math.min(i,12)*0.02}s var(--ease) both" data-c="${c}"><div class="av" style="width:34px;height:34px;font-size:30px;background:none">${f}</div><div><div class="nm" style="font-size:13px">${n}</div><div class="mt">${c}</div></div></div>`).join('')+'<div style="height:20px"></div>';
  b.querySelectorAll('.ct').forEach(r=>r.onclick=()=>{S.cur=r.dataset.c;closeSheet();setTimeout(()=>{if(S.send==='transfer'){const w=$('#sendpane .pane');w&&paneTransfer(w);}},300);});
}

/* ================= SEND FLOW ================= */
function rate(){return 1.05142;}
function usd(){return (parseFloat(S.amt)*rate()).toFixed(2).replace('.',',');}
function openFlow(fromContacts){
  const f=$('#flow');
  if(fromContacts&&S.amt==='0'){S.amt='0';}
  f.classList.add('on');
  fromContacts?flowNote():flowPick();
}
function closeFlow(){$('#flow').classList.remove('on');}
function bar(back){return `<div class="pbar">${back?`<div class="xb" id="fback">${I.back}</div>`:'<div></div>'}<div class="xb" id="fx">${I.x}</div></div>`;}
function amtTxt(){return S.amt==='0'?'':`<span class="ul">${fmtAmt()} ${sym()}</span> `;}
async function flowPick(){
  const f=$('#flow');
  f.innerHTML=`${bar()}<div class="rt">Send ${amtTxt()}to</div>
   <div class="osearch" style="margin-top:12px">${I.search}<span>Name, phone, email, @username</span></div>
   <div class="lsrow"><button class="press">${I.link}Link</button><button class="press">${I.qrw}Scan</button></div>
   <div style="flex:1;overflow-y:auto" id="flist">${skelRows(7)}</div>`;
  $('#fx').onclick=closeFlow;
  await wait(450); const l=$('#flist'); if(!l)return;
  l.innerHTML=people.map((p,i)=>`<div class="ct" style="animation:fin .4s ${i*0.025}s var(--ease) both" data-i="${i}">${av(p)}<div><div class="nm">${p.n}</div><div class="mt">${p.m}</div></div><div class="inf">${I.info}</div></div>`).join('');
  l.querySelectorAll('.ct').forEach(c=>c.onclick=()=>{S.rcp=people[+c.dataset.i];flowNote();});
}
function rcpChip(cls=''){const p=S.rcp||people[0];const ini=p.n.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();
  return `<span style="display:inline-flex;align-items:center;gap:7px;vertical-align:middle"><span style="width:22px;height:22px;border-radius:50%;background:${cls||'#3a3a3c'};display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700">${cls?I.house.replace('width="15" height="15"','width="12" height="12"'):ini}</span><span class="ul">${p.n}</span></span>`;}
async function flowNote(){
  const f=$('#flow');
  f.innerHTML=`${bar(1)}<div class="rt pane">Send ${amtTxt()}to<br>${rcpChip()}</div>
   <div style="padding:10px 16px;font-size:14px;color:#c7c7cc">Add a note…</div>
   <div style="margin:4px 16px;background:var(--c1);border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center"><div class="sk" style="width:30px;height:30px;border-radius:50%"></div><div style="flex:1"><div class="sk" style="height:12px;margin-bottom:8px"></div><div class="sk" style="height:12px"></div></div></div>`;
  $('#fx').onclick=closeFlow; $('#fback').onclick=()=>flowPick();
  await wait(650); if(!$('#flow').classList.contains('on'))return;
  const p=S.rcp||people[0];
  if(p.st){
    convertSheet(p.n,()=>{S.cur='USD';flowReview();});
  } else flowReview();
}
function convertSheet(name,after){
  const sh=$('#sheet2');
  sh.innerHTML=`<div style="position:absolute;right:14px;top:14px" class="xb" id="cvx">${I.x}</div>
   <div style="padding:36px 18px 22px;text-align:center">
     <div style="width:48px;height:48px;border-radius:50%;overflow:hidden;margin:0 auto 14px;animation:popin .5s .15s var(--spring) both"><svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" fill="#fff"/>${[0,2,4,6].map(i=>`<rect y="${i*7}" width="48" height="3.6" fill="#d22"/>`).join('')}<rect y="44" width="48" height="4" fill="#d22"/><rect width="24" height="25" fill="#22408a"/></svg></div>
     <div style="font-size:22px;font-weight:800;letter-spacing:-.3px">${name} will get USD</div>
     <div style="font-size:13px;color:#e5e5ea;line-height:1.4;margin-top:6px">For your convenience, we'll convert to this currency the next time you send to ${name}. But you can switch it anytime.</div>
     <button class="wbtn wide" style="margin-top:18px;height:40px" id="cvok">OK</button></div>`;
  $('#scrim2').classList.add('on'); requestAnimationFrame(()=>sh.classList.add('on'));
  const done=()=>{sh.classList.remove('on');$('#scrim2').classList.remove('on');setTimeout(after,250);};
  $('#cvok').onclick=done; $('#cvx').onclick=done; $('#scrim2').onclick=done;
}
function flowReview(){
  const f=$('#flow'); const p=S.rcp||people[0];
  const amt=S.cur==='USD'&&p.st?`<span class="ul">${usd()} $ USD</span> `:amtTxt();
  f.innerHTML=`${bar(1)}<div class="rt">Send ${amt}to<br>${rcpChip(p.st?'#1f6fd9':'')}</div>
   <div style="padding:10px 16px 14px;font-size:14px;color:#c7c7cc">Add a note…</div>
   <div style="flex:1;overflow-y:auto">
    ${p.st?`<div class="rc pane"><div class="ic">${I.store('#fff',17)}</div><div><div class="t">Goods &amp; Services</div><div class="d">Get a full refund if an eligible item gets lost or damaged. Seller pays a small fee.<br><span class="ul" style="text-decoration-thickness:1px">More on Purchase Protection</span></div></div><div class="dd">${I.chevd}</div></div>
    <div class="rc pane" style="animation-delay:.05s;align-items:center"><div class="ic">${I.bag}</div><div><div class="t" style="font-weight:500">Schaffhauser Str.</div><div class="d">81476 DE</div></div><div class="dd">${I.chevd}</div></div>`:`<div class="rc pane" style="align-items:center"><div class="ic">${I.ppl}</div><div><div class="t">Friends or Family</div><div class="d">Send money to people you know.</div></div><div class="dd">${I.chevd}</div></div>`}
    <div class="rc pane" style="flex-direction:column;gap:14px;animation-delay:.1s">
      <div style="font-size:14px;font-weight:600">With</div>
      <div style="display:flex;gap:12px;align-items:center"><div style="width:44px;height:28px;border-radius:5px;background:#1c1c1e;border:1px solid #3a3a3c;display:flex;align-items:center;justify-content:center">${I.pp('#2a7fff',15)}</div><div style="flex:1"><div class="t">PayPal Balance</div><div class="d">${BAL} available - No fee</div></div><div class="tog off" onclick="this.classList.toggle('off')"><i></i></div></div>
      <div style="display:flex;gap:12px;align-items:center" id="cardrow"><div class="radio" id="rad"></div><div style="width:44px;height:28px;border-radius:5px;background:linear-gradient(135deg,#ff3b4a,#b3001b)"></div><div style="flex:1"><div class="t">Aircash Mastercard General Prepaid Card</div><div class="d">Card ••2092 - No fee</div></div></div>
      <button style="height:38px;border-radius:19px;background:var(--c3);font-size:13.5px;font-weight:600">Add a Payment Method</button>
    </div><div style="height:10px"></div></div>
   <div style="padding:8px 16px 18px"><button class="wbtn wide" id="paynow" style="height:44px;font-size:15px">Send Now</button></div>`;
  $('#fback').onclick=()=>{S.cur='EUR';flowPick();};
  $('#fx').onclick=cancelSheet;
  $('#cardrow').onclick=()=>{const r=$('#rad');r.style.border='6px solid #fff';};
  $('#paynow').onclick=async()=>{
    const b=$('#paynow'); b.innerHTML='<div class="spin" style="width:20px;height:20px;border-color:rgba(0,0,0,.15);border-top-color:#000;margin:auto"></div>';
    await faceID();
    const txt=`${p.st?usd()+' $':fmtAmt()+' '+sym()}`;
    closeFlow(); S.amt='0'; S.cur='EUR'; S.rcp=null;
    if(S.send==='transfer'){const w=$('#sendpane .pane');w&&paneTransfer(w);}
    toast(`<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#5ccf8b"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>Sent ${txt} to ${p.n}`);
  };
}
function cancelSheet(){
  const sh=$('#sheet2');
  sh.innerHTML=`<div style="position:absolute;right:14px;top:14px" class="xb" id="cnx">${I.x}</div>
   <div style="padding:42px 18px 22px;text-align:center"><div style="font-size:20px;font-weight:800;line-height:1.2;letter-spacing:-.2px">Are you sure you want to cancel<br>the transaction?</div>
   <button class="wbtn wide" style="margin-top:20px;height:42px" id="cnyes">Cancel Transaction</button>
   <button class="wide" style="margin-top:10px;height:40px;font-size:14px;font-weight:600" id="cnno">Continue</button></div>`;
  $('#scrim2').classList.add('on'); requestAnimationFrame(()=>sh.classList.add('on'));
  const hide=()=>{sh.classList.remove('on');$('#scrim2').classList.remove('on');};
  $('#cnx').onclick=hide;$('#cnno').onclick=hide;$('#scrim2').onclick=hide;
  $('#cnyes').onclick=()=>{hide();setTimeout(()=>{closeFlow();S.cur='EUR';},180);};
}

/* ================= FACE ID ================= */
async function faceID(){
  /* ~1.4s, matched to recording: box grows from the top -> green ring spins in 3D with glow ->
     settles flat -> checkmark draws -> hold -> box shrinks back up into the top and disappears */
  const f=$('#fid'); f.classList.add('on');
  f.innerHTML=`<div class="fx2" id="fx2"><div class="fring2" id="fr2"><svg width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" fill="none" stroke="#72d273" stroke-width="3"/>
     <path id="fchk" d="M18.5 28.5l6.5 6.5 12.5-13" fill="none" stroke="#72d273" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg></div></div>`;
  const box=$('#fx2'),ring=$('#fr2'),chk=$('#fchk');
  box.animate([{transform:'scale(.45,.3)',opacity:.4,borderRadius:'40px'},{transform:'scale(1.04)',opacity:1,offset:.7},{transform:'scale(1)',opacity:1}],{duration:320,easing:'cubic-bezier(.3,1.2,.4,1)',fill:'forwards'});
  ring.animate([
    {transform:'rotateY(0deg) rotateZ(-20deg) scale(.7)',filter:'blur(5px) drop-shadow(0 0 10px #4cff5e)',opacity:.4},
    {transform:'rotateY(220deg) rotateZ(-10deg) scale(.95)',filter:'blur(1.5px) drop-shadow(0 0 9px #4cff5e)',opacity:1,offset:.45},
    {transform:'rotateY(330deg) rotateZ(-3deg) scale(1)',filter:'blur(.5px) drop-shadow(0 0 5px #4cff5e)',opacity:1,offset:.8},
    {transform:'rotateY(360deg) rotateZ(0) scale(1)',filter:'blur(0) drop-shadow(0 0 0 #4cff5e)',opacity:1}],
    {duration:620,delay:40,easing:'cubic-bezier(.3,.1,.25,1)',fill:'forwards'});
  await wait(720);
  chk.animate([{strokeDashoffset:1},{strokeDashoffset:0}],{duration:260,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'});
  await wait(560);
  box.animate([{transform:'scale(1)',opacity:1},{transform:'translateY(-30px) scale(.38,.28)',opacity:0}],{duration:280,easing:'cubic-bezier(.5,0,.7,.4)',fill:'forwards'});
  await wait(290); f.classList.remove('on'); f.innerHTML='';
}

/* ================= ME (v2, calibrated to screenshots + recording) ================= */
const ME_SUBS=[['Discord Inc','#3c43d6','D',1],['SoundCloud Global Limited & Co. KG'],['SoundCloud Global Limited & Co. KG'],['SoundCloud Global Limited & Co. KG'],['Perplexity AI, Inc.','#0f2a2a','P'],['LinkedIn Ireland','#0a66c2','in']];
function renderMe(){
  const m=$('#me');
  m.innerHTML=`<div id="mein">
     <div class="shdr"><div class="sttl">${ID.name}</div><div class="bell sbell press">${I.bell}<span class="bdg">3</span></div></div>
     <div class="stabs mtabs"><div class="row" id="metabs"><div class="ind"></div>${[['accounts','Accounts'],['activity','Activity'],['subscriptions','Subscriptions'],['settings','Settings']].map(([k,l])=>`<div class="st${k===S.me?' on':''}" data-k="${k}">${l}</div>`).join('')}<div style="width:16px;flex-shrink:0"></div></div></div>
     <div id="ptr2" class="ptrx"><svg class="aspin" width="30" height="30" viewBox="0 0 30 30">${Array.from({length:8},(_,i)=>`<line x1="15" y1="1.8" x2="15" y2="9.6" transform="rotate(${i*45} 15 15)"/>`).join('')}</svg></div>
     <div id="mepane"></div></div>`;
  bindTabs($('#metabs'),k=>{S.me=k;mePane();});
  mePane(true);
  $('#ptr2').dataset.early='1';pullToRefresh(m,$('#mepane'),()=>mePane(false,true),$('#ptr2'));
}
function meTab(k){const row=$('#metabs');if(!row)return;row.querySelectorAll('.st').forEach(x=>x.classList.toggle('on',x.dataset.k===k));moveInd(row);S.me=k;mePane();}
function meSkel(k){
  const row=n=>Array.from({length:n},()=>`<div class="mrow"><div class="sk" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;margin-top:2px"></div><div style="flex:1"><div class="sk" style="height:12px;width:52%;margin:4px 0 9px"></div><div class="sk" style="height:12px;width:34%"></div></div><div class="sk" style="height:12px;width:56px;margin-top:4px"></div></div>`).join('');
  const head=`<div class="mhead"><div class="sk" style="height:18px;width:150px;border-radius:5px"></div><div style="display:flex;gap:10px"><div class="sk" style="width:32px;height:32px;border-radius:6px"></div><div class="sk" style="width:32px;height:32px;border-radius:6px"></div></div></div>`;
  if(k==='accounts')return `<div class="mwrap2"><div class="skacc">
      <div class="skacc-top"><i class="skb" style="left:20px;top:32px;width:63px;height:40px;border-radius:10px"></i>
        <i class="skb" style="left:96px;top:32px;width:96px"></i><i class="skb" style="left:96px;top:58px;width:80px"></i>
        <i class="skb" style="right:20px;top:32px;width:80px"></i><i class="skb" style="right:20px;top:58px;width:56px"></i></div>
      <div class="skacc-bot">${'<div><i class="skc"></i><i class="skcb"></i></div>'.repeat(3)}</div></div>
    <div class="skacc2"><i class="skg" style="left:20px;top:28px;width:63px;height:46px;border-radius:10px"></i>
      <i class="skg" style="left:96px;top:28px;width:110px"></i><i class="skg" style="left:218px;top:28px;width:123px"></i>
      <i class="skg" style="left:96px;top:60px;width:110px"></i><i class="skg" style="left:218px;top:60px;width:123px"></i></div></div>`;
  if(k==='settings')return head+`<div class="setcard">${Array.from({length:6},()=>`<div class="setrow"><div style="flex:1"><div class="sk" style="height:12px;width:30%;margin:4px 0 10px"></div><div class="sk" style="height:12px;width:55%"></div></div></div>`).join('')}</div>`;
  return head+row(k==='activity'?6:4);
}
async function mePane(first,refresh){
  const p=$('#mepane'),k=S.me; const tok=Symbol(); mePane.tok=tok;
  p.innerHTML=meSkel(k);
  await wait(first?450:refresh?1150:480); if(mePane.tok!==tok)return;
  p.innerHTML=`<div>${({accounts:meAcc,activity:meAct,subscriptions:meSubs,settings:meSet})[k]()}</div>`;
  if(k==='accounts'){$('#acc-bal').onclick=openBalance;}
  if(k==='activity')p.querySelectorAll('[data-open]').forEach(r=>r.onclick=()=>openDetail());
  if(k==='settings')bindSettings(p);
}

/* ---- editable profile / identity ---- */
function bindSettings(p){
  p.querySelectorAll('[data-edit]').forEach(row=>row.onclick=()=>{
    const f=row.dataset.edit;
    if(f==='address') openEdit('Address',[{label:'Street',value:ID.addr1,key:'addr1'},{label:'ZIP & City',value:ID.addr2,key:'addr2'}],o=>{ID.addr1=o.addr1;ID.addr2=o.addr2;idChanged();});
    else{const map={name:'Name',email:'Email',phone:'Phone number',ppme:'PayPal.me'};openEdit(map[f],[{label:map[f],value:ID[f],key:f}],o=>{ID[f]=o[f];idChanged();});}
  });
}
function idChanged(){ bkSave(); applyIdentity(); }
function applyIdentity(){
  const t=document.querySelector('#me .sttl'); if(t) t.textContent=ID.name;
  if(S.tab==='me'&&S.me==='settings'){const mp=$('#mepane'); if(mp){mp.innerHTML='<div>'+meSet()+'</div>';bindSettings(mp);}}
  if(typeof bkEl!=='undefined'&&bkEl&&bkEl.classList.contains('on')) bkRenderId();
}
let edEl=null;
function openEdit(title,fields,onSave){
  if(!edEl){edEl=document.createElement('div');edEl.className='edm';$('#app').appendChild(edEl);}
  edEl.innerHTML=`<div class="edm-scrim"></div><div class="edm-card">
     <div class="edm-ttl">${title}</div>
     ${fields.map(f=>`<label class="edm-f"><span>${f.label}</span><input class="edm-in" data-k="${f.key}" value="${bkEsc(f.value)}"></label>`).join('')}
     <div class="edm-btns"><button class="edm-c press">Cancel</button><button class="edm-s press">Save</button></div></div>`;
  requestAnimationFrame(()=>edEl.classList.add('on'));
  const close=()=>edEl.classList.remove('on');
  const save=()=>{const o={};edEl.querySelectorAll('.edm-in').forEach(inp=>o[inp.dataset.k]=inp.value.trim());onSave(o);close();};
  edEl.querySelector('.edm-scrim').onclick=close;
  edEl.querySelector('.edm-c').onclick=close;
  edEl.querySelector('.edm-s').onclick=save;
  const first=edEl.querySelector('.edm-in'); if(first){first.focus();first.onkeydown=e=>{if(e.key==='Enter'&&fields.length===1)save();};}
}
const ICON={
 money:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="2.5" y="6.5" width="19" height="11" rx="1"/><circle cx="12" cy="12" r="2.4"/></svg>',
 swap:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5h15l-3.5-3.5M20 15.5H5l3.5 3.5"/></svg>',
 card:'<svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="#0b3550" stroke-width="1.6"><rect x=".8" y=".8" width="13.4" height="10.4" rx="1"/><path d="M.8 4.2h13.4M8 8h4"/></svg>',
 cal:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="3.5" y="5.5" width="17" height="15" rx="1"/><path d="M3.5 10h17M8 3v4.5M16 3v4.5" stroke-linecap="round"/></svg>',
 pools:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3.5" y="3.5" width="17" height="17" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18c1-2.6 3-3.8 5.5-3.8s4.5 1.2 5.5 3.8"/></svg>',
 cart:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2.5l2.2 11h10.6L20.5 8H7"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>',
 bizz:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"><path d="M4 9.5 5.3 4.5h13.4L20 9.5"/><path d="M4 9.5h16v1.2a2.7 2.7 0 0 1-5.3 0 2.7 2.7 0 0 1-5.4 0 2.7 2.7 0 0 1-5.3 0z"/><path d="M5.5 13v6.5h13V13"/></svg>',
 filter:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M3.5 8h17M3.5 16h17"/><circle cx="9" cy="8" r="2.3" fill="#393939"/><circle cx="15" cy="16" r="2.3" fill="#393939"/></svg>',
 srch:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l5.5 5.5"/></svg>',
 info:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9"><circle cx="12" cy="12" r="9.5"/><path d="M12 10.5v6.5" stroke-width="2.3" stroke-linecap="round"/><circle cx="12" cy="7.3" r="1.3" fill="#fff" stroke="none"/></svg>',
 plus:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M12 3v18M3 12h18"/></svg>',
 env:'<svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="#fff" stroke-width="1.6"><rect x=".8" y=".8" width="13.4" height="10.4" rx=".6"/><path d="M.8 4.2h13.4M8 8h4"/></svg>',
 sw:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h17l-4-4M21 16H4l4 4"/></svg>',
 chev:'<svg width="10" height="17" viewBox="0 0 10 17" fill="none" stroke="#e5e5ea" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5l7 7-7 7"/></svg>'
};
function meAcc(){
  return `<div class="mwrap2">
   <div class="acard press" id="acc-bal"><div class="ablue">
      <div class="arow1"><div class="albl">PayPal balance</div><div class="abadge rel">${I.pp('#0a3a9e',17)}<img class="slot contain" src="${imgSrc('paypal-balance-alt')}" alt="" draggable="false"></div></div>
      <div class="aval">${BAL}</div>
      <div class="ainner"><div class="aiic">${ICON.card}</div><div><div class="ait">Get the PayPal Card</div><div>Pay contactless in stores with a digital card linked to your bank.</div></div></div></div>
     <div class="aacts"><div class="press"><span class="acirc">${ICON.money}</span>Add Money</div><div class="press"><span class="acirc">${ICON.swap}</span>Transfer</div></div></div>
   <div class="rcard"><div class="arow1"><div class="albl" style="color:#fff">Rewards</div><div class="abadge">${I.trophy.replace('width="15" height="15"','width="20" height="20"')}</div></div><div class="rval">0</div><div class="rpts">Points</div></div>
   <div class="mtitle">Discover more from PayPal</div>
   <div class="dcard">
     <div class="ditem press"><div class="dic">${ICON.cal}</div><div><div class="dt">Pay Later</div><div class="ddx">Plan, shop, and get more time to pay.<br>Learn more.</div></div></div>
     <div class="ditem press"><div class="dic rel" style="background:#0a2a8a">${slot('card-paypal')}</div><div><div class="dt">PayPal Card</div><div class="ddx">Pay contactless in stores with a digital card linked to your bank.</div></div></div>
     <div class="ditem press"><div class="dic">${ICON.pools}</div><div><div class="dt">Pools</div><div class="ddx">Pool money with friends and family for gifts, trips, and more.</div></div></div></div>
   <div class="mtitle mt-row">Linked banks and cards<span class="mplus press">${ICON.plus}</span></div>
   <div class="dcard"><div class="ditem press" style="align-items:center"><div class="dic rel" style="background:linear-gradient(135deg,#ff3b4a,#b3001b)">${slot('card-aircash')}</div><div><div class="dt">Aircash Mastercard General<br>Prepaid Card</div><div class="ddx">Prepaid ••2092</div></div></div></div>
   <div class="mtitle">Payment Preferences</div>
   <div class="dcard">
     <div class="ditem press" style="align-items:center"><span class="pcirc">${ICON.cart}</span><div><div class="dt">Online payments</div><div class="ddx">PayPal balance</div></div></div>
     <div class="ditem press" style="align-items:center"><span class="pcirc">${I.qrw}</span><div><div class="dt">QR code payments</div><div class="ddx">Select a payment method</div></div></div>
     <div class="ditem press" style="align-items:center"><span class="pcirc">${ICON.bizz}</span><div class="dt">Linked businesses</div></div></div>
   <div style="height:28px"></div></div>`;
}
function meRow(t){
  return `<div class="mrow"${t.open?' data-open':''}>${av(t,40)}<div class="mt2"><div>${t.n}</div><div class="g">${t.m}</div>${t.again?'<button class="again press">Send again</button>':''}${t.hold?'<span class="mtag" style="background:#0e5a37;color:#7ff0ad">On hold</span>':''}${t.ref?'<span class="mtag">Refunded</span>':''}</div><div class="ma${t.a[0]==='+'?' gr':''}">${t.a}</div></div>`;
}
function meAct(){
  let first=true;
  return tx.map(([m,list])=>{const head=`<div class="mhead"><div class="mh">${m}</div>${first?`<div class="mbtns"><span class="mbtn press">${ICON.filter}</span><span class="mbtn press">${ICON.srch}</span></div>`:''}</div>`;first=false;
    return head+list.map(t=>t.track?`<div class="trk2" data-open><div class="mrow" style="margin:0;padding:0;border:none">${av(t,40)}<div class="mt2"><div>${t.n}</div><div class="g">${t.m}</div></div><div class="ma">${t.a}</div></div>
       <div class="rel trkimg">${trackArt()}${slot('activity-track','contain')}</div>
       <div class="trkrow"><div>Link your email to track your packages automatically</div><button class="press">Link email</button></div></div>`:meRow(t)).join('');}).join('')+'<div style="height:28px"></div>';
}
function trackArt(){return `<svg width="170" height="120" viewBox="0 0 170 120"><path d="M85 30 160 68 85 106 10 68z" fill="#7fbf3f"/><path d="M10 68v8l75 38v-8z" fill="#7a4e2a"/><path d="M160 68v8l-75 38v-8z" fill="#5c3a1e"/><ellipse cx="85" cy="68" rx="44" ry="22" fill="none" stroke="#c9c2b6" stroke-width="10"/><g transform="translate(46 30)"><path d="M10 26 40 11 62 22 32 37z" fill="#eee"/><path d="M10 26v14l22 11V37z" fill="#ddd"/><path d="M32 37v14l30-15V22z" fill="#cfcfcf"/><path d="M0 34 10 29v12L0 46z" fill="#2340b8"/></g><g transform="translate(100 46)"><path d="M0 8 12 2 24 8 12 14z" fill="#e0b27a"/><path d="M0 8v12l12 6V14z" fill="#c8945a"/><path d="M24 8v12l-12 6V14z" fill="#b07c44"/></g><path d="M122 18c-6 0-10 4-10 10 0 7 10 18 10 18s10-11 10-18c0-6-4-10-10-10z" fill="#2a7ae0"/><circle cx="122" cy="28" r="4" fill="#fff"/></svg>`;}
function meSubs(){
  return `<div class="mhead"><div class="mh" style="display:flex;align-items:center;gap:18px">Active ${ICON.info}</div><div class="mbtns"><span class="mpill press">Manage ${ICON.env}</span><span class="mbtn press">${ICON.plus}</span></div></div>`+
   ME_SUBS.map(([n,bg,ic,paid])=>`<div class="mrow" style="align-items:center">${bg?`<div class="av rel" style="width:40px;height:40px;background:${bg};font-size:15px;font-weight:800">${ic}${slot('sub-'+slug(n))}</div>`:av({st:1,n},40)}<div class="mt2"><div>${n}</div><div class="g">PayPal balance first<br>Credit <span class="bul">●●</span>2092</div></div>${paid?'<div class="ma" style="text-align:right">0,99 US$<div class="g">Paid 22 Jan</div></div>':''}</div>`).join('')+'<div style="height:28px"></div>';
}
function meSet(){
  const it=(k,v,c=1,edit)=>`<div class="setrow press"${edit?` data-edit="${edit}"`:''}><div style="flex:1"><div>${k}</div>${v?`<div class="g">${v}</div>`:''}</div>${c?ICON.chev:''}</div>`;
  const card=rows=>`<div class="setcard">${rows.join('')}</div>`;
  return `<div class="mhead"><div class="mh">Profile</div><span class="mpill press" style="gap:8px">${ICON.sw}Switch accounts</span></div>
   ${card([it('Name',ID.name,0,'name'),it('Profile photo','Update your photo so friends and merchants know it\'s you'),it('Email',ID.email,1,'email'),it('Phone number',ID.phone,1,'phone'),it('Address',`${ID.addr1}<br>${ID.addr2}`,1,'address'),it('PayPal.me',ID.ppme,1,'ppme'),it('Profile visibility','Manage who can find your PayPal profile.')])}
   <div class="mhead"><div class="mh">Payment preferences</div></div>
   ${card([it('Online payments','Manage your online payment options.'),it('QR code payments','Manage your QR code payment options.'),it('Linked businesses','See businesses where you linked PayPal for faster checkout.')])}
   <div class="mhead"><div class="mh">Security and privacy</div></div>
   ${card([`<div class="setrow"><div style="font-weight:600">Manage your account's security</div></div>`,
     `<div class="setrow press"><div style="flex:1"><div>Passkeys</div><div class="g">Log in without a password across devices.</div></div><span class="added">Added</span>${ICON.chev}</div>`,
     `<div class="setrow"><div style="flex:1"><div>Face and Touch ID</div><div class="g">Log in faster with your face or fingerprint.</div></div><div class="tog" onclick="this.classList.toggle('off')"><i></i></div></div>`,
     it('Password','Create a new password.'),it('Blocked contacts','Control who can contact you.')])}
   ${card([`<div class="setrow"><div style="font-weight:600">Manage your collected &amp; shared data</div></div>`,it('Connected apps and sites','Manage connected services use your PayPal data.'),it('Personalized offers and ads','Control whether your PayPal offers and ads are relevant.')])}
   <div style="height:28px"></div>`;
}

/* ---------- transaction detail ---------- */
async function openDetail(){
  const d=$('#detail');
  d.innerHTML=`<div class="pbar"><div></div><div class="xb" id="dx">${I.x}</div></div><div style="flex:1;display:flex;align-items:center;justify-content:center;padding-bottom:80px"><div class="spin"></div></div>`;
  d.classList.add('on'); $('#dx').onclick=()=>d.classList.remove('on');
  await wait(600); if(!d.classList.contains('on'))return;
  d.innerHTML=`<div class="pbar" style="position:absolute;right:0;top:0;z-index:2"><div></div><div class="xb" id="dx">${I.x}</div></div>
   <div style="flex:1;overflow-y:auto;padding:58px 16px 20px" class="pane">
    <div style="width:52px;height:52px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center">${I.store('#000',24)}</div>
    <div style="font-size:26px;font-weight:800;line-height:1.1;margin-top:14px;letter-spacing:-.3px">Nike<br>-214,90 US$</div>
    <div style="font-size:13px;color:#e5e5ea;margin-top:4px">Money sent • 19 Nov 2026 at 21:02</div>
    <div class="dh">Message</div><div class="dbox" style="border-radius:20px">Sol Knit Brown one</div>
    <div class="dh">Details</div>
    <div class="dbox"><div style="font-weight:600;padding:4px 0 8px">Paid with</div><div class="dl"><span>PayPal balance</span><span>204,67 €</span></div><div style="height:8px"></div>
      <div class="dl"><span>Amount</span><span>214,90 US$</span></div><div class="dl" style="font-weight:600"><span>Total</span><span>214,90 US$</span></div>
      <div style="border-top:1px solid #3a3a3c;margin:10px 0 6px"></div><div class="dl" style="font-size:11px"><span>Your exchange rate:</span><span>1,00 € = 1,05 US$</span></div></div>
    <div class="dh">Shipping info</div><div style="font-size:12.5px;line-height:1.45;color:#e5e5ea">${ID.name}<br>${ID.addr2}<br>GERMANY</div>
    <div class="dbox" style="margin-top:16px;display:flex;align-items:center"><div style="flex:1"><div style="font-weight:600">Transaction ID</div><div style="font-size:11px;color:#c7c7cc;margin-top:3px">7D443167EG331844Y</div></div><span class="bell" style="width:30px;height:30px">${I.copy}</span></div>
    <div class="dh">Need help?</div>
    <div class="help">${[[I.spark,'Chat with PayPal Assistant'],[I.undo,'Request a refund'],[I.help,'Get answers'],[I.warn,'Report a problem'],[I.phone,'Contact Nike']].map(([ic,t])=>`<div class="press">${ic}<span style="flex:1">${t}</span>${I.chev}</div>`).join('')}</div>
    <div style="font-size:12.5px;color:#e5e5ea;line-height:1.45;margin-top:14px">If you can't work things out with Nike, you can report a problem to us by 18 May 2027. You may be eligible for <span class="ul" style="text-decoration-thickness:1px">Buyer Protection</span>.</div>
   </div>
   <div style="padding:8px 16px 18px"><button class="wbtn wide" style="height:42px">Split bill</button></div>`;
  $('#dx').onclick=()=>d.classList.remove('on');
}

/* ================= TAP ================= */
async function openTap(){
  const t=$('#tap');
  t.innerHTML=`<div style="flex:1;display:flex;align-items:center;justify-content:center"><div class="spin"></div></div>`;
  t.classList.add('on');
  await wait(450);
  await faceID();
  t.innerHTML=`<div class="pbar" style="justify-content:flex-end"><div class="xb" id="tx">${I.x}</div></div>
   <div class="tapc pane">
     <div style="width:78px;height:78px;border-radius:22px;border:1px solid #12381f;display:flex;align-items:center;justify-content:center;margin-top:-50px"><svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="none" stroke="#3be06b" stroke-width="3"/><path d="M15.5 24.5l6 6 11-12" fill="none" stroke="#3be06b" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
     <div class="h">Fast, secure<br>payments</div>
     <div class="p">Contactless technology right in the app. No fumbling with cards or holding up the line.</div>
     <div class="phone"><svg width="230" height="230" viewBox="0 0 230 230"><defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a3a3e"/><stop offset=".5" stop-color="#0d0d0f"/><stop offset="1" stop-color="#1c1c20"/></linearGradient></defs>
       <g transform="rotate(32 115 115)"><rect x="62" y="10" width="106" height="210" rx="18" fill="#6b4a3a"/><rect x="64" y="12" width="102" height="206" rx="17" fill="url(#pg)"/>
       <text x="138" y="40" fill="#fff" font-size="11" font-weight="800" font-style="italic" font-family="Outfit" transform="rotate(0)">PayPal</text>
       <rect x="72" y="100" width="86" height="44" rx="6" fill="#1f8a50"/><rect x="72" y="122" width="86" height="44" rx="6" fill="#222226"/><rect x="72" y="144" width="86" height="44" rx="6" fill="#0d3b9e"/><rect x="72" y="166" width="86" height="46" rx="6" fill="#63c8f2"/></g></svg></div>
     <div class="dots" style="margin-top:14px"><i class="on"></i><i></i><i></i></div>
     <div style="flex:1"></div>
     <span class="lnk">Want to learn more?</span>
     <button class="wbtn wide" style="flex:none;margin:16px 0 18px;height:42px" id="tnext">Next</button></div>`;
  const close=()=>t.classList.remove('on');
  $('#tx').onclick=close; $('#tnext').onclick=close;
}

/* ================= SEND — Transfer (v2, calibrated to recording) ================= */
const SEND_PEOPLE=people.filter(p=>p.n!=='Emanuel Martinovic');
const REQ_PEOPLE=[
 {n:'Lukas Fischer',m:'10+ payments',...J},{n:'Emma Wagner',m:'1 payment',c:'#fff',i:'EW',fc:'#000'},{n:'Rio Stäblein',m:'2 payments',c:'#5a4a3a',ph:1},
 {n:'Leon Schäfer',m:'7 payments',c:'#000',ring:1,i:''},{n:'Paul Hoffmann',m:'1 payment',c:'#6a8aa0',ph:1},{n:'Emanuel Martinovic',m:'1 payment',c:'#6c5a8a',ph:1},
 {n:'David Richter',m:'3 payments',c:'#fff',i:'DR',fc:'#000'},{n:'Amazon',m:'10+ payments',st:1},{n:'Aditya Agrawal',m:'4 payments',c:'#c9897a',i:'A',fc:'#fff'},
 {n:'Laura Schmidt',m:'1 payment',c:'#fff',i:'LS',fc:'#000'},{n:'Lukas Fischer',m:'10+ payments',c:'#1f5fd6',i:'J',fc:'#fff'}];

function renderSend(){
  const s=$('#send');
  s.innerHTML=`<div class="shdr"><div class="sttl">Send</div><div class="bell sbell press">${I.bell}<span class="bdg">3</span></div></div>
   <div class="stabs"><div class="row" id="sendtabs"><div class="ind"></div>${[['transfer','Transfer'],['contacts','Contacts'],['pool','Pool'],['split','Split']].map(([k,l])=>`<div class="st${k===S.send?' on':''}" data-k="${k}">${l}</div>`).join('')}</div><div class="sqr press">${I.qr.replace('width="17" height="17"','width="18" height="18"')}</div></div>
   <div id="sendpane" style="flex:1;position:relative;overflow:hidden"></div>`;
  bindTabs($('#sendtabs'),k=>{S.send=k;sendPane();});
  sendPane();
}

/* amount formatting: 1.234.567,89 — max 9 digits before the comma, 2 after */
function fmtAmt(){const [i,d]=S.amt.split('.');const g=i.replace(/\B(?=(\d{3})+(?!\d))/g,'.');return d!==undefined?`${g},${d}`:g;}
function amtTier(){const n=S.amt.replace('.','').length;return n<=4?0:n<=6?1:2;}
const TIERS=[{fs:80,eu:34,lh:62},{fs:50,eu:22,lh:39},{fs:41.5,eu:18,lh:32}];

function paneTransfer(w){
  w.style.overflow='hidden';
  w.innerHTML=`<div class="tr-amt" id="tramt">
      <div class="tr-v" id="amtv"></div>
      <div class="tr-warn" id="trwarn"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff5a5f" stroke-width="2.4" stroke-linejoin="round"><path d="M12 3.5 21.5 20h-19z"/><path d="M12 10v4.5M12 17.2v.3" stroke-linecap="round"/></svg>Enter an amount</div>
      <button class="tr-cur" id="curp"><span class="eu-flag"></span><span>${S.cur}</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l7 7 7-7"/></svg></button>
   </div>
   <div class="tr-pad">
     <div class="tr-keys">${['1','2','3','4','5','6','7','8','9',',','0','del'].map(k=>`<div class="tr-key" data-k="${k}">${k==='del'?'<svg width="21" height="16" viewBox="0 0 21 16"><path d="M6 0h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6L0 8z" fill="#fff"/><path d="M10 4.5l7 7M17 4.5l-7 7" stroke="#1b1b1b" stroke-width="2.4" stroke-linecap="round"/></svg>':k}</div>`).join('')}</div>
     <div class="tr-btns"><button class="tr-btn" id="reqgo">Request</button><button class="tr-btn" id="sendgo">Send</button></div>
   </div>`;
  drawAmt();
  w.querySelectorAll('.tr-key').forEach(k=>bindKey(k));
  $('#curp').onclick=openCurrency;
  bindPill($('#sendgo'),()=>goFlow('send'));
  bindPill($('#reqgo'),()=>goFlow('request'));
}
function drawAmt(){
  const v=$('#amtv'); if(!v)return; const t=TIERS[amtTier()];
  v.style.fontSize=t.fs+'px'; v.style.lineHeight=t.lh+'px';
  v.innerHTML=`<span>${fmtAmt()}</span><sup style="font-size:${t.eu}px">${sym()}</sup>`;
  $('#trwarn').classList.toggle('on',!!S.warn);
}
/* key: flashes light blue instantly on touch, value changes on release (as in recording) */
function bindKey(k){
  let t0=0,down=false;
  const press=e=>{e.preventDefault();down=true;t0=performance.now();k.classList.add('hot');};
  const release=()=>{if(!down)return;down=false;applyKey(k.dataset.k);const left=Math.max(0,85-(performance.now()-t0));setTimeout(()=>k.classList.remove('hot'),left);};
  k.addEventListener('pointerdown',press);k.addEventListener('pointerup',release);k.addEventListener('pointerleave',()=>{if(down){down=false;k.classList.remove('hot');}});
}
function applyKey(c){
  let a=S.amt;const [ip,dp]=a.split('.');
  if(c==='del'){a=a.length>1?a.slice(0,-1):'0';}
  else if(c===','){if(!a.includes('.'))a+='.';}
  else if(dp!==undefined){if(dp.length<2)a+=c;}
  else if(a==='0')a=c;
  else if(ip.length<9)a+=c;
  if(a===S.amt&&c!=='del')return;
  S.amt=a; if(c!=='del'&&c!==',')S.warn=false; drawAmt();
  if(navigator.vibrate)navigator.vibrate(4);
}
/* white pill buttons: grey on press, fade back to white */
function bindPill(b,onTap){
  b.addEventListener('pointerdown',()=>{b.style.transition='none';b.classList.add('down');});
  const up=()=>{if(!b.classList.contains('down'))return;b.style.transition='';b.classList.remove('down');};
  b.addEventListener('pointerleave',up);
  b.addEventListener('pointerup',()=>{up();onTap(b);});
}
async function goFlow(kind,b){
  const btn=kind==='send'?$('#sendgo'):$('#reqgo');
  if(+S.amt===0){S.warn=true;drawAmt();return;}
  S.warn=false;S.kind=kind;
  const label=btn.textContent;
  btn.innerHTML='<span class="bspin"></span>';btn.classList.add('busy');
  await wait(480);
  openFlow();
  setTimeout(()=>{btn.textContent=label;btn.classList.remove('busy');},500);
}

/* ---------- Send / Request "… to / from" sheet ---------- */
function openFlow(fromContacts){
  const f=$('#flow');f.classList.add('slide');
  if(fromContacts){S.kind='send';f.classList.add('on');flowNote();return;}
  flowPick();requestAnimationFrame(()=>f.classList.add('on'));
}
function closeFlow(reset){const f=$('#flow');f.classList.remove('on');if(reset){S.amt='0';S.cur='EUR';S.warn=false;setTimeout(()=>{if(S.send==='transfer'){const w=$('#sendpane .pane');w&&paneTransfer(w);}},60);}}
function amtTxt(){return S.amt==='0'?'':`<span class="ul2">${fmtAmt()} ${sym()}</span> `;}
function bar(back){return `<div class="fx-wrap">${back?`<div class="fxb" id="fback">${I.back}</div>`:''}<div class="fxb fxr" id="fx">${I.x.replace('width="15" height="15"','width="18" height="18"').replace('stroke-width="2.6"','stroke-width="2.4"')}</div></div>`;}
function flowAv(p){if(p.st)return `<div class="av" style="width:48px;height:48px;background:#3a3a3c">${I.store('#fff',22)}</div>`;if(p.i==='✝')return `<div class="av" style="width:48px;height:48px;background:#000;box-shadow:inset 0 0 0 1.5px #5a5a5e;font-size:20px;color:#fff">✝</div>`;return av(p,48);}
function flowRow(p,i){return `<div class="frow" data-i="${i}">${flowAv(p)}<div class="fn"><div>${p.n}</div><div class="fm">${p.m}</div></div><svg class="finfo" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5" stroke-linecap="round" stroke-width="2.2"/><circle cx="12" cy="7.8" r="1.2" fill="#fff" stroke="none"/></svg></div>`;}
function flowPick(){
  const f=$('#flow'),req=S.kind==='request',list=req?REQ_PEOPLE:SEND_PEOPLE;
  f.innerHTML=`${bar()}<div class="fscroll" id="fscroll">
     <div class="ftitle">${req?'Request':'Send'} ${amtTxt()}${req?'from':'to'}</div>
     <div class="fsearch"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#c7c7cc" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.6-4.6"/></svg><span>Name, phone, email, @username</span></div>
     <div class="flsr"><button class="press">${I.link.replace('width="16" height="16"','width="19" height="19"')}Link</button><button class="press">${I.qrw.replace('width="16" height="16"','width="18" height="18"')}Scan</button></div>
     <div class="flist">${list.map(flowRow).join('')}</div><div style="height:30px"></div></div>
     <div class="fdim" id="fdim"></div>`;
  $('#fx').onclick=cancelSheet;
  f.querySelectorAll('.frow').forEach(r=>r.onclick=()=>{S.rcp=list[+r.dataset.i];
    if(req){closeFlow(true);toast(`<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#5ccf8b"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>Requested ${fmtAmt()} € from ${S.rcp.n}`);}
    else flowNote();});
}
/* cancel dialog: page dims, sheet slides up from the bottom */
function cancelSheet(){
  const sh=$('#sheet2'),dim=$('#fdim')||$('#scrim2');
  sh.innerHTML=`<div class="cx press" id="cnx">${I.x.replace('width="15" height="15"','width="18" height="18"').replace('stroke-width="2.6"','stroke-width="2.4"')}</div>
    <div class="ct-t">Are you sure you want to cancel<br>the transaction?</div>
    <button class="ct-b" id="cnyes">Cancel Transaction</button>
    <div class="ct-c press" id="cnno">Continue with ${S.kind==='request'?'Transfer':'Transfer'}</div>`;
  sh.classList.add('cancel');
  if(dim)dim.classList.add('on');
  requestAnimationFrame(()=>sh.classList.add('on'));
  const hide=()=>{sh.classList.remove('on');if(dim)dim.classList.remove('on');};
  $('#cnx').onclick=hide;$('#cnno').onclick=hide;if(dim)dim.onclick=hide;
  const yes=$('#cnyes');bindPill(yes,()=>{hide();setTimeout(()=>closeFlow(true),120);});
}

/* ================= BACKSTAGE (dev panel) ================= */
let bkEl=null, bkTxOpen=false;
const BK_MAX=1e9;

function bkParse(str){                                  // "1.234,56 €" -> 1234.56
  let x=(''+str).replace(/[^\d.,-]/g,'').replace(/\./g,'').replace(',', '.');
  const v=parseFloat(x); return isNaN(v)?0:v;
}
function bkFmt(v){                                       // 1234.56 -> "1.234,56"
  const neg=v<0; v=Math.abs(+v||0);
  let [i,d]=v.toFixed(2).split('.');
  i=i.replace(/\B(?=(\d{3})+(?!\d))/g,'.');
  return (neg?'-':'')+i+','+d;
}
function bkNum(){ return bkParse(BAL); }
function bkSetBal(v){ BAL=bkFmt(v)+' €'; }
function bkSlidePos(){ return Math.round(1000*Math.cbrt(Math.max(0,bkNum())/BK_MAX)); }
function bkFromPos(p){ return BK_MAX*Math.pow(Math.max(0,Math.min(1000,p))/1000,3); }
function bkStepAmt(){ const v=bkNum(); return v<100?1:v<1e4?100:v<1e6?1000:v<1e8?1e5:1e6; }
function bkEsc(s){ return (''+s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }
function bkTxCount(){ return tx.reduce((a,[,l])=>a+l.length,0); }

function openBackstage(){
  if(navigator.vibrate)navigator.vibrate(14);
  if(!bkEl){ bkEl=document.createElement('div'); bkEl.className='bk'; $('#app').appendChild(bkEl); }
  bkTxOpen=false; bkRender();
  requestAnimationFrame(()=>bkEl.classList.add('on'));
}
function closeBackstage(){ if(bkEl) bkEl.classList.remove('on'); }

function bkRender(){
  bkEl.innerHTML=`
   <div class="bk-head">
     <div class="bk-brand">${I.pp('#2d9cdb',17)}<span>Backstage</span></div>
     <div class="bk-done press" id="bk-done">Done</div>
   </div>
   <div class="bk-body">
     <div class="bk-sec">Balance</div>
     <div class="bk-card">
       <div class="bk-row">
         <div class="bk-l"><div class="bk-t">Total balance</div><div class="bk-s">The number on Home, Balance and your account.</div></div>
         <div class="bk-val" id="bk-balv">${BAL}</div>
       </div>
       <div class="bk-step">
         <button class="bk-pm press" data-d="-1">&minus;</button>
         <input type="range" id="bk-bslide" min="0" max="1000" value="${bkSlidePos()}">
         <button class="bk-pm press" data-d="1">+</button>
       </div>
       <div class="bk-field"><span class="bk-cur">€</span><input id="bk-bnum" inputmode="decimal" value="${bkFmt(bkNum())}"></div>
       <div class="bk-reset press" id="bk-balreset">Reset</div>
     </div>

     <div class="bk-sec">Activity</div>
     <div class="bk-card">
       <div class="bk-row press" id="bk-txtoggle">
         <div class="bk-l"><div class="bk-t">Transactions</div><div class="bk-s">Dated payments in Activity.</div></div>
         <div class="bk-count" id="bk-count">${bkTxCount()} items ${I.chev}</div>
       </div>
       <div class="bk-txwrap" id="bk-txwrap"></div>
       <div class="bk-add press" id="bk-txadd">${I.plus}<span>Add transaction</span></div>
     </div>

     <div class="bk-sec">Profile</div>
     <div class="bk-card" id="bk-idcard"></div>

     <button class="bk-nuke press" id="bk-nuke">Reset everything</button>
     <div class="bk-note">Saved to this browser only. Hold the top of the screen for 2s to reopen.</div>
   </div>`;

  const q=s=>bkEl.querySelector(s);
  const slide=q('#bk-bslide'), numf=q('#bk-bnum'), vald=q('#bk-balv');
  const syncBal=v=>{ v=Math.max(0,v); bkSetBal(v); vald.textContent=BAL; numf.value=bkFmt(v); slide.value=bkSlidePos(); bkApplyBalance(); };
  slide.oninput=()=>syncBal(bkFromPos(+slide.value));
  numf.onchange=numf.onblur=()=>syncBal(bkParse(numf.value));
  bkEl.querySelectorAll('.bk-pm').forEach(b=>b.onclick=()=>syncBal(bkNum()+(+b.dataset.d)*bkStepAmt()));
  q('#bk-balreset').onclick=()=>syncBal(bkParse(DEFAULT_BAL));

  q('#bk-done').onclick=()=>{ bkCommit(); closeBackstage(); };
  q('#bk-txtoggle').onclick=()=>{ bkTxOpen=!bkTxOpen; bkRenderTx(); };
  q('#bk-txadd').onclick=()=>{
    if(!tx.length) tx.unshift(['Recent',[]]);
    tx[0][1].unshift({n:'New payment',m:'Today · Money received',a:'+0,00 €',c:'#3a3a3c',i:'NP'});
    bkTxOpen=true; bkRenderTx(); bkUpdCount();
  };
  q('#bk-nuke').onclick=()=>{ bkResetAll(); bkTxOpen=false; bkRender(); bkApplyBalance(); if(rendered.me) renderMe(); };
  bkRenderTx(); bkRenderId();
}
function bkRenderId(){
  const c=bkEl&&bkEl.querySelector('#bk-idcard'); if(!c) return;
  const f=(label,key)=>`<label class="bk-idf"><span>${label}</span><input data-k="${key}" value="${bkEsc(ID[key]||'')}"></label>`;
  c.innerHTML=f('Name','name')+f('Email','email')+f('Phone','phone')+f('Street','addr1')+f('ZIP & City','addr2')+f('PayPal.me','ppme');
  c.querySelectorAll('input').forEach(inp=>inp.oninput=e=>{
    ID[inp.dataset.k]=e.target.value;
    if(inp.dataset.k==='name'){const t=document.querySelector('#me .sttl'); if(t) t.textContent=ID.name;}
  });
}

function bkRenderTx(){
  const wrap=bkEl&&bkEl.querySelector('#bk-txwrap'); if(!wrap) return;
  if(!bkTxOpen){ wrap.classList.remove('on'); wrap.innerHTML=''; return; }
  wrap.classList.add('on');
  wrap.innerHTML=tx.map(([mon,list],gi)=>
    `<div class="bk-mon">${bkEsc(mon)}</div>`+
    list.map((t,ii)=>`
      <div class="bk-tx" data-g="${gi}" data-i="${ii}">
        <input class="bk-tn" value="${bkEsc(t.n||'')}" placeholder="Name">
        <input class="bk-tm" value="${bkEsc(t.m||'')}" placeholder="Date · type">
        <div class="bk-trow">
          <input class="bk-ta" value="${bkEsc(t.a||'')}" placeholder="+0,00 €">
          <button class="bk-del press" title="Delete">${I.x}</button>
        </div>
      </div>`).join('')
  ).join('');
  wrap.querySelectorAll('.bk-tx').forEach(row=>{
    const gi=+row.dataset.g, ii=+row.dataset.i, t=tx[gi]&&tx[gi][1][ii]; if(!t) return;
    row.querySelector('.bk-tn').oninput=e=>t.n=e.target.value;
    row.querySelector('.bk-tm').oninput=e=>t.m=e.target.value;
    row.querySelector('.bk-ta').oninput=e=>t.a=e.target.value;
    row.querySelector('.bk-del').onclick=()=>{ tx[gi][1].splice(ii,1); if(!tx[gi][1].length) tx.splice(gi,1); bkRenderTx(); bkUpdCount(); };
  });
}
function bkUpdCount(){ const c=bkEl&&bkEl.querySelector('#bk-count'); if(c) c.innerHTML=bkTxCount()+' items '+I.chev; }

function bkApplyBalance(){
  document.querySelectorAll('#qc-bal .big').forEach(e=>e.textContent=BAL);
  const av=document.querySelector('#me .aval'); if(av) av.textContent=BAL;
  const bv=document.querySelector('#balpage .bal-v'); if(bv) bv.textContent=BAL;
}
function bkCommit(){
  bkSave();
  bkApplyBalance();
  if(rendered.me) renderMe(); else applyIdentity();
  const bp=$('#balpage'); if(bp&&bp.classList.contains('on')) bp.classList.remove('on');
}

/* open by holding the top strip of the app for 2 seconds */
function installBackstageTrigger(){
  const app=$('#app'); let timer=null,sx=0,sy=0,fired=false;
  const SEL='.sbox, #qc-bal, .bal-v';            // hold the search bar or the PayPal balance for 2s
  const clear=()=>{ if(timer){clearTimeout(timer);timer=null;} };
  app.addEventListener('pointerdown',e=>{
    if(bkEl&&bkEl.classList.contains('on')) return;
    if(!(e.target.closest&&e.target.closest(SEL))) return;
    sx=e.clientX; sy=e.clientY; fired=false; clear();
    timer=setTimeout(()=>{ fired=true; openBackstage(); },2000);
  },true);
  app.addEventListener('pointermove',e=>{ if(timer&&(Math.abs(e.clientX-sx)>12||Math.abs(e.clientY-sy)>12)) clear(); },true);
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>app.addEventListener(ev,clear,true));
  // swallow the click that follows a completed hold so it doesn't also open the balance page
  app.addEventListener('click',e=>{ if(fired){ e.preventDefault(); e.stopPropagation(); fired=false; } },true);
}

/* ================= INIT ================= */
const style=document.createElement('style');
style.textContent='@keyframes popin{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes ringin{from{stroke-dashoffset:520;opacity:0}to{stroke-dashoffset:0;opacity:1}}';
document.head.appendChild(style);
bkLoad();
renderNav(); renderHome(); rendered.home=1;
installBackstageTrigger();
