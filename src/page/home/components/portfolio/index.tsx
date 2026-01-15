"use client";

export const Portfolio = () => {
  return (
    <section>
      <div className="mt-24 flex justify-center">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-xl font-semibold
                     bg-white/10 hover:bg-white/15
        >
          Посмотреть подробно в PDF
        </a>
      </div>
    </section>
  );
};
