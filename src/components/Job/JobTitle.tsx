import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
interface JobTitleProps {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    url: string;
}

export default function JobTitle({
    id,
    company,
    logo,
    logoBackground,
    url
}: JobTitleProps) {
    return (
        
        <div className='debug relative  mt-14 max-w-[810px] px-6 md:px-10 flex gap-4 items-center md:justify-between flex-col md:flex-row bg-white shadow-lg rounded-lg p-4
        '>
            <div
                className='flex px-4 py-6 rounded-md -mt-12 md:-mt-16 bg-gray-100 -ml-4 md:-ml-10 debug
            '
                style={{ backgroundColor: logoBackground }}
            >
                <Image
                    src={logo}
                    alt={company}
                    width={50}
                    height={50}
                    className='rounded-[15px] max-h-[40px] max-w-[40px]'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-between w-full debug
            '>
                <div className='flex flex-col'>
                <h3 className='text-base font-medium leading-6 text-gray-900'>
                    {company}
                </h3>
                <Link href={url}>
                    <p className='mt-1 text-sm leading-5 text-gray-500'>
                        {url}
                    </p>
                    </Link>
                </div>
                <button className='flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
                    Apply now
                </button>
            </div>
        </div>
    )
}
