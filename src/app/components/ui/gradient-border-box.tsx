import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
    className?: string;
    decorationsInside?: Decoration[];
    decorationsOutside?: Decoration[];
    children?: ReactNode;
    borderRadius?: number;
    borderWidth?: number;
}

type Decoration = {
    src: string, 
    className?: string
}

export default function GradientBorderBox({
    className, 
    decorationsInside, decorationsOutside, 
    borderWidth, borderRadius, 
    children
}: Props) {
    
    return (
        <div className="p-[1px] relative bg-accent-gradient"
        style={{padding: borderWidth, borderRadius: borderRadius ? borderRadius : '90px'}}>
            
            {/* Opaque houses container */}
            <div className="relative bg-white-gradient overflow-hidden"
                style={{borderRadius: borderRadius ? borderRadius - 2 : '88px'}}>
                <div className={`flex flex-col items-center ${className} z-10`}>
                    {children}
                </div>
                
                {decorationsInside ?
                    decorationsInside.map((decoration, index) => 
                        <Image title="Inside Box Decoration"
                            key={index} 
                            className={`absolute z-0 ${decoration.className ? decoration.className : 'top-0 left-0'}`}
                            src={decoration.src}
                            alt="decoration"
                            width={0}
                            height={0} 
                            style={{height: 'auto',}}
                        />
                    )
                    : null
                }
            </div>
            {decorationsOutside ? 
                decorationsOutside.map((decoration, index) => 
                    <Image title="Outside Box Decoration"
                    key={index} 
                    className={`absolute z-10 ${decoration.className ? decoration.className : 'bottom-0 right-0'}`}
                    src={decoration.src}
                    alt="decoration"
                    width={0}
                    height={0} 
                    style={{height: 'auto', }}
                    />
                )
                : null
            }
        </div>
    );
}