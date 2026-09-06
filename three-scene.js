import * as THREE from 'three';
  import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

  const canvas = document.getElementById('sceneCanvas');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !canvas) {
    if(canvas) canvas.style.display = 'none';
  } else {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, innerWidth/innerHeight, 0.1, 100);
    camera.position.set(0, 0.15, 7.5);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearColor(0x000000, 0);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.1).texture;

    const fogColor = new THREE.Color(0xF8FAFF);
    scene.fog = new THREE.Fog(fogColor, 5, 13);

    const group = new THREE.Group();
    scene.add(group);

    function roundedRectShape(w,h,r){
      const s = new THREE.Shape();
      s.moveTo(-w/2+r,-h/2);
      s.lineTo(w/2-r,-h/2); s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);
      s.lineTo(w/2,h/2-r); s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);
      s.lineTo(-w/2+r,h/2); s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);
      s.lineTo(-w/2,-h/2+r); s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
      return s;
    }

    // ---- playful design-craft icons, drawn abstractly, never a screenshot ----
    const PAL = [0x5FBCE0, 0x4FD1A5, 0xB49CF2, 0xFF8A73, 0xF5C445, 0xFFB48F, 0x5B7CFA];
    function drawIcon(type, hex){
      const c = document.createElement('canvas');
      c.width = 320; c.height = 320;
      const x = c.getContext('2d');
      const col = '#'+hex.toString(16).padStart(6,'0');
      x.lineWidth = 6;
      if(type==='sticky'){
        x.fillStyle = col;
        x.beginPath();
        x.moveTo(30,30); x.lineTo(250,30); x.lineTo(290,70); x.lineTo(290,290); x.lineTo(30,290);
        x.closePath(); x.fill();
        x.fillStyle = 'rgba(20,20,20,0.08)';
        x.beginPath(); x.moveTo(250,30); x.lineTo(250,70); x.lineTo(290,70); x.closePath(); x.fill();
        x.strokeStyle = 'rgba(20,20,20,0.18)'; x.lineWidth=5;
        x.beginPath(); x.moveTo(64,130); x.lineTo(220,130); x.stroke();
        x.beginPath(); x.moveTo(64,170); x.lineTo(180,170); x.stroke();
      } else if(type==='swatch'){
        [0,1,2].forEach((i)=>{
          x.fillStyle = i===1 ? col : 'rgba(20,20,20,0.10)';
          x.beginPath();
          const cx = 70+i*95;
          x.moveTo(cx-40,60); x.lineTo(cx+40,60); x.quadraticCurveTo(cx+50,60,cx+50,70);
          x.lineTo(cx+50,250); x.quadraticCurveTo(cx+50,260,cx+40,260); x.lineTo(cx-40,260);
          x.quadraticCurveTo(cx-50,260,cx-50,250); x.lineTo(cx-50,70); x.quadraticCurveTo(cx-50,60,cx-40,60);
          x.fill();
        });
      } else if(type==='card'){
        x.strokeStyle = 'rgba(20,20,20,0.35)'; x.lineWidth=5;
        x.strokeRect(30,40,260,240);
        x.strokeStyle = col; x.lineWidth=10;
        x.beginPath(); x.moveTo(60,90); x.lineTo(180,90); x.stroke();
        x.strokeStyle='rgba(20,20,20,0.18)'; x.lineWidth=6;
        x.beginPath(); x.moveTo(60,140); x.lineTo(260,140); x.stroke();
        x.beginPath(); x.moveTo(60,175); x.lineTo(230,175); x.stroke();
      } else if(type==='button'){
        x.fillStyle = col;
        x.beginPath();
        x.moveTo(40,120); x.lineTo(280,120); x.quadraticCurveTo(310,120,310,160);
        x.quadraticCurveTo(310,200,280,200); x.lineTo(40,200); x.quadraticCurveTo(10,200,10,160);
        x.quadraticCurveTo(10,120,40,120);
        x.fill();
        x.fillStyle = 'rgba(255,255,255,0.85)';
        x.fillRect(120,150,80,20);
      } else if(type==='cursor'){
        x.fillStyle = col;
        x.beginPath();
        x.moveTo(60,40); x.lineTo(60,260); x.lineTo(120,205); x.lineTo(160,290);
        x.lineTo(190,275); x.lineTo(150,190); x.lineTo(230,180); x.closePath();
        x.fill();
        x.strokeStyle = 'rgba(255,255,255,0.9)'; x.lineWidth=4; x.stroke();
      } else if(type==='bezier'){
        x.strokeStyle = 'rgba(20,20,20,0.3)'; x.lineWidth=4;
        x.beginPath(); x.moveTo(40,240); x.bezierCurveTo(110,40,210,40,280,240); x.stroke();
        x.fillStyle = col;
        [[40,240],[280,240]].forEach(([px,py])=>{ x.beginPath(); x.arc(px,py,14,0,Math.PI*2); x.fill(); });
        x.strokeStyle = col; x.lineWidth=3;
        x.beginPath(); x.moveTo(40,240); x.lineTo(110,40); x.stroke();
        x.beginPath(); x.moveTo(280,240); x.lineTo(210,40); x.stroke();
        x.fillStyle='#141414';
        [[110,40],[210,40]].forEach(([px,py])=>{ x.fillRect(px-8,py-8,16,16); });
      } else if(type==='sparkle'){
        x.fillStyle = col;
        function star(cx,cy,s){
          x.beginPath();
          x.moveTo(cx,cy-s); x.quadraticCurveTo(cx+8,cy-8,cx+s,cy);
          x.quadraticCurveTo(cx+8,cy+8,cx,cy+s); x.quadraticCurveTo(cx-8,cy+8,cx-s,cy);
          x.quadraticCurveTo(cx-8,cy-8,cx,cy-s); x.closePath(); x.fill();
        }
        star(160,150,110); star(70,250,30); star(250,80,24);
      } else if(type==='pencil'){
        x.save(); x.translate(160,160); x.rotate(-0.6);
        x.fillStyle = col; x.fillRect(-24,-140,48,220);
        x.fillStyle = '#F4D9A8'; x.beginPath(); x.moveTo(-24,80); x.lineTo(24,80); x.lineTo(0,140); x.closePath(); x.fill();
        x.fillStyle = '#141414'; x.beginPath(); x.moveTo(-6,110); x.lineTo(6,110); x.lineTo(0,140); x.closePath(); x.fill();
        x.fillStyle = 'rgba(255,255,255,0.4)'; x.fillRect(-24,-140,10,220);
        x.restore();
      } else if(type==='grid'){
        x.strokeStyle = 'rgba(20,20,20,0.14)'; x.lineWidth=2;
        for(let i=0;i<=6;i++){ x.beginPath(); x.moveTo(20+i*46,20); x.lineTo(20+i*46,300); x.stroke(); }
        for(let i=0;i<=6;i++){ x.beginPath(); x.moveTo(20,20+i*46); x.lineTo(300,20+i*46); x.stroke(); }
        x.strokeStyle = col; x.lineWidth=5; x.strokeRect(66,66,138,138);
      } else if(type==='selection'){
        x.strokeStyle = col; x.lineWidth=5; x.setLineDash([14,10]);
        x.strokeRect(40,40,240,240);
        x.setLineDash([]);
        x.fillStyle = col;
        [[40,40],[280,40],[40,280],[280,280]].forEach(([px,py])=>{ x.fillRect(px-7,py-7,14,14); });
      }
      return new THREE.CanvasTexture(c);
    }

    const TYPES = ['sticky','swatch','card','button','cursor','bezier','sparkle','pencil','grid','selection'];
    const components = TYPES.map((type,i)=>{
      const hex = PAL[i % PAL.length];
      const size = 0.85 + (i%3)*0.18;
      const geo = new THREE.ExtrudeGeometry(roundedRectShape(size,size,0.1), { depth:0.035, bevelEnabled:false });
      const tex = drawIcon(type, hex);
      const mat = new THREE.MeshPhysicalMaterial({
        map:tex, transparent:true, opacity:0.92,
        roughness:0.35, metalness:0.02, clearcoat:0.5, clearcoatRoughness:0.35,
        envMapIntensity:0.8, side:THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / TYPES.length) * Math.PI * 2;
      const radius = 2.6 + (i%3)*0.5;
      const base = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle*1.4) * 1.9,
        z: -1.2 + (i%4) * 0.7,
      };
      mesh.position.set(base.x, base.y, base.z);
      mesh.rotation.z = (i%2? 1:-1) * 0.18;
      group.add(mesh);
      return { mesh, base, phase:i, hex };
    });

    // ---- lighting: bright and warm, not moody ----
    const key = new THREE.PointLight(0x5b7cfa, 3.2, 26);
    key.position.set(3,3,5);
    scene.add(key);
    const rim = new THREE.PointLight(0xfff3d6, 2.4, 26);
    rim.position.set(-3,-1,4);
    scene.add(rim);
    scene.add(new THREE.AmbientLight(0xffffff, 0.75));

    const rootEl = document.documentElement;
    const keyColor = new THREE.Color();
    function readAccent(){ return getComputedStyle(rootEl).getPropertyValue('--accent').trim() || '#5b7cfa'; }
    let targetColor = new THREE.Color(readAccent());
    setInterval(()=>{ targetColor = new THREE.Color(readAccent()); }, 200);

    let targetRotX=0, targetRotY=0, curRotX=0, curRotY=0;
    window.addEventListener('mousemove', e=>{
      targetRotY = ((e.clientX/innerWidth)*2-1) * 0.3;
      targetRotX = ((e.clientY/innerHeight)*2-1) * 0.18;
    });

    function resize(){
      camera.aspect = innerWidth/innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    }
    window.addEventListener('resize', resize);

    function sceneOpacity(){
      const heroH = document.getElementById('hero').offsetHeight;
      const f = Math.min(1, window.scrollY / (heroH*1.1));
      return 1 - f*0.6;
    }

    let t = 0;
    function animate(){
      requestAnimationFrame(animate);
      t += 0.004;

      curRotX += (targetRotX-curRotX)*0.05;
      curRotY += (targetRotY-curRotY)*0.05;
      group.rotation.x = curRotX + Math.sin(t*0.5)*0.02;
      group.rotation.y = curRotY + t*0.04;

      const scrollDrift = Math.sin(window.scrollY*0.0015);

      components.forEach((cmp,i)=>{
        cmp.mesh.position.y = cmp.base.y + Math.sin(t*0.8 + cmp.phase)*0.18 + scrollDrift*0.15;
        cmp.mesh.position.x = cmp.base.x + Math.cos(t*0.6 + cmp.phase)*0.08;
        cmp.mesh.rotation.z += Math.sin(t*0.3+cmp.phase)*0.0006;
        cmp.mesh.rotation.y = Math.sin(t*0.4+cmp.phase)*0.25;
      });

      keyColor.lerp(targetColor, 0.03);
      key.color.copy(keyColor);

      canvas.style.opacity = sceneOpacity();
      renderer.render(scene, camera);
    }
    animate();
  }
