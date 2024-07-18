export interface GradientButtonProps {
    variant?: string;
    handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
    additionalStyles?: string
    children?: string | number;
}

export default function GradientButton({variant, handleClick, additionalStyles, children}: GradientButtonProps) {
    
    return (
        variant === "outline" ?

        <button onClick={handleClick} 
            className="h-[41px] p-[1px] rounded-lg  
                bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B] 
                group group-hover:[#4a89dbbf] group-hover:to-[#39c77bc9] hover:text-white
                whitespace-nowrap text-sm font-semibold" 
        >
            <span className="relative h-full px-4 
                flex justify-center items-center 
                transition-all ease-in duration-75 
                bg-white rounded-md group-hover:bg-opacity-0"
            >
                <p className="bg-clip-text text-transparent group bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B] group-hover:text-white">
                    {children}
                </p>
            </span>
        </button> 
        :
        <button onClick={handleClick}
            className={`${additionalStyles ? additionalStyles : null} text-white 
            bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B] 
            inline-flex h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium`}
        >
                {children}
        </button>
    );
}