import React, { useEffect } from 'react'

const ToastNotification = ({message, type = 'info', onClose, className = ''}) => {
useEffect(() => {
    const timer = setTimeout(() => {
        onClose()
    }, 5000);
    return () => clearTimeout(timer)
})
  return (
    <div className={`fixed top-5 right-4 px-4 py-3 rounded-lg shadow-lg z-10 border ${className}`}>{message}</div>
  )
}

export default ToastNotification