interface GradientButtonProps {
    variant?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    additionalStyles?: string
    children?: string | number;
}

export default function GradientButton({variant, onClick, additionalStyles, children}: GradientButtonProps) {
    
    return (
        variant === "outline" ?

        <button onClick={onClick} 
            className="h-11 rounded-lg px-[2px]  whitespace-nowrap text-sm font-semibold
                bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B] 
                group group-hover:[#4a89dbbf] group-hover:to-[#39c77bc9] hover:text-white" 
        >
            <span className="relative py-[11px]  w-full 
                flex justify-center items-center 
                transition-all ease-in duration-75 
                bg-[#F9F9FF] rounded-md group-hover:bg-opacity-0"
            >
                <p className="px-4 bg-clip-text text-transparent group bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B] group-hover:text-white">
                    {children}
                </p>
            </span>
        </button> 
        :
        <button onClick={onClick}
            className={`${additionalStyles ? additionalStyles : null} text-white
            bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B]
            inline-flex h-11 px-6 items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium
            bg-[length:150%_100%] transition-all hover:transition-all  hover:bg-[90%_0]`}
        >
                {children}
        </button>
    );
}