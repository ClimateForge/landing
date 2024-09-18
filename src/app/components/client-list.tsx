"use client";
import Image from "next/image";
import GradientBorderCard from "./ui/gradient-border-card";
import { ReactNode } from "react";
import { motion, useDragControls } from "framer-motion"
type ClientCardProps = {
    imageSrc?: string
    imageWidth?: number
    imageHeight?: number
    children?: ReactNode
}

const ClientCard = ({imageSrc, imageWidth, imageHeight, children}: ClientCardProps) => {
    const controls = useDragControls()
    return (
        <motion.div whileDrag={{ zIndex: 20, filter: "grayscale" }} drag dragSnapToOrigin dragControls={controls} dragElastic={0.2} 
        dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }}>
        <GradientBorderCard height={262} width={262} borderRadius={20} 
            fgStyle="flex flex-col justify-center items-center px-6"
            bgStyle="mx-5 group/card hover:scale-110 hover:shadow-lg
                transition-all duration-300 ease-in-out">
            {!imageSrc ? children :
                <Image title="Client Logo"
                    className="h-auto grayscale group-hover/card:grayscale-0
                    transition-all duration-300 ease-in-out" draggable="false"
                    src={imageSrc}
                    alt="Client Logo"
                    width={imageWidth}
                    height={imageHeight} 
                    sizes="100vh"
                />
            }
        </GradientBorderCard></motion.div>
    )
}

const ClientCards = () => {
    
    return (
        <div className="inline-flex slide group-hover:pause">
            {/* Sunpower */}
            <ClientCard 
                imageSrc={"/client-list/sunpower_logo.svg"} 
                imageWidth={200} 
                imageHeight={0}/>

            {/* Palmetto */}
            <ClientCard 
                imageSrc={"/client-list/palmetto-logo.webp"} 
                imageWidth={200} 
                imageHeight={27}/>

            {/* LG Energy Solutions */}
            <ClientCard>
                <div className="flex flex-col justify-center items-center">
                    <Image title="LG Logo"
                        className="h-[64px] grayscale group-hover/card:grayscale-0 
                        transition-all duration-300 ease-in-out" draggable="false"
                        src={"/client-list/lg.webp"}
                        alt="LG Logo"
                        width={64}
                        height={0}
                        sizes="100vh"
                        />
                    <Image title="LG Text"
                        className="h-auto" draggable="false"
                        src={"/client-list/LG-text.webp"}
                        alt="LG Text"
                        width={180}
                        height={27}
                        sizes="100vh"/>
                </div>
            </ClientCard>

            {/* Goodman */}
            <ClientCard 
                imageSrc={"/client-list/goodman-logo.webp"} 
                imageWidth={200} 
                imageHeight={27}
            />

            {/* Sunrun */}
            <ClientCard 
                imageSrc={"/client-list/sunrun-logo.webp"} 
                imageWidth={200} 
                imageHeight={27}
            />
        </div>
    )
}

export default function ClientList() {
    
    return (
        <section className="text-center w-full relative">
            
            {/* Client List Title */}
            <h2 className="mb-8">Our 
            
                <div className="inline-flex justify-center "> 
                    <span className=" relative ">&nbsp;clients&nbsp;
                        <Image title="Gray Circle Accent SVG"
                            className="absolute -z-10 transform scale-110 top-[3px] right-[0px]"
                            src={"/accents/ellipse1.svg"}
                            alt="Gray Circle SVG"
                            width={0}
                            height={73} 
                            style={{ width: '200px', height: 'auto'}}/>
                        <Image title="Green Circle Accent SVG"
                            className="absolute -z-10 transform scale-110 top-[5px] right-[0px]"
                            src={"/accents/ellipse2.svg"}
                            alt="Green Circle SVG"
                            width={0}
                            height={73} 
                            style={{ width: '200px', height: 'auto'}}/>
                    </span>
                </div>
                work for
            </h2>
            <div className="relative after:z-10 after:bg-gradient-to-r from-transparent to-[#F9F9FF] 
                after:absolute after:top-0 after:right-0 after:w-[100px] after:h-full">
            {/* Client Card Carousel */}
            <div className="flex whitespace-nowrap group hover:pause
                before:z-10 before:bg-gradient-to-r from-[#F9F9FF] to-transparent 
                before:absolute before:top-0 before:left-0 before:w-[100px] before:h-full">
                <ClientCards/>
                <ClientCards/>
                <ClientCards/>
            </div>
            </div>
            
        </section>
    );
}