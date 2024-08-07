"use client";
import Image from "next/image";
import GradientText from "./ui/gradient-text";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { Inter } from 'next/font/google';
type USPBlockProps = {
    title: string[];
    heading: string;
    description: string[];
    imageSrc: string;
    imageAlt: string;
    iconSrc: string;
    imageLeft?: boolean;
    children: ReactNode;
}

type USPImageProps = {
    src: string;
    alt: string;
    iconSrc: string;
    left?: boolean;
    children: ReactNode;
}

const rightVariants: Variants = {
    offscreen: {
        x: '30%',
        opacity: 0
    },
    onscreen: {
    x: 0,
    opacity: 1,
    
    transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
    }
    }
};
const leftVariants: Variants = {
    offscreen: {
        x: '-30%',
        opacity: 0
    },
    onscreen: {
    x: 0,
    opacity: 1,
    transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
    }
    }
};

const inter = Inter({ subsets: ['latin'] })

function UspImage({src, alt, iconSrc, left = false, children}: USPImageProps) {
    
    return (
        <motion.div initial="offscreen"
            whileInView="onscreen" 
            variants={left ? leftVariants : rightVariants}
            viewport={{ once: false, amount: 0.8 }} 
            className="absolute sm:relative flex justify-center items-center p-4 md:p-6 
            rounded-b-full rounded-tr-full shadow-xl bg-white mx-16 z-10"
            style={{
                borderRadius: left ? "50% 0% 50% 50%" : "0% 50% 50% 50%",
                zIndex: 0
            }}>
                
            <div className="min-w-[220px] max-w-[370px] max-h-[370px] 
                rounded-full overflow-hidden opacity-45 sm:opacity-100">
                <Image className="object-cover aspect-square"
                    src={src}
                    alt={alt}
                    sizes="100vh"
                    width={370}
                    height={370}
                    loading="lazy"
                />
            </div>


            <Image src={'/usp-list/dot-small.svg'} alt={''} width={21} height={21} 
                className="absolute -z-10 -top-5 right-20" 
                style={{
                    right: !left ? '7.5%' : undefined,
                    left: left ? '7.5%' : undefined 
                }}
            />
            <Image src={'/usp-list/dot-large.svg'} alt={''} width={65} height={66}
                className="absolute -z-10 -bottom-[11px]" 
                style={{
                    right: left ? '-9.5%' : undefined,
                    left: !left ? '-9.5%' : undefined 
                }}
            />
            <Image src={'/usp-list/dots.svg'} alt={''} width={148} height={148} 
                className="absolute -z-10 -bottom-[15px]" 
                style={{
                    right: !left ? '1%' : undefined,
                    left: left ? '1%' : undefined 
                }}
            />
            
            <div className="absolute -bottom-0 z-0
                w-16 h-16 
                bg-accent-gradient rounded-full
                shadow-[0px_4px_40px_rgba(0,198,198,0.45)]
                transition-all duration-700
                group-hover:transition-all group-hover:delay-200 group-hover:duration-700
                bg-[length:100%_100%] group-hover:bg-[length:150%_100%] group-hover:scale-110"
                style={{
                    right: !left ? '-5%' : undefined,
                    left: left ? '-5%' : undefined 
                }}>
                    
                    <Image className="absolute z-10 transition-all duration-700
                        top-[20%] left-[20%]
                        w-[60%] h-[60%]"
                        src={iconSrc}
                        alt=""
                        width={36}
                        height={0} 
                    />
            </div>

            {children}
            
        </motion.div>
    )
}

function UspBlock({title, heading, description, imageSrc, imageAlt, iconSrc, imageLeft, children}: USPBlockProps) {
    
    return (
        <div className="relative flex justify-center sm:justify-between items-center text-center sm:text-left 
            w-full min-h-[415px]">
            
            

            { imageLeft ? 
                <div className="absolute sm:relative flex justify-center items-center w-full">
                    <UspImage src={imageSrc} alt={imageAlt} iconSrc={iconSrc} left={imageLeft}>
                        {children}
                    </UspImage> 
                </div>
                : null }
            
            <div className="flex flex-col justify-center w-full  z-10">
                <h3>
                    {title[0]}
                    <span className="relative whitespace-nowrap">
                    {title[1]}
                        <Image className="absolute z-10 top-[85%] left-[0px] w-full"
                            src={imageLeft ? "/accents/accent2.svg" : "/accents/accent1.svg"}
                            alt="Block 1 title accent SVG"
                            width={381} height={18}/>
                    </span>
                </h3>

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

            { !imageLeft ? 
                <div className="absolute sm:relative flex justify-evenly items-center w-full">
                    <UspImage src={imageSrc} alt={imageAlt} iconSrc={iconSrc} >
                        {children}
                    </UspImage>
                </div>
                : null }

        </div>
    );
}

