import { Sprite } from "@/common/ui/sprite";

const helpData = [
    "Участвовал в создании цифрового стенда для международного мероприятия Kazan Digital Week 2025",
    <span>Инициировал идею геймификации на звонках,<br/>что привело к снижению оттока на 30 п.п</span>,
    "Работал над hardware-терминалом: архитектура устройства, промышленный дизайн и пользовательские сценарии",
    <span>Придумал первый в РФ cервис аренды недвижимости без посредника <br/>путем двухэтапной проверки собственности</span>,
];


export const Help = () => {
    return (
        <section>
            <div className=" container mt-24">
                <p className=" text-[#747C87] text-3xl font-semibold">БУДЕТ ПОЛЕЗНЫМ</p>
                <div className=" mt-8  space-y-10">
                    {helpData.map((item, idx) => (
                        <div className="grid grid-cols-[12rem_1fr] gap-8" key={"help" + idx}>
                            <div className=" flex items-center">
                                <Sprite name="sparkle" className=" size-6" pathSprite="icons/filled" />
                            </div>
                            <p className=" text-4xl font-semibold">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
