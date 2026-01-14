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

    // чуть больше точек для “плотности”
    const stars = Array.from({ length: 2600 }, () => ({
      x: Math.random(),
      y: Math.random(),
      a: 0.12 + Math.random() * 0.65,
      p: Math.random() * Math.PI * 2,
      s: 0.6 + Math.random() * 1.6,
    }));

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // если контейнер вдруг 0px — не рендерим, чтобы не ломаться
      if (!w || !h) return;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      // рисуем в CSS-пикселях (удобнее)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    const frame = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (w && h) {
        ctx.clearRect(0, 0, w, h);

        // фон
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, w, h);

        // слабая дымка (как на скрине — почти незаметно)
        const g = ctx.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.4, Math.min(w, h) * 0.7);
        g.addColorStop(0, "rgba(200,210,220,0.06)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);

        // звёзды + мерцание
        for (const s of stars) {
          const tw = 0.6 + 0.4 * Math.sin(t * 0.003 * s.s + s.p);
          const a = Math.max(0, Math.min(1, s.a * tw));
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.fillRect((s.x * w) | 0, (s.y * h) | 0, 1, 1);
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

export const Experience = () => {
  return (
    <section className="relative">
      {/* ВАЖНО: контейнер с высотой и relative */}
      <div className="relative w-full overflow-hidden bg-black py-20">
        {/* фон */}
        <div className="absolute inset-0 opacity-100">
          <StarDustCanvas />
        </div>

        {/* контент поверх */}
        <div className="relative z-10 container">
          <h2 className="text-[#747C87] text-2xl font-semibold">ОПЫТ</h2>

          <div className="mt-8 text-2xl space-y-10">
            {experienceData.map((item) => (
              <div className="grid grid-cols-[12rem_1fr] gap-8" key={item.name}>
                <h3 className="font-semibold">
                  {item.years}
                  {item.now && <span className="text-[#73DC36]">н.в</span>}
                </h3>

                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-[#FFFFFF8F] mt-4 text-2xl font-medium">{item.post}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
