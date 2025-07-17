import React, { useState } from 'react'
import {Mail, Lock, Key, EyeOff, Eye} from "lucide-react"
import { loginUser } from '../api/ApiServices'

const fields = [
    { name: "email", type: "email", placeholder: "Email", icon: Mail },
    { name: "password", type: "password", placeholder: "Password", icon: Lock, isPassword:true },
]


const INPUTWRAPPER ="flex gap-2 items-center border border-purple-100 rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all duration-200"

const INITIAL_FORM = { email: '', password: '' }

const Login = ({onSubmit, onSwitchMode}) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [showPassword, setShowPassword] = useState(false)

  const handleSwitchMode = () => {
    onSwitchMode?.()
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      console.log("Sending formData:", formData);
      const { data } = await loginUser(formData);
      console.log(data)
      if(!data.token){
        throw new Error(data.message || 'Login Failed')
      }
      localStorage.setItem('token', data.token)
      localStorage.setItem('userId', data.user.id)
      setFormData(INITIAL_FORM)
    } catch (error) {
      const message = error.response?.data?.message || error.message
      console.error(message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className='max-w-md bg-white w-full border border-purple-100 rounded-xl p-8'>
      <div className='mb-6 text-center'>
        <div className='w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-4'>
          <Key className="w-8 h-8 text-white"/>
        </div>
        <h2 className='text-2xl font-bold text-gray-800'>Welcome Back</h2>
        <p className='text-gray-500 text-sm mt-1'>
          Sign in to continue to TaskFlow
        </p>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {fields.map(({name, type, placeholder, icon:Icon, isPassword}) => (
          <div key={name} className={INPUTWRAPPER}>
            <Icon className='text-purple-500 w-5 h-5'/>
            <input name={name}  type={isPassword ? (showPassword ? 'text' : 'password') : type} placeholder={placeholder} value={formData[name]} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} className="w-full focus:outline-0 text-sm text-gray-800" required />

            {isPassword && (
            <button type='button' onClick={() => setShowPassword((prev) => !prev)} className='text-gray-500 hover:text-purple-500'>
              {showPassword ? <EyeOff className='w-5 h-5' /> : <Eye className='w-5 h-5' />}
            </button>
            )}
          </div>
          
        ))}

        <button type='submit' className='w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-sm font-semibold py-3 rounded-lg hover:shadow-md duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase hover:from-fuchsia-600 hover:to-indigo-400 transition-colors' disabled={loading}>
          {loading ? (
            'Loging in...'
          ): (
            <>
            <Key className='w-4 h-4' /> Login
            </>
          )}
        </button>

        <p className='text-center text-sm text-gray-600 mt-6'>
            Don't have an account? {' '}
            <button type='button' onClick={handleSwitchMode} className='text-purple-600 hover:text-purple-700 hover:underline font-medium transition-colors'>
              Signup
            </button>
        </p>

      </form>
    </div>
  )
}

export default Login