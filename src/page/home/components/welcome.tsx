import Image from "next/image";



export const Welcome = () => {
    return (
        <section>
            <div className="container pt-36">
                <p className=" w-fit text-2xl font-semibold text-gradient-welcome ">Sr. Product designer,  6+ лет опыта</p>
                <div className=" flex gap-10">
                    <div>
                        <p className=" text-[2.65rem] leading-14 font-semibold mt-8">Привет, я Булат — product manager.Запускал и принимал участие в B2B и B2C в продуктах с миллионной аудиторией.</p>
                        <p className=" text-2xl  font-medium  text-[#FFFFFF8F] mt-3">Превращаю сложные требования в рабочий продукт, убираю хаос между бизнесом и разработкой. Совмещаю инженерное мышление и креативный подход в работе. Создаю результат, а не фичи.  </p>
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
