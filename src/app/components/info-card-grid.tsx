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
            <section className="flex flex-col  items-center">
                <h2 className="mb-12 sm:mb-14 md:mb-16 lg:mb-24 text-center">Why{' '}
                    <span className="relative">
                        ClimateForge
                        <Image className="relative -z-10 
                            -top-[20px] sm:-top-[25px] md:-top-[25px] lg:-top-[30px]
                            left-[14px] sm:left-[16px] md:left-[18px] lg:left-[20px]
                            w-[260px] sm:w-[292px] md:w-[325px] lg:w-[390px] h-auto"
                            src={"/accents/accent1.svg"}
                            alt="Title Accent SVG"
                            width={0}
                            height={0}
                    />
                    </span>
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
                    gap-y-12 sm:gap-y-12 lg:gap-y-16 gap-x-1 sm:gap-x-4">
                
                {infoCardsData.map((card : InfoCardData, index: number) => (
                    
                    <div key={index} className="relative rounded-3xl bg-white shadow-md
                        pt-[45px] sm:pt-[50px] md:pt-[60px] lg:pt-[70px] px-[16px] sm:px-[26px] pb-2 
                        min-w-[180px] sm:w-[300px] md:w-[320px] lg:w-[380px] 
                        max-h-[280px] sm:h-[200px] md:h-[250px]
                        group transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-lg">
                        
                        <div className="absolute -top-8 right-8 sm:-top-10 sm:right-10
                            w-16 h-16 sm:w-[70px] sm:h-[70px] md:w-20 md:h-20
                            bg-accent-gradient rounded-full
                            shadow-[0px_16px_24px_rgba(38,176,117,0.22)]
                            transition-all duration-700
                            group-hover:transition-all group-hover:delay-100 group-hover:duration-700
                            group-hover:bg-[length:150%_100%] group-hover:bg-[90%_0] group-hover:scale-110">
                                
                                <Image className="absolute z-10 transition-all duration-700
                                    top-[16px] left-[16px]
                                    sm:top-[18px] sm:left-[18px]
                                    md:top-[22px] md:left-[22px]
                                    w-8 h-8 sm:w-9 sm:h-[34px] md:w-[34px] md:h-9"
                                    src={`/card-icons/${card.icon}.svg`}
                                    alt="triangle-dots-svg-decoration"
                                    width={36}
                                    height={0} 
                            />
                        </div>

                        <h1 className="font-semibold pb-[6px]
                            text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]">
                            {card.title}
                        </h1>

                        <p className="text-gray-600 font-normal pb-2
                            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
                            leading-4 sm:leading-5 md:leading-5 lg:leading-6">
                            {card.description}
                        </p>

                    </div>
                ))}

                </div>
                
            </section>
        : null
    )
}