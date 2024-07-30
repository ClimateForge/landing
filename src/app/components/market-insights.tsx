import Image from 'next/image';
import { Inter } from 'next/font/google';
import BarGraphCard from './ui/bar-graph-card';
import LineGraphCard from './ui/line-graph-card';

const inter = Inter({ subsets: ['latin'] })

export default function MarketInsights() {

    const barGraphsData = [
        {
            title: 'The Current Landscape',
            subtitle: 'Existing Buildings and Annual Cost',
            graphMax: 400,
            barData: [
                {
                    barTitle: 'Existing Buildings (In Millions)',
                    barSubtitle: '121,799',
                    barPercent: 55,
                    barColor: '#7842E8'
                },
                {
                    barTitle: 'Annual Cost (In Billions)',
                    barSubtitle: '5,789',
                    barPercent: 90,
                    barColor: '#78E672'
                }
            ],
            description: 'There are approximately 130 million buildings in the U.S. with annual energy costs exceeding $400 billion. Upgrading these buildings can significantly reduce costs and environmental impact.'
        },
        {
            title: 'Future Growth And Opportunities',
            subtitle: 'New Constructions Expected by 2050',
            graphMax: 60,
            barData: [
                {
                    barTitle: 'New Homes (In Millions)',
                    barSubtitle: '121,799',
                    barPercent: 55,
                    barColor: '#FFCD3F'
                },
                {
                    barTitle: 'New Commercial Space (In billon sq ft)',
                    barSubtitle: '5,789',
                    barPercent: 90,
                    barColor: '#FD7561'
                }
            ],
            description: 'By 2050, the U.S. expects 40 million new homes and 60 billion square feet of commercial space. Integrating energy-efficient designs from the start is crucial for long-term sustainability.'
        },
        {
            title: 'Energy Burden On Households',
            subtitle: 'Households Struggling to Pay Energy Bills',
            graphMax: 40,
            barData: [
                {
                    barTitle: 'New Commercial Space (In billion sq ft)',
                    barSubtitle: '121,799',
                    barPercent: 55,
                    barColor: '#FF9D9D'
                },
                {
                    barTitle: 'Edge',
                    barSubtitle: '5,789',
                    barPercent: 90,
                    barColor: '#EB3D4D'
                }
            ],
            description: 'By 2050, the U.S. expects 40 million new homes and 60 billion square feet of commercial space. Integrating energy-efficient designs from the start is crucial for long-term sustainability.'
        }
    ]

    const lineGraphData = {
        title: 'The Current Landscape',
        subtitle: 'Existing Buildings and Annual Cost',
        description: 'There are approximately 130 million buildings in the U.S. with annual energy costs exceeding $400 billion. Upgrading these buildings can significantly reduce costs and environmental impact.'
    }
    
    return (
        <section className="relative flex flex-col justify-center items-center w-full max-w-[1440px] ">
            
        {/* Gradient border container */}
        <div className="p-[2px] rounded-[90px] relative overflow-clip bg-accent-gradient w-full">

        {/* Opaque container */}
        <div className="relative flex flex-col items-center
            bg-white-gradient rounded-[88px] overflow-clip pb-20 px-6">
            <h2 className='mt-16 mb-8'>
                Market
                <span className="relative "> Insights
                    <Image className="absolute z-10 top-[80%] left-[5%]"
                        src={"/accents/accent2.svg"}
                        alt="Block 2 title accent SVG"
                        width={0}
                        height={26}
                        style={{ width: '380px', height: 'auto'}}
                    />
                </span>
            </h2>

            {/* Bar Graph Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 z-10">
                {barGraphsData.map((graph, index) => 
                    <BarGraphCard key={index} barGraphData={graph}/>
                )}
                <LineGraphCard lineGraphData={lineGraphData}/>
            </div>
            

            {/* Container Decoration - SVG */}
            <Image className="absolute z-0 bottom-0 -right-12"
                src={"/cta-minor/dots3.svg"}
                alt="Dot SVG 3"
                width={363}
                height={0} 
            />
        </div>
        </div>
        </section>
    );
}