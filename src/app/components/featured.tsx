'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import ButtonCustom from './ui/button-custom';

const featuredArticles = [
    { 
        name: "Times", 
        logo: "/logos/the-industry-times-logo.png", 
        link: "https://theindustrytimes.com/climateforge-unveils-ai-platform-for-renewable-energy-projects/",
        title: "ClimateForge Unveils AI Platform for Renewable Energy Projects",
        description: "Check out our featured articles about ClimateForge and how our company is helping in an effort to decarbonize using advanced technologies.",
        image: "/featured/article-image.png"
    },
    { 
        name: "LA Tribune", 
        logo: "/logos/cropped-latribune.png", 
        link: "https://thelosangelestribune.com/2024/12/18/decarbonizing-the-future-the-role-of-climateforge-in-advancing-decarbonization-technologies/",
        title: "Decarbonizing the Future: The Role of ClimateForge in Advancing Decarbonization Technologies",
        description: "LA Tribune explores how ClimateForge is paving the way for sustainable energy solutions with AI-driven technology.",
        image: "/featured/article-image.png"
    },
    { 
        name: "Amplify Weekly", 
        logo: "/logos/amplify-logo.png", 
        link: "https://amplifyweekly.com/two-iit-graduates-transform-renewable-energy-through-innovative-ai-platform/",
        title: "Two IIT Graduates Transform Renewable Energy Through Innovative AI Platform",
        description: "Discover how AI is transforming the renewable energy sector with breakthrough innovations.",
        image: "/featured/article-amplify.png"
    },
];

export default function Featured() {
    const [activeArticle, setActiveArticle] = useState(featuredArticles[0]);

    return (
        <div className='max-w-[1280px] mt-8 mx-auto px-4'>
            <hr className="w-full border border-[#858585] mb-6" />
            <p className='text-2xl sm:text-3xl font-medium mb-6 text-center'>Featured In</p>

            <div className="flex flex-col sm:flex-row justify-center sm:space-x-12 gap-6 mb-12">
                {featuredArticles.map((article, index) => (
                    <div 
                        key={index} 
                        onMouseEnter={() => setActiveArticle(article)}
                        onClick={() => window.open(article.link, "_blank")}
                        className="cursor-pointer transition-all duration-500 ease-in-out hover:opacity-75 hover:scale-105 hover:bg-slate-100 rounded-lg p-4 flex justify-center items-center w-full"
                    >
                        <div className="bg-purple-100 p-4 rounded-lg flex justify-center items-center w-full">
                            <Image 
                                src={article.logo} 
                                alt={article.name} 
                                width={140}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8 sm:mt-16 px-2">
                <h2 className="text-lg sm:text-xl font-bold mb-4">{activeArticle.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base mb-6">{activeArticle.description}</p>

                <div className="mt-6 sm:mt-8 mx-auto w-full max-w-[500px]">
                    <Image 
                        className='rounded-lg transition-opacity duration-1000'
                        src={activeArticle.image}
                        alt='Article Image'
                        width={500}
                        height={300}
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                
                <div className="mt-6">
                <ButtonCustom
                        onClick={() =>
                            window.open(
                                activeArticle.link,
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                        className='max-w-[218px]'
                        variant={"outline"}
                    >
                        Go to the full article
                    </ButtonCustom>
                </div>
            </div>
        </div>
    );
}
