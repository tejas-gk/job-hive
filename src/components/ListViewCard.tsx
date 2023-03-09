import Image from "next/image";
import { IoBookmarks } from "react-icons/io5";
interface Job {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
}
const skills = [
    'HTML',
    'CSS',
]

export default function ListViewCard({
    id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location
}: Job) {
    return (
        <div className='w-full bg-white mt-4 '>
            <div className='flex flex-col items-center justify-between w-full h-full p-4 border border-gray-200 rounded-lg sm:flex-row sm:p-6'>
                <div className='flex items-center justify-between w-full mb-4 sm:mb-0 sm:w-1/2'>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-center w-12 h-12 mr-4 bg-gray-100 rounded-full'
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
                        <div>
                            <h3 className='text-base font-medium leading-6 text-gray-900'>
                                {company}
                            </h3>
                            <p className='mt-1 text-sm leading-5 text-gray-500'>
                                {position}
                            </p>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-between w-full mb-4 sm:mb-0 sm:w-1/2'>
                    <div className='flex items-center'>

                        <div>
                            <h3 className='text-base font-medium leading-6 text-gray-900'>
                                {contract}
                            </h3>
                            <p className='mt-1 text-sm leading-5 text-gray-500'>
                                {location}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='mt-1 text-sm leading-5 text-gray-500'>
                            {postedAt}
                        </p>
                    </div>


                    <div className='flex items-center justify-center w-12 h-12 ml-4 bg-gray-100 rounded-full'>
                        <button
                            title='Save job'
                            className='flex items-center justify-center w-8 h-8 text-gray-400 transition duration-150 ease-in-out rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500'>
                            <IoBookmarks />

                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
