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
                <h2 className="mb-16 sm:mb-24 md:mb-32 text-center">Why{' '}
                <span className="relative">
                    ClimateForge
                    <Image className="relative -z-10 lg:-top-[30px] left-[20px] w-[340px] sm:w-[300px] md:w-[330px] lg:w-[390px] h-auto"
                    width={0}
                    height={0} 
                    style={{ height: 'auto' }}
                    src={"/accents/accent1.svg"}
                    alt="Title Accent SVG"
                />
                </span>
                </h2>
                
                <div className="grid grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    gap-y-12 sm:gap-y-14 gap-x-1 sm:gap-x-4">
                
                {infoCardsData.map((card : InfoCardData, index: number) => (
                    <div key={index} className="relative 
                        pt-[45px] sm:pt-[50px] md:pt-[75px] lg:pt-[75px] px-[20px] sm:px-[26px] 
                        min-w-[180px] sm:w-[300px] md:w-[320px] lg:w-[380px] 
                        max-h-[260px] sm:h-[220px] md:h-[250px]
                        rounded-3xl bg-white shadow-md 
                        group transition-all hover:z-10 duration-700 hover:scale-105 hover:shadow-lg">
                        
                        <div className="absolute 
                            -top-8 right-10 sm:-top-10 sm:right-10 
                            w-16 h-16 sm:w-[70px] sm:h-[70px] md:w-20 md:h-20
                            bg-accent-gradient rounded-full
                            shadow-[0px_16px_24px_rgba(38,176,117,0.22)]
                            transition-all duration-700 
                            group-hover:transition-all group-hover:delay-100 group-hover:duration-700 
                            group-hover:bg-[length:150%_100%] group-hover:bg-[90%_0] group-hover:scale-110">
                                <Image className="absolute z-10  transition-all duration-700
                                    top-[16px] left-[16px] 
                                    sm:top-[18px] sm:left-[18px]
                                    md:top-[22px] md:left-[22px]
                                    w-8 h-8 sm:w-9 sm:h-[34px] md:w-[34px] md:h-9"
                                width={36}
                                height={36} 
                                
                                src={`/card-icons/${card.icon}.svg`}
                                alt="triangle-dots-svg-decoration"
                            />
                        </div>
                        <h1 className="text-[13px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold pb-[6px]">{card.title}</h1>
                        <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-gray-600 pb-2">{card.description}</p>
                    </div>
                ))}

                </div>
                
            </section>
        : null
    )
}