"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import GradientButton from "./ui/gradient-button";

export default function CtaMinor() {
    
    const router = useRouter()
    
    return (
        <section className="flex flex-col justify-center items-center w-full">
            
            {/** Info Card */}
            <div className="relative max-w-4xl mt-12 sm:mt-24 p-[1px] text-gray-900 rounded-3xl bg-accent-gradient">
                
                <div className="flex relative flex-col justify-center items-center text-center bg-white rounded-3xl px-10 py-24">
                    
                    <h2 className="mb-10 relative inline-block leading-snug">
                        Empowering{' '} 
                        <span className="bg-clip-text text-transparent group bg-gradient-to-r from-blue-800 from-40% to-red-800 to-45% relative"> 
                            American 
                            <div className="absolute grid grid-cols-4 gap-x-[9px] sm:gap-x-3 left-[6px] top-2 sm:top-3 text-[12px] sm:text-[16px]">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <p key={index} className="text-white">★</p>
                                ))}
                            </div>
                        </span>
                        {' '}Businesses to Sell More{' '}
                        <span className="relative inline-block text-nowrap text-gray-700">Energy Upgrades
                            <Image className="absolute z-10 top-[40px] sm:top-[48px] sm:left-0"
                                src={"/accents/accent2.svg"}
                                alt="Title Accent SVG"
                                width={400}
                                height={0} 
                            />
                        </span>
                    </h2>
                    <p className="text-xl max-w-[604px] pb-10 text-[#64607D]">
                        Deploy Solar, HVAC, and energy storage systems and make real money faster.
                    </p>
                    <GradientButton onClick={() => router.push('#calendar')}>
                        Book a Demo
                    </GradientButton>
                </div>
            </div>

            {/* Image Container */}
            <div className="relative -z-10 -top-[240px] w-full rounded-[90px]">
                <Image className="absolute -top-[92px] z-20 right-32"
                    src={"/cta-minor/dots1.svg"}
                    alt="Dot SVG 1"
                    width={80}
                    height={180}
                />
                <Image className="absolute z-20 -top-[128px]"
                    src={"/cta-minor/dots2.svg"}
                    alt="Dot SVG 2"
                    width={257}
                    height={0}
                />
                <div className="p-[2px] rounded-[90px] relative overflow-hidden bg-accent-gradient">

                    <div className="relative flex flex-col justify-center items-center
                        bg-[#f4fafd] rounded-[88px] overflow-hidden">
                        <Image className="h-[800px] sm:h-[900px] rounded-[90px] mix-blend-overlay
                            transform scale-[1.25] translate-x-16 -translate-y-20"
                            src={"/cta-minor/houses.png"}
                            alt="Houses"
                            sizes="100vw"
                            width={500}
                            height={300}
                        />
                        <div className="absolute z-30 top-96 sm:top-[408px] w-[500px] sm:w-[628px]">
                            <Image className=""
                                src={"/cta-minor/house.png"}
                                alt="House"
                                sizes="100vh"
                                width={500}
                                height={300}
                            />
                            <Image className="absolute z-30 -top-[50px] left-[60px] backdrop-blur-sm"
                                src={"/cta-minor/polygon1.svg"}
                                alt="Polygon SVG 1"
                                width={136}
                                height={141}
                            />
                            <Image className="absolute z-30 -top-[10px] left-[80px]"
                                src={"/logo.png"}
                                alt="ClimateForge Logo"
                                width={84}
                                height={76}
                            />
                            <Image className="absolute z-30 -top-[55px] right-[65px]"
                                src={"/cta-minor/polygon2.svg"}
                                alt="Polygon SVG 2"
                                width={180}
                                height={164}
                            />   
                        </div>
                        
                        <div className="absolute z-20 top-[240px] sm:top-[310px] w-[770px] h-[516px]  overflow-hidden ">
                            <Image className="absolute top-[48px] opacity-25 transform scale-[1.21] sm:scale-[1.41]"
                                src="/cta-minor/decoration.png"
                                alt="CTA Decoration"
                                sizes="100vh"
                                width={900}
                                height={516}
                            />
                        </div>
                            
                    </div>

                    <Image className="absolute z-0 bottom-0 right-0"
                        src={"/cta-minor/dots3.svg"}
                        alt="Dot SVG 3"
                        width={363}
                        height={0} 
                    />
                </div>
            </div>
        </section>
    );
}