import { BiTimeFive } from 'react-icons/bi'

interface CardProps {
    title: string
    location: string
    description: string
    time: string
    type: string
    skills?: string[]
}

export default function GridViewCard({
    title,
    location,
    description,
    time,
    type,
    skills
}: CardProps) {
    return (
        <div className="job-card-container flex gap-10 justify-between flex-wrap items-center py-10">
            <div className="group group-by-item single-job w-[300px] p-5 bg-white rounded-md hover:bg-primary-blue shadow-lg
          shadow-card-shadow-dark hover:shadow-2xl transition-all duration-300 ease-in-out
          ">
                <span className='flex justify-between items-center gap-4'>
                    <h4 className="font-bold group-hover:text-white">{title}</h4>
                    <span className='flex items-center gap-1 text-hardly-visible text-[12px] font-bold group-hover:text-white
                    '>
                        <BiTimeFive className='text-[20px] font-bold
                    '/>{time}
                    </span>
                </span>
                <div className="flex justify-between items-center">

                <h6 className="text-hardly-visible">{location}</h6>
                <h4
                    className='text-[#959595] text-[15px] font-bold  group-hover:text-white
                    '
                    >{type}</h4>
                    </div>
                <p className='text-[15px] text-[#959595] pt-5 border-t-2 border-[#959595] mt-4 group-hover:text-white
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
                <button className='bg-primary-blue text-white py-2 px-4 rounded-md mt-5
                group-hover:bg-white group-hover:text-primary-blue w-full group-hover/item:text-text-color
                '>Apply</button>

            </div>
        </div>
    )
}
