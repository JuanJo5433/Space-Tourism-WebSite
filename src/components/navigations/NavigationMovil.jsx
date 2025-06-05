import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Mobile navigation component with a hamburger menu.
 * Displays a side drawer with navigation options.
 */
const NavigationMovil = ({ optionsNavigate }) => {
  // Get the current URL path
  const location = useLocation()
  
  // State to control the visibility of the side navigation menu
  const [isActive, setIsActive] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-screen h-screen z-50">
      {/* Fixed logo in the top-left corner */}
      <div className="absolute top-6 left-6 z-50">
        <img src="/shared/logo.svg" alt="Logo" className="w-11 h-11 object-contain" />
      </div>

      {/* Hamburger button to open the menu */}
      <div className="absolute top-6 right-6">
        <button onClick={() => setIsActive(true)} className="cursor-pointer">
          <img src="/shared/icon-hamburger.svg" alt="Open" className="w-6 h-6 object-contain" />
        </button>
      </div>

      {/* Sliding overlay menu with blur background */}
      <div
        className={`absolute top-0 right-0 w-2/3 h-full bg-white/5 backdrop-blur-3xl py-6 transition-transform duration-1000 z-50
          ${isActive ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close button inside the menu */}
        <div className="flex justify-end px-6">
          <button onClick={() => setIsActive(false)} className="cursor-pointer">
            <img src="/shared/icon-close.svg" alt="Close" className="w-6 h-6 object-contain" />
          </button>
        </div>

        {/* List of navigation links */}
        <div className="flex flex-col items-start space-y-8 pl-6 mt-24">
          {optionsNavigate.map((option) => (
            <a
              key={option.number}
              href={option.href}
              className={`flex gap-2 text-white text-preset-6 w-full transition-colors duration-700 ease-in-out
                ${location.pathname === option.href
                  ? 'border-r-4 border-white pl-3' // Active link style
                  : 'border-r-4 border-transparent hover:border-white/50 pl-3'} // Inactive link hover effect
              `}
            >
              {/* Navigation option number and label */}
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
