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
        <div className="relative rounded-3xl bg-white shadow-lg gap-y-4 pt-6
            transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-xl
            w-[300px] h-[300px] flex flex-col items-center">
                    
            <GradientButton variant={buttonVariant} disabled={disabled}>
                {name ? name : ""}
            </GradientButton>

            {price ? <h4>${price}/mo</h4> : <h4>TBD</h4>}

            {perks && perks?.length > 1 ?
                <ul>
                    {perks?.map((perk, i) =>(
                        <li key={i} className="list-disc">
                            {perk}
                        </li>
                    ))}
                </ul>
            : perks ?
                <p className='text-center px-4'>
                    {perks[0]}
                </p>
            : null
            }
            </div>
    )
}

export default function PricingTiers() {
    
    return (
        <section className="relative flex flex-col justify-center items-center w-full gap-y-4">
    
            <h2 className='font-bold'>
                <GradientText>
                    Tiers
                </GradientText>
            </h2>

            <div className='flex flex-wrap justify-center items-center gap-8'>

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
                        "This plan is offered to big companies with lots of seats. It will be licensed based, and the price is TBD.",
                    ]}
                    disabled={true}
                />
            </div>
        </section>
    );
}