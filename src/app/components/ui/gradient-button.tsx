interface GradientButtonProps {
    variant?: string;
    width: number;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    additionalStyles?: string
    disabled?: boolean;
    children?: string | number;
}

export default function GradientButton({variant, width, onClick, additionalStyles, disabled, children}: GradientButtonProps) {
    const buttonWidth = width ? width : 154;
    const outlineButtonWidth = width ? width : 90;
    return (
        variant === "outline" ?

        <button onClick={onClick} disabled={disabled} className="relative rounded-xl group hover:bg-accent-gradient 
                ">
            <span className="absolute flex h-full w-full justify-center items-center
                bg-clip-text text-transparent 
                group bg-accent-gradient group-hover:text-white 
                font-bold hover:font-medium">
                {children}
            </span>
            <svg width={outlineButtonWidth} viewBox={`0 0 ${outlineButtonWidth} 50`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.560059" width={outlineButtonWidth-1} height={49} rx="9.5" stroke="url(#paint0_linear_162_1149)"/>
                <defs>
                    <linearGradient id="paint0_linear_162_1149" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4A89DB"/>
                        <stop offset="1" stopColor="#39C77B"/>
                    </linearGradient>
                </defs>
            </svg>
        </button>
        :
        <button onClick={onClick} disabled={disabled}
            className={`${additionalStyles ? additionalStyles : ''} 
            ${disabled ? 'cursor-not-allowed opacity-50' : null}`}>
            <div className={`flex items-center justify-center whitespace-nowrap rounded-xl
                group bg-accent-gradient hover:bg-none h-[50px]
                `}
                style={{ width: buttonWidth }}>
                <span className="font-bold w-full bg-white text-transparent bg-clip-text group-hover:bg-accent-gradient">
                    {children}
                </span>
                <svg className="absolute" width={buttonWidth} viewBox={`0 0 ${buttonWidth} 50`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.560059" width={buttonWidth-1} height={49} rx="9.5" stroke="url(#paint0_linear_162_1149)"/>
                    <defs>
                        <linearGradient id="paint0_linear_162_1149" x1="0" y1="100%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4A89DB"/>
                        <stop offset="1" stopColor="#39C77B"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </button>
    );
}