import Image from 'next/image';

type titleProps = {
    title: string[];
    accent?: string;
    accentIndex: number;
}

export default function AccentTitle({title, accent}: titleProps) {
    return (
        accent === "underline" ?
            <h2 className="mb-12 sm:mb-14 md:mb-16 lg:mb-24 text-center">{title[0] + ' '}
            <span className="relative">
                {title[1]}
                <Image className="relative -z-10 
                    -top-[20px] sm:-top-[25px] md:-top-[25px] lg:-top-[30px]
                    left-[14px] sm:left-[16px] md:left-[18px] lg:left-[20px]
                    w-[260px] sm:w-[292px] md:w-[325px] lg:w-[390px] h-auto"
                    src={"/accents/accent1.svg"}
                    alt="Title Accent SVG"
                    width={0}
                    height={0}
            />
            </span>
            </h2>
            : accent === "circle" ? 
            <h2 className="mb-12 sm:mb-14 md:mb-16 lg:mb-24 text-center">{title[0]}
    
                <div className="inline-flex justify-center"> 
                    <span className=" relative ">&nbsp;{title[1]}&nbsp;
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
            </h2>
            : 
            <h2 className="mb-12 sm:mb-14 md:mb-16 lg:mb-24 text-center">
            {title.map((line, index) =>
                <span key={index}>
                    {line + ' '}
                </span>
            )}
            
            </h2>
        
    );
}