// A USP List consists of a title, divider and USP Blocks (usp-block)
export default function UspList() {

    return (
        <section className="flex flex-col justify-center items-center max-w-[1180px] w-full">
            
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
            <svg className="w-[220px] h-[2px] sm:w-[324px] sm:h-[2px] mt-6 sm:mt:10 md:mt-12 mb-8 sm:mb-14" 
                width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M0.5 1H323.5" stroke="#01060F"/>
            </svg>
            
            {/* USP List Container */}
            <div className="flex flex-col gap-y-16 lg:gap-y-24 justify-center items-center w-full">

                {/* USP Block 1 - Conversion Optimized */}
                <UspBlock 
                    title={["Conversion-", "Optimized"]}
                    heading="Faster time to market for renewable energy products"
                    description={["Companies using ClimateForge's solutions experience a ", "55%", " faster time to deploy energy upgrades."]}
                    imageSrc="/usp-list/conversion-optimized.gif"
                    imageAlt="Conversion Optimized PNG"
                    iconSrc="/usp-list/icon-react.svg"> 
                    
                    <div className="absolute top-0 sm:top-20 -right-10 sm:-right-6 
                        flex justify-between items-center 
                        w-[126px] h-[55px] px-4 py-2
                        rounded-[10px] bg-white shadow-md">
                        
                        <div className={`${inter.className} h-[34px] flex flex-col justify-center`}>
                            <p className="text-[12px] text-[#A9A7B6]">Save Earth</p>
                            <p className="text-[14px] font-medium leading-none">Make $</p>
                        </div>
                        

                        <Image className="w-[23px] h-[23px]"
                            src={"/usp-list/icon-bar-graph.svg"}
                            alt=""
                            width={36}
                            height={0} 
                        />

                    </div>
                    
                    <div className="absolute -top-7 sm:top-10 -left-10 sm:-left-20 
                        flex justify-evenly items-center
                        w-[206px] h-[55px] px-3
                        rounded-[10px] bg-white shadow-md">
                        <Image className="w-[35px] h-[35px] object-cover rounded-full"
                            src={"/usp-list/avatar.webp"}
                            sizes="100vh"
                            alt=""
                            width={0}
                            height={0} 
                        />
                        <div className={`${inter.className} flex flex-col justify-center h-[32px] px-[9px]`}>
                        <p className="text-[14px] font-bold">+7.25%</p>
                        <p className="text-[11px] font-medium leading-none text-[#A9A7B6]">Increase in Clients</p>
                        </div>
                        

                        <Image className="w-[28px] h-[28px]"
                            src={"/usp-list/icon-line-graph.svg"}
                            alt=""
                            width={0}
                            height={0} 
                        />
                    </div>
                </UspBlock>

                {/* USP Block 2 - Real Energy Modeling */}
                <UspBlock 
                    title={["Real ", "Energy Modeling"]}
                    heading="Increase in renewable energy adoption"
                    description={["ClimateForge's technology has led to a significant ", "75%", " increase in renewable energy adoption."]}
                    imageSrc="/usp-list/real-energy-modeling.gif"
                    imageAlt="Real Energy Modeling PNG"
                    iconSrc="/usp-list/icon-ai.svg"
                    imageLeft> 
                    <div className="absolute top-4 sm:top-16 -right-6 px-4 py-2 flex justify-between items-center w-[123px] h-[60px]
                        rounded-[10px] bg-white shadow-md gap-[10px]">
                        
                        <div className={`${inter.className} h-[34px] flex flex-col justify-center`}>
                            <p className="text-[12px] text-[#A9A7B6]">Savings</p>
                            <p className="text-[14px] font-medium leading-none">Efficiency</p>
                        </div>
                        

                        <Image className="w-[23px] h-[23px]"
                            src={"/usp-list/icon-robot.svg"}
                            alt=""
                            width={36}
                            height={0} 
                        />

                    </div>
                </UspBlock>

                {/* USP Block 3 - Impact Assessments */}
                <UspBlock 
                    title={["Impact ", "Assessments"]}
                    heading="Reduction In Carbon Emissions"
                    description={["Businesses using ClimateForge help to reduce carbon emissions by more than ", "30%", "."]}
                    imageSrc="/usp-list/impact-assessments.gif"
                    imageAlt="Impact Assessments PNG"
                    iconSrc="/usp-list/icon-sustainable.svg"> 
                    <div className="absolute top-4 sm:top-16 -right-6 px-4 py-2 flex justify-between items-center w-[126px] h-[55px]
                        rounded-[10px] bg-white shadow-md">
                        
                        <div className={`${inter.className} h-[34px] flex flex-col items-start`}>
                            <p className="text-[12px] text-[#A9A7B6]">Save Earth</p>
                            <p className="text-[14px] font-medium leading-none">Make $</p>
                        </div>
                        

                        <Image className="w-[23px] h-[23px]"
                            src={"/usp-list/icon-sun.svg"}
                            alt=""
                            width={36}
                            height={0} 
                        />

                    </div>
                </UspBlock>
            </div>
        </section>
    );
}