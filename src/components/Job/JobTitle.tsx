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
        <div className='relative mx-auto mt-14 px-6 md:px-10 md:w-[50rem] shadow-lg bg-white md:py-5 w-[25rem]
         max-w-[1190px] md:mt-[70px] md:mb-14 md:rounded-md
        '>
            <div
                className='absolute left-0 right-0 mx-auto flex h-[50px] w-[50px] items-center justify-center transform -translate-y-1/2 top-0 
                rounded-md md:mx-0 md:ml-10 md:h-36 md:w-36 md:translate-y-3  py-4 px-4'
                style={{ backgroundColor: `${ logoBackground}` }}
            >
                <Image
                    src={logo}
                    alt={company}
                    width={100}
                    height={100}
                    className='rounded-lg md:rounded-md'
                />  
            </div>
            <div className='flex flex-col items-center rounded-md bg-white pb-8 md:ml-36 md:h-36 md:flex-row md:justify-between  md:pl-10 md:pr-12 md:pb-0'>
                <div className='flex flex-col items-center md:items-start'>
                    <h3 className='mt-12 md:hidden'>{ company}</h3>
                    <h2 className='hidden md:inline-block'>{ company}</h2>
                    <p className='mt-2 mb-6 leading-5 md:mb-0'>
                        {url}
                    </p>
                </div>
                <button>
                    Company Site
                </button>
            </div>
        </div>
    )
}
