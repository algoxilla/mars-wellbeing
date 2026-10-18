"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * MARS Wellbeing — Cinematic World Canvas
 * 
 * Artistic Direction:
 * Luminous Morning Light, Realistic Alpine Mountains, Clear Turquoise River,
 * and a Large, Mature Cherry-Blossom Tree entering from the right.
 * 
 * Palette:
 * - Warm sunlight and highlights: #FFF2D8
 * - Warm ivory: #F5EEE3
 * - Light atmospheric aqua: #B9E4DD
 * - Clear turquoise: #62BDB5
 * - Mountain blue-teal: #467F88
 * - Deep teal for controlled shadows: #24454A
 * - Cherry-blossom pink: #F2B9C2
 * - Soft blossom cream: #FFF0ED
 */

/**
 * Procedural Soft Mist / Cloud Texture Generator
 * Luminous morning mist puffs using warm ivory (#F5EEE3) and light atmospheric aqua (#B9E4DD).
 */
function createCloudTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, 512, 512);

    const puffs = [
      { x: 256, y: 256, r: 175, alpha: 0.70 },
      { x: 210, y: 230, r: 135, alpha: 0.55 },
      { x: 300, y: 240, r: 145, alpha: 0.60 },
      { x: 190, y: 290, r: 125, alpha: 0.45 },
      { x: 320, y: 280, r: 130, alpha: 0.50 },
      { x: 260, y: 310, r: 115, alpha: 0.40 },
      { x: 160, y: 260, r: 85, alpha: 0.35 },
      { x: 350, y: 260, r: 90, alpha: 0.35 },
    ];

    puffs.forEach((puff) => {
      const grad = ctx.createRadialGradient(
        puff.x,
        puff.y,
        puff.r * 0.08,
        puff.x,
        puff.y,
        puff.r
      );
      grad.addColorStop(0, `rgba(255, 242, 216, ${puff.alpha * 0.95})`); // #FFF2D8 warm sunlight
      grad.addColorStop(0.35, `rgba(245, 238, 227, ${puff.alpha * 0.70})`); // #F5EEE3 warm ivory
      grad.addColorStop(0.70, `rgba(185, 228, 221, ${puff.alpha * 0.30})`); // #B9E4DD light aqua
      grad.addColorStop(1, "rgba(70, 127, 136, 0)"); // transparent fade

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(puff.x, puff.y, puff.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Procedural Cherry Blossom Cluster Texture Generator
 * Creates an authentic spray of 5-petal sakura blossoms with soft pink (#F2B9C2)
 * and cream (#FFF0ED) petals, golden stamens (#FFF2D8), and delicate botanical depth.
 */
function createBlossomClusterTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, 512, 512);

    const drawSingleFlower = (cx: number, cy: number, radius: number, rot: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      // 5 Heart-notched Petals
      for (let p = 0; p < 5; p++) {
        ctx.save();
        ctx.rotate((p * Math.PI * 2) / 5);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-radius * 0.45, -radius * 0.55, -radius * 0.50, -radius * 0.95, -radius * 0.15, -radius);
        ctx.bezierCurveTo(-radius * 0.05, -radius * 0.88, radius * 0.05, -radius * 0.88, radius * 0.15, -radius);
        ctx.bezierCurveTo(radius * 0.50, -radius * 0.95, radius * 0.45, -radius * 0.55, 0, 0);
        ctx.closePath();

        const grad = ctx.createRadialGradient(0, 0, radius * 0.1, 0, -radius * 0.6, radius * 0.9);
        grad.addColorStop(0, "rgba(224, 140, 153, 0.95)"); // Deep rose core
        grad.addColorStop(0.35, "rgba(242, 185, 194, 0.92)"); // #F2B9C2 Cherry-blossom pink
        grad.addColorStop(0.75, "rgba(255, 240, 237, 0.95)"); // #FFF0ED Soft blossom cream
        grad.addColorStop(1, "rgba(245, 238, 227, 0.98)"); // #F5EEE3 Ivory petal edge

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // Center Stamens & Pollen
      for (let s = 0; s < 10; s++) {
        const ang = (s * Math.PI * 2) / 10;
        const dist = radius * 0.28;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(ang) * dist, Math.sin(ang) * dist);
        ctx.strokeStyle = "rgba(194, 109, 83, 0.75)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(Math.cos(ang) * dist, Math.sin(ang) * dist, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#FFF2D8"; // Warm golden pollen
        ctx.fill();
      }

      // Flower Core
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.12, 0, Math.PI * 2);
      ctx.fillStyle = "#C26D53";
      ctx.fill();

      ctx.restore();
    };

    // Render an organic cluster of overlapping flowers & buds
    const flowers = [
      { x: 256, y: 256, r: 85, rot: 0.2 },
      { x: 175, y: 220, r: 70, rot: 1.1 },
      { x: 335, y: 215, r: 72, rot: 2.3 },
      { x: 220, y: 340, r: 68, rot: 3.5 },
      { x: 310, y: 330, r: 65, rot: 4.8 },
      { x: 130, y: 300, r: 52, rot: 0.7 },
      { x: 380, y: 290, r: 54, rot: 5.2 },
      { x: 256, y: 150, r: 58, rot: 2.1 },
    ];

    flowers.forEach((f) => drawSingleFlower(f.x, f.y, f.r, f.rot));
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Procedural Cherry Blossom Petal Texture Generator
 */
function createPetalTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, 128, 128);
    ctx.save();
    ctx.translate(64, 64);

    ctx.beginPath();
    ctx.moveTo(0, 46);
    ctx.bezierCurveTo(-36, 32, -42, -14, -20, -45);
    ctx.bezierCurveTo(-10, -52, -2, -45, 0, -38);
    ctx.bezierCurveTo(2, -45, 10, -52, 20, -45);
    ctx.bezierCurveTo(42, -14, 36, 32, 0, 46);
    ctx.closePath();

    const grad = ctx.createLinearGradient(0, -50, 0, 46);
    grad.addColorStop(0, "rgba(255, 240, 237, 0.95)"); // #FFF0ED
    grad.addColorStop(0.45, "rgba(242, 185, 194, 0.90)"); // #F2B9C2
    grad.addColorStop(1, "rgba(224, 155, 166, 0.85)");

    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Fast Deterministic 2D Gradient Noise Generator for Realistic Mountains
 */
function createNoise2D(seed = 42) {
  const p = new Uint8Array(512);
  for (let i = 0; i < 256; i++) p[i] = i;
  let s = seed;
  for (let i = 255; i > 0; i--) {
    s = (s * 16807 + 11) % 2147483647;
    const j = Math.abs(s) % (i + 1);
    const temp = p[i];
    p[i] = p[j];
    p[j] = temp;
  }
  for (let i = 0; i < 256; i++) p[256 + i] = p[i];

  const grads = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [0.7071, 0.7071], [-0.7071, 0.7071], [0.7071, -0.7071], [-0.7071, -0.7071],
  ];

  return function noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);

    const u = xf * xf * xf * (xf * (xf * 6 - 15) + 10);
    const v = yf * yf * yf * (yf * (yf * 6 - 15) + 10);

    const g00 = grads[p[p[X] + Y] % 12];
    const g10 = grads[p[p[X + 1] + Y] % 12];
    const g01 = grads[p[p[X] + Y + 1] % 12];
    const g11 = grads[p[p[X + 1] + Y + 1] % 12];

    const n00 = g00[0] * xf + g00[1] * yf;
    const n10 = g10[0] * (xf - 1) + g10[1] * yf;
    const n01 = g01[0] * xf + g01[1] * (yf - 1);
    const n11 = g11[0] * (xf - 1) + g11[1] * (yf - 1);

    const nx0 = n00 * (1 - u) + n10 * u;
    const nx1 = n01 * (1 - u) + n11 * u;
    return (nx0 * (1 - v) + nx1 * v) * 1.414;
  };
}

