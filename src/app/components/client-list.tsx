import Image from "next/image";
import GradientBorderCard from "./ui/gradient-border-card";
import { ReactNode } from "react";

type ClientCardProps = {
    imageSrc?: string
    imageWidth?: number
    imageHeight?: number
    children?: ReactNode
}

const ClientCard = ({imageSrc, imageWidth, imageHeight, children}: ClientCardProps) => {
    
    return (
        <GradientBorderCard height={262} width={262} borderRadius={20} 
            fgStyle={"flex flex-col justify-center items-center px-6"}
            bgStyle={"mx-5"}>
            {!imageSrc ? children :
                <Image 
                    src={imageSrc}
                    alt="Block 2 title accent SVG"
                    width={imageWidth}
                    height={imageHeight} 
                />
            }
        </GradientBorderCard>
    )
}

const ClientCards = () => {
    
    return (
        <div className="inline-flex slide">
            {/* Sunpower */}
            <ClientCard 
                imageSrc={"/client-list/sunpower.png"} 
                imageWidth={200} 
                imageHeight={27}/>

            {/* Palmetto */}
            <ClientCard 
                imageSrc={"/client-list/palmetto.png"} 
                imageWidth={200} 
                imageHeight={27}/>

            {/* LG Energy Solutions */}
            <ClientCard>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={"/client-list/LG-logo.png"}
                        alt="Block 2 title accent SVG"
                        width={64}
                        height={70}/>
                    <Image
                        src={"/client-list/LG-text.png"}
                        alt="Block 2 title accent SVG"
                        width={180}
                        height={27}/>
                </div>
            </ClientCard>

            {/* Goodman */}
            <ClientCard 
                imageSrc={"/client-list/goodman.png"} 
                imageWidth={200} 
                imageHeight={27}
            />

            {/* Sunrun */}
            <ClientCard 
                imageSrc={"/client-list/sunrun.png"} 
                imageWidth={200} 
                imageHeight={27}
            />
        </div>
    )
}

export default function ClientList() {
    return (
        <section className="text-center w-full">
            
            {/* Client List Title */}
            <h2 className="mb-8">Our 
            
                <div className="inline-flex  justify-center"> 
                    <span className=" relative ">&nbsp;clients&nbsp;
                        <Image className="absolute -z-10 transform scale-110
                            top-[3px] right-[0px]"
                            src={"/accents/ellipse1.svg"}
                            alt="Block 2 title accent SVG"
                            width={0}
                            height={73} 
                            style={{ width: '200px', height: 'auto'}}/>
                        <Image className="absolute -z-10 transform scale-110
                            top-[5px] right-[0px]"
                            src={"/accents/ellipse2.svg"}
                            alt="Block 2 title accent SVG"
                            width={0}
                            height={73} 
                            style={{ width: '200px', height: 'auto'}}/>
                    </span>
                </div>
                work for
            </h2>
            
            {/* Client Card Carousel */}
            <div className="overflow-hidden whitespace-nowrap ">
                <ClientCards/>
                <ClientCards/>
            </div>
            
        </section>
    );
}