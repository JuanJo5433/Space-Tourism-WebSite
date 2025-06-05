import React from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Tablet navigation component.
 * Renders a horizontal navigation bar with highlight for the active route.
 */
const NavigationTablet = ({ optionsNavigate }) => {
  // Hook to get the current URL path
  const location = useLocation()

  return (
    <header className="flex w-screen">
      {/* Container that holds logo and navigation */}
      <div className='flex w-full justify-between'>
        
        {/* Logo positioned on the left */}
        <div className='self-center ml-16'>
          <img src="/shared/logo.svg" alt="Icon" className='w-12 h-12 object-contain' />
        </div>

        {/* Navigation bar container */}
        <div className='w-full ml-10'>
          <div className='h-24 bg-white/5 backdrop-blur-3xl border overflow-x-auto'>
            <ul className='flex justify-center items-center gap-8 h-full w-full'>
              {/* Loop through each navigation option */}
              {optionsNavigate.map((option) => (
                <li
                  key={Number(option.number) + 1} // Using unique key per item
                  className={`
                    flex h-full items-center cursor-pointer transition-colors duration-700 ease-in-out
                    border-b-2 
                    ${
                      location.pathname === option.href
                        ? 'border-white' // Active link: white bottom border
                        : 'border-transparent hover:border-white/50' // Inactive: transparent with hover effect
                    }
                  `}
                >
                  {/* Navigation link content */}
                  <a className='flex text-preset-6 text-white'>
                    <p className='mr-2 font-bold'>{option.number}</p>
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavigationTablet
