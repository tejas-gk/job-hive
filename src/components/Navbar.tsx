import { useState } from 'react'
const navListItems = [
    {
        title: 'Job',
        link: '/'
    },
    {
        title: 'companies',
        link: '/about'
    },
    {
        title: 'Contact',
        link: '/contact'
    },
    {
        title: 'Login',
        link: '/login'
    }
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="hidden md:block">


                <div className='navbar flex justify-between items-center px-10 py-5 '>
                    <div className="logo">
                        <h1 className='text-[30px] font-bold text-primary-blue
                '>
                            <strong>Job</strong><span className='text-[#FFC107]'>Hive</span>
                        </h1>
                    </div>
                    <div className="menu flex gap-7">
                        {navListItems.map((item, index) => (
                            <div key={index} className='relative text-text-color font-bold text-[20px] hover:text-primary-blue
                    '>
                                <p className="nav-list capitalize">{item.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="md:hidden">
                <div className='navbar flex justify-between items-center px-10 py-5 '>
                    <div className="logo">
                        <h1 className='text-[30px] font-bold text-primary-blue
                '>
                            <strong>Job</strong><span className='text-[#FFC107]'>Hive</span>
                        </h1>
                    </div>
                    <div className="menu flex gap-7">
                        <div className='relative text-text-color font-bold text-[20px] hover:text-primary-blue
                    '>
                            <p className="nav-list capitalize"
                                onClick={() => setOpen(!open)}
                            >Menu</p>
                        </div>   
                    </div>
                </div>
                {
                    open && (
                        <div className='bg-white'>
                            {navListItems.map((item, index) => (
                                <div key={index} className='relative text-text-color font-bold text-[20px]
                                 hover:text-primary-blue flex justify-center py-5 border-b border-gray-200
                    '>
                                    <p className="nav-list capitalize">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    )
                }  
            </div>
        </>
    )
}
