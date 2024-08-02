import Image from "next/image";
import GradientText from "./ui/gradient-text";
import { ReactNode } from "react";

type USPBlockProps = {
    heading: string;
    description: string[];
    imageSrc: string;
    imageAlt: string;
    imageLeft?: boolean;
    children: ReactNode;
}

function UspBlock({heading, description, imageSrc, imageAlt, imageLeft, children}: USPBlockProps) {
    
    return (
        <div className="flex justify-between text-center sm:text-left 
        mx-0 sm:mx-10 md:mx-20 md:gap-12">

        {imageLeft ? 
            <Image className="hidden sm:block h-auto w-[543px] min-w-[320px]"
                src={imageSrc}
                alt={imageAlt}
                sizes="100vh"
                width={0}
                height={0}
            /> : null
        }
        
        <div className="flex flex-col justify-center max-w-[580px]">
            {children}
            <h4 className="my-5 sm:my-10">
                {heading}
            </h4>

            <p className="font-semibold">
                {description[0]} 
                <GradientText>
                    {description[1]}
                </GradientText>
                {description[2]}
            </p>
        </div>

            {!imageLeft ? 
                <div className="flex justify-center items-center">
                    <Image className="hidden sm:block h-auto w-[543px] min-w-[320px] "
                        src={imageSrc}
                        alt={imageAlt}
                        sizes="100vh"
                        width={0}
                        height={0}
                        loading="lazy"
                    />
                </div> : null
            }

        </div>
    );
}

// A USP List consists of a title, divider and USP Blocks (usp-block)
export default function UspList() {

    return (
        <section className="flex flex-col justify-center items-center">
            
            {/* Title */}
            <h2 className="text-center">
                The Unique Power Of
            </h2>
            <h2>
                <GradientText>
                    ClimateForge
                </GradientText>
            </h2>
            
            {/* Divider */}
            <svg className="mt-6 sm:mt:10 md:mt-12 mb-8 sm:mb-14 w-[220px] h-[2px] sm:w-[324px] sm:h-[2px]" width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M0.5 1H323.5" stroke="#01060F"/>
            </svg>
            
            {/* USP List Container */}
            <div className="flex flex-col gap-y-12 sm:gap-y-4 justify-center items-center">

                {/* USP Block 1 - Conversion Optimized */}
                <UspBlock 
                    heading="Faster time to market for renewable energy products"
                    description={["Companies using ClimateForge's solutions experience a ", "55%", " faster time to deploy energy upgrades."]}
                    imageSrc="/usp-list/conversion-optimized.png"
                    imageAlt="Conversion Optimized PNG"> 
                    <h3>
                        Conversion-
                        <span className="relative">
                        Optimized
                            <Image className="absolute z-10 top-[85%] left-[0px]"
                                src={"/accents/accent1.svg"}
                                alt="Block 1 title accent SVG"
                                width={252} height={18}/>
                        </span>
                    </h3>
                </UspBlock>

                {/* USP Block 2 - Real Energy Modeling */}
                <UspBlock 
                    heading="Increase in renewable energy adoption"
                    description={["ClimateForge's technology has led to a significant ", "75%", " increase in renewable energy adoption."]}
                    imageSrc="/usp-list/real-energy-modeling.png"
                    imageAlt="Real Energy Modeling PNG"
                    imageLeft> 
                    <h3>
                        Real{' '}
                        <span className="relative ">Energy&nbsp;Modeling
                            <Image className="absolute z-10 top-[80%] left-[1%]"
                                src={"/accents/accent2.svg"}
                                alt="Block 2 title accent SVG"
                                width={0} height={26} 
                                style={{ width: '380px', height: 'auto'}}
                            />
                        </span>
                    </h3>
                </UspBlock>

                {/* USP Block 3 - Impact Assessments */}
                <UspBlock 
                    heading="Reduction In Carbon Emissions"
                    description={["Businesses using ClimateForge help to reduce carbon emissions by more than ", "30%", "."]}
                    imageSrc="/usp-list/impact-assessments.png"
                    imageAlt="Impact Assessments PNG"> 
                    <h3>
                        Impact{' '}
                        <span className="relative">Assessments
                            <Image className="absolute z-10 top-[71%] left-[1%]"
                                src={"/accents/accent1.svg"}
                                alt="Block 3 title accent SVG"
                                width={303} height={18}/>
                        </span>
                    </h3>
                </UspBlock>
            </div>
        </section>
    );
}