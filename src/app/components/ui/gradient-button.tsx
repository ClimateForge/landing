"use client";
interface GradientButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    variant?: string;
    width: number | "100%";
    height?: number;
    radius?: number;
    bgColor?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    className?: string;
    children?: string | number;

}

export default function GradientButton(props: GradientButtonProps) {
    
    const {type, variant, width, height, radius, bgColor, onClick, disabled, className, children} = {...props}

    const buttonWidth = width ? width : 154;
    const outlineButtonWidth = width ? width : 90;
    const buttonHeight = height ? height : 49;
    const buttonRadius = radius ? radius : 9.5
    const bg = bgColor ? bgColor : 'transparent';
    
    return (
        variant === "outline" ?

        <button onClick={onClick} type={type}
            disabled={disabled} 
            className={`${disabled ? 'cursor-not-allowed opacity-50' : null} 
            ${className} relative rounded-xl group hover:bg-accent-gradient`
            }
            style={{ 
                maxWidth: outlineButtonWidth, 
                height: buttonHeight, 
                borderRadius: buttonRadius, 
                backgroundColor: bg,
                
            }}>
            <span className="absolute flex h-full w-full justify-center items-center
                bg-clip-text text-transparent hover:tracking-[0.33px]
                group bg-accent-gradient group-hover:text-white 
                font-bold hover:font-medium px-2">
                {children}
            </span>
            <svg width={'100%'} height={'100%'}  fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width={'99%'} height={'98%'} rx={buttonRadius} stroke="url(#paint0_linear_162_1149)"/>
                <defs>
                    <linearGradient id="paint0_linear_162_1149" x1="0" y1="100%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4A89DB"/>
                        <stop offset="1" stopColor="#39C77B"/>
                    </linearGradient>
                </defs>
            </svg>
        </button>
        :
        <button onClick={onClick} disabled={disabled} type={type}
            className={`${disabled ? 'cursor-not-allowed opacity-50' : null} 
                relative rounded-xl group bg-accent-gradient hover:bg-none`}
                style={{ 
                    maxWidth: buttonWidth, 
                    height: buttonHeight, 
                    borderRadius: buttonRadius, 
                    backgroundColor: bg,
                }}>
                <span className="absolute flex justify-center items-center font-bold h-full w-full bg-white text-transparent bg-clip-text group-hover:bg-accent-gradient">
                    {children}
                </span>
                <svg width={'100%'} height={'100%'} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width={'99%'} height={'98%'} rx={buttonRadius} stroke="url(#paint0_linear_162_1149)"/>
                    <defs>
                        <linearGradient id="paint0_linear_162_1149" x1="0" y1="100%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4A89DB"/>
                        <stop offset="1" stopColor="#39C77B"/>
                        </linearGradient>
                    </defs>
                </svg>
            
        </button>
    );
}