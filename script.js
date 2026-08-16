/* =========================================================================
   DREAM — script principal
   -------------------------------------------------------------------------
   Portage Astro : voir README.md pour la correspondance section -> composant.
   Toutes les données ci-dessous (bios, glossaire) sont rédigées à la main,
   dans mes propres mots, à partir de faits historiques généraux — aucune
   ne provient d'une source copiée. Les poèmes eux-mêmes restent vides :
   à compléter en sourçant les textes (Wikisource, Gallica, Poetry Foundation).
   ========================================================================= */

/* ===================== DONNÉES : POÈTES ===================== */
const poets = [
  // ---- France ----
  {id:'desbordes-valmore', name:'Marceline Desbordes-Valmore', lang:'fr', born:1786, died:1859,
   bio:"Poétesse et actrice, l'une des voix les plus personnelles du lyrisme romantique français, admirée par Baudelaire et Verlaine pour la sincérité de son émotion."},
  {id:'lamartine', name:'Alphonse de Lamartine', lang:'fr', born:1790, died:1869,
   bio:"Figure fondatrice du romantisme français avec ses Méditations poétiques, mêlant élégie amoureuse et méditation sur le temps qui passe."},
  {id:'vigny', name:'Alfred de Vigny', lang:'fr', born:1797, died:1863,
   bio:"Poète de la solitude et du stoïcisme, il conçoit l'artiste comme une figure noble et incomprise, vouée à la grandeur silencieuse."},
  {id:'hugo', name:'Victor Hugo', lang:'fr', born:1802, died:1885,
   bio:"Chef de file du romantisme français, dramaturge, romancier et poète, dont la Préface de Cromwell devient le manifeste du mouvement."},
  {id:'bertrand', name:'Aloysius Bertrand', lang:'fr', born:1807, died:1841,
   bio:"Précurseur du poème en prose, il invente un romantisme fantastique et pictural qui influencera Baudelaire une génération plus tard."},
  {id:'nerval', name:'Gérard de Nerval', lang:'fr', born:1808, died:1855,
   bio:"Poète du rêve et de la mémoire, mêlant mythologie personnelle et angoisse existentielle dans une œuvre marquée par l'ésotérisme."},
  {id:'gautier', name:'Théophile Gautier', lang:'fr', born:1811, died:1872,
   bio:"D'abord fervent romantique et héros de la bataille d'Hernani, il évolue vers une esthétique de l'art pour l'art centrée sur la forme."},
  {id:'musset', name:'Alfred de Musset', lang:'fr', born:1810, died:1857,
   bio:"Poète du désenchantement et de la passion malheureuse, il incarne le « mal du siècle » dans une œuvre lyrique et ironique."},
  {id:'baudelaire', name:'Charles Baudelaire', lang:'fr', born:1821, died:1867,
   bio:"Héritier du romantisme qu'il dépasse, ouvrant avec Les Fleurs du mal la voie à la modernité poétique."},

  // ---- Grande-Bretagne ----
  {id:'barbauld', name:'Anna Lætitia Barbauld', lang:'en', born:1743, died:1825,
   bio:"Poétesse et essayiste, figure de transition entre les Lumières et le romantisme, engagée pour l'éducation et l'abolitionnisme."},
  {id:'blake', name:'William Blake', lang:'en', born:1757, died:1827,
   bio:"Poète-graveur visionnaire, il développe une mythologie personnelle mêlant innocence, expérience et critique sociale radicale."},
  {id:'anne-bronte', name:'Anne Brontë', lang:'en', born:1820, died:1849,
   bio:"La plus discrète des sœurs Brontë, romancière et poétesse au regard moral aigu sur la condition des femmes."},
  {id:'charlotte-bronte', name:'Charlotte Brontë', lang:'en', born:1816, died:1855,
   bio:"Autrice de Jane Eyre, elle prolonge dans le roman la sensibilité intérieure et passionnée héritée du romantisme."},
  {id:'emily-bronte', name:'Emily Brontë', lang:'en', born:1818, died:1848,
   bio:"Autrice des Hauts de Hurlevent et d'une poésie intense marquée par la solitude des landes du Yorkshire."},
  {id:'burns', name:'Robert Burns', lang:'en', born:1759, died:1796,
   bio:"Poète national écossais, il transforme la tradition orale et le dialecte scots en une poésie populaire et universelle."},
  {id:'carlyle', name:'Thomas Carlyle', lang:'en', born:1795, died:1881,
   bio:"Essayiste et historien, sa pensée sur le héros et l'individu influence profondément la sensibilité romantique tardive."},
  {id:'clare', name:'John Clare', lang:'en', born:1793, died:1864,
   bio:"Poète paysan, il célèbre la campagne anglaise avec une précision d'observation rare, avant de sombrer dans la maladie mentale."},
  {id:'coleridge-st', name:'Samuel Taylor Coleridge', lang:'en', born:1772, died:1834,
   bio:"Théoricien majeur du romantisme anglais, coauteur des Lyrical Ballads, poète du surnaturel et de l'imagination."},
  {id:'coleridge-hartley', name:'Hartley Coleridge', lang:'en', born:1796, died:1849,
   bio:"Fils du précédent, poète et essayiste au destin marqué par l'ombre encombrante de son père."},
  {id:'de-quincey', name:'Thomas De Quincey', lang:'en', born:1785, died:1859,
   bio:"Essayiste connu pour ses Confessions d'un mangeur d'opium anglais, à la croisée de l'autobiographie et du rêve."},
  {id:'edgeworth', name:'Maria Edgeworth', lang:'en', born:1768, died:1849,
   bio:"Romancière irlandaise, pionnière du roman régionaliste et de la littérature pour enfants à visée éducative."},
  {id:'keats', name:'John Keats', lang:'en', born:1795, died:1821,
   bio:"Mort à 25 ans, il laisse une œuvre d'une intensité rare sur la beauté, la mortalité et l'art, dont ses grandes odes."},
  {id:'lamb-charles', name:'Charles Lamb', lang:'en', born:1775, died:1834,
   bio:"Essayiste et critique, connu pour ses Essays of Elia et son adaptation de Shakespeare écrite avec sa sœur Mary."},
  {id:'lamb-mary', name:'Mary Lamb', lang:'en', born:1764, died:1847,
   bio:"Coautrice avec son frère Charles des Tales from Shakespeare, destinés à faire découvrir le dramaturge aux jeunes lecteurs."},
  {id:'maturin', name:'Charles Robert Maturin', lang:'en', born:1780, died:1824,
   bio:"Romancier gothique irlandais, auteur de Melmoth ou l'Homme errant, figure clé du roman noir romantique."},
  {id:'polidori', name:'John William Polidori', lang:'en', born:1795, died:1821,
   bio:"Médecin et écrivain, auteur de The Vampyre, texte fondateur de la figure moderne du vampire."},
  {id:'radcliffe', name:'Ann Radcliffe', lang:'en', born:1764, died:1823,
   bio:"Pionnière du roman gothique anglais, maîtresse du suspense atmosphérique et des paysages inquiétants."},
  {id:'mary-robinson', name:'Mary Robinson', lang:'en', born:1757, died:1800,
   bio:"Actrice, poétesse et romancière, figure culturelle majeure de son temps et précurseure d'une poésie sentimentale audacieuse."},
  {id:'scott', name:'Sir Walter Scott', lang:'en', born:1771, died:1832,
   bio:"Inventeur du roman historique moderne avec Waverley et Ivanhoe, il façonne durablement l'imaginaire médiéval britannique."},
  {id:'seward', name:'Anna Seward', lang:'en', born:1742, died:1809,
   bio:"Poétesse surnommée « le Cygne de Lichfield », figure de transition vers la sensibilité romantique."},
  {id:'mary-shelley', name:'Mary Shelley', lang:'en', born:1797, died:1851,
   bio:"Autrice de Frankenstein, roman fondateur qui interroge la création, la science et la responsabilité morale."},
  {id:'southey', name:'Robert Southey', lang:'en', born:1774, died:1843,
   bio:"Poète lauréat et essayiste, l'un des trois grands poètes lakistes aux côtés de Wordsworth et Coleridge."},
  {id:'wordsworth-w', name:'William Wordsworth', lang:'en', born:1770, died:1850,
   bio:"Cofondateur du romantisme anglais avec les Lyrical Ballads, chantre de la nature et de la mémoire poétique."},
  {id:'wordsworth-d', name:'Dorothy Wordsworth', lang:'en', born:1771, died:1855,
   bio:"Sœur du précédent, ses journaux intimes ont nourri et éclairé l'œuvre poétique de son frère."},
  {id:'byron', name:'Lord Byron (George Gordon)', lang:'en', born:1788, died:1824,
   bio:"Figure du poète maudit et engagé, mort en soutenant l'indépendance grecque, il incarne le « héros byronien »."},
  {id:'pb-shelley', name:'Percy Bysshe Shelley', lang:'en', born:1792, died:1822,
   bio:"Poète radical et visionnaire, défenseur d'un idéal de liberté politique et poétique absolu."},
  {id:'leigh-hunt', name:'Leigh Hunt', lang:'en', born:1784, died:1859,
   bio:"Poète et essayiste, ami et soutien de Keats et Shelley, figure centrale des cercles littéraires londoniens."},
  {id:'landor', name:'Walter Savage Landor', lang:'en', born:1775, died:1864,
   bio:"Poète et prosateur au style classique exigeant, admiré pour ses Imaginary Conversations."},
  {id:'chatterton', name:'Thomas Chatterton', lang:'en', born:1752, died:1770,
   bio:"Poète prodige mort à 17 ans ; ses faux poèmes médiévaux en font une icône du génie romantique précoce et tragique."},
  {id:'charlotte-smith', name:'Charlotte Smith', lang:'en', born:1749, died:1806,
   bio:"Poétesse et romancière, ses Elegiac Sonnets relancent la pratique du sonnet et influencent Wordsworth lui-même."},
  {id:'hemans', name:'Felicia Dorothea Hemans', lang:'en', born:1793, died:1835,
   bio:"Poétesse extrêmement populaire en son temps, connue pour ses poèmes sur l'héroïsme domestique et le sentiment patriotique."},
  {id:'landon', name:'Letitia Elizabeth Landon', lang:'en', born:1802, died:1838,
   bio:"Poétesse prolifique, connue sous les initiales « L.E.L. », figure de la poésie sentimentale victorienne naissante."},
  {id:'richardson', name:'Charlotte Richardson', lang:'en', born:null, died:null,
   bio:"Poétesse mineure du romantisme anglais ; ses dates et sa biographie restent peu documentées à ce jour."},
  {id:'crabbe', name:'George Crabbe', lang:'en', born:1754, died:1832,
   bio:"Poète du réalisme rural, il dépeint sans complaisance la vie des petites gens de la campagne anglaise."},
  {id:'hannah-more', name:'Hannah More', lang:'en', born:1745, died:1833,
   bio:"Écrivaine et réformatrice, figure de la littérature morale et éducative à la charnière du XVIIIe et du XIXe siècle."}
];

