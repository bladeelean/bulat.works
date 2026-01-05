const experienceData = [
    {
        name: "минцифры / ai стрим",
        post: "Продуктовый дизайнер",
        years: "2023 – ",
        now: true,
    },
    {
        name: "эдо «практика»",
        post: "Продуктовый дизайнер",
        years: "2021 – 2023",
    },
    {
        name: "барс груп",
        post: "UX/UI-дизайнер корпоративного портала",
        years: "2021 – 2021",
    },
    {
        name: "startted",
        post: "UX/UI-дизайнер финансового проекта Vexel.com",
        years: "2019 – 2021",
    },
]


export const Experience = () => {
    return (
        <section>
            <div className=" container mt-24">
                <h2 className=" text-[#747C87] text-3xl font-semibold">ОПЫТ</h2>
                <div className=" mt-8 text-3xl space-y-10">
                    {experienceData.map((item) => (
                        <div className="grid grid-cols-[12rem_1fr] gap-8" key={item.name}>
                            <h3 className=" font-semibold ">{item.years}{item.now && <span className=" text-[#029332]">н.в</span>}</h3>
                            <div>
                                <p className=" font-semibold ">{item.name}</p>
                                <p className=" text-[#2E2D2D] mt-4 text-2xl font-medium">{item.post}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
