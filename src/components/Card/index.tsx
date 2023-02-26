import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Job {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;

        items: string[];
    };
    role: {
        content: string;

        items: string[];
    };
}


export default function index({
    id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    website,
    apply,

    description,
    requirements,
    role,
}: Job) {
    return (
        <div className='relative flex flex-col justify-between rounded-md bg-white  px-8 pb-8 pt-12'>
            <div className={`absolute top-0 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-[15px] 
            `}
                style={{
                    backgroundColor: logoBackground,
                }}
            >
                <Image
                    src={logo}
                    alt={company}
                    width={50}
                    height={50}
                    className='rounded-[15px] max-h-[40px] max-w-[40px]'
                />
            </div>
            <div className=''>
                <div className='flex items-center space-x-3'>
                    <p className='leading-[20px]'>
                        {postedAt}
                    </p>
                    <div className='h-1 w-1 rounded-full bg-primary-blue'></div>
                    <p className='leading-[20px]'>
                        {contract}
                    </p>
                </div>
                <Link href={`jobs/${id}`}>
                    <h3 className='mt-3 cursor-pointer leading-[26px] hover:text-primary-blue '>
                        {position}
                    </h3>
                </Link>
                <p className='mt-3 leading-[20px]'>
                    {company}
                </p>
            </div>
            <h4 className='mt-10'>
                {location}
            </h4>
        </div>
    )
      
}
