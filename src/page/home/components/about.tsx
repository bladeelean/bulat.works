import Image from "next/image";



export const About = () => {
    return (
        <section>
            <div className=" mt-12 container">
                <div className=" flex gap-6">
                        <Image
                            src="/page/home/photo.png"
                            alt="photo"
                            width={256}
                            height={256}
                            className=" size-32"
                        />
                    <div>
                        <h2 className=" text-5xl !leading-14 font-semibold">Меня зовут Руcлан. Я придумываю концепции продуктов, провожу аналитику, потом проектирую и рисую их своими руками. Живу в Казани</h2>
                        <h3 className=" text-[1.75rem] mt-3 font-medium">Фокус на системный дизайн и практические решения. Работаю с продуктами целиком: от пользовательских сценариев и логики до интерфейсных решений, графики, готовых к продакшену и масштабированию.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};
