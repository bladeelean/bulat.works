import { cn } from "@/common/utils";
import Image from "next/image";

export const PortfolioDesktop = () => {

    const desktopData = [
        {
            image: "/images/desktop/1.png",
            name: "Воркспейс оператора",
            description: "Моей задачей было — спроектировать главный рабочий экран оператора для обработки входящих обращений граждан в режиме реального времени. Основной задачей было сохранить скорость, предсказуемость и ощущение контроля над процессом",
            children: <DataOne />
        },
        {
            image: "/images/desktop/2.png",
            name: "KYC / Процедура проверки пользователя",
            description: "Процедура используется для подтверждения личности гражданина в рамках цифровых государственных сервисов. Ошибка в сценарии проверки напрямую влияет на доверие к системе и юридическую валидность результата.",
            children: <DataOne />
        }, 
        {
            image: "/images/desktop/3.png",
            name: "Статистика звонков",
            description: "Передо мной стояла задача заменить сводную статистику детализированной аналитикой, что со временем позволила выявить поведенческие зависимости и использовать их для повышения эффективности работы операторов.",
            children: <DataOne />
        },
    ];

    return (
        <div className=" container space-y-20 ">
            {desktopData.map((item, idx) => (
                <div 
                    className={cn()} 
                    key={idx+ "desktop"}
                >
                    <Image className="w-[80vw] object-cover h-[47.15rem]" src={item.image} alt={item.image} width={1600} height={1200} />
                    
                    {item.name && (
                        <p className={cn(" text-4xl mt-8 font-bold text-center")}>{item.name}</p>
                    )}
                    {item.description && (
                        <p className=" text-2xl mt-4 font-medium text-center text-[#FFFFFF8F]">{item.description}</p>
                    )}
                    {item.children}
                </div>
            ))}
        </div>
    );
};




const DataOne = () => {
    return (
        <div className="bg-[#FFFFFF14] h-14 w-fit mx-auto px-10 center text-2xl font-semibold rounded-full mt-8 cursor-pointer ">
            Описания кейса пока нет
        </div>
    );
};
