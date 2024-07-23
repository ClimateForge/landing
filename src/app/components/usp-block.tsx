import Image from "next/image";
import GradientText from "./ui/gradient-text";


export default function UspBlock({heading, description, imageSrc, imageAlt, imageLeft, children}: any) {
    
    return (
        <div className="flex justify-between text-center sm:text-left 
        mx-0 sm:mx-10 md:mx-20 mb-10 md:mb-16 md:gap-12">

        {imageLeft ? 
            <Image className="hidden sm:block h-auto w-[543px] min-w-[320px]"
                src={imageSrc}
                alt={imageAlt}
                sizes="100vh"
                width={0}
                height={0}
            /> : null
        }
        
        <div className="flex flex-col justify-center max-w-[580px]">
            {children}
            <h4 className="my-5 sm:my-10">
                {heading}
            </h4>

            <p className="font-semibold">
                {description[0]} 
                <GradientText>
                    {description[1]}
                </GradientText>
                {description[2]}
            </p>
        </div>

            {!imageLeft ? 
                <div className="flex justify-center items-center">
                    <Image className="hidden sm:block h-auto w-[543px] min-w-[320px] "
                        src={imageSrc}
                        alt={imageAlt}
                        sizes="100vh"
                        width={0}
                        height={0}
                    />
                </div> : null
            }

        </div>
    );
}