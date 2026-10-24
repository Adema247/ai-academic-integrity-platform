const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const state=S.map(()=>({released:false,sent:false}));
function go(t){$(`#tabs [data-t=${t}]`).click()}
$$('#tabs button').forEach(b=>b.onclick=()=>{$$('#tabs button,.tab').forEach(e=>e.classList.remove('on'));b.classList.add('on');$('#'+b.dataset.t).classList.add('on')});
const pill=(t,c)=>`<span class="pill ${c}">${t}</span>`;
const cls=x=>/Verified|OK|Reachable/.test(x)?'g':/Partly|Warning|Redirect|Not in/.test(x)?'y':'r';
// upload
function files(done){$('#files').innerHTML=S.map(s=>`<tr><td>${s.file}</td><td><select>${S.map(o=>`<option ${o.id==s.id?'selected':''}>${o.name}</option>`).join('')}</select></td><td>${s.lang}</td><td>${s.refs.length} refs · ${s.figs.length} figures · ${s.nums.length} numbers</td><td>${done?pill('Analysed','g'):pill('Parsed','y')}</td></tr>`).join('')}
files(false);$('#addf').onclick=()=>files(false);
$('#run').onclick=()=>{$('#prog').textContent='Queued: 4 files…';setTimeout(()=>{files(true);$('#prog').textContent='Done: 4 of 4 analysed';go('batch')},500)};
// batch
const ok=a=>a.filter(x=>/Verified|OK|Reachable/.test(x[1])).length;
function rows(){$('#rows').innerHTML=S.map(s=>{const m=s.probs.indexOf(Math.max(...s.probs));return `<tr><td><b>${s.name}</b></td><td>${s.lang}</td>
<td>${['Human','AI','AI + humanizer'][m]} ${s.probs[m]}%</td><td>${ok(s.refs)}/${s.refs.length}</td><td>${ok(s.links)}/${s.links.length}</td><td>${ok(s.figs)}/${s.figs.length}</td><td>${ok(s.nums)}/${s.nums.length}</td>
<td>${state[s.id].sent?pill('Sent','g'):state[s.id].released?pill('Approved','y'):pill('Draft','')}</td><td><button onclick="open_(${s.id})">Open</button></td></tr>`}).join('')}
rows();
// report
let cur=0,sub='refs';
const SUBS=[['refs','References'],['links','Links'],['figs','Figures & diagrams'],['nums','Calculations']];
function open_(i){cur=i;const s=S[i];$('#rh').innerHTML=`Report: ${s.file} <small>— ${s.name} · language ${s.lang}</small>`;
 $('#text').innerHTML=s.frag.map((f,k)=>`<span class="f l${f[1]}" data-k="${k}">${f[0]}</span>`).join('');
 $$('.f').forEach(e=>e.onclick=()=>{$$('.f').forEach(x=>x.classList.remove('sel'));e.classList.add('sel');const f=s.frag[e.dataset.k];$('#why').innerHTML=`<p><b>Fragment score:</b> ${['','low','medium','high'][f[1]]}</p><ul><li>${f[2]}</li></ul><p class="note">Generated from token- and style-level features.</p>`});
 $('#why').textContent='Select a highlighted fragment.';
 $('#probs').innerHTML=[['Human',0],['AI-generated',1],['AI after humanizer',2]].map(p=>`<div class="pr">${p[0]} — <b>${s.probs[p[1]]}%</b><div><i style="width:${s.probs[p[1]]}%"></i></div></div>`).join('');
 draw();go('report')}
function draw(){const s=S[cur];$('#sub').innerHTML=SUBS.map(x=>`<button class="${x[0]==sub?'on':''}" data-s="${x[0]}">${x[1]} (${ok(s[x[0]])}/${s[x[0]].length})</button>`).join('');
 $$('#sub button').forEach(b=>b.onclick=()=>{sub=b.dataset.s;draw()});
 const H={refs:['Reference','Status','Evidence'],links:['Link','Status','Detail'],figs:['Item','Status','Detail'],nums:['Item','Status','Detail']}[sub];
 $('#chk').innerHTML=`<table><thead><tr>${H.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${s[sub].length?s[sub].map(r=>`<tr><td>${r[0]}</td><td>${pill(r[1],cls(r[1]))}</td><td>${r[2]}</td></tr>`).join(''):'<tr><td colspan=3>Nothing found in this report.</td></tr>'}</tbody></table>${sub=='refs'?'<p class="note">“Not verified” means no match was found, not that the source is fabricated. Please check manually.</p>':''}`}
$('#appr').onclick=()=>{state[cur].released=true;rows();rel();alert('Approved. Go to "Release & contest" to send.')};
// release
function rel(){$('#rel').innerHTML=S.map(s=>`<tr><td><input type="checkbox" data-i="${s.id}" ${state[s.id].released&&!state[s.id].sent?'checked':''} ${state[s.id].released?'':'disabled'}></td><td>${s.name}<br><small>${s.mail}</small></td><td>${state[s.id].sent?pill('Sent','g'):state[s.id].released?pill('Approved','y'):pill('Not approved','')}</td></tr>`).join('');
 $('#crep').innerHTML=S.map(s=>`<option>${s.file}</option>`).join('')}
rel();
$('#send').onclick=()=>{const c=$$('#rel input:checked');c.forEach(x=>state[x.dataset.i].sent=true);$('#sentn').textContent=c.length?`Sent ${c.length} individual report(s). Each student receives only their own report.`:'Nothing selected. Approve reports first.';rel();rows()};
$('#csend').onclick=()=>{const t=$('#ctext').value.trim();if(!t)return;$('#clog').insertAdjacentHTML('afterbegin',`<li><b>${$('#crep').value}</b> — "${t.slice(0,70)}" → <i>waiting for instructor</i></li>`);$('#ctext').value=''};
open_(0);go('upload');
