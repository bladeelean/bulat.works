"use client";

import { useEffect, useRef } from "react";

const experienceData = [
  {
    name: "минцифры",
    post: "Продуктовый дизайнер",
    years: "2023 – ",
    now: true,
  },
  {
    name: "эдо «практика»",
    post: "Продуктовый дизайнер",
    years: "2021 – 2023",
  },
  {
    name: "барс груп",
    post: "UX/UI-дизайнер корпоративного портала",
    years: "2021 – 2021",
  },
  {
    name: "vexel",
    post: "UX/UI-дизайнер финансового проекта Vexel.com",
    years: "2019 – 2021",
  },
];

function StarDustCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    // ВАЖНО: alpha:true чтобы канвас мог быть прозрачным
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let drift = 0;

    const stars = Array.from({ length: 2600 }, () => ({
      x: Math.random(), // 0..1
      y: Math.random(), // 0..1
      a: 0.12 + Math.random() * 0.65,
      p: Math.random() * Math.PI * 2,
      s: 0.6 + Math.random() * 1.6,
      r: Math.random() > 0.93 ? 2 : 1, // немного крупных
    }));

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      // рисуем в CSS-пикселях
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    const drawNebulas = (t: number, w: number, h: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // Верхняя холодная дымка
      {
        const x = w * (0.52 + Math.sin(t * 0.00018) * 0.02);
        const y = h * (0.22 + Math.cos(t * 0.00014) * 0.02);
        const r = Math.min(w, h) * 0.55;

        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0.0, "rgba(200,210,220,0.14)");
        g.addColorStop(0.35, "rgba(200,210,220,0.07)");
        g.addColorStop(1.0, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // Средняя жёлтая “полоса”
      {
        const x = w * (0.50 + Math.sin(t * 0.00016) * 0.015);
        const y = h * (0.55 + Math.cos(t * 0.00012) * 0.015);
        const r = Math.min(w, h) * 0.70;

        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0.0, "rgba(190,170,40,0.16)");
        g.addColorStop(0.40, "rgba(190,170,40,0.08)");
        g.addColorStop(1.0, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.restore();
      ctx.globalCompositeOperation = "source-over";
    };

    const vignette = (w: number, h: number) => {
      // лёгкая виньетка без “чёрного фона”
      const g = ctx.createRadialGradient(
        w * 0.5, h * 0.5, Math.min(w, h) * 0.15,
        w * 0.5, h * 0.5, Math.min(w, h) * 0.95
      );
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.35)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

    const frame = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (w && h) {
        // ПРОЗРАЧНЫЙ фон
        ctx.clearRect(0, 0, w, h);

        // медленный дрейф
        drift += 0.00025;
        const dx = (drift * w) % w;
        const dy = (drift * 0.7 * h) % h;

        // туманности
        drawNebulas(t, w, h);

        // звёзды: мерцание + сдвиг
        for (const s of stars) {
          const tw = 1 - 0.55 + 0.55 * (0.5 + 0.5 * Math.sin(t * 0.0035 * s.s + s.p));
          const a = Math.max(0, Math.min(1, s.a * tw));

          const x = (((s.x * w) + dx) % w) | 0;
          const y = (((s.y * h) + dy) % h) | 0;

          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.fillRect(x, y, s.r, s.r);
        }

        vignette(w, h);
      }

      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        imageRendering: "pixelated",
        // если нужно “светиться” поверх фона — включи:
        // mixBlendMode: "screen",
      }}
    />
  );
}
