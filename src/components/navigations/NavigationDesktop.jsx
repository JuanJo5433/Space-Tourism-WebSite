import React from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Desktop navigation component.
 * Displays a logo, a decorative horizontal line, and a navigation menu.
 */
const NavigationDesktop = ({ optionsNavigate }) => {
  // Hook to get the current route path
  const location = useLocation()

  return (
    <header className="flex items-center h-[136px] w-screen">
      {/* Main container with spacing between logo and navigation */}
      <div className='flex w-full justify-between items-start'>

        {/* Logo on the left side */}
        <div className='self-center ml-16'>
          <img src="/shared/logo.svg" alt="Icon" className='w-12 h-12' />
        </div>

        {/* Decorative horizontal line between logo and navigation */}
        <div className='relative w-5/12 h-[0.1px] bg-[#9797974f] z-10 self-center -mr-36'></div>

        {/* Navigation menu on the right */}
        <div className='w-full md:w-1/2'>
          {/* Navigation bar with backdrop blur and horizontal scroll if needed */}
          <div className='h-24 bg-white/5 backdrop-blur-3xl border overflow-x-auto'>
            <ul className='flex justify-center items-center gap-8 h-full w-full'>
              {/* Render each navigation option */}
              {optionsNavigate.map((option) => (
                <li
                  key={Number(option.number) + 1} // Ensure a unique key
                  className={`
                    flex h-full items-center cursor-pointer transition-colors duration-700 ease-in-out
                    border-b-2 
                    ${
                      location.pathname === option.href
                        ? 'border-white' // Active route: white underline
                        : 'border-transparent hover:border-white/50' // Inactive: transparent with hover effect
                    }
                  `}
                >
                  {/* Navigation link with number and label */}
                  <a className="flex text-preset-6 text-white" href={option.href}>
                    <p className="mr-2 font-bold">{option.number}</p>
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

export default NavigationDesktop
