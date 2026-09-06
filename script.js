// -----------------------------------------------------------------
  // PROJECT DATA — each carries its own accent from the supporting
  // palette; hovering/scrolling near it tints the whole environment.
  // -----------------------------------------------------------------
  const PROJECTS = [
    
    { 
      
      name:"Enterprise Asset Management Platform", desc:"Unifying asset tracking and maintenance workflows for large industrial operations.",
      
      behance:"https://www.behance.net/gallery/176438715/Enterprise-Asset-Management-Platform", accent:"#5FBCE0",
      
      previewImages:["IM/P1/AMS-1.png","IM/P1/AMS-2.png","IM/P1/AMS-3.png","IM/P1/AMS-4.png","IM/P1/AMS-5.png"] 
    
    },
    
    { 
      
      name:"Enterprise CRM Platform", desc:"Redesigning core sales workflows for a ten-thousand-seat organization.",
      
      behance:"https://www.behance.net/gallery/171888937/Enterprise-CRM-Platform", accent:"#5B7CFA",
      
      previewImages:["IM/P2/ECP-1.png","IM/P2/ECP-2.png","IM/P2/ECP-3.png","IM/P2/ECP-4.png","IM/P2/ECP-5.png"] 
    
    },

    { 
      
      name:"Enterprise CRM Mobile Experience", desc:"Bringing the same CRM workflows to a fast, native-feeling mobile app.",
      
      behance:"https://www.behance.net/gallery/162247771/Enterprise-CRM-Mobile-Experience", accent:"#8FA9F5",
      
      previewImages:["IM/P3/ECME-1.png","IM/P3/ECME-2.png","IM/P3/ECME-3.png","IM/P3/ECME-4.png","IM/P3/ECME-5.png"] 
    },

    { 
      
      name:"Ecotrader — Enterprise Task Management", desc:"A trading and task platform built around clarity, trust, and fast decisions.",
      
      behance:"https://www.behance.net/gallery/252274251/Ecotrader-Enterprise-Task-Management", accent:"#4FD1A5",
      
      previewImages:["IM/P4/E-ETM-1.png","IM/P4/E-ETM-2.png","IM/P4/E-ETM-3.png","IM/P4/E-ETM-4.png","IM/P4/E-ETM-5.png"] 
    
    },

    { 
      
      name:"Performance Management System", desc:"Turning employee review cycles into a system people actually want to use.",
      
      behance:"https://www.behance.net/gallery/253148843/Performance-Management-System", accent:"#3FBF8F",
      
      previewImages:["IM/P5/PMS-1.png","IM/P5/PMS-2.png","IM/P5/PMS-3.png","IM/P5/PMS-4.png","IM/P5/PMS-5.png"] 
    
    },
    
    { 
      name:"Hubblehox — EdTech ERP Design System", desc:"A component library that brought consistency to a sprawling ERP suite.",
      
      behance:"https://www.behance.net/gallery/216502725/Hubblehox-ERP-Web-Mobile-App-Design", accent:"#B49CF2",
      
      previewImages:["IM/P6/EDTECH-1.png","IM/P6/EDTECH-2.png","IM/P6/EDTECH-3.png","IM/P6/EDTECH-4.png","IM/P6/EDTECH-5.png"] 
    
    },

    { 
      
      name:"Property & Housing Association Platform", desc:"Simplifying property governance and compliance for public-sector teams.",
      
      behance:"https://www.behance.net/gallery/252295607/Property-Housing-Association-Platform", accent:"#F5C445",
      
      previewImages:["IM/P8/P&HAP-1.png","IM/P8/P&HAP-2.png","IM/P8/P&HAP-3.png","IM/P8/P&HAP-4.png","IM/P8/P&HAP-5.png"] 
    
    },

    { 
      
      name:"Gold Loan Web & Mobile Design", desc:"A lending product designed to make credit decisions transparent.",
      
      behance:"https://www.behance.net/gallery/216508093/Gold-Loan-Web-Mobile-App-Design", accent:"#FFB48F",
      
      previewImages:["IM/P7/GL-1.png","IM/P7/GL-2.png","IM/P7/GL-3.png","IM/P7/GL-4.png","IM/P7/GL-5.png"] 
    
    },

    { 
      
      name:"GristIndia — B2B Marketplace", desc:"Connecting buyers and suppliers through a faster, more legible marketplace.",
      
      behance:"https://www.behance.net/gallery/171170989/GristIndia-B2B-Web-Application-Design", accent:"#FF8A73",
      
      previewImages:["IM/P9/GI_B2B-1.png","IM/P9/GI_B2B-2.png","IM/P9/GI_B2B-3.png","IM/P9/GI_B2B-4.png","IM/P9/GI_B2B-5.png"] 
    
    },
    
    { 
      
      name:"Architectural Website Design", desc:"An editorial site for an architecture studio, built around restraint and light.",
      
      behance:"https://www.behance.net/gallery/215989533/Architectural-Website-Design", accent:"#8E8E99",
      
      previewImages:["IM/P10/AWD-1.png","IM/P10/AWD-2.png","IM/P10/AWD-3.png","IM/P10/AWD-4.png","IM/P10/AWD-5.png"] 
    
    }
    
  ];
  const BASE_ACCENT = "#5B7CFA";
  const PALETTE = ["#5FBCE0","#4FD1A5","#B49CF2","#FF8A73","#F5C445","#FFB48F","#5B7CFA"];

  const list = document.querySelector('.project-list');
  PROJECTS.forEach((p, i) => {
    const alignRight = i % 2 === 1;
    const row = document.createElement('a');
    row.href = p.behance;
    row.target = '_blank';
    row.rel = 'noopener';
    row.className = 'project-block reveal' + (alignRight ? ' align-right' : '');
    row.dataset.accent = p.accent;
    row.dataset.index = i;
    row.dataset.images = JSON.stringify(p.previewImages);
    row.innerHTML = `
      <div class="index-label">${String(i+1).padStart(2,'0')} / ${String(PROJECTS.length).padStart(2,'0')}</div>
      <div class="ghost-num">${String(i+1).padStart(2,'0')}</div>
      <div class="content">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="meta"><span class="swatch"></span>View on Behance
          <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      <div class="thumb"><img src="${p.previewImages[0]}" alt="${p.name} preview" loading="lazy"></div>
    `;
    list.appendChild(row);
  });

  // ---- skill labels: readable contrast, subtle motion only ----
  function darkenHex(hex, amt){
    const n = parseInt(hex.slice(1),16);
    const r = Math.round(((n>>16)&255)*(1-amt));
    const g = Math.round(((n>>8)&255)*(1-amt));
    const b = Math.round((n&255)*(1-amt));
    return `rgb(${r},${g},${b})`;
  }
  // ---- workspace notes: scattered sizes/rotation/color, real depth, magnetic hover ----
  const NOTES = [
    { label:"Product Design", size:"lg", style:"sticky" },
    { label:"UX Strategy", size:"md", style:"tape" },
    { label:"Design Systems", size:"md", style:"sticky" },
    { label:"Research", size:"sm", style:"pin" },
    { label:"AI", size:"sm", style:"tape" },
    { label:"Accessibility", size:"md", style:"sticky" },
    { label:"Wireframing", size:"sm", style:"pin" },
    { label:"Prototyping", size:"md", style:"tape" },
    { label:"Design Thinking", size:"lg", style:"sticky" },
    { label:"Figma", size:"md", style:"pin featured" },
    { label:"Framer", size:"sm", style:"tape" },
    { label:"Motion", size:"sm", style:"sticky" },
    { label:"Interaction", size:"md", style:"pin" },
    { label:"Design Leadership", size:"lg", style:"tape" },
  ];
  const SIZE_MAP = {
    sm:{ pad:'12px 20px', font:'13.5px' },
    md:{ pad:'18px 26px', font:'15.5px' },
    lg:{ pad:'24px 34px', font:'18px' },
  };
  // fixed jitter sequence so the scatter is designed, not re-randomized per reload
  const JITTER = [
    {r:-4, y:6, x:0},{r:3, y:-10, x:4},{r:-2, y:14, x:-6},{r:5, y:-4, x:2},
    {r:-6, y:8, x:-3},{r:2, y:-14, x:6},{r:-3, y:2, x:0},{r:4, y:10, x:-4},
    {r:-5, y:-8, x:3},{r:3, y:4, x:-2},{r:-2, y:-6, x:5},{r:6, y:12, x:-5},
    {r:-4, y:-2, x:2},{r:2, y:6, x:-3}
  ];
  const board = document.getElementById('board');
  NOTES.forEach((n,i)=>{
    const bg = PALETTE[i % PALETTE.length];
    const j = JITTER[i % JITTER.length];
    const s = SIZE_MAP[n.size];
    const note = document.createElement('span');
    note.className = `note ${n.style}`;
    note.textContent = n.label;
    note.style.background = `${bg}26`;
    note.style.color = darkenHex(bg, 0.44);
    note.style.padding = s.pad;
    note.style.fontSize = s.font;
    note.style.margin = `${10 + j.y*0.6}px ${14 + j.x}px`;
    const baseTransform = `rotate(${j.r}deg)`;
    note.style.transform = baseTransform;
    note.style.zIndex = 10 - (i % 5);
    note.addEventListener('mousemove', e=>{
      const r = note.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width/2), dy = e.clientY - (r.top + r.height/2);
      note.style.transform = `${baseTransform} translate(${dx*0.16}px, ${dy*0.16}px) scale(1.05)`;
    });
    note.addEventListener('mouseleave', ()=>{ note.style.transform = baseTransform; });
    board.appendChild(note);
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const blocks = Array.from(document.querySelectorAll('.project-block'));

  // -----------------------------------------------------------------
  // Ambient accent state
  // -----------------------------------------------------------------
  const root = document.documentElement;
  let hoverIndex = null;

  function hexToRgb(hex){ const n = parseInt(hex.slice(1),16); return [(n>>16)&255,(n>>8)&255,n&255]; }
  function setAccentCss(hex){
    root.style.setProperty('--accent', hex);
    const [r,g,b] = hexToRgb(hex);
    root.style.setProperty('--accent-soft', `rgba(${r},${g},${b},0.35)`);
  }

  function nearestBlockIndex(){
    const center = window.scrollY + innerHeight/2;
    let best = -1, bestDist = Infinity;
    blocks.forEach((el,i)=>{
      const mid = el.offsetTop + el.offsetHeight/2;
      const d = Math.abs(mid-center);
      if(d < bestDist){ bestDist = d; best = i; }
    });
    const workEl = document.getElementById('work');
    if(window.scrollY + innerHeight/2 < workEl.offsetTop) return -1;
    return best;
  }
  function currentAccent(){
    if(hoverIndex !== null) return PROJECTS[hoverIndex].accent;
    const idx = nearestBlockIndex();
    return idx >= 0 ? PROJECTS[idx].accent : BASE_ACCENT;
  }
  function refreshAmbient(){
    setAccentCss(currentAccent());
    blocks.forEach((el,i)=> el.classList.toggle('is-active', hoverIndex===i));
  }
  window.addEventListener('scroll', refreshAmbient, {passive:true});
  refreshAmbient();
  blocks.forEach((row,i)=>{
    row.addEventListener('mouseenter', ()=>{ hoverIndex=i; refreshAmbient(); });
    row.addEventListener('mouseleave', ()=>{ hoverIndex=null; refreshAmbient(); });
  });

  // -----------------------------------------------------------------
  // Header: glass-on-scroll + active section highlight
  // -----------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  function updateHeaderState(){
    siteHeader.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', updateHeaderState, {passive:true});
  updateHeaderState();

  // parallax for atmosphere + poster type
  const blob1=document.getElementById('blob1'), blob2=document.getElementById('blob2'), blob3=document.getElementById('blob3');
  const poster1=document.getElementById('poster1'), poster2=document.getElementById('poster2'), poster3=document.getElementById('poster3');
  function applyParallax(){
    if(prefersReduced) return;
    const y = window.scrollY;
    blob1.style.transform = `translateY(${y*0.06}px)`;
    blob2.style.transform = `translateY(${y*-0.04}px)`;
    blob3.style.transform = `translateY(${y*0.02}px)`;
    poster1.style.transform = `translateY(${y*0.10}px)`;
    poster2.style.transform = `translateY(${y*0.05}px)`;
    poster3.style.transform = `translateY(${y*0.14}px)`;
  }
  window.addEventListener('scroll', applyParallax, {passive:true});
  applyParallax();

  // -----------------------------------------------------------------
  // Custom cursor + magnetism
  // -----------------------------------------------------------------
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const label = document.getElementById('cursorLabel');
  let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
  window.addEventListener('mousemove', e=>{
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });
  (function tickCursor(){
    rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(tickCursor);
  })();
  blocks.forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ ring.classList.add('project'); label.textContent='View project'; });
    el.addEventListener('mouseleave', ()=>{ ring.classList.remove('project'); label.textContent=''; });
  });
  document.querySelectorAll('[data-magnetic]').forEach(el=>{
    el.addEventListener('mouseenter', ()=> ring.classList.add('link'));
    el.addEventListener('mouseleave', ()=> ring.classList.remove('link'));
    el.addEventListener('mousemove', e=>{
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width/2), y = e.clientY - (r.top + r.height/2);
      el.style.transform = `translate(${x*0.25}px, ${y*0.35}px)`;
    });
    el.addEventListener('mouseleave', ()=>{ el.style.transform = 'translate(0,0)'; });
  });

  const heroName = document.getElementById('heroName');
  heroName.addEventListener('mouseenter', ()=>{
    const cs = getComputedStyle(heroName);
    const size = parseFloat(cs.fontSize).toFixed(0);
    const lh = (parseFloat(cs.lineHeight)/parseFloat(cs.fontSize)).toFixed(2);
    label.textContent = `${size} / ${lh} / ${cs.fontWeight}`;
    ring.classList.add('inspect');
  });
  heroName.addEventListener('mouseleave', ()=>{ ring.classList.remove('inspect'); label.textContent=''; });

  // -----------------------------------------------------------------
  // Multi-image stack gallery — sequential reveal, one card at a time.
  // Every pending step is cancelable so leaving instantly stops it.
  // -----------------------------------------------------------------
  const previewStack = document.getElementById('previewStack');
  const stackCards = Array.from(document.querySelectorAll('.stack-card'));
  const FAN = [
    {x:-96,y:-24,r:-11},
    {x:-44,y:16,r:-4},
    {x:8,y:-20,r:2},
    {x:56,y:18,r:7},
    {x:100,y:-8,r:13}
  ];
  let px = mx, py = my, tx = mx, ty = my, rotX = 0, rotY = 0, targetRotX = 0, targetRotY = 0;
  let stackTimers = [];
  let activeRowIndex = null;

  function setStackImages(images){
    stackCards.forEach((card,i)=>{
      const img = card.querySelector('img');
      img.src = images[i] || images[images.length-1] || '';
    });
  }
  function clearStackTimers(){
    stackTimers.forEach(id => clearTimeout(id));
    stackTimers = [];
  }
  // hidden, pre-animation position: near its final spot but lower, smaller, invisible
  function primeCard(i){
    const f = FAN[i];
    const card = stackCards[i];
    card.style.transition = 'none';
    card.style.transform = `translate(${f.x}px, ${f.y + 18}px) rotate(0deg) scale(0.92)`;
    card.style.opacity = '0';
    card.style.zIndex = i;
  }
  // animate one card into its final fanned position — fade + rise + rotate
  function revealCard(i){
    const f = FAN[i];
    const card = stackCards[i];
    card.style.transition = 'transform .55s cubic-bezier(0.16,1,0.3,1), opacity .45s ease-out';
    card.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${f.r}deg) scale(1)`;
    card.style.opacity = '1';
  }
  function openStackSequential(rowIndex){
    clearStackTimers();
    activeRowIndex = rowIndex;
    stackCards.forEach((_,i)=> primeCard(i));
    // force reflow so the "primed" hidden state actually commits before we animate
    void previewStack.offsetHeight;
    revealCard(0);
    let acc = 0;
    for(let i=1;i<stackCards.length;i++){
      acc += 1200 + Math.random()*300; // ~1.2–1.5s between each reveal
      const id = setTimeout(()=>{
        if(activeRowIndex === rowIndex) revealCard(i);
      }, acc);
      stackTimers.push(id);
    }
  }
  function closeStackInstant(){
    clearStackTimers();
    activeRowIndex = null;
    stackCards.forEach(card=>{
      card.style.transition = 'none';
      card.style.transform = 'translate(0,0) rotate(0deg) scale(0.85)';
      card.style.opacity = '0';
    });
  }

  blocks.forEach((row,rowIndex)=>{
    // permanent thumbnail — subtle tilt toward cursor
    const thumbEl = row.querySelector('.thumb');
    row.addEventListener('mousemove', e=>{
      if(!thumbEl) return;
      const r = row.getBoundingClientRect();
      const nx = (e.clientX - r.left)/r.width - 0.5;
      const ny = (e.clientY - r.top)/r.height - 0.5;
      thumbEl.style.transform = `perspective(700px) rotateX(${-ny*6}deg) rotateY(${nx*8}deg)`;
      targetRotY = nx * 14; targetRotX = -ny * 14;
    });
    row.addEventListener('mouseenter', ()=>{
      const images = JSON.parse(row.dataset.images || '[]');
      setStackImages(images);
      openStackSequential(rowIndex);
    });
    row.addEventListener('mouseleave', ()=>{
      closeStackInstant();
      targetRotX = 0; targetRotY = 0;
      if(thumbEl) thumbEl.style.transform = '';
    });
  });
  window.addEventListener('mousemove', e=>{ tx = e.clientX; ty = e.clientY; });
  (function tickPreview(){
    px += (tx-px)*0.12; py += (ty-py)*0.12;
    rotX += (targetRotX-rotX)*0.15; rotY += (targetRotY-rotY)*0.15;
    previewStack.style.transform = `translate(${px}px, ${py}px) perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    requestAnimationFrame(tickPreview);
  })();

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('is-in'); io.unobserve(entry.target); } });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  requestAnimationFrame(()=> document.getElementById('hero').classList.add('is-in'));
