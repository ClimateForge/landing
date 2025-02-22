'use client'
import React from 'react'
import ButtonCustom from './ui/button-custom'
import Image from 'next/image'

export default function Featured() {
    return (
        <div className='max-w-[1280px] mt-8 mx-4'>
            <hr className="flex w-full border border-[#858585] mb-6" />
            <div className='flex flex-col md:flex-row justify-between gap-8 pb-10'>
                <p className='text-lg font-medium'>Featured</p>
                <div className='flex flex-col max-w-[931px] gap-y-6'>
                    <h4 className='text-[32px]'>Decarbonizing the Future: The Role of ClimateForge in Advancing Decarbonization Technologies</h4>
                    <p className='text-lg font-medium max-w-[805px]'>The Los Angeles Tribune featured an article about ClimateForge and how out company is helping in an effort to decarbonize using advanced technologies</p>
                    <ButtonCustom
                        onClick={() =>
                            window.open(
                                "https://thelosangelestribune.com/2024/12/18/decarbonizing-the-future-the-role-of-climateforge-in-advancing-decarbonization-technologies/",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                        className='max-w-[218px]' variant={"outline"}>
                        Go to the full article
                    </ButtonCustom>
                </div>
            </div>
            <Image className='rounded-10'
                src={"/featured/article-image.png"}
                alt='Article Image'
                width={0}
                height={0}
                sizes='100vh'
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    )
}
