"use client";
import Image from "next/image";
import GradientText from "./ui/gradient-text";
import { motion, Variants } from "framer-motion";
import { ReactNode, useState } from "react";
import { Inter } from 'next/font/google';

type USPBlockProps = {
    title: string[];
    heading: string;
    description: string[];
    videoSrc: string;
    iconSrc: string;
    imageLeft?: boolean;
    children: ReactNode;
}

type USPImageProps = {
    src: string;
    iconSrc: string;
    left?: boolean;
    children: ReactNode;
}

type USPDecorationProps = {
    title: string;
    caption: string;
    iconSrc: string;
}

const fromMiddle: Variants = {
    offscreen: {
        opacity: 0,
        scale: .75,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const inter = Inter({ subsets: ['latin'] })

function UspDecoration({title, caption, iconSrc}: USPDecorationProps) {
    return (
        <motion.div variants={fromMiddle}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.8 },
            }}
            className="absolute top-[10%] sm:top-[20%] -right-[10%]
            flex justify-between items-center 
            h-[55px] px-4 
            rounded-[10px] bg-white shadow-md">
            
            <div className={`${inter.className}  flex flex-col justify-center cursor-default`}>
                <p className="text-[12px] text-[#A9A7B6] leading-5">{caption}</p>
                <p className="text-[14px] font-medium leading-none">{title}</p>
            </div>
            

            <Image title="Decoration Card Icon"
                className="w-[23px] h-[23px] mt-5"
                src={iconSrc}
                alt="Card Icon"
                width={36}
                height={0} 
            />

        </motion.div>
    )
}

