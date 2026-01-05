import Image from "next/image";



export const Cooperate = () => {
    return (
        <section>
            <div className=" container mt-24 pb-24 center flex-col">
                <h2 className=" text-5xl font-bold">ДАВАЙТЕ СО<span className=" italic">ДРУЖ</span>НИЧАТЬ</h2>
                <p className=" text-[#747C87] text-2xl mt-4 font-medium">Для связи со мной наведите камеру на QR-код</p>
                <Image 
                    className=" size-52 mt-10"
                    src="/page/home/qr.png" 
                    alt="qr" 
                    width={512} 
                    height={512} 
                />
            </div>
        </section>
    );
};
