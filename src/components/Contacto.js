import React from 'react'
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGithub
} from 'react-icons/fi'

function Contacto () {
  return (
    <div className='flex items-center justify-center h-screen dark:bg-[#282c34]'>
      <div className='dark:bg-[#2f333b] p-12 rounded-lg shadow-lg shadow-red-500 '>
        <div className='container mx-auto text-white'>
          <h1 className='text-3xl font-bold mt-4 mb-8 justify-center text-center'>
            Contacto
          </h1>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center'>
              <FiMail className='mr-2 text-red-500' />
              <a
                href='mailto:carlosvarasalonso10@gmail.com'
                className='text-blue-500 hover:underline'
              >
                carlosvarasalonso10@gmail.com
              </a>
            </div>
            <div className='flex items-center'>
              <FiPhone className='mr-2 text-red-500' />
              <a
                href='tel:+34 616 04 46 83'
                className='text-blue-500 hover:underline'
              >
                +34 616 04 46 83
              </a>
            </div>
            <div className='grid gap-2'>
              <h2 className='text-2xl font-bold mt-4 justify-center text-center'>
                Redes sociales
              </h2>
              <ul className='flex justify-center items-center space-x-4'>
                <li>
                  <a
                    href='https://www.facebook.com/tuusuario'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <FiFacebook className='text-blue-500' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.twitter.com/tuusuario'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <FiTwitter className='text-blue-500' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/tuusuario'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <FiInstagram className='text-purple-500' />
                  </a>
                </li>
                {/* <li>
                  <a
                    href='https://www.github.com/tuusuario'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <FiGithub className='text-gray-500' />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='mt-8 text-white font-bold text-center p-2 bg-blue-500 text-white rounded-md hover:animate-pulse transition duration-500 ease-in-out'>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
