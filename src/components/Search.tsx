import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { createContext } from 'react'

interface SearchProps {
    title: string
    location: string
    description: string
    time: string
    type: string
    skills: string[]
    link: string
}

interface SearchContextProps {
    search: SearchProps[]
    setSearch: (search: SearchProps[]) => void
}

export const SearchContext = createContext<SearchContextProps>({
    search: [],
    setSearch: () => { }
})

export default function Search() {
    return (
        <div className='search-container grid bg-card-shadow gap-10 rounded-md  p-10 md:w-full  w-[350px] 
      '>
            <form>
                <div className="flex justify-between items-center rounded-md md:gap-10 bg-white md:p-5  shadow-lg shadow-card-shadow-dark
                w-[300px] md:w-full
             ">
                    <div className="flex md:gap-2 items-center">
                        <AiOutlineSearch className='md:text-[30px] font-bold cursor-pointer text-[20px] ml-2 md:ml-0
                        '/>
                    </div>
                    <input type="text" className='md:w-full bg-transparent border-none focus:outline-none
                    md:placeholder-gray-300 placeholder-gray-300  w-[250px] 
                    ' placeholder='Search for jobs, companies, etc.' />

                    <AiOutlineCloseCircle className='md:text-[30px] font-bold cursor-pointer text-[20px]
                    '/>
                </div>
                <button className='bg-[#0a66c2] text-white rounded-md p-3 mt-3 md:mt-5 md:w-full hover:bg-[#0063e5]
                w-[300px]
                '>Search</button>
            </form>

      

        </div>
    )
}
