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
    return (
        <>
            <div className="">


                <div className='navbar flex justify-between items-center px-10 py-5 
        '>
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
        </>
    )
}
