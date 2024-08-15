import AccentTitle from './ui/accent-title';
import GradientBorderBox from './ui/gradient-border-box';
import BarGraphCard from './ui/bar-graph-card';
import LineGraphCard from './ui/line-graph-card';

export default function MarketInsights() {

    const barGraphsData = [
        {
            title: 'The Current Landscape',
            subtitle: 'Existing Buildings and Annual Cost',
            graphMax: 400,
            barData: [
                {
                    barTitle: 'Existing Buildings (In Millions)',
                    barSubtitle: '130M',
                    barPercent: 35,
                    barColor: '#7842E8'
                },
                {
                    barTitle: 'Annual Cost (In Billions)',
                    barSubtitle: '400B',
                    barPercent: 100,
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
                    barSubtitle: '4M',
                    barPercent: 66,
                    barColor: '#FFCD3F'
                },
                {
                    barTitle: 'New Commercial Space (In billon sq ft)',
                    barSubtitle: '60B',
                    barPercent: 100,
                    barColor: '#FD7561'
                }
            ],
            description: 'By 2050, the U.S. expects 40 million new homes and 60 billion square feet of commercial space. Integrating energy-efficient designs from the start is crucial for long-term sustainability.'
        },
        {
            title: 'Energy Burden On Households',
            subtitle: 'Households Struggling to Pay Energy Bills',
            graphMax: 50,
            barData: [
                {
                    barTitle: 'All Households (%)',
                    barSubtitle: '25%',
                    barPercent: 50,
                    barColor: '#FF9D9D'
                },
                {
                    barTitle: 'Low-Income Households (%)',
                    barSubtitle: '50%',
                    barPercent: 100,
                    barColor: '#EB3D4D'
                }
            ],
            description: '25% of all households and 50% of low-income households struggle with energy costs. Energy-efficient upgrades can alleviate this financial burden and improve quality of life.'
        }
    ]

    const lineGraphData = {
        title: 'The Current Landscape',
        subtitle: 'Existing Buildings and Annual Cost',
        description: 'The DOE aims to reduce building emissions by 65% by 2035 and 90% by 2050. Achieving these targets requires widespread adoption of energy-efficient technologies and clean energy solutions.'
    }
    
    return (
        <section className="relative flex flex-col justify-center items-center w-full max-w-[1440px] ">
            
            <GradientBorderBox 
                decorationsInside={[
                    {src: "/decorations/dots.svg", className: "-bottom-[120px] -right-[158px] w-[363px]"}
                ]}>
                <AccentTitle 
                    title={["Market", "Insights"]} 
                    variant='underline' 
                    accent={'/accents/accent2.svg'} 
                    accentIndex={1} 
                    className='mt-16 mb-8 text-center'
                />

                {/* Bar Graph Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 z-10 mb-20">
                    {barGraphsData.map((graph, index) => 
                        <BarGraphCard key={index} barGraphData={graph}/>
                    )}
                    <LineGraphCard lineGraphData={lineGraphData}/>
                </div>
                
            </GradientBorderBox>
        </section>
    );
}