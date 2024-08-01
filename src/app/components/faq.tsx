"use client";
import { useState } from "react";
import GradientText from "./ui/gradient-text";
import Image from "next/image";

type FAQItemProps = {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full mb-4">
            <button
            className="flex justify-between items-center w-full px-4 py-3 text-left focus:outline-none"
            onClick={toggleAnswer}
            >
            
            {isOpen ?
                <GradientText className="font-bold text-xl transition-all duration-300">{question}</GradientText>
                :
                <p className="font-bold lg:text-xl transition-all duration-300">
                    {question}
                </p>
            }
            <Image
                src={isOpen ? '/faq/arrow-up.svg' : '/faq/arrow-down.svg'}
                alt={isOpen ? 'Collapse' : 'Expand'}
                width={24} // specify the width
                height={24} // specify the height
                className={`w-[24px] h-[24px]`}
            />
            </button>
            {isOpen && (
            <p className="text-[#64607D] px-4">
                {answer}
            </p>
            )}
        </div>
    );
}

export default function Faq() {

    // placeholder description
    const loremIpsum = "Lorem ipsum dolor sit amet consectetur. Mus pulvinar condimentum massa enim. In eget netus sollicitudin pellentesque. Varius eu libero commodo integer aliquet elit. Accumsan velit enim ullamcorper consectetur sed eget varius lacus."
    
    const faqData = [
        {
            question: 'What is the pricing?',
            answer: loremIpsum,
        },
        {
            question: 'How can I purchase your services?',
            answer: loremIpsum,
        },
        {
            question: 'What services do you offer?',
            answer: loremIpsum,
        },
        {
            question: 'Where do you operate?',
            answer: loremIpsum,
        },
        {
            question: 'How can I be sure about the compliance and safety?',
            answer: loremIpsum,
        },
    ];

    return (
        <section id="faq" className="flex flex-col sm:flex-row justify-evenly w-full h-[502px] pt-12 lg:pt-16">
            <div className="text-center sm:text-left p-x-4 pb-8">
                <h2>Frequently Asked</h2>
                <h2><GradientText>Questions</GradientText></h2>
            </div>

            <div className="pt-8 w-full h-full max-w-[651px] shadow-[0px_31px_36px_0px_#4655A912] p-6 bg-white rounded-[25px] overflow-y-scroll no-scrollbar">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    );
}