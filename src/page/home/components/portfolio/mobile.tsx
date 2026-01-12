import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/common/ui/shadcn/dialog";
import { Sprite } from "@/common/ui/sprite";
import { cn } from "@/common/utils";
import Image from "next/image";





export const PortfolioMobile = () => {

    const mobileData = [
        {
            image: "/images/mobile/1.png",
            name: "Персональный анализ трат по сервисам",
            description: "Моей задачей было реализовать сценарий анализа трат, в данном кейсе, на транспорт, который позволяет пользователю отслеживать расходы по государственным и городским сервисам по месяцам, управлять категориями и видеть итоговую сумму",
            children: <DataOne />
        },
        {
            image: "/images/mobile/2.png",
            name: "Геймификация с призами от МТС, Татнефти и других партнеров",
            description: "В продукте была задача повысить вовлечённость пользователей в выполнение целевых действий (авторизация, подтверждения, использование сервисов) без давления и прямой мотивации через уведомления",
            children: <DataTwo />
        }, 
        {
            image: "/images/mobile/3.png",
            name: <span>Инновационный сервис «Госконсьерж» <br/> Это новый способ получить Госуслуги путем видеозвонка</span>,
            description: <span className=" ">Здесь я должен был сделать клиентский путь простым, а для операторов удобное рабочее пространство. Делал все: от концепта до передачи в разработку, но кейс-стади пока не сочинил</span>,
            children: <DataThree />
        },
        {
            image: ["/images/mobile/4.png", "/images/mobile/5.png", "/images/mobile/6.png", "/images/mobile/7.png"],
            name: <span className=" text-gradient-welcome">Другие экраны...</span>
        }
    ];

    return (
        <div className=" container space-y-20 ">
            {mobileData.map((item, idx) => (
                <div 
                    className={cn(
                        typeof item.image != "string" && "flex-col-reverse flex gap-16",

                    )} 
                    key={idx+ "mobile"}
                >
                    {typeof item.image === "string" ? (
                        <Image className=" mx-auto w-96 h-[52rem]" src={item.image} alt={idx + "mobile"} width={600} height={1000} />
                    ) : (
                        <div className=" center gap-16 flex-col">
                            {item.image.map((image, idx) => (
                                <Image key={idx + "mobile"} className="  w-96 h-[52rem]" src={image} alt={idx + "mobile"} width={600} height={1000} />
                            ))}
                        </div>
                    )}
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
        <Dialog>
            <DialogTrigger className=" bg-[#FFFFFF14] h-14 w-28 center mx-auto rounded-full mt-8 cursor-pointer">
                <Sprite
                    name="arrow"
                    className="size-8"
                    pathSprite="icons/filled"
                />
            </DialogTrigger>
            <DialogContent className=" overflow-auto p-0 flex flex-col sm:max-w-full inset-0  pb-24 translate-0 rounded-none border-none">
                <div className=" container">
                    <DialogHeader className=" sticky z-10 top-4 mt-32">
                        <DialogClose className="flex cursor-pointer gap-4 items-center ">
                            <div className=" bg-[#FFFFFF14] backdrop-blur h-14 w-20 center rounded-full cursor-pointer">
                                <Sprite
                                    name="arrow"
                                    className="size-8 rotate-180"
                                    pathSprite="icons/filled"
                                />
                            </div>
                            <p className=" text-2xl font-semibold">Назад</p>
                        </DialogClose>
                    </DialogHeader>
                    <div className=" mt-14">
                        <p className=" font-bold w-fit text-gradient-welcome text-5xl">Персональный анализ трат  ✦ по сервисам </p>
                        <p className=" text-2xl text-[#FFFFFF8F] mt-3 font-medium">Передо мной стояла задача реализовать сценарий анализа трат (в данном кейсе), на транспорт, который позволяет пользователю отслеживать расходы по государственным и городским сервисам по месяцам, управлять категориями и видеть итоговую сумму</p>
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Проблема и запрос пользователей </p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Пользователи не могли быстро понять, из каких категорий и периодов формируются их расходы на транспорт. Данные существовали в виде отдельных операций, но не давали целостной картины и не позволяли сравнивать периоды и категории между собой. Обычная сводка формата View as list лишена эмоций и быстрого визуального сравнения</p>
                    </div>
                    <div className=" mt-10 bg-[#FFFFFF0A] py-16 rounded-[7.5rem] center gap-12">
                        <Image
                            className="  w-96 h-[52rem]"
                            src={"/images/mobile/8.png"} 
                            alt=""
                            width={600}
                            height={1000}
                        />
                        <Image
                            className="  w-96 h-[52rem]"
                            src={"/images/mobile/9.png"} 
                            alt=""
                            width={600}
                            height={1000}
                        />
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Core Flow </p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Поскольку на данный момент пользователи активно используют раздел операций, логично было бы добавить аналитику именно туда. Мы сделали 2 варианта размещения этого раздела и пошли тестить. Итогом тестов стал вариант ниже</p>
                    </div>
                    <div className=" mt-10 bg-[url(/images/mobile/10.png)] h-[54rem] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Решение </p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <p>Я спроектировал экран аналитики, который позволяет:</p>

                            <ul className=" list-disc pl-5">
                                <li>Выбирать год, месяц,</li>
                                <li>Видеть график расходов по месяцам,</li>
                                <li>Управлять категориями, включая и исключая их из анализа,</li>
                                <li>Смотреть суммарный итог расходов на одном экране.</li>
                            </ul>
                            <br/>
                            <p>На стадии дизайна я опирался на принципы:</p>
                            <ul className=" list-disc pl-5">
                                <li>чёткой визуальной иерархии, чтобы пользователь сразу видел главное,</li>
                                <li>управление через мгновенные тапы,</li>
                                <li>простоты сравнения данных между периодами</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" mt-10 bg-[url(/images/mobile/11.png)] h-[66rem] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Результат и метрики </p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <p className="  font-medium">После внедрения экрана аналитики пользователи стали чаще просматривать агрегированные данные по тратам на транспорт. За период 3 месяцев:</p>
                            <br/>
                            <ul className=" list-disc pl-5">
                                <li>Доля пользователей, открывающих раздел аналитики достигла более 70 000,</li>
                                <li>Среднее время взаимодействия с разделом увеличилось на 27%</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" mt-10 h-[33.5rem] bg-[url(/images/mobile/12.png)] bg-cover rounded-[7.5rem]">

                    </div>
                    <p className=" text-4xl font-bold mt-20">На основе положительной динамики было принято решение масштабировать этот подход на другие разделы и в дальнейшем объединить все платежи системы в единую аналитику, чтобы пользователь мог видеть полную финансовую картину в одном сценарии</p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const DataTwo = () => {
    return (
        <Dialog>
            <DialogTrigger className=" bg-[#FFFFFF14] h-14 w-28 center mx-auto rounded-full mt-8 cursor-pointer">
                <Sprite
                    name="arrow"
                    className="size-8"
                    pathSprite="icons/filled"
                />
            </DialogTrigger>
            <DialogContent className=" overflow-auto p-0 flex flex-col sm:max-w-full inset-0  pb-24 translate-0 rounded-none border-none">
                <div className=" container">
                    <DialogHeader className=" sticky z-10 top-4 mt-32">
                        <DialogClose className="flex cursor-pointer gap-4 items-center ">
                            <div className=" bg-[#FFFFFF14] backdrop-blur h-14 w-20 center rounded-full cursor-pointer">
                                <Sprite
                                    name="arrow"
                                    className="size-8 rotate-180"
                                    pathSprite="icons/filled"
                                />
                            </div>
                            <p className=" text-2xl font-semibold">Назад</p>
                        </DialogClose>
                    </DialogHeader>
                    <div className=" mt-14">
                        <p className=" font-bold w-fit text-gradient-welcome text-5xl">Геймификация с подарками ✦ от  МТС, Татнефти <br />и других партнеров</p>
                        <p className=" text-2xl text-[#FFFFFF8F] mt-3 font-medium">В продукте была задача повысить вовлечённость пользователей в выполнение целевых действий (авторизация, подтверждения, использование сервисов) без давления и прямой мотивации через уведомления</p>
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Проблема пользователей и бизнес-цель</p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <p>Пользователи не воспринимали выполнение условий как ценность — действия ощущались как формальность и не формировали долгосрочную мотивацию.</p>
                            <br/>

                            <p>Нужно было:</p>
                            <ul className=" list-disc pl-5">
                                <li>превратить обязательные действия в понятный прогресс,</li>
                                <li>дать ощущение достижения,</li>
                                <li>связать действия пользователя с реальной выгодой</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" mt-10 h-[62rem] bg-[url(/images/mobile/13.png)] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Core Flow </p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Core flow поддерживает 2 точки входа и приводит пользователя в единый сценарий получения награды, адаптированный под его текущее состояние</p>
                    </div>
                    <div className=" mt-10 bg-[url(/images/mobile/14.png)] h-[64rem] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Решение </p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <p>Я спроектировал геймификационный сценарий с системой наград и прогресса, в котором:</p>

                            <ul className=" list-disc pl-5">
                                <li>Пользователь получает визуальную награду за выполненное условие,</li>
                                <li>Видит дату открытия и статус награды,</li>
                                <li>Понимает, какие действия влияют на улучшение награды,</li>
                                <li>Может отслеживать прогресс улучшения (1 → 6 → 12),</li>
                                <li>Получает реальный приз от партнёров (МТС, Татнефть и др.).</li>
                            </ul>
                            <br/>
                            <p>Награда становится не просто бонусом, а частью пользовательского пути</p>
                        </div>
                    </div>
                    <div className=" mt-10 bg-[url(/images/mobile/15.png)] h-[66rem] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Результат </p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Улучшенный геймификационный сценарий позволил связать пользовательскую мотивацию <br/> с бизнес-целями продукта, увеличив установки приложения, охват сервисов, ретеншн и вовлечённость пользователей в целевые действия</p>
                    </div>
                    <p className=" text-4xl font-bold mt-20">А еще я запек награды в Blender, в форматах USDZ для iOS и GLB для Android  и теперь их можно вращать с реализацией физики, инерции и корректного освещения, что позволило пользователю взаимодействовать с объектом как с реальным предметом</p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const DataThree = () => {
    return (
        <div className="bg-[#FFFFFF14] h-14 w-fit mx-auto px-10 center text-2xl font-semibold rounded-full mt-8 cursor-pointer ">
            Описания кейса пока нет
        </div>
    );
};