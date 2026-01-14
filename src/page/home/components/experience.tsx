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
]
"use client";

import { useEffect, useRef } from "react";

export default function StarDustCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const stars = Array.from({ length: 2000 }, () => ({
      x: Math.random(),
      y: Math.random(),
      a: 0.15 + Math.random() * 0.6,
      p: Math.random() * Math.PI * 2,
      s: 0.5 + Math.random() * 1.5,
    }));

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = canvas.clientWidth || 800;
      const h = canvas.clientHeight || 400;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    const frame = (t: number) => {
      const w = canvas.clientWidth || 800;
      const h = canvas.clientHeight || 400;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      // лёгкая дымка в центре
      const g = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, Math.min(w, h) * 0.6);
      g.addColorStop(0, "rgba(200,210,220,0.06)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // звёзды с мерцанием
      for (const s of stars) {
        const tw = 0.6 + 0.4 * Math.sin(t * 0.003 * s.s + s.p);
        const a = Math.max(0, Math.min(1, s.a * tw));
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect((s.x * w) | 0, (s.y * h) | 0, 1, 1);
      }

      raf = requestAnimationFrame(frame);
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

export const Experience = () => {
    return (
        <section>
            <div className=" container mt-20">
                <h2 className=" text-[#747C87] text-2xl font-semibold">ОПЫТ</h2>
                <div className=" mt-8 text-2xl space-y-10">
                    {experienceData.map((item) => (
                        <div className="grid grid-cols-[12rem_1fr] gap-8" key={item.name}>
                            <h3 className=" font-semibold ">{item.years}{item.now && <span className=" text-[#73DC36]">н.в</span>}</h3>
                            <div>
                                <p className=" font-semibold ">{item.name}</p>
                                <p className=" text-[#FFFFFF8F] mt-4 text-2xl font-medium">{item.post}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
