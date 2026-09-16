const H=[
 ['The resident journey, <span class="hl">reimagined.</span>','One membership that designs their home, pays them back on rent and everyday spending, and handles everything in between.'],
 ['Every moment of home, <span class="hl">rewarded.</span>','From lease signing to move-out, Shop Local turns rent, errands and home care into money back, and happier residents who stay.'],
 ['Residents who earn, <span class="hl">stay.</span>','Rent rewards, local earn back and a live concierge, built into the apps your residents already use.'],
 ['Home, but better at <span class="hl">every step.</span>','Watch one resident’s year: 14 moments where Shop Local saves her money and time.'],
 ['Building the <span class="hl">best resident journey</span> in the world.','Follow one resident from lease signing to move-out, and see how every moment earns back.']
];
const sel=document.querySelector('#hsel');
H.forEach((h,i)=>sel.insertAdjacentHTML('beforeend',`<option value="${i}">${h[0].replace(/<[^>]+>/g,'')}</option>`));
function setH(i){document.querySelector('h1').innerHTML=H[i][0];document.querySelector('.lede').textContent=H[i][1]}
sel.addEventListener('change',e=>setH(+e.target.value));setH(0);
