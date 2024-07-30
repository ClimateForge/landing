import Image from 'next/image';

export default function GradientBorderBox({className, children}: any) {
    
    return (
        <div className="p-[2px] rounded-[90px] relative overflow-clip bg-accent-gradient w-full max-w-[1440px]">

            {/* Opaque houses container */}
            <div className={`relative
                bg-white-gradient rounded-[88px] overflow-clip`}>
                <div className={`flex flex-col items-center ${className} z-10`}>
                    {children}
                </div>
                
                <Image className="absolute z-0 top-0 left-24"
                    src={"/dot-ornament.svg"}
                    alt="Dot SVG 3"
                    width={363}
                    height={0} 
                />
            </div>
        </div>
    );
}