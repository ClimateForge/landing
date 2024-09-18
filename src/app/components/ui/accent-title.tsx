import Image from 'next/image';

type titleProps = {
    title: string[];
    variant?: string;
    accent?: string;
    accentY?: number;
    accentIndex?: number;
    className?: string;
}

export default function AccentTitle({title, variant, accent, accentY, accentIndex, className}: titleProps) {
    
    const overlap = accentY ? accentY < 60 : true;
    
    return (
        variant === "underline" ? // can be used for more than one word, but should be kept short

            <h2 className={`${className}`}>{accentIndex === 0 ? null : title[0] + ' '}
            <span className="relative whitespace-nowrap">
                {accentIndex === 0 ? title[0] : title[1]}
                <Image 
                    title='Accent Underline'
                    className="absolute 
                    left-0"
                    src={accent ? accent : "/accents/accent1.svg"}
                    alt="Title Accent SVG"
                    width={0}
                    height={26}
                    style={{ 
                        width: '100%', 
                        height: 'auto', 
                        top: accentY ? `${accentY}%` : '80%',
                        zIndex: overlap === true ? 1 : -1
                    }}
            />
            </span>
                {title[2] ? title[2] : null}
            </h2>
            
        : variant === "circle" ? // meant to be used for only a single word

            <h2 className={`${className}`}>
                {accentIndex === 0 ? null : title[0]}
    
                <div className="inline-flex justify-center"> 
                    <span className=" relative ">&nbsp;{accentIndex === 0 ? title[0] : title[1]}&nbsp;
                        <Image title='Accent Gray Circle'
                            className="absolute -z-10 transform scale-110 top-[3px] right-[0px]"
                            src={"/accents/ellipse1.svg"}
                            alt="Gray Circle SVG"
                            width={0}
                            height={73} 
                            style={{ width: '200px', height: 'auto', top: accentY ? `${accentY + 3}px` : '3px'}}/>
                        <Image title='Accent Green Circle'
                            className="absolute -z-10 transform scale-110 top-[5px] right-[0px]"
                            src={"/accents/ellipse2.svg"}
                            alt="Green Circle SVG"
                            width={0}
                            height={73} 
                            style={{ width: '200px', height: 'auto', top: accentY ? `${accentY + 5}px` : '5px'}}/>
                    </span>
                    {title[2] ? title[2] : null}
                </div>
            </h2>
            : 
            <h2 className={`${className}`}>
            {title.map((line, index) =>
                <span key={index}>
                    {line + ' '}
                </span>
            )}
            
            </h2>
        
    );
}