export function CinematicWorldCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;

    // =========================================================================
    // 1. SCENE, CAMERA, RENDERER
    // =========================================================================
    const scene = new THREE.Scene();

    // Luminous, clear morning atmospheric depth fog in Warm Ivory (#F5F0E7)
    const initialFogColor = new THREE.Color(0xf5f0e7);
    scene.fog = new THREE.FogExp2(initialFogColor, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      46,
      window.innerWidth / window.innerHeight,
      0.5,
      1600
    );
    camera.position.set(0, 26, 75);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35; // Luminous, uplifting morning atmosphere
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // =========================================================================
    // 2. ATMOSPHERIC SKY DOME (Luminous Morning Dawn)
    // =========================================================================
    const skyGeo = new THREE.SphereGeometry(800, 36, 28);
    skyGeo.scale(-1, 1, 1);

    const skyVertexShader = `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const skyFragmentShader = `
      varying vec3 vWorldPosition;
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 sunColor;
      uniform vec3 sunDirection;

      void main() {
        float h = normalize(vWorldPosition).y;
        float factor = clamp((h + 0.08) / 0.92, 0.0, 1.0);
        vec3 sky = mix(horizonColor, topColor, pow(factor, 0.58));

        // Radiant morning sun disc & golden aureole (#FFF2D8)
        vec3 viewDir = normalize(vWorldPosition);
        float sunDot = max(0.0, dot(viewDir, normalize(sunDirection)));
        float sunGlow = pow(sunDot, 4.5) * 0.65;
        float sunDisc = pow(sunDot, 280.0) * 1.8;

        vec3 finalColor = sky + (sunColor * sunGlow * 1.4) + (vec3(1.0, 0.98, 0.92) * sunDisc);
        gl_FragColor = vec4(finalColor, 0.25);
      }
    `;

    const skyUniforms = {
      topColor: { value: new THREE.Color(0x326e78) }, // Luminous mountain blue-teal
      horizonColor: { value: new THREE.Color(0xb9e4dd) }, // Light atmospheric aqua morning glow (#B9E4DD)
      sunColor: { value: new THREE.Color(0xfff2d8) }, // Warm sunlight (#FFF2D8)
      sunDirection: { value: new THREE.Vector3(120, 75, -160) },
    };

    const skyMat = new THREE.ShaderMaterial({
      vertexShader: skyVertexShader,
      fragmentShader: skyFragmentShader,
      uniforms: skyUniforms,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });

    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyMesh);

    // =========================================================================
    // 3. CINEMATIC DIRECTIONAL & AMBIENT LIGHTING
    // =========================================================================
    // Ambient light: lifts shadows into soft mountain blue-teal (#467F88), preventing dark patches
    const ambientLight = new THREE.AmbientLight(0x629ea6, 2.6);
    scene.add(ambientLight);

    // Directional Morning Sunlight: warm ivory (#FFF2D8) illuminating mountain slopes & river
    const sunLight = new THREE.DirectionalLight(0xfff2d8, 4.2);
    sunLight.position.set(135, 105, -55);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 480;
    sunLight.shadow.camera.left = -150;
    sunLight.shadow.camera.right = 150;
    sunLight.shadow.camera.top = 130;
    sunLight.shadow.camera.bottom = -70;
    sunLight.shadow.bias = 0.0005;
    scene.add(sunLight);

    // Horizon Fill Bounce: light atmospheric aqua (#B9E4DD) from open sky
    const horizonBounce = new THREE.DirectionalLight(0xb9e4dd, 1.8);
    horizonBounce.position.set(-90, 48, -135);
    scene.add(horizonBounce);

    // Soft Warm Rim Light for Alpine Crests (#FFF0ED)
    const rimLight = new THREE.DirectionalLight(0xfff0ed, 1.6);
    rimLight.position.set(0, 65, -290);
    scene.add(rimLight);

    // =========================================================================
    // 4. REALISTIC PROCEDURAL ALPINE MOUNTAIN RANGES & VALLEY TERRAIN
    // =========================================================================
    const baseNoise = createNoise2D(1024);
    const detailNoise = createNoise2D(4096);
    const rockNoise = createNoise2D(8192);

    // RANGE 1: Near & Middle Alpine Canyon & Valley (Realistic Rugged Crags & Knife-Edge Arêtes)
    const valleyGeo = new THREE.PlaneGeometry(420, 600, 160, 220);
    valleyGeo.rotateX(-Math.PI / 2);

    const valleyPos = valleyGeo.attributes.position;
    const valleyColors = new Float32Array(valleyPos.count * 3);

    for (let i = 0; i < valleyPos.count; i++) {
      const x = valleyPos.getX(i);
      const z = valleyPos.getZ(i);

      // Meandering River Corridor Path through the canyon
      const riverX = Math.sin(z * 0.018) * 20 + Math.cos(z * 0.045) * 6;
      const dist = Math.abs(x - riverX);

      // Riverbed Basin: natural depression where clear turquoise water rests
      const valleyFloorWidth = 20;
      const riverbedTrough = -8.95 + Math.min(1.0, dist / valleyFloorWidth) * 1.55;

      // Mountain flanks rise sharply outside the river corridor
      const valleyRise = Math.max(0, dist - 18);
      const flankFactor = Math.min(1.0, valleyRise / 80);
      const mountainFlank = Math.pow(flankFactor, 1.35) * 44;

      // Multi-Octave Ridged Fractal Noise for Authentic Alpine Geology
      // Octave 1: Major mountain massifs & sharp primary ridges
      const n1 = baseNoise(x * 0.011, z * 0.009);
      const ridge1 = Math.pow(1.0 - Math.abs(n1), 2.0) * 32.0;

      // Octave 2: Branching spurs & couloir ridges
      const n2 = detailNoise(x * 0.026 + 1.2, z * 0.022);
      const ridge2 = Math.pow(1.0 - Math.abs(n2), 1.8) * 16.0;

      // Octave 3: Crags, cirques & rock fractures
      const n3 = rockNoise(x * 0.065, z * 0.055);
      const crags = (1.0 - Math.abs(n3)) * 7.0;

      // Octave 4: Surface rock scree & strata texture
      const n4 = detailNoise(x * 0.16, z * 0.14);
      const scree = n4 * 2.8;

      // Subtle horizontal geological strata banding
      const strata = Math.sin(x * 0.04 + z * 0.03 + mountainFlank * 0.18) * 1.4;

      const mountainY = (ridge1 + ridge2 + crags + scree + strata) * flankFactor;
      let y = riverbedTrough + mountainFlank + mountainY;

      valleyPos.setY(i, y);

      // Realistic Alpine Geological Color Grading per Vertex:
      // High Summits: Alpine Snow & Frost (#FBF7EE & #9FC8CF)
      // Upper Crags: Sunlit Mountain Limestone & Dark Granite (#355057 to #789EA6)
      // Mid Slopes: Scree, Broken Shale & Alpine Tundra (#274D45 to #476970)
      // Lower Foothills: Coniferous Pine Evergreen (#17332D to #264B43)
      // Valley Riverbed: Wet River Stones & Silt (#142824 to #203B35)
      const color = new THREE.Color();
      const ridgeSharpness = (ridge1 * 0.6 + ridge2 * 0.4) * flankFactor;

      if (y > 32 || (y > 22 && ridgeSharpness > 14)) {
        const snowT = Math.min(1.0, (y - 22) / 22);
        color.set(0x9fc8cf).lerp(new THREE.Color(0xfbf7ee), snowT);
      } else if (y > 12) {
        const strataShade = Math.sin(y * 0.85 + x * 0.06) * 0.07;
        const rockT = Math.max(0.0, Math.min(1.0, (y - 12) / 20 + strataShade));
        color.set(0x355057).lerp(new THREE.Color(0x789ea6), rockT);
      } else if (y > 0) {
        const screeT = Math.max(0.0, Math.min(1.0, y / 12));
        color.set(0x274d45).lerp(new THREE.Color(0x476970), screeT);
      } else if (y > -6.0) {
        const pineT = Math.max(0.0, Math.min(1.0, (y + 6.0) / 6.0));
        color.set(0x17332d).lerp(new THREE.Color(0x264b43), pineT);
      } else {
        const shoreT = Math.max(0.0, Math.min(1.0, (y + 8.95) / 2.95));
        color.set(0x142824).lerp(new THREE.Color(0x203b35), shoreT);
      }

      valleyColors[i * 3] = color.r;
      valleyColors[i * 3 + 1] = color.g;
      valleyColors[i * 3 + 2] = color.b;
    }

    valleyGeo.setAttribute("color", new THREE.BufferAttribute(valleyColors, 3));
    valleyGeo.computeVertexNormals();

    const valleyMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.84,
      metalness: 0.08,
      flatShading: true, // Crucial for crisp, faceted rock crags and alpine mountain realism
    });

    const valleyMesh = new THREE.Mesh(valleyGeo, valleyMat);
    valleyMesh.position.set(0, 0, -80);
    valleyMesh.receiveShadow = true;
    valleyMesh.castShadow = true;
    scene.add(valleyMesh);

    // RANGE 2: Mid-Distance Mountain Flanks (Z = -220)
    const midGeo = new THREE.PlaneGeometry(540, 240, 110, 60);
    midGeo.rotateX(-Math.PI / 2);
    const midPos = midGeo.attributes.position;
    const midColors = new Float32Array(midPos.count * 3);

    for (let i = 0; i < midPos.count; i++) {
      const x = midPos.getX(i);
      const z = midPos.getZ(i);

      // Jagged Alpine Massifs with Horns & Arêtes
      const n1 = baseNoise(x * 0.012 + 5.2, z * 0.015);
      const r1 = Math.pow(1.0 - Math.abs(n1), 2.2) * 62;
      const n2 = detailNoise(x * 0.035, z * 0.030);
      const r2 = (1.0 - Math.abs(n2)) * 22;
      const rockNoiseVal = detailNoise(x * 0.09, z * 0.08) * 6;

      const y = r1 + r2 + rockNoiseVal + 6;
      midPos.setY(i, y);

      const color = new THREE.Color();
      if (y > 44) {
        const sT = Math.min(1.0, (y - 44) / 28);
        color.set(0x84abb2).lerp(new THREE.Color(0xfaf7ee), sT);
      } else if (y > 22) {
        const rT = (y - 22) / 22;
        color.set(0x3e6068).lerp(new THREE.Color(0x6e959d), rT);
      } else {
        color.set(0x234347).lerp(new THREE.Color(0x3e6068), y / 22);
      }

      midColors[i * 3] = color.r;
      midColors[i * 3 + 1] = color.g;
      midColors[i * 3 + 2] = color.b;
    }

    midGeo.setAttribute("color", new THREE.BufferAttribute(midColors, 3));
    midGeo.computeVertexNormals();

    const midMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.85,
      metalness: 0.06,
      flatShading: true,
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    midMesh.position.set(0, 10, -220);
    midMesh.receiveShadow = true;
    scene.add(midMesh);

    // RANGE 3: Far Majestic Alpine Summits (Soaring Peaks & Horns at Horizon Z = -370)
    const distantGeo = new THREE.PlaneGeometry(720, 280, 96, 52);
    distantGeo.rotateX(-Math.PI / 2);
    const distantPos = distantGeo.attributes.position;
    const distantColors = new Float32Array(distantPos.count * 3);

    for (let i = 0; i < distantPos.count; i++) {
      const x = distantPos.getX(i);
      const z = distantPos.getZ(i);

      // Soaring Alpine Massifs (Matterhorn / Mont Blanc style horns)
      const n1 = baseNoise(x * 0.008 + 12.5, z * 0.010);
      const peakHorn = Math.pow(Math.max(0, 1.0 - Math.abs(n1)), 2.6) * 115;
      const n2 = detailNoise(x * 0.024, z * 0.022);
      const crag = (1.0 - Math.abs(n2)) * 34;
      const backRidge = Math.cos(z * 0.035) * 16;

      const y = peakHorn + crag + backRidge + 10;
      distantPos.setY(i, y);

      const color = new THREE.Color();
      if (y > 60) {
        const snowLerp = Math.min(1.0, (y - 60) / 48);
        color.set(0x8cb6bd).lerp(new THREE.Color(0xfff2d8), snowLerp);
      } else if (y > 30) {
        color.set(0x446e75).lerp(new THREE.Color(0x719ea5), (y - 30) / 30);
      } else {
        color.set(0x284e54).lerp(new THREE.Color(0x446e75), y / 30);
      }

      distantColors[i * 3] = color.r;
      distantColors[i * 3 + 1] = color.g;
      distantColors[i * 3 + 2] = color.b;
    }

    distantGeo.setAttribute("color", new THREE.BufferAttribute(distantColors, 3));
    distantGeo.computeVertexNormals();

    const distantMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.88,
      metalness: 0.04,
      flatShading: true,
    });
    const distantMesh = new THREE.Mesh(distantGeo, distantMat);
    distantMesh.position.set(0, 18, -370);
    scene.add(distantMesh);

    // =========================================================================
    // 5. REALISTIC GLACIAL RIVER (Flat Turquoise Mirror Surface)
    // =========================================================================
    const riverWidth = 32;
    const riverLength = 500;
    const riverGeo = new THREE.PlaneGeometry(riverWidth, riverLength, 24, 160);
    riverGeo.rotateX(-Math.PI / 2);

    const rPos = riverGeo.attributes.position;
    for (let i = 0; i < rPos.count; i++) {
      const z = rPos.getZ(i);
      const riverCenter = Math.sin(z * 0.018) * 20 + Math.cos(z * 0.045) * 6;
      rPos.setX(i, rPos.getX(i) + riverCenter);
      rPos.setY(i, -8.35); // Horizontal mirror plane resting naturally on riverbed
    }
    riverGeo.computeVertexNormals();

    const riverMat = new THREE.MeshStandardMaterial({
      color: 0x4dbcb2, // #4DBCB2 Clear, vibrant turquoise
      roughness: 0.10, // Glossy water reflection
      metalness: 0.55, // Specular sun reflections
      transparent: true,
      opacity: 0.94,
    });
    const riverMesh = new THREE.Mesh(riverGeo, riverMat);
    riverMesh.position.set(0, 0, -80);
    scene.add(riverMesh);

    // =========================================================================
    // 6. VOLUMETRIC BILLBOARD CLOUD & MIST BANKS (Warm Ivory #F5EEE3 / Aqua #B9E4DD)
    // =========================================================================
    const cloudTexture = createCloudTexture();
    const cloudGroup = new THREE.Group();

    const cloudDefs = [
      // Foreground Mist Layers (Part gracefully as camera flies forward)
      { x: -16, y: 16, z: 45, scale: 44, opacity: 0.38 },
      { x: 22, y: 14, z: 28, scale: 48, opacity: 0.40 },
      { x: -10, y: 11, z: 2, scale: 42, opacity: 0.40 },
      { x: 15, y: 8, z: -25, scale: 46, opacity: 0.42 },

      // Mid-Valley River Mist Banks
      { x: -7, y: -3, z: 32, scale: 36, opacity: 0.45 },
      { x: 9, y: -4, z: -12, scale: 40, opacity: 0.48 },
      { x: -14, y: -3, z: -55, scale: 48, opacity: 0.45 },
      { x: 16, y: -2, z: -90, scale: 50, opacity: 0.42 },
      { x: -5, y: -3, z: -125, scale: 45, opacity: 0.48 },

      // High Mountain Pass Cloud Banks
      { x: -55, y: 30, z: -105, scale: 75, opacity: 0.50 },
      { x: 60, y: 34, z: -125, scale: 80, opacity: 0.48 },
      { x: -42, y: 36, z: -180, scale: 88, opacity: 0.52 },
      { x: 48, y: 32, z: -200, scale: 85, opacity: 0.50 },
      { x: 0, y: 40, z: -250, scale: 98, opacity: 0.55 },
    ];

    const cloudPlanes: THREE.Mesh[] = [];

    cloudDefs.forEach((def, idx) => {
      const planeGeo = new THREE.PlaneGeometry(def.scale, def.scale * 0.65);
      const planeMat = new THREE.MeshBasicMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: def.opacity,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });

      const planeMesh = new THREE.Mesh(planeGeo, planeMat);
      planeMesh.position.set(def.x, def.y, def.z);
      planeMesh.userData = {
        baseX: def.x,
        baseY: def.y,
        baseZ: def.z,
        driftSpeed: 0.12 + (idx % 4) * 0.06,
        swayPhase: idx * 0.75,
      };

      cloudPlanes.push(planeMesh);
      cloudGroup.add(planeMesh);
    });

    scene.add(cloudGroup);

    // =========================================================================
    // 7. MATURE CHERRY-BLOSSOM TREE ARCHITECTURE (Japanese Sanctuary & Environmental Grove)
    // =========================================================================
    // Positioned firmly on the right (+X), with massive organic boughs sweeping inward (-X)
    // and full, delicate sprays of genuine cherry blossoms creating a living sanctuary
    const barkMat = new THREE.MeshStandardMaterial({
      color: 0x2c3a35,
      roughness: 0.88,
      metalness: 0.08,
    });

    const blossomTexture = createBlossomClusterTexture();
    const blossomSprigMat = new THREE.MeshBasicMaterial({
      map: blossomTexture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    function buildMatureCherryTree(includeLantern: boolean = false): THREE.Group {
      const treeGroup = new THREE.Group();

      // Massive Mature Trunk: Rising from bottom right and curving gracefully inward
      const trunkCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(8, -12, 0),
        new THREE.Vector3(7, -3, -1),
        new THREE.Vector3(5, 5, -2),
        new THREE.Vector3(3, 11, -3),
      ]);
      const trunkGeo = new THREE.TubeGeometry(trunkCurve, 32, 2.4, 10, false);
      treeGroup.add(new THREE.Mesh(trunkGeo, barkMat));

      // Structural Bough 1: High Canopy Arch (Frames upper right & center)
      const bough1Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(3, 11, -3),
        new THREE.Vector3(-1, 16, -5),
        new THREE.Vector3(-7, 18, -8),
        new THREE.Vector3(-14, 16, -11),
      ]);
      const bough1Geo = new THREE.TubeGeometry(bough1Curve, 28, 1.45, 8, false);
      treeGroup.add(new THREE.Mesh(bough1Geo, barkMat));

      // Structural Bough 2: Middle Inward Branch (Reaches gracefully toward center)
      const bough2Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(4, 7, -2),
        new THREE.Vector3(0, 10, -4),
        new THREE.Vector3(-6, 9, -7),
        new THREE.Vector3(-12, 7, -10),
      ]);
      const bough2Geo = new THREE.TubeGeometry(bough2Curve, 24, 1.15, 8, false);
      treeGroup.add(new THREE.Mesh(bough2Geo, barkMat));

      // Structural Bough 3: Lower Foreground Bough (Dips gently downward)
      const bough3Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(5, 4, -2),
        new THREE.Vector3(1, 4, 0),
        new THREE.Vector3(-4, 3, 2),
        new THREE.Vector3(-9, 1, 3),
      ]);
      const bough3Geo = new THREE.TubeGeometry(bough3Curve, 20, 0.9, 8, false);
      treeGroup.add(new THREE.Mesh(bough3Geo, barkMat));

      // Structural Bough 4: Background Depth Bough (Adds layered depth)
      const bough4Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(4, 9, -3),
        new THREE.Vector3(6, 15, -7),
        new THREE.Vector3(3, 19, -12),
        new THREE.Vector3(-2, 20, -16),
      ]);
      const bough4Geo = new THREE.TubeGeometry(bough4Curve, 22, 1.0, 8, false);
      treeGroup.add(new THREE.Mesh(bough4Geo, barkMat));

      // Secondary Branch Twigs
      const twigs = [
        [new THREE.Vector3(-3, 17, -6), new THREE.Vector3(-5, 21, -8), new THREE.Vector3(-9, 23, -10)],
        [new THREE.Vector3(-8, 17, -9), new THREE.Vector3(-12, 19, -12), new THREE.Vector3(-16, 17, -14)],
        [new THREE.Vector3(-11, 15, -10), new THREE.Vector3(-15, 13, -12), new THREE.Vector3(-18, 11, -13)],
        [new THREE.Vector3(-2, 10, -5), new THREE.Vector3(-4, 13, -7), new THREE.Vector3(-7, 14, -9)],
        [new THREE.Vector3(-7, 9, -8), new THREE.Vector3(-10, 11, -10), new THREE.Vector3(-13, 10, -12)],
        [new THREE.Vector3(-1, 4, 1), new THREE.Vector3(-3, 6, 2), new THREE.Vector3(-6, 7, 1)],
        [new THREE.Vector3(-5, 2, 2), new THREE.Vector3(-8, 3, 3), new THREE.Vector3(-11, 2, 3)],
      ];

      twigs.forEach((pts) => {
        const curve = new THREE.CatmullRomCurve3(pts);
        const geo = new THREE.TubeGeometry(curve, 14, 0.45, 6, false);
        treeGroup.add(new THREE.Mesh(geo, barkMat));
      });

      // 40+ High-Density Blossom Sprig Quads distributed naturally along boughs
      const sprigPositions = [
        // High Upper Canopy
        { x: 1, y: 17, z: -5, s: 4.8, rot: 0.2 },
        { x: -2, y: 19, z: -7, s: 5.2, rot: 1.4 },
        { x: -6, y: 21, z: -9, s: 4.6, rot: 2.1 },
        { x: -9, y: 23, z: -10, s: 4.4, rot: 0.8 },
        { x: -7, y: 18, z: -8, s: 5.5, rot: 3.2 },
        { x: -12, y: 19, z: -12, s: 4.8, rot: 1.9 },
        { x: -14, y: 16, z: -11, s: 5.0, rot: 0.5 },
        { x: -16, y: 17, z: -14, s: 4.2, rot: 2.7 },
        { x: -18, y: 12, z: -13, s: 4.5, rot: 1.2 },

        // Middle Inward Canopy (Framing Center)
        { x: 2, y: 9, z: -3, s: 4.6, rot: 0.9 },
        { x: -1, y: 11, z: -5, s: 5.4, rot: 2.5 },
        { x: -4, y: 13, z: -7, s: 5.0, rot: 1.1 },
        { x: -6, y: 10, z: -7, s: 5.8, rot: 0.3 },
        { x: -7, y: 14, z: -9, s: 4.8, rot: 3.0 },
        { x: -10, y: 11, z: -10, s: 5.2, rot: 1.7 },
        { x: -11, y: 8, z: -9, s: 4.9, rot: 2.2 },
        { x: -13, y: 10, z: -12, s: 4.4, rot: 0.6 },
        { x: -15, y: 5, z: -12, s: 4.5, rot: 1.5 },

        // Lower Reaching Boughs
        { x: 3, y: 4, z: -1, s: 4.2, rot: 0.4 },
        { x: 0, y: 4, z: 1, s: 4.8, rot: 1.8 },
        { x: -3, y: 6, z: 2, s: 4.5, rot: 2.9 },
        { x: -4, y: 3, z: 2, s: 5.0, rot: 0.7 },
        { x: -6, y: 7, z: 1, s: 4.4, rot: 1.3 },
        { x: -8, y: 2, z: 3, s: 4.6, rot: 2.4 },
        { x: -11, y: 2, z: 3, s: 4.0, rot: 0.9 },

        // Background Canopy Depth
        { x: 5, y: 14, z: -6, s: 4.8, rot: 1.6 },
        { x: 4, y: 18, z: -10, s: 5.0, rot: 2.8 },
        { x: 1, y: 21, z: -14, s: 4.9, rot: 0.3 },
        { x: -3, y: 21, z: -17, s: 4.5, rot: 1.7 },
        { x: 6, y: 11, z: -5, s: 4.4, rot: 3.1 },

        // Canopy Fillers for Abundance
        { x: -3, y: 15, z: -6, s: 4.8, rot: 0.5 },
        { x: -8, y: 13, z: -8, s: 5.2, rot: 2.0 },
        { x: -5, y: 8, z: -6, s: 4.9, rot: 1.4 },
        { x: 1, y: 13, z: -4, s: 4.7, rot: 2.6 },
        { x: -10, y: 15, z: -10, s: 4.3, rot: 0.8 },
      ];

      sprigPositions.forEach((sp) => {
        const sprigGeo = new THREE.PlaneGeometry(sp.s * 2.2, sp.s * 2.2);
        const sprigMesh = new THREE.Mesh(sprigGeo, blossomSprigMat);
        sprigMesh.position.set(sp.x, sp.y, sp.z);
        sprigMesh.rotation.z = sp.rot;
        sprigMesh.rotation.x = 0.15;
        sprigMesh.rotation.y = 0.20;
        treeGroup.add(sprigMesh);
      });

      if (includeLantern) {
        // Japanese Stone Lantern (Tōrō) at the tree base
        const lanternGeo = new THREE.CylinderGeometry(0.85, 1.25, 4.8, 6);
        const lanternMat = new THREE.MeshStandardMaterial({
          color: 0x224044,
          roughness: 0.95,
          metalness: 0.05,
        });
        const lanternMesh = new THREE.Mesh(lanternGeo, lanternMat);
        lanternMesh.position.set(4, -8, -4);
        treeGroup.add(lanternMesh);

        // Warm sanctuary lantern light (#FFDFB8)
        const lanternLight = new THREE.PointLight(0xffdfb8, 2.2, 35);
        lanternLight.position.set(4, -5.5, -4);
        treeGroup.add(lanternLight);
      }

      treeGroup.visible = false;
      return treeGroup;
    }

    // 1. Nova Hikari Japanese Sanctuary Tree (Frames Chapter 02)
    const sanctuaryGroup = buildMatureCherryTree(true);
    sanctuaryGroup.position.set(25, -2, -64);
    scene.add(sanctuaryGroup);

    // 2. Environmental Responsibility Sanctuary Tree (Frames Chapter 03)
    const environmentalTreeGroup = buildMatureCherryTree(false);
    environmentalTreeGroup.position.set(25, -2, -120);
    scene.add(environmentalTreeGroup);

    // Drifting Sakura Petals (150 Individual 3D Tumbling Meshes)
    const petalTexture = createPetalTexture();
    const petalCount = 150;
    const petalPlanes: THREE.Mesh[] = [];
    const petalGroup = new THREE.Group();

    const singlePetalGeo = new THREE.PlaneGeometry(1.25, 1.55);
    const singlePetalMat = new THREE.MeshBasicMaterial({
      map: petalTexture,
      transparent: true,
      opacity: 0.90,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    for (let i = 0; i < petalCount; i++) {
      const petal = new THREE.Mesh(singlePetalGeo, singlePetalMat);
      petal.position.set(
        Math.random() * 40 - 10,
        Math.random() * 24 - 2,
        Math.random() * 100 - 130
      );
      petal.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      petal.userData = {
        speedY: 0.45 + Math.random() * 0.75,
        speedX: -0.15 - Math.random() * 0.35,
        rotSpeedX: 0.018 + Math.random() * 0.025,
        rotSpeedY: 0.012 + Math.random() * 0.022,
        rotSpeedZ: 0.014 + Math.random() * 0.020,
        swayAmp: 0.85 + Math.random() * 1.1,
        swayFreq: 0.85 + Math.random() * 1.3,
        initialY: petal.position.y,
      };

      petalPlanes.push(petal);
      petalGroup.add(petal);
    }
    petalGroup.visible = false;
    scene.add(petalGroup);

    // =========================================================================
    // 8. 3D CAMERA PATH KEYFRAMES & SYNCHRONIZED JOURNEY
    // =========================================================================
    // Calibrated precisely to document section scroll progress:
    // 0.00: Hero Arrival (Panoramic morning alpine vista)
    // 0.10: Continuum of Care (Glacial river canyon descent)
    // 0.20: Nova Hikari (Japanese cherry sanctuary framed from right)
    // 0.36: Environmental Responsibility (Nature continuum & tree framed from right)
    // 0.49: Community Circles
    // 0.62: Bengaluru Context
    // 0.72: Clinical Directory
    // 0.84: Journal Preview
    // 1.00: Return Horizon (Alpine summits)
    interface Keyframe {
      p: number;
      pos: THREE.Vector3;
      target: THREE.Vector3;
    }

    const keyframes: Keyframe[] = [
      { p: 0.00, pos: new THREE.Vector3(0, 24, 72), target: new THREE.Vector3(0, 5, 20) },
      { p: 0.10, pos: new THREE.Vector3(5, 13, 20), target: new THREE.Vector3(0, 4, -25) },
      { p: 0.20, pos: new THREE.Vector3(-2, 8.5, -46), target: new THREE.Vector3(3, 6, -66) },
      { p: 0.36, pos: new THREE.Vector3(-1, 9.5, -100), target: new THREE.Vector3(2, 6, -125) },
      { p: 0.49, pos: new THREE.Vector3(-3, 12, -145), target: new THREE.Vector3(0, 7, -195) },
      { p: 0.62, pos: new THREE.Vector3(3, 15, -188), target: new THREE.Vector3(0, 8, -238) },
      { p: 0.72, pos: new THREE.Vector3(-2, 17, -230), target: new THREE.Vector3(0, 10, -280) },
      { p: 0.84, pos: new THREE.Vector3(2, 20, -265), target: new THREE.Vector3(0, 12, -315) },
      { p: 1.00, pos: new THREE.Vector3(0, 24, -295), target: new THREE.Vector3(0, 14, -350) },
    ];

    const camPosTemp = new THREE.Vector3();
    const lookPosTemp = new THREE.Vector3();

    function evaluateCameraPath(p: number, outCam: THREE.Vector3, outLook: THREE.Vector3) {
      const clamped = Math.max(0, Math.min(1, p));
      let idx = 0;
      while (idx < keyframes.length - 1 && keyframes[idx + 1].p <= clamped) {
        idx++;
      }
      const k0 = keyframes[idx];
      const k1 = keyframes[Math.min(keyframes.length - 1, idx + 1)];
      const range = k1.p - k0.p;
      const t = range > 0 ? (clamped - k0.p) / range : 0;
      // Hermite smoothstep for C1 continuous velocity
      const smoothT = t * t * (3 - 2 * t);
      outCam.lerpVectors(k0.pos, k1.pos, smoothT);
      outLook.lerpVectors(k0.target, k1.target, smoothT);
    }

    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        targetScrollProgress = Math.max(0, Math.min(1, window.scrollY / docHeight));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener("resize", handleResize);

    // =========================================================================
    // 9. ANIMATION RENDER LOOP WITH PARALLAX & LIGHTING EVOLUTION
    // =========================================================================
    let animId: number;
    let lastTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (document.hidden) return;

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      const elapsed = now / 1000;
      lastTime = now;

      if (!prefersReducedMotion) {
        scrollProgress += (targetScrollProgress - scrollProgress) * 0.06;
      } else {
        scrollProgress = targetScrollProgress;
      }

      evaluateCameraPath(scrollProgress, camPosTemp, lookPosTemp);

      const floatY = Math.sin(elapsed * 0.5) * 0.20;
      const floatX = Math.cos(elapsed * 0.35) * 0.15;

      camera.position.set(camPosTemp.x + floatX, camPosTemp.y + floatY, camPosTemp.z);
      camera.lookAt(lookPosTemp.x, lookPosTemp.y, lookPosTemp.z);

      // Cloud Billboards face camera & drift gently
      cloudPlanes.forEach((cloud) => {
        cloud.lookAt(camera.position);

        const data = cloud.userData;
        cloud.position.x = data.baseX + Math.sin(elapsed * 0.25 + data.swayPhase) * 2.0;
        cloud.position.y = data.baseY + Math.cos(elapsed * 0.20 + data.swayPhase) * 1.0;
      });

      // Drifting Sakura Petals Physics
      petalPlanes.forEach((petal) => {
        const data = petal.userData;
        petal.position.y -= delta * data.speedY * 3.2;
        petal.position.x += data.speedX * delta * 4.0 + Math.sin(elapsed * data.swayFreq) * data.swayAmp * delta * 1.5;
        petal.position.z += Math.cos(elapsed * 0.4) * delta * 1.2;

        petal.rotation.x += data.rotSpeedX;
        petal.rotation.y += data.rotSpeedY;
        petal.rotation.z += data.rotSpeedZ;

        if (petal.position.y < -10 || petal.position.x < -15) {
          petal.position.y = 22 + Math.random() * 6;
          petal.position.x = 10 + Math.random() * 16;
          const zBase = scrollProgress > 0.26 ? -120 : -64;
          petal.position.z = zBase + Math.random() * 30 - 15;
        }
      });

      // Reversible Sanctuary Tree Visibility: Emerges gracefully in Nova Hikari & Environmental chapters
      sanctuaryGroup.visible = scrollProgress > 0.08 && scrollProgress < 0.30;
      sanctuaryGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.015;

      environmentalTreeGroup.visible = scrollProgress > 0.24 && scrollProgress < 0.48;
      environmentalTreeGroup.rotation.y = Math.sin(elapsed * 0.35 + 1.2) * 0.015;

      petalGroup.visible = scrollProgress > 0.08 && scrollProgress < 0.50;

      // Natural Environmental Color Grading: Luminous morning dawn throughout
      const currentFog = new THREE.Color(0x659ca2);
      if (scrollProgress > 0.12 && scrollProgress <= 0.45) {
        // Japanese Sanctuary & Environmental grove: warm, gentle dawn rose-aqua transition
        const t = (scrollProgress - 0.12) / 0.33;
        currentFog.lerp(new THREE.Color(0x73a8ad), t);
      } else if (scrollProgress > 0.45) {
        currentFog.lerp(new THREE.Color(0x52868d), (scrollProgress - 0.45) / 0.55);
      }

      if (scene.fog) {
        scene.fog.color.copy(currentFog);
      }
      renderer.setClearColor(0x000000, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      skyGeo.dispose();
      skyMat.dispose();
      valleyGeo.dispose();
      valleyMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      distantGeo.dispose();
      distantMat.dispose();
      riverGeo.dispose();
      riverMat.dispose();
      cloudTexture.dispose();
      blossomTexture.dispose();
      petalTexture.dispose();
      singlePetalGeo.dispose();
      singlePetalMat.dispose();
      blossomSprigMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="mars-cinematic-canvas-wrapper"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80 transition-opacity duration-1000"
    />
  );
}
