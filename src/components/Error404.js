import React from 'react'

const Error404 = () => {

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white dark:bg-[#22252c] text-black dark:text-white'>
      <img
        src='https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png'
        alt=''
        className='w-64 h-64'
      />
      <h1 className='text-3xl md:text-5xl mb-6'>Página no encontrada</h1>
      <p className='text-lg md:text-xl mb-6'>
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        className='px-4 py-2 text-base md:text-lg bg-red-500 text-white rounded-md'
        onClick={goBack}
      >
        Volver
      </button>
    </div>
  )
}

export default Error404
