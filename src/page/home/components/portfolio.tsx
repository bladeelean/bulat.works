"use client";
import { Button } from "@/common/ui/shadcn/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/common/ui/shadcn/tabs";
import { Sprite } from "@/common/ui/sprite";
import { Marquee } from "@/components/animation/marquee";
import Image from "next/image";
import { useCallback, useState } from "react";

const mobileData = ["/images/mobile/1.png", "/images/mobile/2.png", "/images/mobile/3.png", "/images/mobile/4.png", "/images/mobile/5.png", "/images/mobile/6.png", "/images/mobile/7.png", "/images/mobile/8.png", "/images/mobile/9.png", "/images/mobile/10.png", "/images/mobile/11.png", "/images/mobile/12.png", "/images/mobile/13.png", "/images/mobile/14.png", "/images/mobile/15.png", "/images/mobile/16.png", "/images/mobile/17.png", "/images/mobile/18.png", "/images/mobile/19.png", "/images/mobile/20.png", "/images/mobile/21.png", "/images/mobile/22.png", "/images/mobile/23.png", "/images/mobile/24.png", "/images/mobile/25.png", "/images/mobile/26.png"];
const desktopData = ["/images/desktop/1.png", "/images/desktop/2.png", "/images/desktop/3.png", "/images/desktop/4.png", "/images/desktop/5.png", "/images/desktop/6.png", "/images/desktop/7.png", "/images/desktop/8.png"];
const commonData = ["/images/common/1.png",];

const portfolioData = [...mobileData, ...desktopData, ...commonData];


export const Portfolio = () => {

    const [currentSpeed, setCurrentSpeed] = useState<50 | 100 | 250>(100);

    const handleSpeedChange = useCallback((speed: 50 | 100 | 250) => {
        setCurrentSpeed(speed);
    }, []);

    const [type, setType] = useState<"mobile" | "desktop" | "common">("mobile");
    const handleTypeChange = useCallback((type: string) => {
        setType(type as "mobile" | "desktop" | "common");
    }, []);

    return (
        <section>
            <div className=" mt-24">
                <h2 className=" text-5xl container font-bold">БЫСТРОЕ ВИЗУАЛЬНОЕ ЗНАКОМСТВО</h2>
                <Tabs value={type} onValueChange={handleTypeChange} defaultValue="mobile" className=" mt-8">
                    <TabsList className=" px-32 gap-10 flex w-fit">
                        <TabsTrigger value="mobile" className="data-[state=active]:text-black text-[#747C87] cursor-pointer font-bold text-4xl">Мобилка</TabsTrigger>
                        <TabsTrigger value="desktop" className="data-[state=active]:text-black text-[#747C87] cursor-pointer font-bold text-4xl">Десктоп</TabsTrigger>
                        <TabsTrigger value="common" className="data-[state=active]:text-black text-[#747C87] cursor-pointer font-bold text-4xl">Коммуникация</TabsTrigger>
                    </TabsList>
                    <div className=" relative">
                        {type != "common" && (
                            <>
                                <div className=" z-50 absolute top-1/2 left-10 -translate-y-1/2">
                                    <Button onMouseEnter={() => handleSpeedChange(50)} onMouseLeave={() => handleSpeedChange(100)} className=" size-20 rounded-full center bg-black/60 hover:scale-110 transition-all duration-300"> 
                                        <Sprite name="slow" className=" size-10" pathSprite="icons/filled"/>
                                    </Button>
                                </div>
                                <div className=" z-50 absolute top-1/2 right-10 -translate-y-1/2">
                                    <Button onMouseEnter={() => handleSpeedChange(250)} onMouseLeave={() => handleSpeedChange(100)} className=" size-20 rounded-full center bg-black/60 hover:scale-110 transition-all duration-300"> 
                                        <Sprite name="fast" className=" size-10" pathSprite="icons/filled"/>
                                    </Button>
                                </div>  
                            </>
                        )}
                        <TabsContent value="mobile">
                            <Marquee speed={currentSpeed} autoFill className=" ">
                                {mobileData.map((item) => (
                                    <Image className=" mr-10 w-96 h-[52rem]" src={item} alt={item} width={600} height={1000} />
                                ))}
                            </Marquee>
                        </TabsContent>
                        <TabsContent value="desktop">
                            <Marquee speed={currentSpeed} autoFill className=" ">
                                {desktopData.map((item) => (
                                    <Image className=" mr-10 w-[80vw] bg-cover h-[52rem]" src={item} alt={item} width={1600} height={1200} />
                                ))}
                            </Marquee>
                        </TabsContent>
                        <TabsContent value="common">
                            {commonData.map((item) => (
                                <Image className=" mr-10  bg-cover w-full " src={item} alt={item} width={1600} height={1200} />
                            ))}
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </section>
    );
};
