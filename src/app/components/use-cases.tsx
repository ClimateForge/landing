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
        <div className="bg-gradient-radial max-w-[1180px] flex w-full rounded-[45px] overflow-hidden">

            <div className="relative hidden sm:flex max-h-[436px] max-w-[492px]">
            
            <Image className="w-full object-cover object-left z-10 
                sm:[clip-path:polygon(85%_0,95%_28%,97%_42%,100%_58%,100%_68%,78%_100%,0_100%,0%_43%,0_0)]
                md:[clip-path:polygon(85%_0,95%_28%,97%_42%,100%_58%,100%_68%,82%_100%,0_100%,0%_43%,0_0)]" 
                src={"/use-cases/image.png"}
                width={492}
                height={436}
                sizes="100vh"
                alt={""}
                />
                <Image className="z-20 top-0 absolute  h-[120%]
                    -right-[3%] " 
                src={"/use-cases/vector1.svg"}
                width={0}
                height={0}
                alt={""}
                />
                <Image className="z-10 top-0 absolute 
                    -right-[7.5%] h-[120%]"
                src={"/use-cases/vector2.svg"}
                width={0}
                height={0}
                alt={""}
                />
                
                
            </div>

            <div className="flex flex-col justify-center items-center w-full p-8 mb-4">
                <h2 className="text-white font-semibold mb-6">
                    Use cases
                </h2>

                <div className="grid grid-cols-2 gap-4 flex-wrap z-20">
                {useCases.map((useCase, index) => (
                    <GradientButton key={index} 
                        variant="outline" 
                        width={266} height={64} radius={33} 
                        bgColor={'#5FB4871A'} className="text-xs sm:text-sm md:text-base">
                        {useCase}
                    </GradientButton>
                ))}
                </div>
            </div>
            
            

        </div>
    );
}
