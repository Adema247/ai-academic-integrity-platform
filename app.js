const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// ---- tabs / role
$$('#tabs button').forEach(b=>b.onclick=()=>{$$('#tabs button,.tab').forEach(e=>e.classList.remove('on'));b.classList.add('on');$('#'+b.dataset.t).classList.add('on')});
$('#role').onchange=()=>{$('#decide').hidden=$('#role').value!=='Instructor'||!pending};
// ---- projects
const P=[["Smart Campus Bot","A. Insyrova, D. Adema, M. K.","GitHub, Docs",0.31,"Uneven","y"],
["Library Queue App","T. S., N. B., R. K.","GitHub",0.12,"Balanced","g"],
["Essay: AI ethics (group)","K. M., L. D.","Docs, upload",0.64,"Uneven","r"]];
$('#projects').innerHTML=P.map(p=>`<tr><td><b>${p[0]}</b></td><td>${p[1]}</td><td>${p[2]}</td>
<td><span class="pill ${p[3]>.5?'r':p[3]>.25?'y':'g'}">${Math.round(p[3]*100)}% · ${p[3]>.5?'high':p[3]>.25?'medium':'low'}</span></td>
<td><span class="pill ${p[5]}">${p[4]}</span></td><td><button onclick="go('check')">Open report</button></td></tr>`).join('');
function go(t){$(`#tabs [data-t=${t}]`).click()}
// ---- text check
const F=[["Artificial intelligence has fundamentally transformed the landscape of modern education. ",3,"Typical LLM opener; generic claim without a source. Low lexical variety in the sentence (stylometry)."],
["In my own experience at the university, I noticed that deadlines often push students toward shortcuts. ",1,"Personal detail and informal rhythm. Weak signal only; style is consistent with the student's earlier texts."],
["Furthermore, it is imperative to underscore that responsible integration necessitates transparent guidelines. ",3,"Dense connectors and rare formal words in a row. Large difference from the normalised version of the sentence, a pattern typical for humanizer output."],
["Kazakhstani universities, for example, are only beginning to discuss such rules. ",2,"Mixed signals: concrete local context (human-like) but a smooth, template-like structure. Treat as uncertain."],
["Overall, a balanced approach ensures both innovation and academic integrity. ",3,"Closing cliché; high model-based likelihood. Note: academic style alone can look like AI text, so this is evidence, not proof."]];
$('#text').innerHTML=F.map((f,i)=>`<span class="f l${f[1]}" data-i="${i}">${f[0]}</span>`).join('');
$$('.f').forEach(e=>e.onclick=()=>{$$('.f').forEach(x=>x.classList.remove('sel'));e.classList.add('sel');const f=F[e.dataset.i];
$('#why').innerHTML=`<p><b>Fragment score:</b> ${['','low','medium','high'][f[1]]}</p><ul><li>${f[2]}</li></ul><p class="note">Explanation is generated from token- and style-level features.</p>`});
const PR=[["Human",22],["AI-generated",31],["AI after humanizer",47]];
$('#probs').innerHTML=PR.map(p=>`<div class="pr">${p[0]} — <b>${p[1]}%</b><div><i style="width:${p[1]}%"></i></div></div>`).join('');
// ---- contribution
const U=[["Alina",[3,5,8,6,9,4],"#3b6e8f"],["Adema",[4,6,7,9,8,5],"#e9a23b"],["Teammate 3",[1,0,2,1,0,1],"#9b6bb0"]];
const tot=U.map(u=>u[1].reduce((a,b)=>a+b,0)),sum=tot.reduce((a,b)=>a+b,0);
$('#bars').innerHTML=U.map((u,i)=>`<div class="bar"><span>${u[0]}</span><div><i style="width:${tot[i]/sum*100}%;background:${u[2]}"></i></div><b>${Math.round(tot[i]/sum*100)}%</b></div>`).join('')+
'<p class="note">Weights: commits by size and review, pull requests, doc edits, uploads. Click "Contribution" in a real build to see per-event evidence.</p>';
$('#timeline').innerHTML=[0,1,2,3,4,5].map(w=>`<div class="wk">${U.map(u=>`<i style="height:${u[1][w]*10}%;background:${u[2]}" title="${u[0]}: ${u[1][w]}"></i>`).join('')}</div>`).join('');
$('#tlnames').innerHTML=U.map(u=>`<span class="hl" style="background:${u[2]}"></span>${u[0]}`).join(' ');
$('#cnote').textContent='Flag: Teammate 3 has 6% of weighted activity. This is a signal for a conversation, not a grade.';
// ---- contest
let pending=false;
$('#csend').onclick=()=>{const t=$('#ctext').value.trim();if(!t)return;
$('#clog').insertAdjacentHTML('afterbegin',`<li id="newc"><b>${$('#crep').value}</b> — contested: "${t.slice(0,80)}" → <i>waiting for instructor</i></li>`);$('#ctext').value='';pending=true;$('#role').onchange()};
$$('#decide button').forEach(b=>b.onclick=()=>{$('#newc i').textContent='instructor decision: '+b.dataset.d;pending=false;$('#decide').hidden=true});
