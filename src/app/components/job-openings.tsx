"use client";
import Image from 'next/image';
import AccentTitle from "./ui/accent-title";
import GradientText from './ui/gradient-text';
import LinkedInSvg from './ui/icons/linkedin-icon';
import GradientBorderCard from './ui/gradient-border-card';

export default function JobOpenings() {

    return (
        <section className="relative flex w-full max-w-[1440px] 
            overflow-hidden min-h-[600px] max-h-[1176px] rounded-[90px] bg-white-gradient">
            
            {/* Background image */}
            <Image className="absolute w-full h-full  mix-blend-soft-light object-cover"
                src={"/job-openings/solar-panels.webp"}
                alt="Houses"
                sizes="100vh"
                width={500}
                height={300}
                style={{ width: "100%" }}
            />
            <div className=" flex flex-col justify-center items-center
                max-w-[1440px] w-full rounded-[90px] p-6 z-10 ">
                
                {/* Title */}
                <AccentTitle
                    title={["Job", "Openings"]}
                    variant="underline"
                    accent={"/accents/accent1.svg"}
                    accentIndex={1}
                    className="mt-12 mb-12 text-center"
                />
                
                <div className="flex flex-col max-w-[350px] h-full gap-y-8 w-full text-center">
                    <GradientBorderCard borderRadius={20}>
                    <p className='p-2 sm:p-6 font-bold text-base sm:text-xl md:text-2xl'>Connect with us on{' '}
                        <button className='inline-flex items-center 
                        text-[#0a66c2] hover:text-[#3e7bb9]' 
                        onClick={() => 
                            window.open('https://www.linkedin.com/company/climateforge/jobs/?viewAsMember=true', 
                                '_blank', 'noopener,noreferrer'
                            )} 
                        >
                            
                                Linked 
                            
                            <LinkedInSvg className="ml-[2px] w-[18px] sm:w-[20px] lg:w-[24px]"/>
                        </button> 
                        {' '} and find out about our current job opportunities! 
                    </p>
                    </GradientBorderCard>

                    <GradientBorderCard borderRadius={20}>
                        <div className="p-2 sm:p-6 font-bold text-base sm:text-xl md:text-2xl">
                        <span>
                        Feel free to reach out at
                        </span>

                        <button className="inline-flex flex-wrap items-center justify-center
                            hover:opacity-85"
                            onClick={(e) => {
                                window.location.href = "mailto:team@climateforge.ai";
                                e.preventDefault();
                            }}>
                                
                                <GradientText className='hover:opacity-90'> 
                                    team@climateforge.ai
                                </GradientText>
                                
                        </button> 

                        <span> for general inquiries!</span>
                        </div>
                    </GradientBorderCard>
                </div>
            </div>
            <Image className={`absolute z-0 -bottom-[105px] -right-[105px] w-[363px]`}
                src={'decorations/dots.svg'}
                alt=""
                width={0}
                height={0} 
                style={{height: 'auto'}}
            />
        </section>
    );
}