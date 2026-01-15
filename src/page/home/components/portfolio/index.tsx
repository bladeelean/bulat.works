"use client";
import { Button } from "@/common/ui/shadcn/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/common/ui/shadcn/tabs";
import { Sprite } from "@/common/ui/sprite";
import { Marquee } from "@/components/animation/marquee";
import Image from "next/image";
import { useCallback, useState } from "react";
import { PortfolioMobile } from "./mobile";
import { PortfolioDesktop } from "./desktop";

const mobileData = ["/images/mobile/1.png", "/images/mobile/2.png", "/images/mobile/3.png", "/images/mobile/4.png", "/images/mobile/5.png", "/images/mobile/6.png", "/images/mobile/7.png", "/images/mobile/8.png", "/images/mobile/9.png", "/images/mobile/10.png", "/images/mobile/11.png", "/images/mobile/12.png", "/images/mobile/13.png", "/images/mobile/14.png", "/images/mobile/15.png", "/images/mobile/16.png", "/images/mobile/17.png", "/images/mobile/18.png", "/images/mobile/19.png", "/images/mobile/20.png", "/images/mobile/21.png", "/images/mobile/22.png", "/images/mobile/23.png", "/images/mobile/24.png", "/images/mobile/25.png", "/images/mobile/26.png"];
const desktopData = ["/images/desktop/1.png", "/images/desktop/2.png", "/images/desktop/3.png", "/images/desktop/4.png", "/images/desktop/5.png", "/images/desktop/6.png", "/images/desktop/7.png", "/images/desktop/8.png"];
const commonData = ["/images/common/1.png",];


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
                <div className="flex justify-center">
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-xl font-semibold
               bg-white/10 hover:bg-white/15 border border-white/15 transition"
  >
    Посмотреть подробно в PDF
  </a>
</div>
                <Tabs value={type} onValueChange={handleTypeChange} defaultValue="mobile" className=" mt-8">
                    <TabsList className=" px-32 gap-10 p-2 rounded-[2.5rem] flex bg-[#FFFFFF0A] mx-auto w-fit">
                        <TabsTrigger 
                            value="mobile" 
                            className="data-[state=active]:[&_svg]:text-[#3A93FF] [&_svg]:text-[#FFFFFF3D] cursor-pointer w-52 py-1"
                        >
                            <svg className=" size-24" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45 60C47.2091 60 49 61.7909 49 64C49 66.2091 47.2091 68 45 68C42.7909 68 41 66.2091 41 64C41 61.7909 42.7909 60 45 60Z" fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M56.75 11C62.9632 11 68 16.0368 68 22.25V64.9375C68 72.704 61.704 79 53.9375 79H36.0625C28.296 79 22 72.704 22 64.9375V25.0625C22 17.4175 28.1006 11.1976 35.6992 11.0049L36.0625 11H56.75ZM56.999 17.0059C56.9895 19.2123 51.6216 21 45 21C38.9403 21 33.9322 19.5018 33.1182 17.5566C30.122 18.7329 28 21.6491 28 25.0625V64.9375C28 69.3903 31.6097 73 36.0625 73H53.9375C58.3903 73 62 69.3903 62 64.9375V22.25C62 19.434 59.7829 17.1359 56.999 17.0059Z" fill="currentColor"/>
                            </svg>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="desktop" 
                            className="data-[state=active]:[&_svg]:text-[#3A93FF] [&_svg]:text-[#FFFFFF3D] cursor-pointer w-52 py-1"
                        >
                            <svg className=" size-24" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M62 13C68.6273 13.0001 74 18.3726 74 25V52.6484C74.0096 52.6616 74.0199 52.6742 74.0293 52.6875L74.1729 52.9033L81.498 64.8076C84.7777 70.1377 80.9429 76.9999 74.6846 77H15.3174C9.05905 76.9999 5.22429 70.1377 8.50391 64.8076L15.8291 52.9033L15.9727 52.6875C15.9888 52.6647 16.0059 52.6425 16.0225 52.6201L16.1172 35L16.0645 25.0635L16.0664 24.7529C16.1973 18.2439 21.5152 13.0002 28.0635 13H62ZM20.3535 57L13.6143 67.9521C12.7945 69.2846 13.7529 70.9999 15.3174 71H74.6846C76.2491 70.9999 77.2075 69.2846 76.3877 67.9521L69.6484 57H20.3535ZM28.0635 19C24.7375 19.0002 22.0458 21.7062 22.0635 25.0322L22.1162 34.9678C22.1163 34.989 22.1163 35.011 22.1162 35.0322L22.0322 51H68V25C68 21.6863 65.3136 19.0001 62 19H28.0635Z" fill="currentColor"/>
                            </svg>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="common" 
                            className="data-[state=active]:[&_svg]:text-[#3A93FF] [&_svg]:text-[#FFFFFF3D] cursor-pointer w-52 py-1"
                        >
                            <svg className=" size-24" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M66 10C71.5228 10 76 14.4772 76 20C76 25.5228 71.5228 30 66 30C61.5549 30 57.7885 27.0993 56.4873 23.0879C38.6076 24.3207 24.3207 38.6076 23.0879 56.4873C27.0993 57.7885 30 61.5549 30 66C30 71.5228 25.5228 76 20 76C14.4772 76 10 71.5228 10 66C10 61.493 12.9818 57.6829 17.0801 56.4336C18.3551 35.2818 35.2818 18.3551 56.4336 17.0801C57.6829 12.9818 61.493 10 66 10ZM20 62C17.7909 62 16 63.7909 16 66C16 68.2091 17.7909 70 20 70C22.2091 70 24 68.2091 24 66C24 63.7909 22.2091 62 20 62ZM66 16C63.7909 16 62 17.7909 62 20C62 22.2091 63.7909 24 66 24C68.2091 24 70 22.2091 70 20C70 17.7909 68.2091 16 66 16Z" fill="currentColor"/>
                                <path d="M48.2166 51.2758L53.5473 67.268C54.7257 70.803 59.6721 70.9484 61.056 67.4887L62.8288 63.0567C63.2353 62.0402 64.0407 61.2349 65.0571 60.8283L69.4891 59.0555C72.9489 57.6716 72.8035 52.7252 69.2685 51.5469L53.2762 46.2161C50.1492 45.1738 47.1742 48.1487 48.2166 51.2758Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="mobile">
                        <PortfolioMobile />
                    </TabsContent>
                    <TabsContent value="desktop">
                        <PortfolioDesktop />
                    </TabsContent>
                    <TabsContent value="common">
                        {commonData.map((item) => (
                            <Image className=" mr-10  bg-cover w-full " src={item} alt={item} width={1600} height={1200} />
                        ))}
                    </TabsContent>

                </Tabs>
            </div>
        </section>
    );
};
