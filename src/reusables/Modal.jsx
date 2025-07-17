import React from 'react'
import { X } from 'lucide-react';

const Modal = ({isOpen, onClose, title, children}) => {
    if(!isOpen) return false
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
        <div className='bg-white rounded-xl p-4 w-full max-w-md'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <button onClick={onClose}><X className="w-5 h-5" /></button>
            </div>
            <>
            {children}
            </>
            
        </div>
    </div>
  )
}

export default Modal