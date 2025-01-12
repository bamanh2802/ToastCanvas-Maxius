'use client'
const data = [
    {
        Title: 'History', 
        content: [
            {
                title: '2021',
                description: [
                    'Rebrand the Company name to Maxius',
                    '1st Pan-Govermmental Infomation Resource Integration HW3'
                ],
            },
            {
                title: '2020',
                description: [
                    '2nd construction of AI-based adaptive security system',
                    'SPC Certification: Top 5 Rank record in the world of storage'
                ],
            },
            {
                title: '2019',
                description: [
                    'Development of Genome Analysis System Semiconductor and HPC Storage'
                ],
            },
            {
                title: '2018',
                description: [
                    'Development of small supercomputers using high performance system semiconductors',
                    'Certified by International TPC'
                ],
            },
            {
                title: '2017',
                description: [
                    'Confirmation of excellent product for reducing standby power (Korea Energy Agency)',
                    'Technology Innovation Award'
                ],
            },
            {
                title: '2016',
                description: [
                    'Obtain Certificate of Conformity registered for broadcasting and communication equipment (National Radio Research Institute)',
                    'Sign MOU Agreement with KT ds'
                ],
            },
            {
                title: '2015',
                description: [
                    'Awarded IT Convergence Entrepreneur',
                    'Awarded Korean Patent Technology Award (Sejong the Great Award)'
                ],
            },
            {
                title: '2010',
                description: [
                    'Internationally develop the first PCI',
                    'Interface Type Storage board SSD product.'
                ],
            },
            {
                title: '1996',
                description: [
                    'Company established.'
                ],
            }
        ]
    },
    {
        Title: 'Partners', 
        content: [
            {
                title: '1000 corporate Partners',
                description: [
                    'Cheongwadae, KHNP, Ministry of National Defense,',
                    "Gunpo city, Korea Agro-Fisheries&Food Trade", 
                    "Coporation, JeollaNamdo, KMRB, JDC,",
                    "Korea Housing Finance Corporation,",
                    "Gyeonggi Provincial Police Agency, NCIS, KPIC,",
                    "Supreme Court of Korea, IPET, LH, National Gugak",
                    "Center, Korea Workers",
                    "Compensation&Welfare",
                    "Service More than 1,000 government-",
                    "related companies, including them"
                ],
            },
            {
                title: '120 corporate Partners',
                description: [
                    'KAIST, Seoul National University, Dongguk',
                    "University, Pusan National University, Incheon", 
                    "National University, ETRI, Seoyeong",
                    "University, Telecommuications Technology Association,",
                    "Sunmoon University, Namseoul University,",
                    "Chungnam National University, Gachon University, Myongji University More than 250 companies related to education, including",
                ],
            },
            {
                title: '250 Additional corporate Partners',
                description: [
                    'Samsung Total, Samsung SDS, LS Electric, Hanwha ',
                    "Systems, More than 120 manufacturing-related companies, including", 
                ],
            },
            {
                title: '350 Additional corporate Partners',
                description: [
                    'JoongAng Daily C&C, Dong-A Broadcasting System, KCTV, ETNEWS, The Digital Times',
                    "More than 350 companies related to broadcasting.", 
                ],
            },
            {
                title: '50 Additional corporate Partners',
                description: [
                    'Hyundai Securities, Samsung Fire & Marine Insurance, MG Community Credit',
                    "Cooperatives, KDB Bank, SGI Seoul Guarantee Insurance, Korea", 
                    "Eximbank, IBK Industrial Bank of",
                    "Korea, Mirae Asset Securities, Mirae Asset",
                    "life Insurance,",
                    "Mirae Asset Daewoo, NH NongHyup",
                    "Life Insurance, KB Securities, SK Telecom, SK Broadband."
                ],
            }
        ]
    },
    {
        Title: "Patents",
        content: [
            {
                title: 'High-speed data I/O semiconductor Chip',
                description: [
                    'FPGA/CPLD/ASIC design and manufacturing technology, possess TPU development capability',
                ],
            },
            {
                title: 'Intelligent Pattern Analysis Algorithm',
                description: [
                    'Hybrid Cache algorithm that follows data pattern analysis',
                ],
            },
            {
                title: 'OS and SSD optimization',
                description: [
                    'Device Driver optimization technology differing for each OS, storage resource management technology',
                ],
            }
        ]
    },
    {
        Title: "Awards",
        content: [
            {
                title: 'Awarded the Sejong Award at the KR Patent Awards',
                description: [
                    'Received the highest domestic patent award for outstanding performance and energy-saving technology',
                ],
            },
            {
                title: 'Certified by Korea Excellent Product Designation',
                description: [
                    'Certification of the only excellent procurement registered product in Korea in the server field that has been recognized for its high- performance system quality',
                ],
            },
            {
                title: 'Korean Green Technology Certificate',
                description: [
                    'Possessing eco-friendly technology that ensures the highest performance and maximum efficiency',
                ],
            },
            {
                title: 'Korea TPC-C Certification',
                description: [
                    'Certified for Al high-performance computing technology and performance equipped with an in- memory DB by receiving the first internationally recognized TPC-C',
                ],
            },
        ]
    }
]

import Card from "./Card"


import React, { useState, useEffect } from "react";

const FourthPage = () => {
    const [visibleCards, setVisibleCards] = useState(4); 

    const updateVisibleCards = () => {
        const width = window.innerWidth;
        if (width >= 1280) {
            setVisibleCards(4); 
        } else if (width >= 1024) {
            setVisibleCards(3); 
        } else if (width >= 640) {
            setVisibleCards(2); 
        } else {
            setVisibleCards(1); 
        }
    };

    useEffect(() => {
        updateVisibleCards(); 
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards); 
    }, []);

    return (
        <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center mb-12 slide-from-top2">
            <h1 className="text-xl font-bold text-black md:text-4xl lg:text-6xl xl:text-8xl">STORY</h1>


            </div>
            
            <div className="w-[1100px] flex flex-wrap justify-center gap-4 slide-from-left2">
                {data.slice(0, visibleCards).map((item, index) => (
                    <div key={index} className="flex-1 max-w-[279px]">
                        <Card data={item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FourthPage;
