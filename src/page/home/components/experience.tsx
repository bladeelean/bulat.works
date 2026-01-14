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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let drift = 0; // общий сдвиг “поля”
    let dpr = 1;

    const stars = Array.from({ length: 2600 }, () => ({
      x: Math.random(), // 0..1
      y: Math.random(), // 0..1
      a: 0.12 + Math.random() * 0.65,
      p: Math.random() * Math.PI * 2,
      s: 0.6 + Math.random() * 1.6,
    }));

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    const frame = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (w && h) {
        // дрейф — движение будет заметно
        drift += 0.00035; // скорость (можно 0.0002..0.001)
        const dx = (drift * w) % w;
        const dy = (drift * 0.7 * h) % h;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, w, h);

        // слабая дымка
        const g = ctx.createRadialGradient(
          w * 0.5, h * 0.4, 0,
          w * 0.5, h * 0.4, Math.min(w, h) * 0.7
        );
        g.addColorStop(0, "rgba(200,210,220,0.06)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);

        // звёзды: мерцание + сдвиг
        for (const s of stars) {
          const tw = 0.45 + 0.55 * Math.sin(t * 0.004 * s.s + s.p); // заметнее
          const a = Math.max(0, Math.min(1, s.a * tw));

          const x = (((s.x * w) + dx) % w) | 0;
          const y = (((s.y * h) + dy) % h) | 0;

          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.fillRect(x, y, 1, 1);
        }
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
      style={{ imageRendering: "pixelated" }}
    />
  );
}
