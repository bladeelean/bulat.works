"use client";

export const Portfolio = () => {
  return (
    <section>
      <div className="mt-24 flex justify-center">
        <a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="h-[62px] rounded-[20px]
             inline-flex items-center justify-center
             px-10
             text-white text-2xl font-semibold leading-none
             bg-gradient-to-r from-[#226DFF] to-[#3A93FF]
             hover:brightness-110 transition"
>
  Посмотреть подробно в PDF
</a>
      </div>
    </section>
  );
};
