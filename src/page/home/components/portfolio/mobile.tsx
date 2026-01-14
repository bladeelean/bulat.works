import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/common/ui/shadcn/dialog";
import { Sprite } from "@/common/ui/sprite";
import { cn } from "@/common/utils";
import Image from "next/image";





export const PortfolioMobile = () => {

    const mobileData = [
        {
            image: "/images/mobile/3.png",
            name: <span>Инновационный сервис «Госконсьерж» <br/> Это новый способ получить Госуслуги путем видеозвонка</span>,
            description: <span className=" ">Здесь я должен был сделать клиентский путь простым, а для операторов удобное рабочее пространство. Делал все: от концепта до передачи в разработку</span>,
            children: <DataThree />
        },
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
                        <Image className=" mx-auto w-[25rem] h-[52rem] object-cover" src={item.image} alt={idx + "mobile"} width={600} height={1000} />
                    ) : (
                        <div className=" center gap-16 flex-col">
                            {item.image.map((image, idx) => (
                                <Image key={idx + "mobile"} className="  w-[25rem] h-[52rem]" src={image} alt={idx + "mobile"} width={600} height={1000} />
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
                        <p className=" font-bold w-fit text-gradient-dialog-title text-5xl">Персональный анализ трат  ✦ по сервисам </p>
                        <p className=" text-2xl text-[#FFFFFF8F] mt-3 font-medium">Передо мной стояла задача реализовать сценарий анализа трат (в данном кейсе), на транспорт, который позволяет пользователю отслеживать расходы по государственным и городским сервисам по месяцам, управлять категориями и видеть итоговую сумму</p>
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Проблема и запрос пользователей </p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Пользователи не могли быстро понять, из каких категорий и периодов формируются их расходы на транспорт. Данные существовали в виде отдельных операций, но не давали целостной картины и не позволяли сравнивать периоды и категории между собой. Обычная сводка формата View as list лишена эмоций и быстрого визуального сравнения</p>
                    </div>
                    <div className=" mt-10 bg-[#FFFFFF0A] py-16 rounded-[7.5rem] center gap-12">
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
                        <p className=" font-bold w-fit text-gradient-dialog-title text-5xl">Геймификация с подарками ✦ от  МТС, Татнефти <br />и других партнеров</p>
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
                        <p className=" font-bold w-fit text-gradient-dialog-title text-5xl">Инновационный сервис «Госконсьерж» <br /> Это новый способ получить Госуслуги звонком</p>
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Проблема пользователей и бизнес-цель</p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <p>Для большинства пользователей получение государственных услуг ассоциируется со сложными формами, непонятными терминами и страхом допустить ошибку. Даже в цифровом формате процесс остаётся формальным и перегруженным.</p>
                            
                            <br/>

                            <p className=" text-white">Пользователи:</p>
                            <ul className=" list-disc pl-5">
                                <li>не понимают, с чего начать,</li>
                                <li>часто не доходят до завершения обращения.</li>
                            </ul>
                            
                            <br/>
                            
                            <p className=" text-white">Бизнес-проблема:</p>
                            <ul className=" list-disc pl-5">
                                <li>часть обращений не доходила до результата,</li>
                                <li>увеличивалась нагрузка на офлайн-каналы,</li>
                                <li>снижалась удовлетворённость сервисом</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" mt-10 h-[64rem] bg-[url(/images/mobile/16.png)] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Core Flow </p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Упрощенный сценарий сервиса, вокруг которого могут масштабироваться новые состояния, каналы и механики, не нарушая основную логику, т.к основные ветвления идут в процессе live-звонка – это различные всплывающие окна, подтверждения, тосты, алерты и прочее</p>
                    </div>
                    <div className=" mt-10 bg-[url(/images/mobile/17.png)] h-[77rem] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Решение </p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <p>Я спроектировал сценарий, в котором пользователь:</p>

                            <ul className=" list-disc pl-5">
                                <li>сразу понимает, что сервис работает в формате видеозвонка,</li>
                                <li>видит часы работы и доступность оператора,</li>
                                <li>получает простое объяснение, что это за сервис и как он работает,</li>
                                <li>может начать обращение одним действием.</li>
                            </ul>
                            <br/>
                            <p>Интерфейс построен вокруг принципа: «Госуслуги – живой диалог с государством»</p>
                        </div>
                    </div>
                    <div className=" mt-10 bg-[url(/images/mobile/18.png)] h-[66rem] bg-cover rounded-[7.5rem]">

                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Проблемы после запуска</p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">После запуска сервис столкнулся с высоким потоком обращений, который превысил наши ожидания — на старте не хватало операторов для обработки всех запросов. Метрики показали, что пользователи покидали сценарий на этапе длительного ожидания. Это стало отправной точкой для работы над задачей сохранения пользователя</p>
                    </div>
                    <div className=" mt-10 bg-black p-20 rounded-[7.5rem]">
                        <p className=" font-bold w-fit text-5xl">Первые попытки решения <br /> выглядели вот так</p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Здесь я попробовал превратить ожидание в полезный этап: <br />предложить советы, помочь сформулировать вопрос, напомнить о документах, которые могут понадобиться на звонке. Но чтобы закрепить удержание, вторым шагом я добавил модальное окно — как дополнительную точку удержания. Оно появлялось в момент, когда пользователь уже готов был выйти из сценария, и предлагало альтернативу: не терять обращение, а получить уведомление, когда оператор освободится.</p>
                        <div className=" h-[61rem] mt-11 bg-cover bg-[url(/images/mobile/19.png)]">
                        </div>
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Результат попытки скромный</p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Снижение оттока на ~ 10%</p>
                    </div>
                    <div className=" mt-20 bg-black p-20 pb-16 rounded-[7.5rem]">
                        <p className=" font-bold w-fit text-5xl">Попытка 2</p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Сразу после первой итерации я начал думать о следующем шаге. В этот момент у меня как раз пропал интернет в Chrome, и на экране появился тот самый офлайн-динозаврик. Тогда и возникла мысль: а почему бы не превратить ожидание оператора в похожий игровой сценарий. Параллельно я вспомнил про аналогичную фичу в Лавке. Пошел процесс...</p>
                        <Image
                            className=" mt-11 mx-auto w-[25rem] h-[52rem]"
                            src={"/images/mobile/21.png"} 
                            alt=""
                            width={600}
                            height={1000}
                        />
                        <p className=" italic font-bold w-fit mt-11 text-4xl">Игра называется <span className=" ">«Бегущий Татарин»</span></p>
                        <p className=" text-2xl text-[#FFFFFF66] mt-3 font-medium">Название пришло сразу. Поскольку этот релиз был ориентирован на Татарстан — один из самых цифровых регионов России, я решил встроить в визуал локальный контекст. В качестве образов использовал татарские мотивы и узнаваемые символы республики, чтобы игра выглядела живой и близкой пользователям.</p>
                        <p className=" italic font-bold w-fit mt-11 text-4xl">Начальные спрайты для тестов механики</p>
                        <div className=" mt-5 rounded-[3.5rem] bg-[#FFFFFF14] py-7 flex justify-center items-end gap-12">
                            <Image
                                src={"/images/mobile/22.png"} 
                                alt=""
                                width={256}
                                height={400}
                                className=" w-16 h-32"
                            />
                            <Image
                                src={"/images/mobile/23.png"} 
                                alt=""
                                width={256}
                                height={256}
                                className=" w-16 h-20"
                            />
                            <Image
                                src={"/images/mobile/24.png"} 
                                alt=""
                                width={256}
                                height={296}
                                className=" w-20 h-24"
                            />
                            <Image
                                src={"/images/mobile/25.png"} 
                                alt=""
                                width={400}
                                height={256}
                                className=" w-36 h-14"
                            />
                            <Image
                                src={"/images/mobile/26.png"} 
                                alt=""
                                width={256}
                                height={256}
                                className=" w-24 h-24"
                            />
                            <Image
                                src={"/images/mobile/27.png"} 
                                alt=""
                                width={256}
                                height={400}
                                className=" w-16 h-32"
                            />

                        </div>
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Релиз и результаты</p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <ul className=" list-disc pl-5">
                                <li>Снизили отток на 38%</li>
                                <li>Выявили поведенческие зависимости</li>
                                <li>Немного повлияли на DAU / WAU, но выросло количество людей, которые просто зашли поиграть. Не сильно из-за этого расстроились т.к основную проблему получилось решить. Кстати, модалку мы также оставили и со временем добавили операторов, но это уже другие цифры</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" mt-20">
                        <p className=" font-bold w-fit text-4xl">Чем я занимался</p>
                        <div className=" mt-3 text-2xl font-medium text-[#FFFFFF8F]">
                            <ul className=" list-disc pl-5">
                                <li>Определял продуктовую задачу и критерии успешности</li>
                                <li>Исследовал поведение пользователей и бизнес-контекст</li>
                                <li>Превращал инсайты в продуктовые гипотезы</li>
                                <li>Выстраивал пользовательские сценарии и проверял их через прототипы</li>
                                <li>Совместно с PM принимал решения о приоритетах и объёме релиза</li>
                                <li>Доводил решения до production-качества</li>
                                <li>Работал совместно с мобильщиками и QA</li>
                                <li>Анализировал метрики после запуска</li>
                                <li>Итеративное развитие продукта в течение нескольких кварталов после запуска</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
