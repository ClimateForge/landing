"use client";

import Image from "next/image";

export default function UseCases() {

    const useCases = [
        {
            title: "Energy Benchmarking",
            svgSrc: "/use-cases/energy-benchmarking.svg"
        },
        {
            title: "Energy Retrofit Analysis",
            svgSrc: "/use-cases/energy-retrofit-analysis.svg"
        },
        {
            title: "District Energy",
            svgSrc: "/use-cases/district-energy.svg"
        },
        {
            title: "Energy Upgrades Potential",
            svgSrc: "/use-cases/energy-upgrades-potential.svg"
        },
        {
            title: "Heat Resilience Modeling",
            svgSrc: "/use-cases/heat-resilience-modeling.svg"
        },
        {
            title: "Energy Control And VPP",
            svgSrc: "/use-cases/energy-control-and-vpp.svg"
        }
    ]

    return (
        <section className="flex flex-col justify-center items-center w-full bg-[#EEF2F6] py-20">
            <h2 className="text-5xl font-bold">Use Cases</h2>
            <p className="text-lg text-[#5C5C5C] py-10 text-center">Empowering American Businesses to Sell Energy Upgrades with AI-Driven Lead Gen</p>
            {/* Image Container */}
            <div className="flex flex-col lg:flex-row justify-center w-full gap-5 py-10 items-center lg:items-stretch">
                <video className="flex max-w-[630px] max-h-[592px]  object-left z-10  w-full h-auto
                    object-cover  rounded-[20px]"
                    src={"/use-cases/use-cases.mp4"}
                    autoPlay
                    loop
                    playsInline
                    muted 
                    width={630}
                    height={592}
                />

                {/* Use Cases */}
                <div className="grid grid-cols-2 gap-5 flex-wrap z-20 max-h-[592px] ">
                {useCases.map((useCase, index) => (
                    <div className="flex flex-col justify-center p-8 gap-4 border border-[#E0DFE2]
                    text-xs sm:text-sm md:text-base bg-white rounded-15 w-full max-w-[305px]"
                        key={index}
                    >   <Image className="w-9 h-9"
                            src={useCase.svgSrc} 
                            alt="" 
                            width={36} height={36}
                            
                        />
                        <h4 className="text-lg md::text-xl lg:text-2xl font-bold text-[#858585]">{useCase.title}</h4>
                    </div>
                ))}
                </div>
            </div>

            
            
        </section>
    );
}