const poetById = Object.fromEntries(poets.map(p => [p.id, p]));

/* ===================== DONNÉES : THÈMES ===================== */
const themes = [
  {id:'sublime', name:'Le Sublime', x:15, y:22,
   gloss:"L'expérience esthétique de ce qui dépasse et menace, montagnes, tempêtes, immensités, où la [[sublime]] terreur se retourne en émerveillement. Théorisée par Burke puis reprise par les poètes du [[pathetic-fallacy]], elle irrigue les paysages de Wordsworth comme le grotesque hugolien.",
   poetIds:['wordsworth-w','coleridge-st','hugo','byron','mary-shelley','radcliffe']},
  {id:'imagination', name:"L'Imagination", x:38, y:14,
   gloss:"Faculté créatrice placée au sommet de la hiérarchie romantique, capable de recomposer le réel plutôt que de simplement le refléter, jusqu'à la [[reverie]] la plus libre.",
   poetIds:['coleridge-st','blake','nerval','pb-shelley','coleridge-hartley']},
  {id:'nature', name:'La Poésie de la nature', x:63, y:19,
   gloss:"Un rapport au paysage qui dépasse le simple décor [[pastoral]] : la nature devient refuge, miroir intérieur et espace de retrait face à une société en pleine industrialisation.",
   poetIds:['wordsworth-w','clare','lamartine','wordsworth-d','burns']},
  {id:'melancolie', name:'La Mélancolie', x:83, y:27,
   gloss:"Le « [[spleen]] », ce « mal du siècle » : une tristesse diffuse, parfois recherchée pour elle-même dans l'[[elegie]], qui hante aussi bien la France que l'Angleterre.",
   poetIds:['musset','keats','desbordes-valmore','charlotte-smith','landon']},
  {id:'medievalisme', name:'Le Médiévalisme', x:24, y:56,
   gloss:"Une fascination pour le Moyen Âge revisité comme âge d'or perdu ou comme décor [[gothique]], entre roman historique, cathédrales et légendes.",
   poetIds:['scott','hugo','chatterton','maturin','radcliffe']},
  {id:'hellenisme', name:"L'Hellénisme", x:50, y:64,
   gloss:"Le rêve d'une Grèce antique idéalisée porté par le [[philhellenisme]], entre beauté formelle et nostalgie d'un monde disparu.",
   poetIds:['keats','byron','gautier','leigh-hunt','landor']},
  {id:'surnaturalisme', name:'Le Surnaturalisme', x:73, y:48,
   gloss:"L'irruption du [[gothique]] et de l'occulte dans le réel : spectres et créatures deviennent les vecteurs d'une angoisse proprement moderne.",
   poetIds:['coleridge-st','mary-shelley','bertrand','polidori','maturin']},
  {id:'subjectivite', name:'La Subjectivité', x:90, y:60,
   gloss:"Le sujet [[lyrisme|lyrique]] placé au centre de l'œuvre : la confession et le [[fragment]] deviennent les lieux d'une exploration radicale du moi, jusqu'au « [[byronien|héros byronien]] ».",
   poetIds:['byron','musset','wordsworth-w','de-quincey','vigny']}
];

