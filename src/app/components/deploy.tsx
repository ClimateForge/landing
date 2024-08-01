"use client";
import AccentTitle from "./ui/accent-title";
import GradientBorderBox from "./ui/gradient-border-box";

export default function Deploy() {

    const images = [
        { src: '/deploy/deploy1.webp', caption: 'Solar Panels Systems' },
        { src: '/deploy/deploy2.webp', caption: 'EV Charging Systems' },
        { src: '/deploy/deploy3.webp', caption: 'Energy Storage & Batteries' },
        { src: '/deploy/deploy4.webp', caption: 'HVAC Systems' },
        { src: '/deploy/deploy5.webp', caption: 'Solar Heaters' },
        { src: '/deploy/deploy6.webp', caption: 'Smart Energy Devices' },
    ]

    return (
        <section id="deploy" className="w-full m-x-4 sm:mt-16 max-w-[1440px]">
            <GradientBorderBox 
                decorationsOutside={[
                    {src: "/decorations/dots-3x4.svg" , className: "-top-14 left-40"},
                    {src: "/decorations/dots.svg" , className: "-bottom-[75px] -right-20"}
                ]}>

                <AccentTitle title={['We Help you', 'Deploy']} variant="underline" accentIndex={1} className="mt-16 mb-8"/>

                <div className="flex justify-center items-center w-full max-w-[1179px] h-[716px] mb-24 z-20">

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">

                        {images.map((image, index) => (
                            
                            <div
                                key={index}
                                className="relative flex justify-center items-end w-full max-w-[380px] h-[250px] sm:h-[300px] md:h-[350px] rounded-[20px]"
                                style={{
                                    background: `linear-gradient(180deg, rgba(14, 24, 32, 0.000025) 0%, rgba(21, 37, 50, 0.25) 100%), url(${image.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}>

                                <div className="flex justify-center items-center h-[70px] w-full max-w-[338px] m-6
                                    rounded-2xl backdrop-blur-[4px] bg-[#01081352]"
                                    style={{ boxShadow: '0px 35.9px 36.56px 0px #1BA6774D' }}>
                                    <span className="text-white text-center font-semibold tracking-wide m-4
                                        text-sm sm:text-md md:text-lg lg:text-xl ">
                                        {image.caption}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </GradientBorderBox>
        </section>
    );
}