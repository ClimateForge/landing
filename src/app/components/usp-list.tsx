import Image from "next/image";
import GradientText from "./ui/gradient-text";

export default function UspList() {
    return (
        <section className="flex flex-col justify-center items-center">
            
            <h2 className="text-center">
                The Unique Power Of
            </h2>
            
            <h2>
                <GradientText>
                    Climate Forge
                </GradientText>
            </h2>
            
            
            <svg className="mt-6 sm:mt:10 md:mt-12 mb-8 sm:mb-14" width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M0.5 1H323.5" stroke="#01060F"/>
            </svg>
            
            {/* Block 1 - Conversion Optimized */}
            <div className="flex justify-between text-center sm:text-left 
                mx-0 sm:mx-10 md:mx-20 mb-10 md:mb-16 md:gap-12">
                
                <div className="flex flex-col justify-center max-w-[580px]">

                    <h3>
                        Conversion-
                        <span className="relative">
                        Optimized
                            <Image className="absolute z-10 
                                top-[35px] left-[0px] 
                                sm:top-[40px] sm:left-[0px]
                                md:top-[50px] md:left-[0px]"
                                width={252}
                                height={18} 
                                src={"/accents/accent1.svg"}
                                alt="Title Accent SVG"
                            />
                        </span>
                    </h3>
                    <h4 className="my-5 sm:my-10 text-2xl font-bold">Faster time to market for renewable energy products</h4>
                    <p className="font-semibold">Companies using ClimateForge&apos;s solutions experience a 
                        <GradientText> 55% </GradientText>
                        faster time to deploy energy upgrades.
                    </p>
                
                </div>
                
                <div className="flex justify-center items-center">
                <Image className="hidden sm:block h-auto w-[543px] min-w-[320px] "
                    src="/usp-list/conversion-optimized.png"
                    alt="Conversion Optimized PNG"
                    sizes="100vh"
                    width={543}
                    height={0}
                />
                </div>
            </div>

            {/* Block 2 - Energy Modeling */}
            <div className="flex justify-center  text-center sm:text-left
                mx-0 sm:mx-10 md:mx-20 mb-10 md:mb-20 md:gap-12">

                
                    <Image className="hidden sm:block h-auto w-[543px] min-w-[320px]"
                        src="/usp-list/real-energy-modeling.png"
                        alt="Energy Modeling PNG"
                        sizes="100vh"
                        width={543}
                        height={0}
                    />
                

                <div className="flex flex-col justify-center max-w-[580px]">
                    <h3>
                        Real{' '}
                        <span className="relative ">Energy&nbsp;Modeling
                            <Image className="absolute z-10 
                                top-[30px] left-[5px]
                                sm:top-[36px] sm:left-[5px]
                                md:top-[48px] md:left-[10px]"
                                src={"/accents/accent2.svg"}
                                alt="title-accent"
                                width={0}
                                height={26} 
                                style={{ width: '380px', height: 'auto'}}
                            />
                        </span>
                    </h3>
                    <h4 className="my-5 sm:my-10 text-2xl font-bold">Increase in renewable energy adoption</h4>
                    <p className="font-semibold">ClimateForge&apos;s technology has led to a significant 
                        <GradientText> 75% </GradientText>
                        increase in renewable energy adoption.
                    </p>
                
                </div>
                
            </div>

            {/* Block 3 - Impact Assessments */}
            <div className="flex justify-center text-center sm:text-left
                mx-0 sm:mx-10 md:mx-20 mb-10 md:mb-20 md:gap-12">
                <div className="flex flex-col justify-center max-w-[580px]">
                <h3>
                    Impact{' '}
                    <span className="relative">Assessments
                        <Image className="absolute z-10 
                            top-[28px] left-[3px]
                            sm:top-[34px] sm:left-[3px]
                            md:top-[45px] md:left-[5px]"
                            width={303}
                            height={18} 
                            src={"/accents/accent1.svg"}
                            alt="Title Accent SVG"
                        />
                    </span>
                </h3>
                <h4 className="my-5 sm:my-10 text-2xl font-bold">Reduction In Carbon Emissions</h4>
                <p className="font-semibold">Businesses using ClimateForge help to reduce carbon emissions by more than
                    <GradientText> 30%</GradientText>.
                </p>
                
                </div>
                <Image className="hidden sm:block h-auto w-[543px] min-w-[320px]"
                    src="/usp-list/impact-assessments.png"
                    alt="Impact Assessments PNG"
                    sizes="100vh"
                    width={543}
                    height={457}
                />
            </div>
        </section>
    );
}