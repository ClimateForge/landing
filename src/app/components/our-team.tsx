import AccentTitle from "./ui/accent-title";
import GradientBorderBox from "./ui/gradient-border-box";
import Image from "next/image";

export default function OurTeam() {
    
    const teamMembers = [
        {
            name: "Giovanni Amenta",
            title: "Chief Executive Officer",
            image: "/our-team/team-member1.png",
            socials: {
                instagram: "",
                linkedIn: "",
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
                linkedIn: "",
                facebook: "",
                x: "",
            }

        },
        {
            name: "Bella",
            title: "Supreme COO",
            image: "/our-team/team-member3.png",
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
                            <div className="flex flex-wrap gap-4 justify-center items-center mt-4 mb-16">
                                {/* Instagram */}
                                <a href={teamMember.socials.instagram} rel="noopener noreferrer" target="_blank">
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00539 0.370117H18.2954C22.2154 0.370117 25.4004 3.55512 25.4004 7.47512V17.7651C25.4004 19.6495 24.6518 21.4567 23.3194 22.7891C21.9869 24.1216 20.1798 24.8701 18.2954 24.8701H8.00539C4.08539 24.8701 0.900391 21.6851 0.900391 17.7651V7.47512C0.900391 5.59075 1.64895 3.78357 2.9814 2.45112C4.31384 1.11868 6.12103 0.370117 8.00539 0.370117ZM7.76039 2.82012C6.59079 2.82012 5.46908 3.28474 4.64205 4.11178C3.81501 4.93881 3.35039 6.06051 3.35039 7.23012V18.0101C3.35039 20.4479 5.32264 22.4201 7.76039 22.4201H18.5404C19.71 22.4201 20.8317 21.9555 21.6587 21.1285C22.4858 20.3014 22.9504 19.1797 22.9504 18.0101V7.23012C22.9504 4.79237 20.9781 2.82012 18.5404 2.82012H7.76039ZM19.5816 4.65762C19.9878 4.65762 20.3772 4.81894 20.6644 5.10611C20.9516 5.39327 21.1129 5.78275 21.1129 6.18887C21.1129 6.59498 20.9516 6.98446 20.6644 7.27162C20.3772 7.55879 19.9878 7.72012 19.5816 7.72012C19.1755 7.72012 18.786 7.55879 18.4989 7.27162C18.2117 6.98446 18.0504 6.59498 18.0504 6.18887C18.0504 5.78275 18.2117 5.39327 18.4989 5.10611C18.786 4.81894 19.1755 4.65762 19.5816 4.65762ZM13.1504 6.49512C14.7748 6.49512 16.3328 7.14043 17.4814 8.28909C18.6301 9.43775 19.2754 10.9957 19.2754 12.6201C19.2754 14.2446 18.6301 15.8025 17.4814 16.9511C16.3328 18.0998 14.7748 18.7451 13.1504 18.7451C11.5259 18.7451 9.96802 18.0998 8.81936 16.9511C7.6707 15.8025 7.02539 14.2446 7.02539 12.6201C7.02539 10.9957 7.6707 9.43775 8.81936 8.28909C9.96802 7.14043 11.5259 6.49512 13.1504 6.49512ZM13.1504 8.94512C12.1757 8.94512 11.241 9.3323 10.5518 10.0215C9.86258 10.7107 9.47539 11.6454 9.47539 12.6201C9.47539 13.5948 9.86258 14.5295 10.5518 15.2187C11.241 15.9079 12.1757 16.2951 13.1504 16.2951C14.1251 16.2951 15.0598 15.9079 15.749 15.2187C16.4382 14.5295 16.8254 13.5948 16.8254 12.6201C16.8254 11.6454 16.4382 10.7107 15.749 10.0215C15.0598 9.3323 14.1251 8.94512 13.1504 8.94512Z" fill="#374151"/>
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a href={teamMember.socials.linkedIn} rel="noopener noreferrer" target="_blank">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.8735 0.370117C22.5955 0.370117 23.2879 0.656922 23.7984 1.16744C24.3089 1.67795 24.5957 2.37036 24.5957 3.09234V22.1479C24.5957 22.8699 24.3089 23.5623 23.7984 24.0728C23.2879 24.5833 22.5955 24.8701 21.8735 24.8701H2.81793C2.09595 24.8701 1.40354 24.5833 0.893023 24.0728C0.382508 23.5623 0.0957031 22.8699 0.0957031 22.1479V3.09234C0.0957031 2.37036 0.382508 1.67795 0.893023 1.16744C1.40354 0.656922 2.09595 0.370117 2.81793 0.370117H21.8735ZM21.1929 21.4673V14.2534C21.1929 13.0766 20.7254 11.948 19.8933 11.1159C19.0612 10.2837 17.9325 9.81623 16.7557 9.81623C15.5988 9.81623 14.2513 10.524 13.5979 11.5857V10.0748H9.80043V21.4673H13.5979V14.7571C13.5979 13.709 14.4418 12.8515 15.4899 12.8515C15.9953 12.8515 16.4799 13.0523 16.8373 13.4096C17.1947 13.767 17.3954 14.2517 17.3954 14.7571V21.4673H21.1929ZM5.37681 7.9379C5.98328 7.9379 6.5649 7.69698 6.99373 7.26815C7.42257 6.83931 7.66348 6.25769 7.66348 5.65123C7.66348 4.38539 6.64265 3.35095 5.37681 3.35095C4.76674 3.35095 4.18166 3.5933 3.75027 4.02469C3.31889 4.45607 3.07654 5.04116 3.07654 5.65123C3.07654 6.91706 4.11098 7.9379 5.37681 7.9379ZM7.26876 21.4673V10.0748H3.49848V21.4673H7.26876Z" fill="#374151"/>
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a href={teamMember.socials.facebook} rel="noopener noreferrer" target="_blank">
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.4954 12.695C25.4954 5.88819 19.9774 0.370117 13.1706 0.370117C6.36378 0.370117 0.845703 5.88809 0.845703 12.695C0.845703 18.8466 5.35275 23.9456 11.2448 24.8701V16.2576H8.11545V12.695H11.2448V9.97966C11.2448 6.89074 13.0849 5.18452 15.9 5.18452C17.2486 5.18452 18.659 5.42524 18.659 5.42524V8.45831H17.1049C15.5737 8.45831 15.0963 9.40838 15.0963 10.3831V12.695H18.5146L17.9681 16.2576H15.0963V24.8701C20.9884 23.9456 25.4954 18.8467 25.4954 12.695Z" fill="#374151"/>
                                    </svg>
                                </a>

                                {/* X */}
                                <a href={teamMember.socials.x} rel="noopener noreferrer" target="_blank">
                                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5417 0.370117H25.6979L16.6178 10.7481L27.2998 24.8701H18.9347L12.3837 16.3052L4.888 24.8701H0.729287L10.4413 13.7697L0.195312 0.370117H8.77031L14.6918 8.19881L21.5417 0.370117ZM20.083 22.3824H22.386L7.52018 2.72714H5.04882L20.083 22.3824Z" fill="#374151"/>
                                    </svg>
                                </a>
                            </div>
                            
                        </GradientBorderBox>

                        <div className="absolute -top-[111px] left-[64px] z-0 rounded-[200px] w-[222px] h-[222px]">
                            <Image src={teamMember.image} alt={teamMember.name} width={222} height={0} sizes="100vh"
                                className="rounded-[200px] w-full h-full object-cover"
                            />
                        </div>

                    </div>
                    
                ))}
            </div>
        </section>
    );
}