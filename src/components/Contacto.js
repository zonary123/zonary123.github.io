import React from 'react'
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGithub
} from 'react-icons/fi'
import { BsDiscord } from 'react-icons/bs'
function Contacto () {
  return (
    <div className='flex items-center justify-center h-screen dark:bg-[#282c34]'>
      <div className='dark:bg-[#2f333b] p-12 rounded-lg shadow-lg shadow-red-500 justify-center '>
        <div className='container mx-auto text-white'>
          <h1 className='text-4xl font-bold mt-4 mb-8 justify-center text-center p-2 rounded-xl'>
            Contacto
          </h1>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center justify-center'>
              <FiMail className='mr-2 text-red-500' />
              <a
                href='mailto:carlosvarasalonso10@gmail.com'
                className='text-blue-500 hover:underline'
              >
                carlosvarasalonso10@gmail.com
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <FiPhone className='mr-2 text-red-500 ' />
              <a
                href='tel:+34 616 04 46 83'
                className='text-blue-500 hover:underline '
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
                    <FiFacebook className='text-[#5474b9] hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out w-6 h-6' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/zonary1232'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <FiTwitter className='text-[#1DA1F2] hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out w-6 h-6' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/zonary123/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline '
                  >
                    <FiInstagram className='text-[#9a61c0] hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out w-6 h-6' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://discord.com/invite/FxM6YZWnTB'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <BsDiscord className='text-[#5b65f1] hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out w-6 h-6' />
                  </a>
                </li>
                {/* <li>
                  <a
                    href='https://github.com/zonary123'
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
