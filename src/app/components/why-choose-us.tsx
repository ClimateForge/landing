"use client";
import React, { useState, ReactNode } from 'react'
import GradientText from './ui/gradient-text'
import Link from 'next/link'
import { motion } from 'framer-motion';

import Image from 'next/image';

type LinkProps = {
    href: string,
    children: ReactNode
}
const LinkCustom = ({href, children}: LinkProps) => {
    return (
        <div className='overflow-auto group'>
            <Link href={href} className='group-hover:text-primary'>
                {children}
            </Link>
            <svg className='invisible group-hover:visible' viewBox="0 0 110 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1H110" stroke="#21606A"/>
            </svg>
        </div>
    )
}

export default function WhyChooseUs() {
    const [currentSection, setCurrentSection] = useState(0);
    
    // Info blocks with image paths
    const infoBlocks = [
        {
            caption: 'Find Leads',
            title: 'Discover Quality Leads',
            text: 'Our energy modeling technology identifies the best energy upgrade opportunities in your area. Qualifies properties and owners, ensuring you focus on high-potential leads for maximum efficiency and impact.',
            image: '/info-scroll/discover-quality-leads.png',
            svg: "/info-scroll/find-leads.svg",
        },
        {
            caption: 'CRM Assistance',
            title: 'AI CRM Assistance',
            text: 'Easily determine the next steps for each lead, track statuses and enhance team collaboration, ensuring that nothing falls through the cracks.',
            image: '/info-scroll/ai-crm-assistance.png',
            svg: "/info-scroll/crm-assistance.svg",
        },
        {
            caption: 'Product Feature',
            title: 'Powerful Energy Assessments',
            text: 'Our energy modeling provides energy system simulations that can recommend the most suitable energy upgrades for customers. With only limited information, our technology can estimate the cost of the power consumption.',
            image: '/info-scroll/powerful-energy-assessments.png',
            svg: "/info-scroll/product-feature.svg",
        },
        {
            caption: 'System Design',
            title: 'Bespoke System Design',
            text: 'Impress customers with comprehensive quotes that include system designs, pricing, and energy calculations.  Enjoy a seamless experience with easy brand and model switching.  Present all details upfront to minimize confusion and questions.',
            image: '/info-scroll/system-design.png',
            svg: "/info-scroll/system-design.svg",
        },
    ];
    
    const handleSection = (index: number) => {
        
        setCurrentSection(index)

    }

    return (
        <section className='flex flex-col items-center w-full'>

            {/** TITLE AND LINKS */}
            <div className='flex flex-col justify-center items-center text-center max-w-[850px] pb-20'>
                <span className='text-[48px] font-bold leading-[110%]'>
                    Why <GradientText>Renewable Energy</GradientText> Contractors Choose Our Product
                </span>
                <div className='flex gap-8 pt-8 text-[#858585] text-sm'>
                    <LinkCustom href={'/#Find Leads'}>
                        Find Leads
                    </LinkCustom>
                    <LinkCustom href={'/#CRM Assistance'}>
                        CRM Assistance
                    </LinkCustom>
                    <LinkCustom href={'/#Product Feature'}>
                        Product Feature
                    </LinkCustom>
                    <LinkCustom href={'/#System Design'}>
                        System Design
                    </LinkCustom>
                </div>
            </div>

            {/* SCROLLING INFO AND STICKY IMAGE*/}
            <div className="flex w-full
                flex-col justify-center items-center 
                sm:flex-row sm:justify-evenly sm:items-start ">
                
                {/* Info section */}
                <div className=" ">
                    {infoBlocks.map((block, index) => (
                    <motion.div
                        id={block.caption}
                        key={index}
                        className={`flex flex-col max-w-[490px] 
                            ${infoBlocks.length-1 === index ? 
                            'sm:min-h-[100%]' : 'sm:min-h-[100vh]'}`
                        }
                        whileInView={{
                        transition: { duration: 0.2 },
                        }}
                        onViewportEnter={() => handleSection(index)} // Update the current section when the block enters the viewport
                        
                    >
                        <div className='flex items-center gap-1'>
                        <Image className='w-4 h-4'
                            priority
                            width={16}
                            height={16}
                            src={block.svg}
                            alt={block.caption}
                        />
                        <p className='text-sm'>{block.caption}</p>
                        </div>
                        <h3 className="text-[32px] py-6">{block.title}</h3>
                        <p>{block.text}</p>
                        
                        <Image className="object-contain w-[630px] pb-12 pt-6 visible sm:invisible"
                            src={block.image}
                            alt={block.title}
                            width={630}
                            height={592}
                        />
                    </motion.div>
                    
                    ))}
                </div>

                {/* Image section (fixed to the right) */}
                <div className="sticky top-[20%] hidden sm:block">
                    {/* Wrap images in a motion.div with key based on currentSection */}
                    <motion.div
                    key={currentSection}  // Ensure each image gets a unique key
                    initial={{ opacity: 0 }}  // Start with opacity 0 for the new image
                    animate={{ opacity: 1 }}  // Fade in the new image
                    exit={{ opacity: 0 }}  // Fade out the previous image
                    transition={{ opacity: { duration: 1 }, ease: "easeInOut" }}  // Smooth transition
                    >
                    <Image
                        src={infoBlocks[currentSection].image}
                        alt={infoBlocks[currentSection].title}
                        className="object-contain w-[630px]"
                        width={630}
                        height={592}
                    />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
