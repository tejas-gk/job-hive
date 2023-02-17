import React from 'react'

interface PaginationProps {
    totalJobs: number,
    jobsPerPage: number,
    currentPage: number,
    paginate: (pageNumber: number) => void
}
export default function Pagination({
    totalJobs,
    jobsPerPage,
    paginate,
    currentPage
}: PaginationProps) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination flex gap-10 my-10 group">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item border border-black rounded-md p-2  group-hover:bg-gray-200
                    ">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
