"use client";
import Image from "next/image"

import GradientButton from "./ui/gradient-button";

export default function UseCases() {

    const useCases = [
        "Energy Benchmarking",
        "Energy Retrofit Analysis",
        "District Energy",
        "Energy Upgrades Potential",
        "Heat Resilience Modeling",
        "Energy Control And VPP"
    ]

    return (
        <section className="bg-gradient-radial max-w-[1180px] flex w-full rounded-[45px] overflow-hidden mt-0 sm:mt-12">
            
            {/* Image Container */}
            <div className="relative hidden sm:flex max-h-[436px] max-w-[492px] flex-shrink flex-grow-1 basis-[50%]">
                <Image
                className="w-auto object-cover object-left z-10 
                    sm:[clip-path:polygon(80%_0,95%_28%,97%_42%,100%_58%,100%_68%,69%_100%,0_100%,0%_43%,0_0)]
                    md:[clip-path:polygon(85%_0,95%_28%,97%_42%,100%_58%,100%_68%,77%_100%,0_100%,0%_43%,0_0)]
                    lg:[clip-path:polygon(85%_0,95%_28%,97%_42%,100%_58%,100%_68%,80%_100%,0_100%,0%_43%,0_0)]"
                src={"/use-cases/use-cases.gif"}
                width={0}
                height={436}
                sizes="100vh"
                alt={""}
                />
                <Image
                className="absolute top-0 sm:-right-[1%] md:-right-[3%] h-[120%] z-20"
                src={"/use-cases/vector1.svg"}
                width={0}
                height={0}
                alt={""}
                />
                <Image
                className="absolute top-0 -right-[7.5%] h-[120%] z-10"
                src={"/use-cases/vector2.svg"}
                width={0}
                height={0}
                alt={""}
                />
            </div>

            {/* Use Cases */}
            <div className="flex flex-col justify-center items-center w-full p-4 sm:p-8  mb-4 flex-grow basis-[70%]">
                <h2 className="text-white font-semibold mb-6">Use cases</h2>

                <div className="grid grid-cols-2 gap-4 flex-wrap z-20">
                {useCases.map((useCase, index) => (
                    <GradientButton
                    key={index}
                    variant="outline"
                    width={266}
                    height={64}
                    radius={33}
                    bgColor={'#5FB4871A'}
                    className="text-xs sm:text-sm md:text-base"
                    >
                    {useCase}
                    </GradientButton>
                ))}
                </div>
            </div>
        </section>
    );
}
