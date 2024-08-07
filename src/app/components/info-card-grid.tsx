import Image from "next/image";
import AccentTitle from "./ui/accent-title";

interface InfoCardsData {
    title: string[];
    accentVariant?: string;
    accentSrc?: string;
    accentY?: number;
    accentIndex?: number;
    infoCardsData?: InfoCardData[];
}

type InfoCardData = {
    title?: string;
    description?: string;
    icon?: string;
}

function InfoCard({ title, description, icon }: InfoCardData) {

    return (
        <div className="relative 
            rounded-3xl bg-white shadow-md
            pt-[45px] sm:pt-[50px] md:pt-[55px] lg:pt-[70px] 
            px-[16px] sm:px-[18px] md:px-[20px] lg:px-[26px] pb-4
            flex-col flex-[-1_1_200px] max-w-[30%] min-w-[170px]
            group transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-lg">
            
            <div className="absolute -top-8 right-[10%]
                w-16 h-16 sm:w-[70px] sm:h-[70px] md:w-[75px] md:h-[75px] lg:w-20 lg:h-20
                bg-accent-gradient rounded-full
                shadow-[0px_16px_24px_rgba(38,176,117,0.22)]
                transition-all duration-700
                group-hover:transition-all group-hover:delay-200 group-hover:duration-700
                bg-[length:100%_100%] group-hover:bg-[length:150%_100%] group-hover:scale-110">
                    
                    <Image className="absolute z-10 transition-all duration-700
                        top-[25%] left-[25%]
                        w-[50%] h-[50%]"
                        src={`/card-icons/${icon}.svg`}
                        alt="triangle-dots-svg-decoration"
                        width={36}
                        height={0} 
                />
            </div>

            <p className="font-semibold pb-[6px]
                text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
                {title}
            </p>

            <p className="text-gray-600 font-normal pb-2
                text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
                leading-[15px] sm:leading-[18px] md:leading-5 lg:leading-6">
                {description}
            </p>

        </div>
    );
}
export default function InfoCardGrid({title, accentVariant, accentSrc, accentY, accentIndex, infoCardsData}: InfoCardsData) {
    
    return (
        infoCardsData ?
            <section className="flex flex-col items-center">
                
                <AccentTitle 
                    title={title} 
                    variant={accentVariant} 
                    accent={accentSrc}
                    accentY={accentY}
                    accentIndex={accentIndex} 
                    className="text-center"
                />
                
                <div className="flex flex-wrap justify-center items-stretch max-w-[1250px]
                    max-h-[760px] h-full overflow-y-auto 
                    pt-24 lg:pt-32 pb-8
                    gap-x-1 sm:gap-x-2 md:gap-x-4
                    gap-y-6 sm:gap-y-12 md:gap-y-14 lg:gap-y-16">
                
                {infoCardsData.map((card : InfoCardData, index: number) => (
                    
                    <InfoCard key={index} title={card.title} description={card.description} icon={card.icon}/>
                ))}

                </div>
                
            </section>
        : null
    )
}