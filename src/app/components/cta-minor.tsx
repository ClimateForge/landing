"use client";
import Image from "next/image";
import GradientButton from "./ui/gradient-button";
import GradientBorderBox from './ui/gradient-border-box';
import { motion, Variants } from "framer-motion";

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
        duration: 0.6
    }
    }
};

const rightVariants: Variants = {
    offscreen: {
        x: '30%',
        opacity: 0
    },
    onscreen: {
    x: 0,
    opacity: 1,
    
    transition: {
        type: { type: "inertia", velocity: 50 },
        
        duration: 0.9
    }
    }
};

const middleVariants: Variants = {
    offscreen: {
        
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        
    transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
    }
    }
};

const ctaVariants: Variants = {
    offscreen: {
        scale: .5,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
    transition: {
        type: "spring", damping: 30, stiffness: 200
    }
    }
};

export default function CtaMinor() {
    
    return (
        <section className="relative mt-72 flex flex-col justify-center items-center w-full max-w-[1440px]">
            
            {/** CTA container - gradient border, absolute position*/}
            <motion.div initial="offscreen"
        whileInView="onscreen" variants={ctaVariants}
        viewport={{ once: true, amount: 0.8 }} className="absolute z-20 -top-[340px] max-w-[822px] mt-12 sm:mt-24 p-[1px] text-gray-900 rounded-3xl bg-accent-gradient">
                
                <div className="flex relative flex-col justify-center items-center text-center 
                    bg-white rounded-3xl px-4 sm:px-12 max-h-[488px] py-8 min-h-[500px] ">
                    
                    <h2 className="mb-10 relative leading-snug">
                        Empowering{' '}
                        <span className="relative bg-clip-text text-transparent 
                            bg-gradient-to-r from-blue-800 from-40% to-red-800 to-45%"> 
                            American
                            <div className="absolute 
                                tracking-[1px] sm:tracking-[1px] md:tracking-[2px] lg:tracking-[4px]
                                left-[1px] sm:left-[1px] lg:left-[4px]
                                top-[5px] sm:top-[6px] lg:top-[10px]">
                                
                                <p className="text-white leading-4 sm:leading-tight md:leading-snug lg:leading-normal">★ ★ ★ ★</p>
                                <p className="text-white leading-4 sm:leading-tight md:leading-snug lg:leading-normal">★ ★ ★ ★</p>
                            </div>
                        </span>
                        {' '}Businesses to Sell More{' '}
                        <span className="relative inline-block text-nowrap text-gray-800">Energy Upgrades
                            <Image className="absolute z-10 top-[32px] sm:top-[36px] md:top-[48px] sm:left-0 w-[400px]"
                                src={"/accents/accent2.svg"}
                                alt="Title Accent SVG"
                                width={400}
                                height={0}
                            />
                        </span>
                    </h2>
                    <p className="text-base sm:text-xl max-w-[604px] pb-10 text-[#64607D]">
                        Deploy Solar, HVAC, and energy storage systems and make real money faster.
                    </p>
                    <GradientButton onClick={() => window.open('https://calendly.com/giovanni-climateforge-qttf', '_blank', 'noopener,noreferrer')} width={154}>
                        Book a Demo
                    </GradientButton>
                </div>
            </motion.div>

            {/* Image Container */}
            <GradientBorderBox 
                className="bg-[#f4fafd]"
                decorationsInside={[
                    {src: "/decorations/dots.svg", className: "-bottom-20 -right-[105px] w-[363px]"}
                ]}
                decorationsOutside={[
                    {src: "/decorations/dots.svg", className: "-top-32 -left-[60px]"},
                    {src: "/decorations/dots-3x6.svg", className: "-top-[90px] right-[120px]"}
                ]}
            >
                <Image className="h-[800px] sm:h-[900px] rounded-[90px] mix-blend-overlay
                    transform scale-[1.25] translate-x-16 -translate-y-20"
                    src={"/cta-minor/houses.png"}
                    alt="Houses"
                    sizes="100vh"
                    width={500}
                    height={300}
                    style={{ width: '100%' }}
                />
                {/* House + Logo container */}
                <motion.div initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }} className="absolute z-30 top-96 sm:top-[408px] w-[500px] sm:w-[628px]">
                    <motion.div variants={middleVariants} className="absolute z-30 w-[500px] sm:w-[628px]"> 
                    <Image className=""
                                src={"/cta-minor/house.png"}
                                alt="House"
                                sizes="100vh"
                                width={500}
                                height={300}
                            />
                    </motion.div>
                
                    <motion.div variants={leftVariants} className="absolute z-30 -top-[50px] left-[60px] backdrop-blur-sm">
                        <Image 
                            src={"/cta-minor/polygon1.svg"}
                            alt="Polygon SVG 1"
                            width={136}
                            height={141}
                        />
                    </motion.div>
                    
                    <motion.div variants={leftVariants} className="absolute z-30 -top-[20px] left-[80px] w-[95px]">
                        <Image
                            src={"/logo.png"}
                            alt="ClimateForge Logo"
                            width={84}
                            height={76}
                        />
                    </motion.div>
                    <motion.div variants={rightVariants} className="absolute z-30 -top-[55px] right-[10%]">
                        <Image
                            src={"/cta-minor/polygon2.svg"}
                            alt="Polygon SVG 2"
                            width={180}
                            height={164}
                        /> 
                    </motion.div>
                </motion.div>
                
                {/* Background circle decoration */}
                <div className="absolute z-20 top-[240px] sm:top-[310px] w-[770px] h-[516px]  overflow-clip ">
                    <Image className="absolute top-[48px] opacity-25 transform scale-[1.21] sm:scale-[1.41]"
                        src="/cta-minor/decoration.png"
                        alt="CTA Decoration"
                        width={900}
                        height={516}
                    />
                </div>
            </GradientBorderBox>
        </section>
    );
}