function UspImage({src, iconSrc, left = false, children}: USPImageProps) {
    const fromRight: Variants = {
        offscreen: { x: '30%', opacity: 0 },
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
    
    const fromRightLong: Variants = {
        offscreen: { x: '30%', opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: 2
            }
        }
    };
    
    const fromLeft: Variants = {
        offscreen: { x: '-40%', opacity: 0 },
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
    
    const fromLeftLong: Variants = {
        offscreen: { x: '-40%', opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    };
    return (
        <motion.div 
            initial="offscreen"
            whileInView="onscreen" 
            viewport={{ once: false, amount: 0.6 }}  
            className="relative flex-center w-full max-w-[415px] h-auto mx-8"
        >

            {/* Circular image container */}
            <div 
                className="relative flex justify-center items-center p-4 lg:p-6 min-w-[250px] 
                rounded-b-full rounded-tr-full shadow-xl bg-white z-10 max-w-[415px] max-h-[415px] w-full h-auto"
                style={{
                    borderRadius: left ? "50% 0% 50% 50%" : "0% 50% 50% 50%",
                    zIndex: 0
                }}>
                    
                <div className="full min-w-[220px] max-w-[370px] max-h-[370px] 
                    overflow-hidden opacity-45 sm:opacity-100 rounded-full">
                    <video className="full aspect-square object-cover"
                        src={src}
                        autoPlay
                        loop
                        playsInline
                        muted 
                        width={370}
                        height={370}
                    >
                        
                    </video>
                </div>
                
            </div>

            {/* Unique decorations (Cards, etc.) passed as */ children}

            {/* Gradient dot with icon */}
            <motion.div variants={left ? fromLeftLong : fromRightLong}  
                className="absolute bottom-0 z-0 
                    w-16 h-16 flex justify-center items-center
                    bg-accent-gradient rounded-full
                    shadow-[0px_4px_40px_rgba(0,198,198,0.45)]"
                style={{
                    right: !left ? '-7%' : undefined,
                    left: left ? '-7%' : undefined 
                }}>
                    
                    <Image title="Icon Decoration"
                        src={iconSrc}
                        alt="SVG Icon"
                        width={36}
                        height={0} 
                    />
            </motion.div>

            {/* Small neon green dot */}
            <motion.img variants={left ? fromLeft : fromRight} 
                title="Small Green Dot" alt="Small Green Dot SVG"
                src={'/usp-list/dot-small.svg'} width={21} height={21} 
                className="absolute -z-10 -top-5 right-20" 
                style={{
                    right: !left ? '12%' : undefined,
                    left: left ? '12%' : undefined 
                }}
            />

            {/* Large green dot */}
            <motion.img variants={left ? fromRight : fromLeft}
                title="Large Green Dot" alt="Large Green Dot SVG"
                src={'/usp-list/dot-large.svg'} width={65} height={66}
                className="absolute -z-10 -bottom-6" 
                style={{
                    right: left ? '-5%' : undefined,
                    left: !left ? '-5%' : undefined 
                }}
            />

            {/* Very small dots pattern */}
            <motion.img variants={left ? fromLeft : fromRight}
                title="Dots" alt="Dots SVG"
                src={'/usp-list/dots.svg'} width={148} height={148} 
                className="absolute -z-10 -bottom-[15px]" 
                style={{
                    right: !left ? '0%' : undefined,
                    left: left ? '0%' : undefined 
                }}
            />
        </motion.div>
    )
}

function UspBlock({title, heading, description, videoSrc, iconSrc, imageLeft, children}: USPBlockProps) {
    const [currentValue, setCurrentValue] = useState("0");

    // This function handles the number animation logic
    const animateNumber = () => {
        // Extract numeric part from the target value
        const numericPart = parseFloat(description[1]);
        const duration = 1200; // 1.2 seconds for the animation
        const stepTime = Math.abs(Math.floor(duration / numericPart));

        const hasPercent = description[1].includes("%");
        const hasPlus = description[1].includes("+");
        const suffix = hasPercent ? "%" : "";
        const prefix = hasPlus ? "+" : "";

        let currentNumber = 0;

        const incrementNumber = () => {
        setCurrentValue(() => {
            if (currentNumber < numericPart) {
            currentNumber++;
            return `${prefix}${currentNumber}${suffix}`;
            }
            return `${prefix}${numericPart}${suffix}`; // Ensure it does not go beyond the target
        });
        };

        const intervalId = setInterval(incrementNumber, stepTime);

        return () => clearInterval(intervalId);
    };

    return (
        <div className="relative flex justify-center sm:justify-between items-center text-center sm:text-left 
            w-full min-h-[415px] ">
            
            { imageLeft ? 
                <UspImage src={videoSrc} iconSrc={iconSrc} left={imageLeft}>
                    {children}
                </UspImage> 
                : null 
            }
            
            <div className="absolute sm:static sm:flex flex-col justify-center w-full z-10 "
            style={{paddingLeft: '24px'}}>
                <h3>
                    {title[0]}
                    <span className="relative whitespace-nowrap">
                    {title[1]}
                        <Image title="USP Title Accent"
                            className="absolute z-10 top-[85%] left-[0px] w-full"
                            src={imageLeft ? "/accents/accent2.svg" : "/accents/accent1.svg"}
                            alt="Title Accent SVG"
                            width={381} height={18}/>
                    </span>
                </h3>

                <h4 className="my-5 sm:my-10">
                    {heading}
                </h4>

                <p className="font-semibold">
                    {description[0]} 
                    <motion.span initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }} // Only animate once
                        onAnimationStart={animateNumber}>
                        <GradientText className="text-lg font-bold">
                            {currentValue}
                        </GradientText>
                    </motion.span>
                    {description[2]}
                </p>
            </div>

            { !imageLeft ? 
                <UspImage src={videoSrc} iconSrc={iconSrc} >
                    {children}
                </UspImage>
                : null 
            }

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
            <motion.h2 variants={fromMiddle} initial="offscreen"
            whileInView="onscreen" 
            viewport={{ once: false, amount: 0.6 }}  >
                <GradientText>
                    ClimateForge
                </GradientText>
            </motion.h2>
            
            {/* Divider */}
            <svg className="w-[220px] h-[2px] sm:w-[324px] sm:h-[2px] mt-6 sm:mt:10 md:mt-10 mb-14" 
                width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M0.5 1H323.5" stroke="#01060F"/>
            </svg>
            
            {/* USP List Container */}
            <div className="flex flex-col gap-y-8 sm:gap-y-16 md:gap-y-24 lg:gap-y-32 justify-center items-center w-full">

                {/* USP Block 1 - Conversion Optimized */}
                <UspBlock 
                    title={["Conversion-", "Optimized"]}
                    heading="Faster time to market for renewable energy products"
                    description={["Companies using ClimateForge's solutions experience a ", "55%", " faster time to deploy energy upgrades."]}
                    videoSrc="/usp-list/conversion-optimized.mp4"
                    iconSrc="/usp-list/icon-react.svg"> 
                    
                    <UspDecoration title="$245.00" caption="Total Income" iconSrc="/usp-list/icon-bar-graph.svg"/>
                    
                    <motion.div variants={fromMiddle} 
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.6 },
                        }}
                        className="absolute top-[5%] sm:top-[10%] -left-[10%] sm:-left-[15%] 
                        flex justify-evenly items-center cursor-default
                        w-[206px] h-[55px] px-3
                        rounded-[10px] bg-white shadow-md">
                        <Image title="Avatar"
                            className="w-[35px] h-[35px] object-cover rounded-full"
                            src={"/usp-list/avatar.webp"}
                            sizes="100vh"
                            alt="Avatar"
                            width={0}
                            height={0} 
                        />
                        <div className={`${inter.className} flex flex-col justify-center h-[32px] px-[9px]`}>
                        <p className="text-[14px] font-bold">+7.25%</p>
                        <p className="text-[11px] font-medium leading-none text-[#A9A7B6]">Increase in Clients</p>
                        </div>
                        

                        <Image title="Line Graph Icon"
                            className="w-[28px] h-[28px]"
                            src={"/usp-list/icon-line-graph.svg"}
                            alt="Line Graph SVG"
                            width={0}
                            height={0} 
                        />
                    </motion.div>
                </UspBlock>

                {/* USP Block 2 - Real Energy Modeling */}
                <UspBlock 
                    title={["Real ", "Energy Modeling"]}
                    heading="Increase in renewable energy adoption"
                    description={["ClimateForge's technology has led to a significant ", "75%", " increase in renewable energy adoption."]}
                    videoSrc="/usp-list/real-energy-modeling.mp4"
                    iconSrc="/usp-list/icon-ai.svg"
                    imageLeft> 
                    <UspDecoration title="Efficiency" caption="Savings" iconSrc="/usp-list/icon-robot.svg"/>

                </UspBlock>

                {/* USP Block 3 - Impact Assessments */}
                <UspBlock 
                    title={["Impact ", "Assessments"]}
                    heading="Reduction In Carbon Emissions"
                    description={["Businesses using ClimateForge help to reduce carbon emissions by more than ", "30%", "."]}
                    videoSrc="/usp-list/impact-assessments.mp4"
                    iconSrc="/usp-list/icon-sustainable.svg"> 
                    <UspDecoration caption="Save Earth" title="Make $" iconSrc="/usp-list/icon-sun.svg"/>
                    
                </UspBlock>
            </div>
        </section>
    );
}