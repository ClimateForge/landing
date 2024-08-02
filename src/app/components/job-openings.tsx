"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

import AccentTitle from "./ui/accent-title";
import GradientText from './ui/gradient-text';
import EmailForm from "./ui/email-form";
import Modal from "./ui/modal";

type Job = {
    title: string;
    datePosted: Date;
    team: string;
    type: string;
    location: string;
    link: string;
}

type JobCardProps = { job: Job; };

function JobCard({job}: JobCardProps) {

    const formatDate = (date: Date): string => {
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    };
    
    return (
        <a href={job.link} rel="noopener noreferrer" target="_blank" 
            className="h-auto max-h-[270px] w-[30%] min-w-[270px]
                p-6 shadow-md rounded-3xl bg-white
                transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-lg">
            <div className='border-b-2 border-dashed border-gray-300 pb-4 mb-6 sm:mb-8'>
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <p className="text-[#64607D] mt-2">Date Posted: {formatDate(job.datePosted)}</p>
            </div>
            
            <div className='flex justify-between mb-5'>
                <p className="flex gap-2 text-gray-600">
                    <Image src={"/job-openings/team.svg"} alt="" width={24} height={24}/>{job.team}
                </p>
                <p className="flex gap-2 text-gray-600">
                    <Image src={"/job-openings/type.svg"} alt="" width={24} height={24}/>{job.type}
                </p>
            </div>
            <p className="flex gap-2 text-gray-600">
                    <Image src={"/job-openings/location.svg"} alt="" width={24} height={24}/>{job.location}
                </p>
            
        </a>
    );
    
}

export default function JobOpenings() {
    
    const [searchTerm, setSearchTerm] = useState("");

    const [jobs] = useState<Job[]>([
        /*
        {
            title: "Software Sales Associate",
            datePosted: new Date("2024-03-02"),
            team: "Sales Team",
            type: "Full-time",
            location: "Gurgaon, South Deli",
            link: "https://www.linkedin.com/company/climateforge/?viewAsMember=true",
        },
        */
    ]);

    const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);

    const mostRecentJobs = (jobs: Job[]) => {
        return jobs.slice()
        .sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime())
        .slice(0, 9);
    }

    useEffect(() => {
        // Initially display the 9 most recently posted jobs
        setDisplayedJobs(mostRecentJobs(jobs));
    }, [jobs]);
    
    const handleSearch = () => {
        if (searchTerm.trim() === "") {
        // If search term is empty, show the 9 most recent jobs
        setDisplayedJobs(mostRecentJobs(jobs));
        } else {
        // Otherwise, filter based on search term
        setDisplayedJobs(
            jobs.filter((job) =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.location.toLowerCase().includes(searchTerm.toLowerCase()
            ))
        );
        }
    };
    
    // Handle key press event
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    // Clear search input and reset displayed jobs
    const clearSearch = () => {
        setSearchTerm("");
        setDisplayedJobs(
            mostRecentJobs(jobs)
        );
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

    return (
        <section className="relative flex w-full max-w-[1440px] overflow-hidden min-h-[600px] max-h-[1176px] rounded-[90px] bg-white-gradient">
            
            {/* Background image */}
            <Image className="absolute w-full h-full  mix-blend-soft-light object-cover"
                src={"/job-openings/solar-panels.webp"}
                alt="Houses"
                sizes="100vh"
                width={500}
                height={300}
                style={{ width: "100%" }}
            />
            <div className="relative max-w-[1440px] h-full mb-12 rounded-[90px] w-full p-6 flex-col z-10">
                
                {/* Title */}
                <AccentTitle
                    title={["Job", "Openings"]}
                    variant="underline"
                    accent={"/accents/accent1.svg"}
                    accentIndex={1}
                    className="mt-16 mb-8 text-center"
                />
        
                {/* Search Bar */}
                <div className="flex justify-center items-center 
                    mx-0 sm:mx-[5%] md:mx-[15%] mb-12 p-[22px] 
                    rounded-[35px] shadow-[0px_32px_80px_0px_#202F4D05] 
                    border-b-[20px] border-b-solid border-[#0C277812] bg-white">
                    <div className="relative w-full">
                        <div className='flex justify-between h-[64px] p-4 py-2 rounded-2xl bg-[#EFF5FE]'>
                            <input className="w-full max-w-[460px] mr-8 outline-none bg-[#EFF5FE]"
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyPress} // Listen for Enter key press
                            />
                            <div className='flex gap-x-4 relative'>
                                {searchTerm ? 
                                    <button
                                    type="button"
                                    onClick={clearSearch} // Clear search on button click
                                    className=" ml-4 absolute top-[6px] -left-[48%]
                                        rounded-full w-[36px] h-[36px] hover:bg-accent-gradient 
                                        flex items-center justify-center text-black hover:text-white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button> 
                                : null
                                }
                                <button
                                type="button"
                                onClick={handleSearch} // Trigger search on button click
                                className=" py-2 px-8
                                    bg-black text-white rounded-[18px] hover:bg-accent-gradient 
                                    flex items-center justify-center gap-[10px] "
                                >
                                <p>Search</p>
                                <Image
                                    src={"/job-openings/search.svg"}
                                    alt="search"
                                    width={18}
                                    height={18}
                                />
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
        
                {/* Job Openings Container */}
                {jobs.length > 0 ? // job openings listed
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center max-w-[1180px] gap-4 w-full">

                            {displayedJobs.length > 0 ? // jobs found
                                displayedJobs.map((job, index) => (
                                    <JobCard key={index} job={job} />
                                ))
                                : // no jobs found
                                <div className="flex justify-center mt-12">
                                    <div className="flex justify-center max-w-[550px] gap-4 w-full text-center">
                                        <h4>Hmm, no jobs were found for your search. 
                                            Don&#39;t worry, new opportunities are added regularly. 
                                            Try again later or{' '}
                                            <button onClick={openModal}>
                                                <GradientText className='hover:text-[--foreground] hover:bg-none'> 
                                                    contact us
                                                </GradientText>
                                            </button> 
                                            {' '}for assistance. 
                                        </h4>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    : // no job openings listed
                    <div className="flex justify-center mt-12">
                        <div className="flex justify-center max-w-[550px] gap-4 w-full text-center">
                            <h4>Oops! It looks like we don&#39;t have any 
                                job openings right now. 
                                Feel free to check back soon or{' '}
                                <button onClick={openModal}>
                                    <GradientText className='hover:text-[--foreground] hover:bg-none'> 
                                        contact&nbsp;us 
                                    </GradientText>
                                </button> 
                                {' '}for more information. 
                            </h4>
                        </div>
                    </div>
                }
            </div>
            <Image className={`absolute z-0 -bottom-[105px] -right-[105px] w-[363px]`}
                src={'decorations/dots.svg'}
                alt=""
                width={0}
                height={0} 
                style={{height: 'auto'}}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
				<EmailForm />
			</Modal>
        </section>
    );
}