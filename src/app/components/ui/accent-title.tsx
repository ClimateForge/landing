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
        variant === "underline" ?
            <h2 className={`${className}`}>{accentIndex === 0 ? null : title[0] + ' '}
            <span className="relative">
                {accentIndex === 0 ? title[0] : title[1]}
                <Image className="absolute 
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
            
            : variant === "circle" ? 
            <h2 className={`${className}`}>
                {accentIndex === 0 ? null : title[0]}
    
                <div className="inline-flex justify-center"> 
                    <span className=" relative ">&nbsp;{accentIndex === 0 ? title[0] : title[1]}&nbsp;
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