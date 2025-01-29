"use client";
import { ReactNode } from "react";
interface GradientTextProps {
    id?: string;
    className?: string;
    children?: ReactNode;
    variant?: string;
}

export default function GradientText({id, className, children, variant}: GradientTextProps) {
    return (variant === 'purple' ?
        <span id={id} className={`${className} text-transparent bg-clip-text bg-gradient-to-r from-[#744cebe6]  to-[#39c77be6]`}>
            {children}
        </span>
        : 
        <span id={id} className={`${className} text-transparent bg-clip-text bg-gradient-to-br from-[#4A89DB] to-[#39C77B]`}>
            {children}
        </span>
    );
}