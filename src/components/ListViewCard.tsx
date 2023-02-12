import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

interface CardProps {
    title: string
    location: string
    description: string
    time: string
    type: string
    skills?: string[]
}

export default function ListViewCard({
    title,
    location,
    description,
    time,
    type,
    skills
}: CardProps) {
    return (
        <div className='w-full bg-white mt-4 '>
            <div className='group group-by-item single-job w-inherit p-5 bg-white rounded-md hover:bg-primary-blue shadow-lg
          shadow-card-shadow-dark hover:shadow-2xl transition-all duration-300 ease-in-out'>


                <span className='flex justify-between items-center gap-4'>
                    <h4 className="font-bold group-hover:text-white">{title}</h4>
                    <span className='flex items-center gap-1 text-hardly-visible text-[12px] font-bold group-hover:text-white
                    '>
                        <BiTimeFive className='text-[20px] font-bold
                    '/>{time}
                    </span>

                </span>
                <div
                className='flex justify-between items-center'
                >
                <div className="flex justify-between items-center gap-10">
                    <h6 className="text-hardly-visible">India</h6>
                    <h4
                        className='text-[#959595] text-[15px] font-bold  group-hover:text-white
                        '
                    >{type}</h4>
                    
                
                </div>
                <button className='bg-primary-blue text-white py-2 px-4 rounded-md mt-5 w-28
                group-hover:bg-white group-hover:text-primary-blue  group-hover/item:text-text-color
                '>Apply</button>
                </div>
                <div
                    className='flex justify-between items-center gap-4'
                >
                    <p className='text-[15px] text-[#959595]  group-hover:text-white
                '>
                        {description}
                    </p >
                    <div className='skills flex flex-wrap gap-2 mt-5
                '>
                        {
                            skills?.map((skill, index) => (
                                <span key={index} className='bg-[#f5f5f5] text-[#959595] text-[12px] px-2 py-1 rounded-md
                                '>{skill}</span>
                            ))
                        }
                        
                    </div>
                </div>
              
            </div>

        </div>
    )
}