/* ===================== DONNÉES : GLOSSAIRE ===================== */
const glossary = {
  'sublime':{term:'Sublime', def:"Sentiment esthétique mêlant crainte et fascination face à une immensité qui dépasse l'entendement (montagne, tempête, abîme)."},
  'elegie':{term:'Élégie', def:"Poème méditatif et mélancolique, souvent consacré au deuil, à la perte ou au temps qui passe."},
  'ode':{term:'Ode', def:"Poème lyrique élevé, généralement adressé à une personne, une idée ou une chose célébrée."},
  'ballade':{term:'Ballade', def:"Poème narratif à forme répétitive, d'origine populaire, souvent teinté de mystère ou de tragédie."},
  'pastoral':{term:'Pastoral(e)', def:"Qui évoque la vie simple des bergers et de la campagne, souvent de façon idéalisée."},
  'gothique':{term:'Gothique', def:"Esthétique fascinée par le macabre, le surnaturel et les ruines médiévales."},
  'byronien':{term:'Héros byronien', def:"Figure de rebelle mélancolique, orgueilleux et marginal, inspirée de la vie et de l'œuvre de Lord Byron."},
  'philhellenisme':{term:'Philhellénisme', def:"Mouvement de soutien et d'admiration envers la Grèce antique et sa cause d'indépendance au XIXe siècle."},
  'pathetic-fallacy':{term:'Illusion pathétique', def:"Procédé qui attribue des émotions humaines aux éléments naturels (« le ciel pleure », par exemple)."},
  'reverie':{term:'Rêverie', def:"État de vagabondage mental propice à la création, cher aux poètes romantiques des deux traditions."},
  'spleen':{term:'Spleen', def:"Mélancolie profonde et sans cause précise, proche de l'ennui existentiel."},
  'sonnet':{term:'Sonnet', def:"Poème à forme fixe de quatorze vers, très prisé par les poètes romantiques anglais."},
  'lyrisme':{term:'Lyrisme', def:"Expression poétique de l'émotion et de la subjectivité du « je »."},
  'fragment':{term:'Fragment poétique', def:"Œuvre volontairement inachevée, dont l'incomplétude devient une esthétique en soi."}
};

