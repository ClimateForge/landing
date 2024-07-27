import Image from 'next/image';
import GradientText from './ui/gradient-text';
import GradientButton from './ui/gradient-button';

interface PricingCardProps {
    name: string;
    price?: number;
    perks?: string[];
    buttonVariant?: string;
    disabled?: boolean;
}

function PricingCard (props: PricingCardProps) {
    
    const {name, price, perks, buttonVariant, disabled} = {...props}

    return (
        <div className="relative rounded-3xl bg-white shadow-lg gap-y-4 py-14
            transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-xl
            w-[300px] h-[400px] flex flex-col justify-between items-center">
            
            <div className="absolute -top-8 right-8 w-16 h-16
                bg-accent-gradient rounded-full
                shadow-[0px_16px_24px_rgba(38,176,117,0.22)]
                transition-all duration-700
                group-hover:transition-all group-hover:delay-100 group-hover:duration-700
                bg-[length:100%_100%] group-hover:bg-[length:150%_100%] group-hover:scale-110">
                    
                {name === "Launch" ?
                    <Image className="absolute top-[25%] left-[25%]"
                        src={`/pricing-tiers/launch.svg`}
                        alt="triangle-dots-svg-decoration"
                        width={32}
                        height={32} 
                    />

                    : name === "Scale" ?
                    <Image className="absolute top-[25%] left-[25%]"
                        src={`/pricing-tiers/scale.svg`}
                        alt="triangle-dots-svg-decoration"
                        width={32}
                        height={32} 
                    />

                    : name === "Enterprise" ?
                    <Image className="absolute top-[25%] left-[25%]"
                        src={`/pricing-tiers/enterprise.svg`}
                        alt="triangle-dots-svg-decoration"
                        width={32}
                        height={32} 
                    />
                    : null
                }
            </div>
            
                
            

            {price ? 
                <h3 className='font-bold text-4xl'>
                    {`$${price}/mo`}
                    
                </h3> : 
                
                <h3 className='font-bold text-4xl'>TBD</h3>}

            {perks && perks?.length > 1 ?
                <ul>
                    {perks?.map((perk, i) =>(
                        <li key={i}>
                            <GradientText className='font-bold text-[#39C77B]'>&#x2713;</GradientText> {perk}
                        </li>
                    ))}
                </ul>
            : perks ?
                <p className='text-center px-6'>
                    {perks[0]}
                </p>
            : null
            }
            
            <GradientButton variant={buttonVariant} disabled={disabled} width={154}>
                {name ? name : ""}
            </GradientButton>
            </div>
    )
}

export default function PricingTiers() {
    
    return (
        <section className="relative flex flex-col justify-center items-center w-full gap-y-4 mb-0 sm:mb-10">
    
            <h2 className='font-bold mb-8 sm:mb-12'>
                
                    Tiers
                
            </h2>

            <div className='flex flex-wrap justify-center items-center gap-x-8 gap-y-14'>

                <PricingCard name="Launch" price={359} 
                    perks={[
                        "1 Week free limited plan",
                        "Starts with 500 leads",
                        "Free CRM",
                        "1 Location included",
                        "Basic scheduling with Zapier"
                    ]}
                />

                <PricingCard name="Scale" price={559} 
                    perks={[
                        "Starts with 1000 leads",
                        "Unlimited Locations",
                        "Pro Housing Information",
                        "Pro Scheduling Integrations"
                    ]}
                    buttonVariant='outline'
                />

                
                <PricingCard name="Enterprise"
                    perks={[
                        "This plan is offered to big companies with lots of seats. It will be licensed based, and the price is yet to be determined.",
                    ]}
                    disabled={true}
                />
            </div>
        </section>
    );
}