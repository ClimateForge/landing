"use client";
import { Inter } from 'next/font/google';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    ChartOptions
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);
// Define the callback function
const yAxisTickCallback: (value: number | string) => string | number = (value) => {
    return [0, 30, 60, 90].includes(Number(value)) ? value : '';
};
// Chart.js configuration
const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,  // Remove vertical grid lines
            },
        },
        y: {
            border: {
                dash: [6, 6]
                
            },
            grid: {
                lineWidth: 2,
                color: '#E5E5EF',    // Set the color of the dashed lines
            },
            ticks: {
                callback: yAxisTickCallback,
                stepSize: 30,
            },
            suggestedMin: 0,
            suggestedMax: 90,
            
        },
    },
};

// Your LineChart component
const MyLineChart: React.FC = () => {
    return (
        <div className='relative w-full h-full'>
        <Line
            data={{
            labels: ["2025", "2030", "2035", "2040", "2045", "2050"],
            datasets: [
                {
                data: [0, null, 60, null, null, 90],
                borderColor: "#1B70F0",
                backgroundColor: "rgba(27, 112, 240, 0.2)",
                fill: false,
                borderWidth: 2,
                pointBackgroundColor: "white",
                pointBorderColor: "#1B70F0",
                pointBorderWidth: 2,
                pointRadius: 3,
                spanGaps: true,
                },
            ],
            }}
            options={options}
        />
        </div>
    );
};
const inter = Inter({ subsets: ['latin'] })

type Props = {
    lineGraphData: LineGraphData
}

type LineGraphData = {
    title: string;
    subtitle?: string;
    description: string;
}

export default function LineGraphCard({lineGraphData}: Props) {

    const {title, subtitle, description} = {...lineGraphData}

    return (
        <div className="w-full max-w-[568px] rounded-[20px] p-2 sm:p-[12px] shadow-lg bg-white">
            {/* Graph Container */}
            <div className={`${inter.className} flex flex-col 
                border-[1px] border-solid rounded-[20px] p-[24px] sm:p-[36px]`}>
                {/* Graph Title */}
                <div className='flex flex-col w-full'>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 
                        leading-none sm:leading-5 text-[#9291A5]">
                        {subtitle}
                    </p>
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-7">
                        {title}
                    </h4>
                </div>
                
                {/* Graph Divider */}
                <svg className='mt-2 sm:mt-4 mb-4' width="100%" height="2" viewBox="0 0 474 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.796875" y1="1.36304" x2="473.917" y2="1.36304" stroke="#DEE1E6"/>
                </svg>
                
                {/* Graph */}
                <div className='my-6 h-[180px]'>
                    {/* Line Plot */}
                    <MyLineChart/>
                </div>
                
            
            </div>

                
            {/* Graph Description */}
            <p className='text-center mt-6 text-[#212529] mb-6'>
                {description}
            </p>
            
        </div>
    );

}