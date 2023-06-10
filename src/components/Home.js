import React from 'react'
import lenguajes from '../json/Languajes.json'
function Home () {
  const lenguaje_class =
    'h-full mx-6 rounded-lg dark:bg-[#282c34] p-4 flex flex-col items-center justify-center shadow-lg hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-lg'
  return (
    <main className='flex flex-col items-center'>
      <section className='flex flex-col items-center'>
        <div className='Presentacion flex items-center m-4 p-4  rounded-lg dark:bg-[#282c34] shadow-md shadow-green-800 w-[40em] md:w-[50em] '>
          <div className='img_name flex flex-col w-[20em] text-center items-center ml-4'>
            <img
              src='./img/perfil.jpeg'
              alt=''
              width={'100px'}
              height={'100px'}
              className='rounded-full'
            />
          </div>
          <div className='Descripcion p-10 text-center'>
            <p>
              ¡Hola! Soy
              <strong className='text-green-400/100'>
                Carlos Varas Alonso
              </strong>
              , un apasionado estudiante de programación en busca de nuevas
              oportunidades. Actualmente, me encuentro inmerso en mis estudios
              de una FP de Aplicaciones Multiplataforma, donde estoy adquiriendo
              conocimientos en lenguajes como Java y SQL.
            </p>
          </div>
        </div>
      </section>
      <section className='Informacion'>
        <div className='Lenguajes '>
          <h2 className='text-2xl md:text-3xl font-bold text-center my-8'>
            Lenguajes
          </h2>
          <div className='lista_lenguajes grid gap-10 grid-cols-2 h-[15em]'>
            {lenguajes.map(lenguaje =>
              <div className={lenguaje_class + lenguaje.color}>
                <img
                  src={lenguaje.img}
                  alt={lenguaje.name}
                  className='logo w-32 h-32'
                />
                <p className='nombre my-8 p-2 rounded-md font-bold text-lg text-white'>
                  {lenguaje.name}
                </p>
              </div>
            )}
            <div className='Java h-full mx-6 rounded-lg dark:bg-[#282c34] p-4 flex flex-col items-center justify-center shadow-lg shadow-orange-400/50 hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-lg'>
              <img
                src='https://assets.stickpng.com/images/58480979cef1014c0b5e4901.png'
                alt='Java logo'
                className='logo w-32 h-32'
              />
              <p className='nombre my-8 bg-orange-400 p-2 rounded-md font-bold text-lg text-white'>
                Java
              </p>
            </div>
            <div className='SQL h-full mx-6 rounded-lg dark:bg-[#282c34] p-4 flex flex-col items-center justify-center shadow-lg shadow-blue-500 hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-lg'>
              <img
                src='https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-part-azure-sql-database-with-azure-active-directory-17.png'
                alt='SQL logo'
                className='logo w-32 h-32'
              />
              <p className='nombre my-8 bg-blue-400 p-2 rounded-md font-bold text-lg text-white'>
                SQL
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
