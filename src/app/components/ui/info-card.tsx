import Image from 'next/image';

type InfoCardData = {
    title?: string;
    description?: string;
    icon?: string;
}

export default function InfoCard({ title, description, icon }:InfoCardData) {

    return (
        <div className="relative rounded-3xl bg-white shadow-md
            pt-[45px] sm:pt-[50px] md:pt-[60px] lg:pt-[70px] px-[16px] sm:px-[26px] pb-2 
            min-w-[180px] sm:w-[300px] md:w-[320px] lg:w-[380px] 
            min-h-[200px] max-h-[280px] sm:h-[200px] md:h-[250px]
            group transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-lg">
            
            <div className="absolute -top-8 right-8 sm:-top-10 sm:right-10
                w-16 h-16 sm:w-[70px] sm:h-[70px] md:w-20 md:h-20
                bg-accent-gradient rounded-full
                shadow-[0px_16px_24px_rgba(38,176,117,0.22)]
                transition-all duration-700
                group-hover:transition-all group-hover:delay-100 group-hover:duration-700
                bg-[length:100%_100%] group-hover:bg-[length:150%_100%] group-hover:scale-110">
                    
                    <Image className="absolute z-10 transition-all duration-700
                        top-[25%] left-[25%]
                        w-8 h-8 sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
                        src={`/card-icons/${icon}.svg`}
                        alt="triangle-dots-svg-decoration"
                        width={36}
                        height={0} 
                />
            </div>

            <h1 className="font-semibold pb-[6px]
                text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]">
                {title}
            </h1>

            <p className="text-gray-600 font-normal pb-2
                text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
                leading-4 sm:leading-5 md:leading-5 lg:leading-6">
                {description}
            </p>

        </div>
    );
}