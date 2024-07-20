import Image from "next/image";

export default function UspList() {
    return (
        <section className="flex flex-col justify-center items-center ">
            
        <h2 className="h2-title mt-24 text-center">
            The Unique Power Of
            
        </h2>
        <p className="h2-title text-gradient pb-1
            "
        >
            Climate Forge
        </p>
        
        <svg className="my-14" width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M0.5 1H323.5" stroke="#01060F"/>
        </svg>
        
        <div className="flex justify-center items-center mx-20">
            <div>
            <h3 className="h2-title font-semibold">
                Conversion-
                <span className="relative">
                Optimized
                    <Image className="absolute z-10 top-[60px] left-[0px]"
                        width={252}
                        height={18} 
                        src={"/accents/accent1.svg"}
                        alt="title-accent"
                    />
                </span>
            </h3>
            <h4 className="my-10 text-2xl font-bold">Faster time to market for renewable energy products</h4>
            <p className="font-semibold">Companies using ClimateForge&apos;s solutions experience a 
                <span className="text-gradient"> 55% </span>
                faster time to deploy energy upgrades.
            </p>
            
            </div>
            <Image
                src="/section5/conversion-optimized.png"
                className="min-w-64"
                width={543}
                height={457}
                alt="conversion-optimized"
                unoptimized
            />
        </div>

        <div>
            <h2></h2>
        </div>

        <div>
            <h2></h2>
        </div>
    </section>
    );
}