import React from 'react'
import lenguajes from '../json/Languajes.json'
import frameworks from '../json/Frameworks.json'
import herramientas from '../json/Herramientas.json'
import Footer from './Footer'

function Home () {
  const lenguaje_class =
    'w-[12.5em] h-full mx-6 rounded-lg dark:bg-[#282c34] p-4 flex flex-col items-center justify-center shadow-lg hover:scale-110 hover:animate-pulse transition duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-lg'
  return (
    <div>
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
                  {' '}Carlos Varas Alonso
                </strong>
                , un apasionado estudiante de programación en busca de nuevas
                oportunidades. Actualmente, me encuentro inmerso en mis estudios
                de una FP de Aplicaciones Multiplataforma, donde estoy
                adquiriendo conocimientos en lenguajes como Java y SQL.
              </p>
            </div>
          </div>
        </section>
        <section className='Informacion mb-[5em]'>
          <article className='Lenguajes flex flex-col items-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-center my-8'>
              Lenguajes
            </h2>
            <div className='lista_frameworks grid gap-10 grid-cols-3 justify-center h-full my-4'>
              {lenguajes.map((lenguaje, index) =>
                <div
                  key={index}
                  className={lenguaje_class + ' ' + lenguaje.color}
                >
                  <img
                    src={lenguaje.img}
                    alt={lenguaje.name}
                    className='logo w-32 h-32'
                  />
                  <p
                    className={
                      'nombre my-8 p-2 rounded-md font-bold text-center text-lg text-white' +
                      ' ' +
                      String(lenguaje.background)
                    }
                  >
                    {lenguaje.name}
                  </p>
                </div>
              )}
            </div>
          </article>
          <article className='Frameworks'>
            <h2 className='text-2xl md:text-3xl font-bold text-center my-16'>
              Frameworks
            </h2>
            <div className='lista_frameworks grid gap-10 justify-center h-full my-4'>
              {frameworks.map((framework, index) =>
                <div
                  key={index}
                  className={lenguaje_class + ' ' + framework.color}
                >
                  <img
                    src={framework.img}
                    alt={framework.name}
                    className='logo w-32 h-32'
                  />
                  <p
                    className={
                      'nombre my-8 p-2 rounded-md font-bold text-center text-lg text-white' +
                      ' ' +
                      String(framework.background)
                    }
                  >
                    {framework.name}
                  </p>
                </div>
              )}
            </div>
          </article>
          <article className='Herramientas'>
            <h2 className='text-2xl md:text-3xl font-bold text-center my-16'>
              Herramientas
            </h2>
            <div className='lista_herramientas grid grid-cols-3 gap-10 justify-center h-full my-4'>
              {herramientas.map((herramienta, index) =>
                <div
                  key={index}
                  className={lenguaje_class + ' ' + herramienta.color}
                >
                  <img
                    src={herramienta.img}
                    alt={herramienta.name}
                    className='logo w-32 h-32'
                  />
                  <p
                    className={
                      'nombre my-8 p-2 rounded-md font-bold text-lg text-center text-white' +
                      ' ' +
                      String(herramienta.background)
                    }
                  >
                    {herramienta.name}
                  </p>
                </div>
              )}
            </div>
          </article>
          <article className='Proyectos'>
            <h2 className='text-2xl md:text-3xl font-bold text-center my-16 invisible'>
              Proyectos
            </h2>
            <div className='lista_proyectos grid grid-cols-3 gap-10 justify-center h-full my-4'>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
