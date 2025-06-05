import React from 'react'
import Navigation from '../../components/navigations/Navigation'

const HomePage = () => {
    return (
<div className="bg-no-repeat bg-center bg-cover min-h-screen w-screen
                bg-[url('/home/background-home-mobile.jpg')] 
                sm:bg-[url('/home/background-home-tablet.jpg')]
                xl:bg-[url('/home/background-home-desktop.jpg')]">
            <Navigation/>
        </div>
    )
}

export default HomePage