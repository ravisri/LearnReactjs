import React, { useState } from 'react'
import Button from './reusables/Button'
import ToastNotification from './reusables/ToastNotification'
import Input from './reusables/Input'
import Modal from './reusables/Modal'
import Tabs from './reusables/Tabs'
import Pagination from './reusables/Pagination'

const items =Array.from({length:50}, (_,i) => `Item ${i + 1}`)
const itemPerPage =10;

const Dashboard = () => {
    const [toast, setToast] = useState(null)
    const [showModal, setShowModal] = useState(false)

    // pagination
    const [page, setPage] = useState(1)

    const totalPages = Math.ceil(items.length / itemPerPage)
    const startIndex = (page - 1) * itemPerPage;
    const visibleItems = items.slice(startIndex, startIndex + itemPerPage)

const showSuccess = () => {
    setToast({message:'Item saved successfully!', type:'success'})
}
const showError = () => {
    setToast({message:'Something went wrong!', type:'error'})
}
const openModal = () => setShowModal(true)

  return (
    
    <React.Fragment>
        <h1 className="text-3xl font-bold underline text-green-500">
        Hello world!
        </h1>
        <Button onClick={showSuccess} btnClass="bg-green-500 text-white">Show Success</Button>
        <Button onClick={showError} btnClass="bg-red-500 text-white">Show Error</Button>

       {toast && (
        <ToastNotification 
            onClose={() => setToast(null)} 
            message={toast.message} 
            type={toast.type}
            className={`${toast.type === 'success' ? 'text-green-500 border-green-200' : ''} ${toast.type === 'error' ? 'text-red-500 border-red-200' : ''}`} />
       )} 

       <div className='grid grid-cols-4 gap-2'>
        <Input label='Email' name='email' type='email'  placeholder='Enter your email' />
        <Input label='Full Name' name='name' type='text'  placeholder='Enter your Name' />
        <Input label='Phone No.' name='phone' type='tel'  placeholder='Enter your Phone No.' />
        <Input label='Numbers' name='number' type='number'  placeholder='Enter your Age' />
        <Input label='Genger' name='male' type='radio'  placeholder='Enter your Age' radioLabel="Male" />
       </div>

       <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Confirm Delete">
        <p>Are you sure you want to delete this item?</p>
       </Modal>

       <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={openModal}
      >
        Open Modal
      </button>
       
    </React.Fragment>

    // <React.Fragment>
    //     <Tabs
    //         tabs={[
    //             {label:'Profile', content:<p>Hello Profile</p>},
    //             {label:'Settings', content:<p>Hello Settings</p>},
    //             {label:'Security', content:<p>Hello Security</p>},
    //         ]}
    //     />
    //     <div className="max-w-md mx-auto p-4">
    //         <ul className="list-disc pl-5 mb-4">
    //             {visibleItems.map((item, index) => (
    //                 <li key={index}>{item}</li>
    //             ))}
    //         </ul>
    //     <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    //     </div>
    // </React.Fragment>
    
  )
}

export default Dashboard