/* ===================== ÉTAT : AVIS (session, non persistant sans PHP) ===================== */
const reviewsStore = {}; // { poetId: [ {name, rating, comment} ] }
let phpAvailable = null; // détecté au premier essai d'envoi

/* ===================== UTILITAIRES ===================== */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function lerp(a,b,t){ return a + (b-a)*t; }

/** Transforme les [[glossaire]] et [[id|libellé]] d'un texte en marqueurs de note cliquables,
 *  et renvoie {html, notes} où notes est la liste ordonnée des définitions utilisées. */
function linkifyGlossary(text){
  const notes = [];
  const html = text.replace(/\[\[([a-z-]+)(\|([^\]]+))?\]\]/g, (match, key, _p, label) => {
    const entry = glossary[key];
    if(!entry) return label || key;
    notes.push(entry);
    const n = notes.length;
    const shown = label || entry.term;
    return `${shown}<sup class="fn-marker" data-note="${n}" tabindex="0">${n}</sup>`;
  });
  return {html, notes};
}

/* ===================== CURSEUR LUMINEUX ===================== */
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
if(!reduceMotion){
  let gx=window.innerWidth/2, gy=window.innerHeight/2, cx=gx, cy=gy;
  window.addEventListener('mousemove', e=>{ gx=e.clientX; gy=e.clientY; });
  (function loop(){
    cx = lerp(cx, gx, 0.12); cy = lerp(cy, gy, 0.12);
    cursorGlow.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();
} else {
  cursorGlow.style.display = 'none';
}

/* ===================== GÉNÉRATION DES ÉTOILES ===================== */
const hero = $('#hero');
themes.forEach((theme, i)=>{
  const star = document.createElement('button');
  star.className = 'theme-star';
  star.style.left = theme.x + '%';
  star.style.top = theme.y + '%';
  star.style.animationDelay = (0.6 + i*0.08) + 's';
  star.setAttribute('aria-label', theme.name);
  star.innerHTML = `<span class="theme-label">${theme.name}</span>`;
  star.addEventListener('click', ()=>openThemePanel(theme));
  hero.appendChild(star);
});

/* ===================== PARALLAXE PHOTO ===================== */
const skyPhoto = $('#skyPhoto');
if(!reduceMotion){
  let targetX=0, targetY=0, curX=0, curY=0;
  const RANGE = 26;
  window.addEventListener('mousemove', e=>{
    const nx = (e.clientX / window.innerWidth) - 0.5;
    const ny = (e.clientY / window.innerHeight) - 0.5;
    targetX = -nx * RANGE * 2;
    targetY = -ny * RANGE * 2;
  });
  (function animateParallax(){
    curX = lerp(curX, targetX, 0.06);
    curY = lerp(curY, targetY, 0.06);
    skyPhoto.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(animateParallax);
  })();
}

/* ===================== TILT 3D SUR LES CARTES ===================== */
function attachTilt(el){
  if(reduceMotion) return;
  el.addEventListener('mousemove', e=>{
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${py*-6}deg) rotateY(${px*6}deg) translateY(-2px)`;
  });
  el.addEventListener('mouseleave', ()=>{ el.style.transform = ''; });
}

/* ===================== RÉVÉLATION AU DÉFILEMENT ===================== */
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15});

function staggerReveal(container, selector, baseDelay=60){
  Array.from(container.querySelectorAll(selector)).forEach((el, i)=>{
    el.style.transitionDelay = reduceMotion ? '0ms' : (i*baseDelay)+'ms';
    revealObserver.observe(el);
  });
}

/* ===================== PANNEAU : conteneur générique ===================== */
const overlay = $('#overlay');
const panel = $('#panel');
const panelBody = $('#panelBody');

function showPanel(){
  overlay.classList.add('open');
  panel.classList.add('open');
}
function closePanel(){
  overlay.classList.remove('open');
  panel.classList.remove('open');
}
$('#panelClose').addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
window.addEventListener('keydown', e=>{ if(e.key==='Escape') closePanel(); });

function crossfadeInto(renderFn){
  panelBody.classList.remove('visible');
  setTimeout(()=>{
    renderFn();
    attachNoteHandlers();
    requestAnimationFrame(()=> panelBody.classList.add('visible'));
  }, reduceMotion ? 0 : 180);
}

/* ---------- notes de bas de page : interactions ---------- */
function attachNoteHandlers(){
  $$('.fn-marker').forEach(marker=>{
    marker.addEventListener('click', ()=>{
      const n = marker.dataset.note;
      const noteEl = $(`.note-item[data-num="${n}"]`);
      if(!noteEl) return;
      noteEl.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'center'});
      noteEl.classList.add('highlight');
      setTimeout(()=> noteEl.classList.remove('highlight'), 1400);
    });
  });
}

function renderNotesBlock(notes){
  if(!notes.length) return '';
  const items = notes.map((n,i)=>`
    <div class="note-item" data-num="${i+1}">
      <span class="num">${i+1}.</span><strong>${n.term}</strong> — ${n.def}
    </div>`).join('');
  return `<div class="notes-block"><h4>Notes</h4>${items}</div>`;
}

/* ===================== VUE : PANNEAU THÈME ===================== */
function openThemePanel(theme){
  crossfadeInto(()=>{
    const {html, notes} = linkifyGlossary(theme.gloss);
    const poemCards = theme.poetIds.map(pid=>{
      const poet = poetById[pid];
      if(!poet) return '';
      return `
        <div class="poem-card" data-poet="${poet.id}">
          <div class="poem-head">
            <div class="who">${poet.name}<small>${poet.born ?? '?'}–${poet.died ?? '?'} · poème à associer à ce thème</small></div>
            <div class="status">texte à intégrer ↴</div>
          </div>
          <div class="bio-drawer">
            <div class="bio-drawer-inner">
              <p>${poet.bio}</p>
              ${renderReviewsHTML(poet.id)}
            </div>
          </div>
        </div>`;
    }).join('');

    panelBody.innerHTML = `
      <div class="panel-eyebrow">Thème</div>
      <h2>${theme.name}</h2>
      <p class="gloss">${html}</p>
      ${poemCards}
      ${renderNotesBlock(notes)}
    `;

    $$('.poem-head').forEach(head=>{
      head.addEventListener('click', ()=>{
        const drawer = head.nextElementSibling;
        drawer.classList.toggle('open');
      });
    });
    wireReviewForms();
    staggerReveal(panelBody, '.poem-card', 70);
  });
  showPanel();
}

/* ===================== VUE : GRILLE AUTEURS ===================== */
function openAuthorsPanel(filter='all'){
  crossfadeInto(()=>{
    const list = poets.filter(p => filter==='all' || p.lang===filter);
    const cards = list.map(p => `
      <div class="author-card" data-poet="${p.id}">
        <span class="tag ${p.lang}">${p.lang==='fr' ? 'France' : 'Grande-Bretagne'}</span>
        <h3>${p.name}</h3>
        <div class="dates">${p.born ?? '?'} – ${p.died ?? '?'}</div>
        <p>${p.bio}</p>
      </div>`).join('');

    panelBody.innerHTML = `
      <div class="panel-eyebrow">Constellation complète</div>
      <h2>Tous les auteurs</h2>
      <p class="gloss">Le corpus DREAM rassemble ${poets.length} auteurs et autrices romantiques, ${poets.filter(p=>p.lang==='fr').length} côté français et ${poets.filter(p=>p.lang==='en').length} côté britannique. Clique une carte pour lire sa biographie complète et consulter ou laisser un avis.</p>
      <div class="authors-filters">
        <button class="filter-chip ${filter==='all'?'active':''}" data-filter="all">Tous</button>
        <button class="filter-chip ${filter==='fr'?'active':''}" data-filter="fr">France</button>
        <button class="filter-chip ${filter==='en'?'active':''}" data-filter="en">Grande-Bretagne</button>
      </div>
      <div class="authors-grid">${cards}</div>
    `;

    $$('.filter-chip').forEach(chip=>{
      chip.addEventListener('click', ()=> openAuthorsPanel(chip.dataset.filter));
    });
    $$('.author-card').forEach(card=>{
      attachTilt(card);
      card.addEventListener('click', ()=> openAuthorPanel(card.dataset.poet));
    });
    staggerReveal(panelBody, '.author-card', 40);
  });
  showPanel();
}

/* ===================== VUE : FICHE AUTEUR DÉTAILLÉE ===================== */
function openAuthorPanel(poetId){
  const poet = poetById[poetId];
  if(!poet) return;
  crossfadeInto(()=>{
    panelBody.innerHTML = `
      <div class="panel-eyebrow">${poet.lang==='fr' ? 'Romantisme français' : 'Romantisme britannique'}</div>
      <h2>${poet.name}</h2>
      <p class="gloss">${poet.bio} (${poet.born ?? '?'}–${poet.died ?? '?'})</p>
      <div class="poem-card">
        <div class="poem-head">
          <div class="who">Œuvres<small>Poèmes à associer à cet auteur</small></div>
          <div class="status">texte à intégrer</div>
        </div>
      </div>
      ${renderReviewsHTML(poet.id)}
    `;
    wireReviewForms();
  });
  showPanel();
}

/* ===================== AVIS LECTEURS ===================== */
function renderReviewsHTML(poetId){
  const list = reviewsStore[poetId] || [];
  const items = list.length
    ? list.map(r => `
        <div class="review-item">
          <div class="row">
            <span class="name">${escapeHtml(r.name)}</span>
            <span class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
          </div>
          <div class="comment">${escapeHtml(r.comment)}</div>
        </div>`).join('')
    : `<div class="review-empty">Aucun avis pour l'instant — sois le premier à en laisser un.</div>`;

  return `
    <div class="reviews-block" data-reviews-for="${poetId}">
      <h4>Avis des lecteurs</h4>
      <div class="review-list">${items}</div>
      <form class="review-form" data-poet="${poetId}">
        <div class="field">
          <label>Nom</label>
          <input type="text" name="name" placeholder="Ton prénom" required maxlength="40">
        </div>
        <div class="field">
          <label>Note</label>
          <div class="star-picker" data-value="0">
            ${[1,2,3,4,5].map(n=>`<button type="button" data-star="${n}">★</button>`).join('')}
          </div>
        </div>
        <div class="field">
          <label>Commentaire</label>
          <textarea name="comment" placeholder="Ton ressenti sur cet auteur..." required maxlength="400"></textarea>
        </div>
        <button type="submit" class="submit-btn">Publier l'avis</button>
        <div class="review-notice"></div>
      </form>
    </div>`;
}

function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function wireReviewForms(){
  $$('.star-picker').forEach(picker=>{
    const buttons = Array.from(picker.querySelectorAll('button'));
    buttons.forEach(btn=>{
      btn.addEventListener('mouseenter', ()=> paintStars(buttons, +btn.dataset.star));
      btn.addEventListener('click', ()=>{
        picker.dataset.value = btn.dataset.star;
        paintStars(buttons, +btn.dataset.star);
      });
    });
    picker.addEventListener('mouseleave', ()=> paintStars(buttons, +picker.dataset.value));
  });

  $$('.review-form').forEach(form=>{
    form.addEventListener('submit', async e=>{
      e.preventDefault();
      const poetId = form.dataset.poet;
      const name = form.querySelector('[name=name]').value.trim();
      const comment = form.querySelector('[name=comment]').value.trim();
      const rating = +form.closest('.reviews-block').querySelector('.star-picker').dataset.value || 5;
      if(!name || !comment) return;

      const notice = form.querySelector('.review-notice');
      const submitBtn = form.querySelector('.submit-btn');
      submitBtn.disabled = true;

      const review = {name, rating, comment};
      const persisted = await submitReviewToServer(poetId, review);

      if(!reviewsStore[poetId]) reviewsStore[poetId] = [];
      reviewsStore[poetId].push(review);

      const block = document.querySelector(`.reviews-block[data-reviews-for="${poetId}"]`);
      if(block) block.outerHTML = renderReviewsHTML(poetId);
      wireReviewForms();

      const freshNotice = document.querySelector(`.reviews-block[data-reviews-for="${poetId}"] .review-notice`);
      if(freshNotice){
        freshNotice.textContent = persisted
          ? 'Avis enregistré.'
          : 'Avis ajouté en local (mode démo) — branche functions.php pour le rendre permanent.';
      }
    });
  });
}

function paintStars(buttons, value){
  buttons.forEach(b=> b.classList.toggle('filled', +b.dataset.star <= value));
}

/** Tente d'envoyer l'avis à functions.php (style AJAX WordPress).
 *  Retourne true si le serveur a confirmé l'enregistrement, false sinon
 *  (site ouvert en local sans backend PHP, ou route non branchée). */
async function submitReviewToServer(poetId, review){
  if(phpAvailable === false) return false;
  try{
    const body = new URLSearchParams({
      action:'dream_submit_review',
      poet_id: poetId,
      name: review.name,
      rating: review.rating,
      comment: review.comment
    });
    const res = await fetch('/wp-admin/admin-ajax.php', {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body
    });
    if(!res.ok) throw new Error('bad status');
    const data = await res.json();
    phpAvailable = !!data.success;
    return phpAvailable;
  } catch(err){
    phpAvailable = false;
    return false;
  }
}

/* ===================== NAVIGATION ===================== */
$('#navAuthors').addEventListener('click', ()=> openAuthorsPanel('all'));
