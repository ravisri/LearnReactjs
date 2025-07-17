import React from 'react'

const Input = ({label, name, value, onChange, placeholder, type='text', radioLabel, checked }) => {
  return (
    <div className="mb-4">
      {label && type !== 'radio' && <label className="block mb-1 text-sm">{label}</label>}

      {type === 'radio' ? (
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className="mr-2"
          />
          {radioLabel}
        </label>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-sm focus:outline-none focus:ring-2 py-2 px-4 focus:ring-blue-200"
        />
      )}
    </div>
  )
}

export default Input