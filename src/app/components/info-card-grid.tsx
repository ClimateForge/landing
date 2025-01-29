import Image from "next/image";
import AccentTitle from "./ui/accent-title";
import GradientText from "./ui/gradient-text";

interface InfoCardsData {
    title: string[];
    description?: string;
    infoCardsData?: InfoCardData[];
    className?: string;
}

type InfoCardData = {
    title?: string;
    description?: string;
    icon?: string;
}

function InfoCard({ title, description, icon }: InfoCardData) {

    return (
        <div className="flex flex-col justify-between gap-5 p-8
            rounded-3xl bg-white border border-[#E0DFE2]
            max-w-[410px] max-h-[317px]">
            
            <Image title="Card Icon"
                    className="w-10 h-10 z-10 transition-all duration-700"
                    src={`/card-icons/${icon}.svg`}
                    alt="card icon"
                    width={40}
                    height={40} 
                />

            <h5 className="font-bold pb-[6px]
                text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">
                {title}
            </h5>

            <p className="text-gray-600 font-normal pb-2
                text-[11px] md:text-[12px] lg:text-[14px]
                leading-tight">
                {description}
            </p>

        </div>
    );
}
export default function InfoCardGrid({title, description, infoCardsData, className}: InfoCardsData) {
    
    return (
        infoCardsData ?
            <section className={`relative flex flex-col items-center w-full gap-10 -z-10 pb-20 ${className}`}>
                {className ?  <div className="bg-[#ECF5FF] opacity-[0.93] w-full h-full absolute -z-10"></div> : null}
                <h2 className="text-center pt-20">{title[0]} <GradientText>{title[1]}</GradientText></h2>
                <p className="text-[18px] text-center font-medium max-w-[588px]">{description}</p>
                <div className="flex flex-wrap justify-center items-stretch
                    h-full overflow-y-auto w-full
                    
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