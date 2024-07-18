interface GradientTextProps {
    children?: string | number | string[];
}

export default function GradientText({children}: GradientTextProps) {
    return (
        <span className={"text-transparent bg-clip-text bg-gradient-to-br from-[#4A89DB] via-[#028F79] to-[#39C77B]"}>
            {children}
        </span>
    );
}