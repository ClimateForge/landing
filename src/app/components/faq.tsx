"use client";
import { useState } from "react";
import Image from "next/image";

import GradientText from "./ui/gradient-text";
import Link from "next/link";

type FAQItemProps = {
    question: string;
    answers: string[];
    link?: string;
    contact?: boolean;
}

function FAQItem({ question, answers, link, contact}: FAQItemProps) {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full py-4 md:py-5">
            <button
            className="flex justify-between items-center w-full px-4 text-left focus:outline-none"
            onClick={toggleAnswer}
            >
            
            {isOpen ?
                <GradientText className="font-bold lg:text-xl transition-all duration-300">{question}</GradientText>
                :
                <p className="font-bold lg:text-xl transition-all duration-300">
                    {question}
                </p>
            }
            <Image title={isOpen ? 'Arrow Up' : 'Arrow Down'}
                src={isOpen ? '/faq/arrow-up.svg' : '/faq/arrow-down.svg'}
                alt={isOpen ? 'Collapse' : 'Expand'}
                width={24} // specify the width
                height={24} // specify the height
                className={`w-[24px] h-[24px] ml-4 sm:ml-[35.8px]`}
            />
            </button>
            <div className="px-4">
            {isOpen ?
            answers.map((ans, index) => 
                <span key={index} className="p text-[#64607D]">
                    {ans} 
                    {link && index === 0 ?
                        <Link href={link} className="text-[#4A89DB] font-semibold hover:opacity-85">
                            <GradientText>pricing section</GradientText>
                        </Link> 
                        : null
                    }
                    {contact && index === answers.length-1 ? 
                        <span>Contact: {' '}
                        <button className="font-semibold hover:opacity-85 text-[#4A89DB]" 
                        onClick={(e) => {
                            window.location.href = "mailto:team@climateforge.ai";
                            e.preventDefault();
                        }}>
                        
                        team@climateforge.ai
                        
                    </button>
                    {' '} to learn more.
                    </span>
                        : null
                    }
                </span>
                
            )
            
            : null}
            </div>
        </div>
    );
}

export default function Faq() {

    const faqData: FAQItemProps[] = [
        {
            question: 'What is the pricing?',
            answers: [
                "ClimateForge offers reasonably priced services, catering to both individuals and enterprises. You can find detailed pricing information in the ",
                " on this website. The options are designed to be affordable and accessible, whether you're looking for individual solutions or enterprise-level services. "
            ],
            link: "/#pricing", // in green
        },
        {
            question: 'How can I purchase your services?',
            answers: [
                "To purchase services from ClimateForge, you have two convenient options: either explore and select the service that fits your needs in the ",
                ", or reach out to us for a tailored demo solution. We provide comprehensive support to help you choose the right service, ensuring you can start maximizing your returns while contributing to sustainability goals. "
            ],
            link: "/#pricing", // in green
            
            contact: true
        },
        {
            question: 'What services do you offer?',
            answers: [
                "Our solutions are tailored for the residential and commercial sectors, offering tools to monitor, report, and reduce emissions by deploying physical equipment in the perfect locations, which can help organizations meet their carbon reduction goals."
            ],
        },
        {
            question: 'Where do you operate?',
            answers: [
                "ClimateForge typically operates globally or in regions with strong energy driven economies or industrial sectors. Our services are available wherever there is a demand for advanced environmental management, energy upgrade deployment, emissions monitoring and where we find friendly environmental policies for renewable energy. Our current focus is the US and the EU."
            ],
        },
        {
            question: 'How can I be sure about the compliance and safety?',
            answers: [
                "ClimateForge ensures compliance and safety through rigorous energy monitoring and reporting tools, which help organizations adhere to environmental regulations. Our solutions include real-time data analytics and visualization to provide a clear picture of emissions and energy potential, ensuring that companies can proactively manage and reduce their teams and environmental impact while making profits."
            ],
        },
    ];

    return (
        <section id="faq" className="flex flex-col sm:flex-row justify-evenly items-center sm:items-start 
            w-full h-[502px] px-2 sm:px-8">
            <div className="text-center sm:text-left pb-8 px-2">
                <h2>Frequently Asked</h2>
                <h2><GradientText>Questions</GradientText></h2>
            </div>
            
            <div className="py-8 w-full max-w-[651px] h-full max-h-[350px] sm:max-h-[400px] 
                shadow-[0px_31px_36px_0px_#4655A912] px-3 sm:px-6 bg-white 
                rounded-[25px] overflow-y-scroll no-scrollbar">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answers={item.answers} link={item.link} contact={item.contact} />
                ))}
            </div>
            
        </section>
    );
}