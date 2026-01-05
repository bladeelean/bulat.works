'use client';

import { useMediaQuery } from "@/common/hooks/use-media-query";
import { Button } from "@/common/ui/shadcn/button";
import { useState } from "react";


export const Mobile = () => {

    const isMobile = useMediaQuery('(max-width: 768px)');
    const [isOpen, setIsOpen] = useState<boolean>(true);
    
    if(!isMobile || !isOpen) return null;

    return (
        <div className=" fixed inset-0 center text-center bg-black z-50">
            <div className=" center bg-white p-[26px] rounded-[24px] max-w-[280px] flex-col">  
                <p className=" text-[24px] leading-[28px] font-bold">Сейчас удобнее открыть с ПК</p>
                <p className=" text-[16px] mt-[4px] font-medium">Мобильная версия скоро будет доступна</p>
                <Button onClick={() => setIsOpen(false)} className=" text-[16px] mt-[16px] rounded-[16px] py-[12px] w-full bg-[#E1E4E8] text-black">
                    Открыть веб-версию
                </Button>
            </div>
        </div>
    );
};
