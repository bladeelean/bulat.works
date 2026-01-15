"use client";

export const Portfolio = () => {
  return (
    <section>
      <div className="mt-24 flex justify-center">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[249px] h-[62px] rounded-[20px] bg-[#226DFF]
           flex items-center justify-center
           text-white text-xl font-semibold
           hover:opacity-90 transition"
        >
          Посмотреть подробно в PDF
        </a>
      </div>
    </section>
  );
};
