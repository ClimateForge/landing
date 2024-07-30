import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
type Props = {
    barGraphData: BarGraphData
}

type BarGraphData = {
    title: string;
    subtitle?: string;
    graphMax: number;
    barData: Bar[]
    description: string;
}

type Bar = {
    barTitle?: string;
    barSubtitle?: string;
    barPercent?: number;
    barColor?: string;
}

export default function BarGraphCard({barGraphData}: Props) {

    const {title, subtitle, graphMax, barData, description} = {...barGraphData}

    return (
        <div className="w-full max-w-[568px] rounded-[20px] p-2 sm:p-[12px] shadow-lg bg-white">
            {/* Graph Container */}
            <div className={`${inter.className} flex flex-col 
                border-[1px] border-solid rounded-[20px] p-[24px] sm:p-[36px]`}>
                {/* Graph Title */}
                <div className='flex flex-col w-full'>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 
                        leading-none sm:leading-5 text-[#9291A5]">
                        {subtitle}
                    </p>
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-7">
                        {title}
                    </h4>
                </div>
                
                {/* Graph Divider */}
                <svg className='mt-2 sm:mt-4 mb-4' width="100%" height="2" viewBox="0 0 474 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.796875" y1="1.36304" x2="473.917" y2="1.36304" stroke="#DEE1E6"/>
                </svg>
                
                {/* Graph */}
                <div className='flex justify-center items-center relative pt-6 mb-8 '>
                    
                    <div className='w-[473px] z-10 h-[120px] sm:h-[155px] '>
                        <div className='flex flex-col justify-between w-full h-full'>
                            {barData.map((bar, index) => (
                                <div key={index}>
                                
                                    <div className='flex justify-between pb-2'>
                                        {/* Bar Title */}
                                        <span className='text-[10px] sm:text-[12px] md:text-[14px] 
                                        leading-[16px] text-[#615E83]'>
                                            {bar.barTitle}
                                        </span>
                                        {/* Bar Max */}
                                        <p className={` text-[10px] sm:text-[12px] md:text-[14px] leading-[16px]`}
                                        style={{color: `${index < 1 ? '#5FB487' : '#615E83'}`}}>
                                            {bar.barSubtitle}
                                        </p>
                                    </div>

                                    {/* Empty Bar */}
                                    <div className='h-[32px] sm:h-[40px] max-w-[473px] 
                                        rounded-[4px] bg-[#F8F8FF]'>
                                        {/* Bar */}
                                        <div className={`h-[33px] sm:h-[41px] bg-[#7842E8] rounded-[4px]`}
                                            style={{width: `${bar.barPercent}%`, backgroundColor: bar.barColor}}/>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        
                    </div>

                    
                </div>
                <div className='flex gap-x-4 justify-between text-[10px] sm:text-small'>
                    
                    <span className=''>0</span>

                    <div className='flex justify-between w-[230px]'>
                        <span className='relative'>
                            <div className='absolute bottom-[27.5px] left-[14px] 
                                h-[150px] sm:h-[200px] border-l-[2px] border-dashed border-[#DEE1E6]'
                            />
                            {graphMax * 0.25}
                        </span>
                        <span className='relative'>
                            <div className='absolute bottom-[27.5px] left-[12px] 
                                h-[150px] sm:h-[200px] border-l-[2px] border-dashed border-[#DEE1E6]'
                            />
                            {graphMax * 0.5}
                        </span>
                        <span className='relative'>
                            <div className='absolute bottom-[27.5px] left-[10px] 
                                h-[150px] sm:h-[200px] border-l-[2px] border-dashed border-[#DEE1E6]'
                            />
                            {graphMax * 0.75}
                        </span>
                    </div>
                    
                    <span>{graphMax}</span>

                </div>
            </div>

                
            {/* Graph Description */}
            <p className='text-center mt-6 text-[#212529] mb-6'>
                {description}
            </p>
        </div>
    );
}