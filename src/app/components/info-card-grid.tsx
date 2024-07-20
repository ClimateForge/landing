import Image from "next/image";

interface InfoCardsData {
    infoCardsData?: InfoCardData[];
}

type InfoCardData = {
    title?: string;
    description?: string;
    icon?: string;
}

export default function InfoCardGrid({infoCardsData}: InfoCardsData) {
    
    return (
        infoCardsData ?
            <section className="flex flex-col justify-center items-center">
                <Image className="relative -z-10 top-[55px] left-[3px] w-[340px] h-auto sm:w-[380px]"
                    width={0}
                    height={0} 
                    style={{ minWidth: '200px', height: 'auto' }}
                    src={"/accents/accent1.svg"}
                    alt="triangle-dots-svg-decoration"
                />
                <h2 className="mb-24 sm:mb-32">Why ClimateForge</h2>
                
                <div className="grid grid-cols-1 
                    sm:grid-cols-2
                    md:grid-cols-3
                    gap gap-y-12 sm:gap-y-16 gap-x-4">
                
                {infoCardsData.map((card : InfoCardData, index: number) => (
                    <div key={index} className="relative pt-[75px] w-[340px] sm:w-[300px] md:w-[340px] lg:w-[380px] px-[26px] h-[250px] 
                        rounded-3xl bg-white shadow-md
                        group transition-all hover:z-10 duration-700 hover:scale-105 hover:shadow-lg">
                        
                        <div className="absolute -top-10 right-10 w-20 h-20 rounded-full
                        bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B]
                        shadow-[0px_16px_24px_rgba(38,176,117,0.22)]
                        transition-all duration-700 
                        group-hover:transition-all group-hover:delay-100 group-hover:duration-700 
                        group-hover:bg-[length:150%_100%] group-hover:bg-[90%_0] group-hover:scale-110">
                            <Image className="absolute z-10 top-[22px] left-[22px] "
                                width={36}
                                height={36} 
                                style={{ width: '36px', height: '36px' }}
                                src={`/card-icons/${card.icon}.svg`}
                                alt="triangle-dots-svg-decoration"
                            />
                        </div>
                        <h1 className="text-base lg:text-lg font-semibold pb-[6px]">{card.title}</h1>
                        <p className="text-sm lg:text-base font-normal text-gray-600">{card.description}</p>
                    </div>
                ))}

                </div>
                
            </section>
        : null
    )
}