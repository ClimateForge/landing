"use client";
interface GradientTextProps {
    className?: string;
    children?: string | number | string[];
}

export default function GradientText({className, children}: GradientTextProps) {
    return (
        <span className={`${className} text-transparent bg-clip-text bg-gradient-to-br from-[#4A89DB] via-[#028F79] via-30% to-[#39C77B] to-100%`}>
            {children}
        </span>
    );
}