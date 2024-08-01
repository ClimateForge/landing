import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
    className?: string;
    decorationsInside?: Decoration[];
    decorationsOutside?: Decoration[];
    children?: ReactNode;
}

type Decoration = {
    src: string, 
    className?: string
}

export default function GradientBorderBox({className, decorationsInside, decorationsOutside, children}: Props) {
    
    return (
        <div className="p-[2px] rounded-[90px] relative  bg-accent-gradient w-full max-w-[1440px]">
            
            {/* Opaque houses container */}
            <div className={`relative
                bg-white-gradient rounded-[88px] overflow-hidden`}>
                <div className={`flex flex-col items-center ${className} z-10`}>
                    {children}
                </div>
                
                {decorationsInside ?
                    decorationsInside.map((decoration, index) => 
                        <Image key={index} className={`absolute z-0 ${decoration.className ? decoration.className : 'top-0 left-0'}`}
                            src={decoration.src}
                            alt=""
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
                    <Image key={index} className={`absolute z-10 ${decoration.className ? decoration.className : 'bottom-0 right-0'}`}
                    src={decoration.src}
                    alt=""
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