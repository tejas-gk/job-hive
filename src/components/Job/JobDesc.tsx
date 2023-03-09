interface JobDescProps {
    id: number;
    role: {
        content: string;
        items: string[];
    };
    requirements: {
        content: string;
        items: string[];
    };
    description: string;
    place: string;
    type: string;
    postedAt: string;
}
export default function JobDesc({
    id,
    role,
    requirements,
    description,
    place,
    type,
    postedAt
}: JobDescProps) {
    return (
        <main className='mx-auto mt-6 mb-16 max-w-[810px] px-6 md:mb-[52px] md:px-10 lg:mb-20'>
            <div className='rounded-md bg-white p-6   md:p-12'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <div className='mb-[50px] sm:mb-0'>
                        <div className='flex items-center space-x-3'>
                            <p className='leading-[20px]'>Posted {postedAt}</p>
                            <div className='h-1 w-1 rounded-full'></div>
                            <p className='leading-[20px]'>{type}</p>
                        </div>

                        <h3 className='mt-2 cursor-pointer md:hidden'>
                            {type}
                        </h3>
                        <h1 className='mt-2 hidden cursor-pointer md:inline-block md:max-w-[450px]'>
                            {type}
                        </h1>
                        <h4 className='mt-2'>{place}</h4>
                    </div>
                    <button

                    >
                        Apply Now
                    </button>
                </div>
                <p className='mt-8 md:mt-10'>{description}</p>
                <h3 className='mt-[66px] md:mt-10'>Requirements</h3>
                <p className='mt-6 mb-8 md:mb-6'>{requirements.content}</p>
                {requirements.items && (
                    <ul className=' space-y-2 pl-4'>
                        {requirements.items.map((item, i) => (
                            <li className='pl-5' key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                <h3 className='mt-10'>What you will do</h3>
                <p className='mt-6 '>{role.content}</p>
                {role.items && (
                    <ul className='mt-8  space-y-2 pl-4 md:mt-6'>
                        {role.items.map((item, i) => (
                            <li className='pl-5' key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    )
}
