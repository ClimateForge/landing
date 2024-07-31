import Image from "next/image";
import InfoCard from "./ui/info-card";
import AccentTitle from "./ui/accent-title";

interface InfoCardsData {
    title: string[];
    accent?: string;
    accentIndex: number;
    infoCardsData?: InfoCardData[];
}

type InfoCardData = {
    title?: string;
    description?: string;
    icon?: string;
}

export default function InfoCardGrid({title, accent, accentIndex, infoCardsData}: InfoCardsData) {
    
    return (
        infoCardsData ?
            <section className="flex flex-col  items-center">
                
                <AccentTitle title={title} accent={accent} accentIndex={accentIndex}/>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
                    gap-y-12 sm:gap-y-12 lg:gap-y-16 gap-x-1 sm:gap-x-4">
                
                {infoCardsData.map((card : InfoCardData, index: number) => (
                    
                    <InfoCard key={index} title={card.title} description={card.description} icon={card.icon}/>
                ))}

                </div>
                
            </section>
        : null
    )
}