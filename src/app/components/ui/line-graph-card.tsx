"use client";
import { Inter } from 'next/font/google';
import React from 'react';

import { motion, Variants } from 'framer-motion';


const inter = Inter({ subsets: ['latin'] })

type Props = {
    lineGraphData: LineGraphData
}

type LineGraphData = {
    title: string;
    subtitle?: string;
    description: string;
}
const fromMiddle: Variants = {
    offscreen: {
        opacity: 0,
        scale: .75,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const container: Variants = {
    onscreen: {
        transition: {
            staggerChildren: 0.8
        }
    }
}
const LineSVG = () => {

    return (
        <svg width="100%" 
            height="100%" 
            viewBox="0 0 420 166" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            >
            <motion.path 
                variants={{
                    offscreen: { pathLength: 0 },
                    onscreen: { pathLength: 1 },
                }}
                initial="offscreen"
                whileInView="onscreen" 
                viewport={{ once: true }}  
                transition={{
                    pathLength: { duration: 2, ease: "easeInOut" },
                    default: { duration: 0 },
                }}
                d="M5.16374 161.427 L175.829 46.8963 L414.762 4.97005" 
                stroke="#1B70F0" 
                strokeWidth="2" 
                fill="none"
            />
            <motion.g variants={container} 
            initial="offscreen"
            whileInView="onscreen" 
            viewport={{ once: true, amount: 0.6 }}  >
            <motion.path variants={fromMiddle}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 },
                }}
            
                d="M5.16374 164.983C7.14859 164.983 8.8304 163.43 8.8304 161.427C8.8304 159.423 7.14859 157.87 5.16374 157.87C3.17888 157.87 1.49707 159.423 1.49707 161.427C1.49707 163.43 3.17888 164.983 5.16374 164.983Z" fill="white" stroke="#1B70F0" strokeWidth="2"/>

            <motion.path variants={fromMiddle}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 },
                }}
                d="M175.829 50.4528C177.814 50.4528 179.495 48.8999 179.495 46.8963C179.495 44.8928 177.814 43.3398 175.829 43.3398C173.844 43.3398 172.162 44.8928 172.162 46.8963C172.162 48.8999 173.844 50.4528 175.829 50.4528Z" fill="white" stroke="#1B70F0" strokeWidth="2"/>

            <motion.path variants={fromMiddle}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 },
                }}
                d="M414.762 8.52653C416.747 8.52653 418.429 6.97359 418.429 4.97005C418.429 2.96651 416.747 1.41357 414.762 1.41357C412.778 1.41357 411.096 2.96651 411.096 4.97005C411.096 6.97359 412.778 8.52653 414.762 8.52653Z" fill="white" stroke="#1B70F0" strokeWidth="2"/>
            </motion.g>
        </svg>
    )
}

export default function LineGraphCard({lineGraphData}: Props) {

    const {title, subtitle} = {...lineGraphData}

    return (
        <div className={`${inter.className} flex flex-col bg-white w-full max-w-[568px] max-h-[396px] 
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
            <svg className='mt-2 sm:mt-4' width="100%" height="2" viewBox="0 0 474 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.796875" y1="1.36304" x2="473.917" y2="1.36304" stroke="#DEE1E6"/>
            </svg>
            
            {/* Graph */}
            <div className='flex'>
                
                <div className='w-[473px] z-10 flex items-center mt-[27.5px] '>
                    {/* Y-Axis */}
                    <div className='relative flex flex-col justify-between items-end 
                        h-full mr-[4%] text-[14px] text-[#615E83]'>
                        <p>90</p>
                        <p>60</p>
                        <p>30</p>
                        <p>0</p>
                    </div>

                    {/* Line Graph */}
                    <div className='w-full h-full relative py-[2%]'>
                        {/* Dividers */}
                        <div className='absolute top-[4%] left-[0%] -z-10
                            w-full max-w-[430px] border-b-[2px] border-dashed border-[#DEE1E6]'/>
                        <div className='absolute top-[35%] left-[0%] -z-10
                            w-full max-w-[430px] border-b-[2px] border-dashed border-[#DEE1E6]'/>
                        <div className='absolute top-[64%] left-[0%] -z-10
                            w-full max-w-[430px] border-b-[2px] border-dashed border-[#DEE1E6]'/>
                        <div className='absolute bottom-[3%] left-[0%] -z-10
                            w-full max-w-[430px] border-b-[2px] border-solid border-[#DEE1E6]'/>
                            
                        {/* Line */}
                        <LineSVG />
                    </div>
                </div>
            </div>
            {/* X-Axis */}
            <div className='flex justify-between text-[10px] sm:text-small ml-[8%] mt-2 text-[#615E83]'>
                <span>2025</span>
                <span>2030</span>
                <span>2035</span>
                <span>2040</span>
                <span>2045</span>
                <span>2050</span>
            </div>
        </div>
    );

}