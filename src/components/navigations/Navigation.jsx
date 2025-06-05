import React from 'react'
import NavigationDesktop from './NavigationDesktop'
import NavigationTablet from './NavigationTablet'
import NavigationMovil from './NavigationMovil'

// Array containing navigation options with path, number, and label
const options = [
  {
    href: "/",        // Path to home page
    number: "00",     // Label number prefix
    label: "HOME"     // Display name
  },
  {
    href: "#",        // Placeholder path for Destination
    number: "01",
    label: "DESTINATION"
  },
  {
    href: "#",        // Placeholder path for Crew
    number: "02",
    label: "CREW"
  },
  {
    href: "#",        // Placeholder path for Technology
    number: "03",
    label: "TECHNOLOGY"
  },
]

/**
 * Responsive navigation component.
 * Renders a specific navigation layout depending on screen size:
 * - Mobile (default)
 * - Tablet (≥ md breakpoint)
 * - Desktop (≥ xl breakpoint)
 */
const Navigation = () => {
  return (
    <div className="w-screen">
      {/* Desktop navigation visible only on extra-large screens */}
      <div className="hidden xl:block">
        <NavigationDesktop optionsNavigate={options} />
      </div>

      {/* Tablet navigation visible only on medium to large screens (not xl) */}
      <div className="hidden md:block xl:hidden">
        <NavigationTablet optionsNavigate={options} />
      </div>

      {/* Mobile navigation visible on small screens only */}
      <div className="block md:hidden">
        <NavigationMovil optionsNavigate={options} />
      </div>
    </div>
  )
}

export default Navigation
