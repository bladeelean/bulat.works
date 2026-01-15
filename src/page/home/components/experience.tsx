const experienceData = [
    {
        name: "Минцифры",
        post: "Product manager",
        years: "2024 – ",
        now: true,
    },
    {
        name: "Брио МРС»",
        post: "Product manager",
        years: "2023 - 2024",
]

export const Experience = () => {
    return (
        <section>
            <div className=" container mt-20">
                <h2 className=" text-[#747C87] text-2xl font-semibold">ОПЫТ</h2>
                <div className=" mt-8 text-2xl space-y-10">
                    {experienceData.map((item) => (
                        <div className="grid grid-cols-[12rem_1fr] gap-8" key={item.name}>
                            <h3 className=" font-semibold ">{item.years}{item.now && <span className=" text-[#73DC36]">н.в</span>}</h3>
                            <div>
                                <p className=" font-semibold ">{item.name}</p>
                                <p className=" text-[#FFFFFF8F] mt-4 text-2xl font-medium">{item.post}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
