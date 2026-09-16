const ICONS={
 home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
 key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/>',
 truck:'<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
 cash:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
 cart:'<path d="M3 4h2l2.5 11h11L21 8H6.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>',
 fuel:'<path d="M4 20V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15M3 20h12M14 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3M7 8h4"/>',
 fork:'<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 1-3 3-3 6s1 4 3 4v8"/>',
 spray:'<path d="M9 8h6v3l1 2v8H8v-8l1-2zM10 8V5h4M14 5h3M18 3v1M20 5h1M18 7v1"/>',
 gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8S10 3 7.5 4 9 8 12 8zM12 8s2-5 4.5-4S15 8 12 8z"/>',
 heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
 box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
 star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
 chat:'<path d="M4 5h16v11H9l-5 4z"/>',
 spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 pin:'<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'
};
const ic=(n,c='currentColor')=>`<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
document.querySelectorAll('[data-ic]').forEach(el=>{el.innerHTML=ic(el.dataset.ic)+el.innerHTML});

/* ---------- Journey data ---------- */
const CHAPTERS=[
 {k:'Before move-in',d:'Sarah signs, designs her home and settles in.'},
 {k:'Everyday life',d:'Rent, groceries, gas, dining, pharmacy and home care, all earning back.'},
 {k:'Moments that matter',d:'Gifts when they count, and a great goodbye.'}
];
const STAGES=[
 {ch:0,k:'Lease signed',ic:'key',title:'Membership starts at signing.',
  benefit:'Sarah earns back on <b>rent and everyday life</b> from day one.',
  tech:'Activated by the PMS partner API. It lives in the resident app she already uses.',
  merch:'20,000+ merchants are live on day one.'},
 {ch:0,k:'Design your home',ic:'sofa',title:'A free 3D design before the keys.',
  benefit:'Her real floor plan, furnished to her style. Buying <b>direct from suppliers saves $1,450</b>.',
  tech:'PM floor plans become 3D rooms. AI furnishes them, with walk-through and AR.',
  merch:'Suppliers sell direct, with no middlemen.'},
 {ch:0,k:'Welcome gift',ic:'gift',title:'A welcome gift, her way.',
  benefit:'<b>$50 from 800 Penn</b>: an essentials kit or pizza night from a local spot.',
  tech:'The PMC sets it once, and every new lease gets it automatically.',
  merch:'Local spots meet every new resident.'},
 {ch:0,k:'Move-in week',ic:'truck',title:'Movers and the TV mounted, handled.',
  benefit:'Maddie books <b>movers, TV mounting and a move-in clean</b> in one chat.',
  tech:'Atlas Engine dispatches top-rated local pros, and the live concierge confirms each one.',
  merch:'Local pros get booked jobs with no ad spend.',human:true},
 {ch:1,k:'First rent',ic:'cash',title:'Rent that pays her back.',
  benefit:'On-time rent earns <b>1% back: $21.05</b>.',
  tech:'The PMS payment event triggers the credit.',
  merch:'Credits get spent at local merchants.'},
 {ch:1,k:'Groceries',ic:'cart',title:'Earn on the weekly shop.',
  benefit:'Up to <b>5% back</b> on the card she already has.',
  moment:['Credit Drop','Double earn back at Kroger: her $86 shop earns $8.64.'],
  tech:'Visa card-linked offers, with no codes or receipts.',
  merch:'Grocers pay only for incremental sales.'},
 {ch:1,k:'Gas & commute',ic:'fuel',title:'Gas Boost week.',
  benefit:'Up to <b>25¢/gal back</b>, with live prices nearby.',
  tech:'Location-aware offers on her linked Visa.',
  merch:'Fuel brands win the weekly fill-up.'},
 {ch:1,k:'Dining',ic:'fork',title:'240+ local spots, one map.',
  benefit:'Order nearby and <b>pay with credits</b>.',
  moment:['Credit Drop','$5 off any local dinner tonight.'],
  tech:'Discovery, ordering and credits run in one flow.',
  merch:'Independent restaurants reach the building next door.'},
 {ch:1,k:'Pharmacy',ic:'pill',title:'CVS becomes her pharmacy.',
  benefit:'Pickup or delivery, auto refills and <b>2% back</b>.',
  tech:'Maddie reaches out when a prescription is ready.',
  merch:'CVS wins the first prescription and keeps the habit.'},
 {ch:1,k:'Home services',ic:'spray',title:'A pro she knows by name.',
  benefit:'Every visit is <b>background checked, tracked and rated</b>.',
  tech:'Atlas Engine dispatch, live tracking and a quality check after every visit.',
  merch:'Pros get steady, recurring work.',human:true},
 {ch:2,k:'Manager gifts',ic:'wrench',opt:true,title:'A $10 thank-you after every fix.',
  benefit:'When a work order closes, <b>800 Penn’s gift goes out automatically</b>.',
  tech:'Triggered by the PMS. The PMC sets it on or off and picks the amount.',
  merch:'Gets spent at the café downstairs.'},
 {ch:2,k:'Birthday',ic:'cake',title:'Dessert’s on us.',
  benefit:'A <b>$25 birthday credit</b> arrives on the day.',
  tech:'Resident milestones set off personal gifts.',
  merch:'Local bakeries are the first stop.'},
 {ch:2,k:'Renewal',ic:'heart',title:'Thanks for staying.',
  benefit:'A <b>$100 renewal gift</b> toward her housekeeper, Anna.',
  tech:'The PMC sets it once, and it goes out when she renews.',
  merch:'Gift money stays with trusted pros.'},
 {ch:2,k:'Moving out',ic:'box',title:'A great goodbye.',
  benefit:'Move-out is handled, and <b>her credits and membership move with her</b>.',
  tech:'Her membership transfers to any partner community.',
  merch:'Best customers stay reachable in a new city.',human:true}
];
Object.assign(ICONS,{
 sofa:'<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M3 12a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3zM5 17v2M19 17v2"/>',
 pill:'<rect x="3" y="9" width="18" height="7" rx="3.5" transform="rotate(-35 12 12.5)"/><path d="M9.5 8.5l5 7"/>',
 wrench:'<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 1-5-5 4 4 0 0 1 3 3z"/>',
 cake:'<path d="M4 20h16v-7H4zM4 16c2 1.5 4 1.5 6 0s4-1.5 6 0 3 1.5 4 0M12 13V9M12 6.5V5"/>'
});

/* build rail + steps */
const rail=document.querySelector('.rail ol');
const steps=document.querySelector('.steps');
STAGES.forEach((s,i)=>{
  const first=i===0||STAGES[i-1].ch!==s.ch;
  if(first) rail.insertAdjacentHTML('beforeend',`<li class="ch" data-ch="${s.ch}">${CHAPTERS[s.ch].k}</li>`);
  rail.insertAdjacentHTML('beforeend',`<li data-i="${i}"><span class="dot">${i+1}</span>${s.k}</li>`);
  steps.insertAdjacentHTML('beforeend',`
  ${first?`<div class="m-chapter"><small>Chapter ${s.ch+1}</small><b>${CHAPTERS[s.ch].k}</b><span>${CHAPTERS[s.ch].d}</span></div>`:''}
  <article class="step" data-i="${i}" id="stage-${i+1}">
    <div class="m-label"><i>${i+1}</i>${s.k}<small>${CHAPTERS[s.ch].k}</small></div>
    <div class="m-phone"></div>
    <div class="pop">
      <span class="tag">${ic(s.ic)} ${i+1} · ${s.k}</span>${s.opt?'<span class="opt">Optional for PMCs</span>':''}
      <h3>${s.title}</h3>
      <p class="benefit">${s.benefit}</p>
      ${s.moment?`<div class="moment"><span class="mi">${ic('spark','#EC4899')}</span><div><small>${s.moment[0]}</small><p>${s.moment[1]}</p></div></div>`:''}
      <div class="how"><div class="t"><small><i></i>Tech</small><p>${s.tech}</p></div><div class="m"><small><i></i>Merchants</small><p>${s.merch}</p></div></div>
      ${s.human?`<div class="human"><span class="avs"><span style="background:var(--maddie)">M</span><span style="background:#0EA5E9">J</span><span style="background:url(assets/pro-anna.jpg) center/cover"></span></span><span class="live"></span> Live concierge checks every booking</div>`:''}
    </div>
  </article>`);
});
rail.insertAdjacentHTML('afterbegin','<span class="fill"></span>');
document.querySelectorAll('.rail li[data-i]').forEach(li=>li.addEventListener('click',()=>document.getElementById('stage-'+(+li.dataset.i+1)).scrollIntoView({behavior:'smooth',block:'center'})));

/* mobile: clone each screen into its step */
const screens=[...document.querySelectorAll('.stage-phone .screen')];
document.querySelectorAll('.step').forEach((st,i)=>{
  const holder=st.querySelector('.m-phone');
  const ph=document.createElement('div');ph.className='phone';
  const sw=document.createElement('div');sw.className='screen-wrap';
  const c=screens[i].cloneNode(true);c.classList.add('on');c.setAttribute('aria-hidden','true');
  sw.appendChild(c);ph.appendChild(sw);holder.appendChild(ph);
});

/* active stage tracking */
const railItems=[...document.querySelectorAll('.rail li[data-i]')];const chItems=[...document.querySelectorAll('.rail li.ch')];
const fill=document.querySelector('.rail .fill');
const stepEls=[...document.querySelectorAll('.step')];
const mbarTxt=document.querySelector('.mbar span');const mbarFill=document.querySelector('.mbar .pbar i');
let cur=-1;
function setStage(i){
  if(i===cur)return;cur=i;
  screens.forEach((s,j)=>s.classList.toggle('on',j===i));
  stepEls.forEach((s,j)=>s.classList.toggle('on',j===i));
  railItems.forEach((li,j)=>{li.classList.toggle('on',j===i);li.classList.toggle('done',j<i)});chItems.forEach(c=>c.classList.toggle('on',+c.dataset.ch===STAGES[i].ch));
  if(railItems[i]){const a=railItems[0].offsetTop,b=railItems[i].offsetTop;fill.style.height=(b-a)+'px'}
  mbarTxt.textContent=`${i+1}/${STAGES.length} · ${STAGES[i].k}`;
  mbarFill.style.width=((i+1)/STAGES.length*100)+'%';
}
function onScroll(){
  const mid=innerHeight*.5;let best=0,bd=1e9;
  stepEls.forEach((s,j)=>{const r=s.getBoundingClientRect();const c=r.top+r.height/2;const d=Math.abs(c-mid);if(d<bd){bd=d;best=j}});
  setStage(best);
  document.querySelector('.nav').classList.toggle('scrolled',scrollY>20);
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);
setStage(0);onScroll();

/* audience */
const AUD={
 pmc:{cta:'Book with us',faq:'pmc',url:'https://www.amenify.com/property-managers-2'},pms:{cta:'Learn more',faq:'pms',url:'https://www.amenify.com/amenify-platform'},
 merchant:{cta:'Partner with us',faq:'merchant',url:'https://amenify.ai/merchants'}
};
function setAud(a,scroll){
  document.querySelectorAll('.aud-chip').forEach(c=>c.setAttribute('aria-pressed',c.dataset.aud===a));
  document.querySelectorAll('[data-cta]').forEach(b=>{b.querySelector('.lbl').textContent=AUD[a].cta;b.dataset.aud=a;b.href=AUD[a].url;b.target='_blank';b.rel='noopener'});
  document.querySelectorAll('.cta-cards a').forEach(c=>c.classList.toggle('pick',c.dataset.aud===a));
  const hint=document.querySelector('.aud-hint');hint.hidden=false;hint.href='#faq';
  hint.querySelector('b').textContent={pmc:'property managers',pms:'software partners',merchant:'merchants'}[a];
  setTab(AUD[a].faq);
  try{localStorage.setItem('sl-aud',a)}catch(e){}
}
document.querySelectorAll('.aud-chip').forEach(c=>c.addEventListener('click',()=>setAud(c.dataset.aud)));

/* FAQ tabs */
function setTab(t){
  document.querySelectorAll('.tab').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===t));
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('on',p.id==='p-'+t));
}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
try{const s=localStorage.getItem('sl-aud');if(s&&AUD[s])setAud(s)}catch(e){}

/* reveal + counters + recap */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
  e.target.querySelectorAll?.('[data-count]').forEach(countUp)}}),{threshold:.2});
document.querySelectorAll('.rv,.recap').forEach(el=>io.observe(el));
function countUp(el){
  const end=parseFloat(el.dataset.count),dec=(el.dataset.dec|0),pre=el.dataset.pre||'',suf=el.dataset.suf||'';
  const t0=performance.now(),dur=1400;
  const fmt=v=>pre+v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=fmt(end);return}
  (function f(t){const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=fmt(end*e);if(p<1)requestAnimationFrame(f)})(t0);
}

/* confetti */
const cf=['#EC4899','#F59E0B','#2563EB','#22C55E','#7C3AED'];
document.querySelectorAll('.confetti').forEach(c=>{let h='';for(let k=0;k<22;k++){h+=`<i style="left:${(k*37)%100}%;top:${(k*53)%45}%;background:${cf[k%5]};transform:rotate(${k*29}deg)"></i>`}c.innerHTML=h});

/* hero live phone */
(function(){
  const hs=[...document.querySelectorAll('.hero-phone .hs')];let k=0;
  setInterval(()=>{hs[k].classList.remove('on');k=(k+1)%hs.length;hs[k].classList.add('on')},2800);
  const t=document.querySelector('[data-tick]'),bar=document.querySelector('.tk-bar i');
  const steps=[21.05,8.64,2.25,25,21.05,12.44,4.81,18,100];let v=0,j=0;
  function tick(){v+=steps[j%steps.length];j++;if(v>1023){v=0;j=0}
    t.textContent='$'+v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});bar.style.width=Math.min(100,v/1023*100)+'%';
    t.classList.remove('tkpop');void t.offsetWidth;t.classList.add('tkpop')}
  tick();setInterval(tick,1400);
  /* dining crossfade */
  document.querySelectorAll('.img-screen').forEach(sc=>{const l=[...sc.querySelectorAll('.hs2')];if(l.length<2)return;let i=0;
    setInterval(()=>{l[i].classList.remove('on');i=(i+1)%l.length;l[i].classList.add('on')},2600)});
})();
