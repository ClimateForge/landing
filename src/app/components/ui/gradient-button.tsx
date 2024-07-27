interface GradientButtonProps {
    variant?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    additionalStyles?: string
    disabled?: boolean;
    children?: string | number;
}

export default function GradientButton({variant, onClick, additionalStyles, disabled, children}: GradientButtonProps) {
    
    return (
        variant === "outline" ?

        <button onClick={onClick} disabled={disabled}
            className={`${additionalStyles ? additionalStyles : null} 
                ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-[length:150%_100%]'}
                h-11 rounded-lg px-[0.5%] whitespace-nowrap text-sm font-semibold
                bg-accent-gradient disabled:opacity-50
                group group-hover:[#4a89dbbf] group-hover:to-[#39c77bc9] 
                transition-all duration-300 ease-in-out hover:text-white`
            }
        >
            <span className="relative h-[96%] w-full 
                flex justify-center items-center 
                transition-all ease-in duration-300 
                bg-[#F9F9FF] rounded-md group-hover:bg-opacity-0"
            >
                <p className="px-4 bg-clip-text text-transparent 
                    group bg-accent-gradient group-hover:text-white 
                    transition-all duration-300 ease-in-out">
                    {children}
                </p>
            </span>
        </button> 
        :
        <button onClick={onClick} disabled={disabled}
        className={`${additionalStyles ? additionalStyles : ''} 
            ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-[length:150%_100%]'}
            inline-flex h-11 px-6 items-center justify-center whitespace-nowrap rounded-lg 
            bg-accent-gradient text-white text-sm font-medium
            bg-[length:100%_100%] transition-all duration-300 ease-in-out`}>
            {children}
        </button>
    );
}