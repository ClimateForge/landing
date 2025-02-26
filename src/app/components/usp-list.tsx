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
    accentVariant?: boolean;
    color?: string;
    children: ReactNode;
}

type USPImageProps = {
    src: string;
    iconSrc: string;
    accentVariant?: boolean;
    children: ReactNode;
}

type USPDecorationProps = {
    title: string;
    caption: string;
    iconSrc: string;
    isFirst: boolean;
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

function UspDecoration({title, caption, iconSrc, isFirst}: USPDecorationProps) {
    return (
    <>
        {/** right decoration */}
        <motion.div variants={fromMiddle}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.8 },
            }}
            className="absolute top-[10%] sm:top-[20%] -right-[3%] sm:-right-[10%]
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

        {/** first top left decoration */}
        {isFirst ? 
        <motion.div variants={fromMiddle} 
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.6 },
            }}
            className="absolute top-[5%] sm:top-[10%] -left-[5%] sm:-left-[15%] 
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
        : null}
    </>
    )
}

function UspImage({src, iconSrc, accentVariant, children}: USPImageProps) {
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
            className="relative w-full max-w-[415px] h-auto z-10 p-4"
        >

            {/* Circular image container */}
            <div 
                className="relative flex justify-center items-center p-4 lg:p-6 min-w-[250px] 
                rounded-b-full rounded-tr-full shadow-xl bg-white z-10 max-w-[415px] max-h-[415px] w-full h-auto "
                style={{
                    borderRadius: accentVariant ? "50% 0% 50% 50%" : "0% 50% 50% 50%",
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

                {/* Gradient dot with icon */}
                <motion.div variants={fromRightLong}  
                    className="absolute bottom-0 z-0 
                        w-16 h-16 flex justify-center items-center
                        bg-accent-gradient rounded-full
                        shadow-[0px_4px_40px_rgba(0,198,198,0.45)]"
                    style={{
                        right: '-5%',
                        
                    }}>
                        
                        <Image title="Icon Decoration"
                            src={iconSrc}
                            alt="SVG Icon"
                            width={36}
                            height={0} 
                        />
                </motion.div>
            </div>

            {/* Unique decorations (Cards, etc.) passed as */ children}

            {/* Small neon green dot */}
            <motion.img variants={fromRight} 
                title="Small Green Dot" alt="Small Green Dot SVG"
                src={'/usp-list/dot-small.svg'} width={21} height={21} 
                className="absolute -z-10 -top-4 right-[12%]"
                style={accentVariant ? {left: '12%'} : {right: '12%'}}
            />

            {/* Large green dot */}
            <motion.img variants={fromLeft}
                title="Large Green Dot" alt="Large Green Dot SVG"
                src={'/usp-list/dot-large.svg'} width={65} height={66}
                className="absolute z-10 -bottom-6 left-[0%]"
            />

            {/* Very small dots pattern */}
            <motion.img variants={fromRight}
                title="Dots" alt="Dots SVG"
                src={'/usp-list/dots.svg'} width={148} height={148} 
                className="absolute -z-10 -bottom-[15px] right-[3%]"
            />
        </motion.div>
    )
}

function UspBlock({title, heading, description, videoSrc, iconSrc, accentVariant, color, children}: USPBlockProps) {
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
        <div className="relative flex flex-col text-center sm:text-left sm:flex-row items-center justify-center rounded-15 px-[25px] md:px-[50px] py-[58px]"
            style={{backgroundColor: color}}>
            
            <div className="flex flex-col z-10 pr-[52px] pb-4 sm:pb-0 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
                style={{paddingLeft: '24px'}}
            >
                {/** TITLE */}
                <h3>
                    {title}
                </h3>

                {/** HEADING */}
                <h4 className="">
                    {heading}
                </h4>

                {/** DESCRIPTION */}
                <p>
                    {description[0]} 
                    <motion.span initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }} // Only animate once
                        onAnimationStart={animateNumber}>
                        <GradientText className="text-lg font-bold ">
                            {currentValue}
                        </GradientText>
                    </motion.span>
                    {description[2]}
                </p>
            </div>

            {/** IMAGE */}
            <UspImage src={videoSrc} iconSrc={iconSrc} accentVariant={accentVariant}>
                {children}
            </UspImage>

        </div>
    );
}

const uspData = [
    {
        title: ["Conversion-Optimized"],
        heading: "Faster time to market for renewable energy products",
        description: ["Companies using ClimateForge's solutions experience a ", "55%", " faster time to deploy energy upgrades."],
        videoSrc: "/usp-list/conversion-optimized.mp4",
        iconSrc: "/usp-list/icon-react.svg",
        uspDecoration: ["$245.00", "Total Income", "/usp-list/icon-bar-graph.svg"],
        color: "#CFDDDC"
    },
    {
        title: ["Real Energy Modeling"],
        heading: "Increase in renewable energy adoption",
        description: ["ClimateForge's technology has led to a significant ", "32%", " increase in renewable energy adoption."],
        videoSrc: "/usp-list/real-energy-modeling.mp4",
        iconSrc: "/usp-list/icon-ai.svg",
        accentVariant: true,
        uspDecoration: ["Efficiency", "Savings", "/usp-list/icon-robot.svg"],
        color: "#C1CDE2"
    },
    {
        title: ["Impact Assessments"],
        heading: "Reduction In Carbon Emissions",
        description: ["Businesses using ClimateForge help to reduce carbon emissions by more than ", "30%", "."],
        videoSrc: "/usp-list/impact-assessments.mp4",
        iconSrc: "/usp-list/icon-sustainable.svg",
        uspDecoration: ["Save Earth", "Make $", "/usp-list/icon-sun.svg"],
        color: "#EDEDED"
    },
];
export default function UspList() {
    return (
        <section className="flex flex-col max-w-[1280px] w-full px-4 md:px-8">
            <h2 className="text-center pb-6 sm:pb-10 md:pb-20">
                The <GradientText>Unique</GradientText> Power Of ClimateForge
            </h2>
            <div className="relative flex flex-col justify-center items-center w-full min-h-screen">
                {uspData.map((usp, index) => (
                    <motion.div
                        key={index}
                        className={`sticky top-[15%] w-full ${index === uspData.length - 1 ? 'z-20' : 'z-10'}`}
                        initial={{ y: 50 }}
                        whileInView={{ opacity: 1,  y: 20 }} // Adjust the offset to make the top visible
                        transition={{ duration: 0.6, }}
                        viewport={{ margin: "-10%" }}
                        
                    >
                        <UspBlock {...usp}>
                            <UspDecoration
                                title={usp.uspDecoration[0]}
                                caption={usp.uspDecoration[1]}
                                iconSrc={usp.uspDecoration[2]}
                                isFirst={index === 0}
                            />
                        </UspBlock>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
