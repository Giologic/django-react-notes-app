
import React from 'react'

const FormWrapper = ({ children }) => {
  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
      <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
        { children }
      </div>
    </div>
  )
}

export default FormWrapper