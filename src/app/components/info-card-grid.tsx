import InfoCard from "./ui/info-card";
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
                    className="text-center mb-16 sm:mb-32"
                />
                
                <div className="flex flex-wrap justify-center items-stretch max-w-[1250px]
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