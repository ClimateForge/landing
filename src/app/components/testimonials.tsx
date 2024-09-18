import Image from "next/image";

import AccentTitle from "./ui/accent-title";
import GradientBorderBox from "./ui/gradient-border-box";

type Testimonial = {
    rating: 1 | 2 | 3 | 4 | 5;
    description: string;
    imageSrc?: string;
    name: string;
    location: string;
}

export default function Testimonials() {

    // Hardcoded Testimonials
    const testimonials: Testimonial[] = [
        {
            rating: 5,
            description: "The ClimateForge team nailed exactly what we need to make our job better and faster.",
            imageSrc: "/testimonials/testimonial1.png",
            name: "Nick Barnett",
            location: "Elgin, IL, United States"
        },
        {
            rating: 5,
            description: "In our team, we tried many tools for lead generation and canvassing, but ClimateForge is the only one that really delivers the value we expect!",
            imageSrc: "/testimonials/testimonial2.png",
            name: "Tiff Lopez",
            location: "Fresno, CA, United States"
        },
        {
            rating: 5,
            description: "Crazy hours under the sun and endless days spent trying to find a deal. ClimateForge cut all of that, we can make bread for our families super fast....",
            imageSrc: "/testimonials/testimonial3.png",
            name: "Jack Bell",
            location: "Alamo City, TX, United States"
        },
    ]

    // Helper function to render stars
    const renderStars = (rating: number) => {
        return Array.from({ length: rating }, (_, index) => (
        <span key={index} 
            className="star text-[35px] text-yellow-500
                group-hover:text-transparent group-hover:bg-accent-gradient 
                group-hover:bg-clip-text group-hover:scale-120">
            ★
        </span>
        ));
    };
    
    return (
        <section id="testimonials" className="w-full flex justify-center">
        <GradientBorderBox borderWidth={1}
            decorationsInside={[
                {src: "decorations/dots.svg", className: "-top-[98px] left-24 w-[197px]"}
            ]}
        >
            <AccentTitle title={['Why Our Clients', 'Are Satisfied?']}
                variant='underline' 
                accent={'/accents/accent2.svg'} 
                accentIndex={1}
                className="mt-24 mb-16 sm:mb-24 text-center"
            />
            
            <div className="flex flex-wrap justify-center gap-5 items-start min-h-[500px] mb-16 sm:mb-8 mx-4 ">
                
                {testimonials.map((testimonial, index) => (

                    <div key={index}
                        className="flex-1 min-w-[250px] max-w-[380px] min-h-[250px] sm:min-h-[250px] 
                        rounded-[20px] py-8 px-6 border-[1px] border-solid border-gray-300 bg-white
                        group transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-lg">

                        {/* Rating */}
                        <div className="mb-2">{renderStars(testimonial.rating)}</div>

                        {/* Description */}
                        <p>{testimonial.description}</p>

                        {/* Image, name, and location */}
                        <div className="flex mt-6 items-center">
                            
                            <div className="w-16 h-16 min-w-16 rounded-full mr-4 overflow-hidden bg-[#F9F9FF]">
                                <Image title="Testimonial Avatar"
                                src={testimonial.imageSrc ? testimonial.imageSrc : "/avatar.svg"}
                                alt="testimonial-avatar"
                                width={64}
                                height={64} 
                                sizes="100vh"
                                className=" w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-black">
                                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-bold">
                                    {testimonial.name}
                                </p>
                                <p className="text-[12px] sm:text-[14px] md:text-[16px] font-medium">
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GradientBorderBox></section>
    );
}