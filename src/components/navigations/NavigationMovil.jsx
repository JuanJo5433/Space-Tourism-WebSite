import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'


const NavigationMovil = ({optionsNavigate}) => {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  return (
<header className={`fixed top-0 left-0 w-screen h-screen ${isActive ? 'z-50' : 'z-0'} transition-all duration-700 ease-in-out`}>
      {/* Logo fijo en la esquina superior izquierda */}
      <div className="absolute top-6 left-6">
        <img src="/shared/logo.svg" alt="Logo" className="w-11 h-11 object-contain" />
      </div>

      {/* Botón hamburguesa */}
        <div className="absolute top-6 right-6 ">
          <button onClick={() => setIsActive(true)} className='cursor-pointer'>
            <img src="/shared/icon-hamburger.svg" alt="Open" className="w-6 h-6 object-contain" />
          </button>
        </div>

      {/* Overlay animado */}
      <div
        className={`absolute top-0 right-0 w-2/3 h-full bg-white/5 backdrop-blur-3xl py-6 transition-transform duration-1000 z-50
          ${isActive ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Botón cerrar */}
        <div className="flex justify-end px-6">
          <button onClick={() => setIsActive(false)} className='cursor-pointer'>
            <img src="/shared/icon-close.svg" alt="Close" className="w-6 h-6 object-contain" />
          </button>
        </div>

        {/* Opciones de navegación centradas */}
        <div className="flex flex-col items-start space-y-8 pl-6 mt-24">
          {optionsNavigate.map((option) => (
            <a
              key={option.number}
              href={option.href}
              className={`flex gap-2 text-white text-preset-6 w-full transition-colors duration-700 ease-in-out
                ${location.pathname === option.href
                  ? 'border-r-4 border-white pl-3'
                  : 'border-r-4 border-transparent hover:border-white/50 pl-3'}
              `}
            >
              <span className="font-bold">{option.number}</span>
              <span>{option.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default NavigationMovil
