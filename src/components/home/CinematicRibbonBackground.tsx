"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function CinematicRibbonBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasWebGL(false);
      return;
    }

    const glContext =
      canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        powerPreference: "high-performance",
      }) ||
      (canvas.getContext(
        "experimental-webgl"
      ) as WebGLRenderingContext | null);

    if (!glContext) {
      setHasWebGL(false);
      return;
    }
    const gl: WebGLRenderingContext = glContext;

    const vsSource = `
      attribute vec2 a_pos;
      void main() {
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      mat2 rot(float a) {
        float s = sin(a), c = cos(a);
        return mat2(c, -s, s, c);
      }

      // Smooth SDF for flowing, sculptural, glossy black forms
      float sdRibbon(vec3 p, float t) {
        p.y -= 0.12;
        p.x += 0.15;
        p.xy *= rot(0.22);

        // Primary flowing ribbon loop
        float twist1 = p.x * 0.42 + p.y * 0.32 + t * 0.35;
        vec3 q1 = p;
        q1.yz *= rot(twist1);
        vec2 d1 = abs(vec2(length(q1.xy) - 1.75, q1.z)) - vec2(0.38, 0.04);
        float loop1 = length(max(d1, 0.0)) + min(max(d1.x, d1.y), 0.0) - 0.025;

        // Secondary counter-flowing loop
        vec3 q2 = p;
        q2.xz *= rot(1.15 + t * 0.22);
        q2.y += sin(q2.x * 0.75 + t * 0.4) * 0.35;
        vec2 d2 = abs(vec2(length(q2.xz) - 1.95, q2.y)) - vec2(0.26, 0.035);
        float loop2 = length(max(d2, 0.0)) + min(max(d2.x, d2.y), 0.0) - 0.025;

        // Third delicate accent ribbon
        vec3 q3 = p;
        q3.xy *= rot(-0.55 + t * 0.15);
        q3.z += cos(q3.y * 0.9 + t * 0.3) * 0.25;
        vec2 d3 = abs(vec2(length(q3.yz) - 2.1, q3.x)) - vec2(0.18, 0.025);
        float loop3 = length(max(d3, 0.0)) + min(max(d3.x, d3.y), 0.0) - 0.02;

        return min(min(loop1, loop2), loop3);
      }

      vec3 calcNormal(vec3 p, float t) {
        float h = 0.001;
        return normalize(vec3(
          sdRibbon(p + vec3(h, 0, 0), t) - sdRibbon(p - vec3(h, 0, 0), t),
          sdRibbon(p + vec3(0, h, 0), t) - sdRibbon(p - vec3(0, h, 0), t),
          sdRibbon(p + vec3(0, 0, h), t) - sdRibbon(p - vec3(0, 0, h), t)
        ));
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        float t = u_time * 0.22;

        vec3 ro = vec3(0.0, 0.0, 4.2);
        vec3 rd = normalize(vec3(uv, -1.65));

        float d = 0.0;
        float dMax = 10.0;
        float hit = -1.0;

        for (int i = 0; i < 70; i++) {
          vec3 p = ro + rd * d;
          float dist = sdRibbon(p, t);
          if (dist < 0.002) {
            hit = d;
            break;
          }
          d += dist * 0.78;
          if (d > dMax) break;
        }

        vec3 col = vec3(0.002, 0.003, 0.005);

        // Central warm copper / amber lighting sweet spot (concentrated behind Coming soon!)
        float centerDist = length(uv - vec2(0.0, 0.14));
        float centerGlow = exp(-centerDist * 3.2) * 0.32;
        col += vec3(0.96, 0.45, 0.14) * centerGlow;

        // Faint secondary ambient aura
        float softAura = exp(-centerDist * 1.8) * 0.08;
        col += vec3(0.7, 0.25, 0.08) * softAura;

        if (hit > 0.0) {
          vec3 p = ro + rd * hit;
          vec3 n = calcNormal(p, t);
          vec3 v = -rd;

          // Deep metallic obsidian material
          vec3 baseColor = vec3(0.015, 0.018, 0.022);

          // Specular highlights: diffused cool-white light passing across curved surfaces
          vec3 l1 = normalize(vec3(1.0, 2.2, 2.8));
          vec3 h1 = normalize(l1 + v);
          float spec1 = pow(max(dot(n, h1), 0.0), 40.0);
          float diff1 = max(dot(n, l1), 0.0) * 0.25;

          // Warm copper and amber highlights along selected edges and folds
          vec3 lCopper = normalize(vec3(-0.9, -0.1, 1.4));
          float rim = pow(1.0 - max(dot(n, v), 0.0), 3.5);
          float copperIntensity = max(dot(n, lCopper), 0.0) * 0.5 + rim * 0.85;
          vec3 copperCol = vec3(1.0, 0.54, 0.18) * copperIntensity;

          // Midnight blue reflections on shadowed under-curves
          vec3 lBlue = normalize(vec3(0.0, -2.5, -0.8));
          float blueFresnel = pow(1.0 - max(dot(n, v), 0.0), 4.5) * 0.55;
          vec3 blueCol = vec3(0.08, 0.18, 0.38) * blueFresnel;

          col = baseColor + diff1 * vec3(0.18) + spec1 * vec3(1.0, 0.98, 0.95) * 0.95 + copperCol + blueCol;

          // Depth fog
          float fog = smoothstep(5.8, 1.8, hit);
          col *= fog;
        }

        // Vignette: fading seamlessly to pitch black at all edges
        float vig = 1.0 - smoothstep(0.45, 1.35, length(uv * vec2(0.92, 1.1)));
        col *= vig;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(ctx: WebGLRenderingContext, type: number, src: string) {
      const s = ctx.createShader(type);
      if (!s) return null;
      ctx.shaderSource(s, src);
      ctx.compileShader(s);
      if (!ctx.getShaderParameter(s, ctx.COMPILE_STATUS)) {
        ctx.deleteShader(s);
        return null;
      }
      return s;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, vsSource);
    const fs = compile(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) {
      setHasWebGL(false);
      return;
    }

    const prog = gl.createProgram();
    if (!prog) {
      setHasWebGL(false);
      return;
    }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setHasWebGL(false);
      return;
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(prog);
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uTime = gl.getUniformLocation(prog, "u_time");

    let animId: number;
    const startTime = performance.now();
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let lastTime = performance.now();
    let elapsed = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    window.addEventListener("resize", resize);
    resize();
    setIsReady(true);

    const render = (now: number) => {
      if (isVisible) {
        const delta = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;
        elapsed += delta;

        gl.useProgram(prog);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, elapsed);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none bg-black">
      {/* 1. Static Poster Image (SSR and initial render fallback) */}
      <Image
        src="/images/coming-soon-3d-bg.jpg"
        alt="Mars Wellbeing 3D flowing sculptural curves"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center scale-[1.02] transition-opacity duration-1000 ${
          isReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 2. Real-time Native WebGL Shader Canvas with continuous organic motion */}
      {hasWebGL ? (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        /* Video Fallback if WebGL is unavailable */
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/coming-soon-3d-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/coming-soon-ribbons.mp4" type="video/mp4" />
        </video>
      )}

      {/* 3. Central Warm Copper / Amber Focal Sweet Spot Glow behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 680px 340px at 50% 36%, rgba(245, 110, 20, 0.22) 0%, rgba(220, 75, 15, 0.08) 38%, rgba(0, 0, 0, 0) 72%)",
        }}
      />

      {/* 4. Peripheral Vignette Gradients for High Legibility & Pitch-Black Bleed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
