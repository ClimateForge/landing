import Image from "next/image";

import AccentTitle from "./ui/accent-title";
import GradientBorderBox from "./ui/gradient-border-box";
import InstagramIcon from "./ui/icons/instagram-icon";
import LinkedInIcon from "./ui/icons/linkedin-icon";
import FacebookIcon from "./ui/icons/facebook-icon";
import XIcon from "./ui/icons/x-icon";

export default function OurTeam() {

    const teamMembers = [
        {
            name: "Giovanni Amenta",
            title: "Chief Executive Officer",
            image: "/our-team/ceo.webp",
            socials: {
                instagram: "",
                linkedIn: "https://www.linkedin.com/in/giovanniamenta/",
                facebook: "",
                x: "",
            }

        },
        {
            name: "Joseph Anselm",
            title: "Chief Technology Officer",
            image: "/our-team/team-member2.png",
            socials: {
                instagram: "",
                linkedIn: "https://www.linkedin.com/in/anselmj/",
                facebook: "",
                x: "",
            }

        },
        {
            name: "Bella",
            title: "Supreme COO",
            image: "/our-team/coo.webp",
            socials: {
                instagram: "",
                linkedIn: "",
                facebook: "",
                x: "",
            }

        },
    ]


    return (
        <section className="flex flex-col justify-center items-center my-8 sm:my-16">
            <AccentTitle 
                title={['Our expert', 'team']} 
                variant={'circle'} 
                accentY={6}
                accentIndex={1} 
                className="mb-40"
            /> 
            <div className="flex flex-wrap justify-center gap-y-24 gap-x-14">
                {teamMembers.map((teamMember, index) => (
                    
                    <div key={index} className="relative shadow-[0px_48px_78px_0px_#44A3CF2E] rounded-[65px]
                        transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-[0px_48px_78px_0px_#44A3CF2E]">

                        <GradientBorderBox borderRadius={65} borderWidth={1} 
                            className="w-[354px] h-[343px] justify-end gap-y-3">
                            <h4>{teamMember.name}</h4>
                            <p>{teamMember.title}</p>

                            {/* Socials */}
                            <div className="flex flex-wrap gap-4 justify-center items-center mt-4 mb-16 text-[#374151]">
                                {/* Instagram */}
                                {teamMember.socials.instagram ?
                                    <a title={teamMember.name + " @ Instagram"}
                                        href={teamMember.socials.instagram} 
                                        rel="noopener noreferrer" target="_blank">
                                        <InstagramIcon />
                                    </a> : null
                                }

                                {/* LinkedIn */}
                                {teamMember.socials.linkedIn ?
                                    <a title={teamMember.name + " @ LinkedIn"}
                                        href={teamMember.socials.linkedIn} 
                                        rel="noopener noreferrer" target="_blank">
                                        <LinkedInIcon />
                                    </a> : null 
                                }

                                {/* Facebook */}
                                {teamMember.socials.facebook ?
                                    <a title={teamMember.name + " @ Facebook"}
                                        href={teamMember.socials.facebook} 
                                        rel="noopener noreferrer" target="_blank">
                                        <FacebookIcon/>
                                    </a> : null 
                                }

                                {/* X */}
                                {teamMember.socials.instagram ?
                                    <a title={teamMember.name + " @ X"}
                                        href={teamMember.socials.x} 
                                        rel="noopener noreferrer" target="_blank">
                                        <XIcon />
                                    </a> : null 
                                }
                            </div>
                            
                        </GradientBorderBox>

                        <div className="absolute -top-[111px] left-[64px] z-0 rounded-full w-[222px] h-[222px]">
                            <Image title="Team Member Avatar"
                                src={teamMember.image} 
                                alt={teamMember.name} 
                                width={0} height={0} sizes="100vh"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>

                    </div>
                    
                ))}
            </div>
        </section>
    );
}