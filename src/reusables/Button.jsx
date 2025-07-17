import React from 'react'

const Button = ({children, type='submit', onClick, btnClass=""}) => {
  return (
     <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer rounded-lg font-semibold ${btnClass}`}
    >
      {children}
    </button>
  )
}

export default Button