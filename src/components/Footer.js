import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer className='footer bg-[#25282f] text-white mt-8 p-4'>
      <div className='container mx-auto flex justify-center items-center'>
        <p className='text-sm mx-2'>
          &copy; {new Date().getFullYear()}{' '}
          <strong className='text-green-400'>Carlos Varas Alonso</strong>. Todos
          los derechos reservados. |
          <Link
            to='/contacto'
            className='mx-2 font-semibold text-blue-400 hover:text-green-400'
          >
            Contacto
          </Link>{' '}
          |
          <Link
            to='/otras-paginas'
            className='mx-2 font-semibold text-blue-400 hover:text-green-400'
          >
            Otras Páginas
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
