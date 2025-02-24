'use client'
import React, { useState } from 'react';
import Image from 'next/image';

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
        <div className='max-w-[1280px] mt-8 mx-4'>
            <hr className="flex w-full border border-[#858585] mb-6" />
            <p className='text-2xl font-medium mb-4 text-center'>Featured In</p>

            <div className="flex justify-center space-x-24 flex-wrap mb-12">
                {featuredArticles.map((article, index) => (
                    <div 
                        key={index} 
                        onMouseEnter={() => setActiveArticle(article)}
                        onClick={() => window.open(article.link, "_blank")}
                        className={`cursor-pointer transition-all duration-500 ease-in-out hover:opacity-75 hover:scale-105 hover:bg-slate-100 rounded-lg p-4 flex justify-center items-center`}
                    >
                        <div className="bg-purple-100 p-4 rounded-lg flex justify-center items-center">
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

            <div className="text-center mt-16">
                <h2 className="text-xl font-bold mb-4">{activeArticle.title}</h2>
                <p className="text-gray-700 mb-6">{activeArticle.description}</p>

                <div className="mt-8">
                    <Image 
                        className='rounded-lg transition-opacity duration-1000'
                        src={activeArticle.image}
                        alt='Article Image'
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
}
