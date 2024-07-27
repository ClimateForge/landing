import Image from "next/image";
import GradientText from "./ui/gradient-text";
import UspBlock from "./usp-block";

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
                    Climate Forge
                </GradientText>
            </h2>
            
            {/* Divider */}
            <svg className="mt-6 sm:mt:10 md:mt-12 mb-8 sm:mb-14 w-[220px] h-[2px] sm:w-[324px] sm:h-[2px]" width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M0.5 1H323.5" stroke="#01060F"/>
            </svg>
            <div className="flex flex-col gap-y-4 justify-center items-center">
            {/* Block 1 - Conversion Optimized */}
            <UspBlock 
                heading="Faster time to market for renewable energy products"
                description={["Companies using ClimateForge's solutions experience a ", "55%", " faster time to deploy energy upgrades."]}
                imageSrc="/usp-list/conversion-optimized.png"
                imageAlt="Conversion Optimized PNG"> 
                <h3>
                    Conversion-
                    <span className="relative">
                    Optimized
                        <Image className="absolute z-10 
                            top-[35px] left-[0px] 
                            sm:top-[40px] sm:left-[0px]
                            md:top-[50px] md:left-[0px]"
                            src={"/accents/accent1.svg"}
                            alt="Block 1 title accent SVG"
                            width={252}
                            height={18} 
                        />
                    </span>
                </h3>
            </UspBlock>

            {/* Block 2 - Real Energy Modeling */}
            <UspBlock 
                heading="Increase in renewable energy adoption"
                description={["ClimateForge's technology has led to a significant ", "75%", " increase in renewable energy adoption."]}
                imageSrc="/usp-list/real-energy-modeling.png"
                imageAlt="Real Energy Modeling PNG"
                imageLeft> 
                <h3>
                    Real{' '}
                    <span className="relative ">Energy&nbsp;Modeling
                        <Image className="absolute z-10 
                            top-[30px] left-[5px]
                            sm:top-[36px] sm:left-[5px]
                            md:top-[48px] md:left-[10px]"
                            src={"/accents/accent2.svg"}
                            alt="Block 2 title accent SVG"
                            width={0}
                            height={26} 
                            style={{ width: '380px', height: 'auto'}}
                        />
                    </span>
                </h3>
            </UspBlock>

            {/* Block 3 - Impact Assessments */}
            <UspBlock 
                heading="Reduction In Carbon Emissions"
                description={["Businesses using ClimateForge help to reduce carbon emissions by more than ", "30%", "."]}
                imageSrc="/usp-list/impact-assessments.png"
                imageAlt="Impact Assessments PNG"> 
                <h3>
                    Impact{' '}
                    <span className="relative">Assessments
                        <Image className="absolute z-10 
                            top-[28px] left-[3px]
                            sm:top-[34px] sm:left-[3px]
                            md:top-[45px] md:left-[5px]"
                            src={"/accents/accent1.svg"}
                            alt="Block 3 title accent SVG"
                            width={303}
                            height={18} 
                        />
                    </span>
                </h3>
            </UspBlock>
            </div>
        </section>
    );
}