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
        <div className='search-container grid bg-card-shadow gap-10 rounded-md  p-10
      '>
            <form>
                <div className="flex md:justify-between md:items-center rounded-md md:gap-10 bg-white p-5 shadow-lg shadow-card-shadow-dark
              ">
                    <div className="flex md:gap-2 items-center">
                        <AiOutlineSearch className='text-[30px] font-bold cursor-pointer
                        '/>
                    </div>
                    <input type="text" className='md:w-full bg-transparent border-none focus:outline-none
                    md:placeholder-gray-300 placeholder-gray-300  debug w-[250px]
                    ' placeholder='Search for jobs, companies, etc.' />

                    <AiOutlineCloseCircle className='text-[30px] font-bold cursor-pointer
                    '/>
                </div>
                <button className='bg-[#0a66c2] text-white rounded-md p-3 mt-3 md:mt-5 md:w-full hover:bg-[#0063e5]
                w-[250px]
                '>Search</button>
            </form>

            <div className="flex flex-row justify-evenly items-center 
            ">
                <div className="single-search flex-row-center-center gap-10">
                    {/* sort by */}
                    <div className="sort-by flex-row-center-center gap-2">
                        <p className='text-[14px] font-bold
                        '>Sort by</p>
                        <select
                            title='sort-by'
                            name="sort-by" id="sort-by" className='bg-white p-2 rounded-md
                        '>
                            <option value="relevance">Relevance</option>
                            <option value="date">Date</option>
                            <option value="salary">Salary</option>
                            <option value="distance">Distance</option>
                        </select>
                    </div>


                    <div className="type flex-row-center-center gap-2">
                        <p className='text-[14px] font-bold
                        '>Type</p>
                        <select
                            title='type'
                            name="typee" id="type" className='bg-white p-2 rounded-md
                        '>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                            <option value="temporary">Temporary</option>
                        </select>
                    </div>

                    <div className="level flex-row-center-center gap-2">
                        <p className='text-[14px] font-bold
                        '>Level</p>
                        <select
                            title='level'
                            name="level" id="level" className='bg-white p-2 rounded-md
                        '>
                            <option value="entry-level">Any Level</option>
                            <option value="entry-level">Entry Level</option>
                            <option value="mid-level">Mid Level</option>
                            <option value="senior-level">Senior Level</option>
                        </select>
                    </div>

                    <button className=' text-[#a1a1a1] h-[30px]'
                        type='reset'
                    // onClick={() => {
                    //     const inputs = document.querySelectorAll('input')
                    //     inputs.forEach(input => {
                    //         input.value = ''
                    //     })
                    //     const selects = document.querySelectorAll('select')
                    //     selects.forEach(select => {
                    //         select.value = ''
                    //     })

                    //  }
                    // }

                    >
                        Clear all
                    </button>
                </div>
            </div>


        </div>
    )
}
