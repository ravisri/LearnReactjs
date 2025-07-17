import React from 'react'

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    if(totalPages <= 1) return null

    const pages = []
    for(let i = 1; i <= totalPages; i ++){
        pages.push(i)
    }
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
        <button 
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
            Prev
        </button>
        {pages.map(page =>(
            <button 
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${page === currentPage ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
            {page}
        </button>
        ))}
        
        <button 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
            Next
        </button>
    </div>
  )
}

export default Pagination