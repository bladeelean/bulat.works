import Image from "next/image";



export const Welcome = () => {
    return (
        <section>
            <div className="container pt-36">
                <p className=" w-fit text-2xl font-semibold text-gradient-welcome ">Sr. Product designer,  6+ лет опыта</p>
                <div className=" flex gap-10">
                    <div>
                        <p className=" text-[2.65rem] leading-14 font-semibold mt-8">Привет, я Руслан — креативный продуктовый дизайнер. Запускал и принимал участие в двух продуктах с миллионной аудиторией. Участвовал в разработке крупной дизайн-системы.</p>
                        <p className=" text-2xl  font-medium  text-[#FFFFFF8F] mt-3">Фокусируюсь на системный дизайн и практические решения. Работаю с продуктами целиком: от пользовательских сценариев и логики до интерфейсных решений, готовых <br/>к продакшену и масштабированию.  </p>
                    </div>
                    <Image
                        className=" size-36"
                        src={"/page/home/photo.png"}
                        alt=""
                        width={512}
                        height={512}
                    />
                </div>
            </div>            
        </section>
    );
};
