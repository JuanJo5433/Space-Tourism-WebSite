import React, { useState, useEffect } from 'react'
import Navigation from '../../components/navigations/Navigation'
import Destination from '../../components/destinations/Destination'

const destinations = [
  {
    urlImg: "/destination/image-moon.webp",
    name: "MOON",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS"
  },
  {
    urlImg: "/destination/image-mars.webp",
    name: "MARS",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS "
  },
  {
    urlImg: "/destination/image-europa.webp",
    name: "EUROPA",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS"
  },
  {
    urlImg: "/destination/image-titan.webp",
    name: "TITAN",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS"
  },
]



const DestinationPage = () => {
  const [selectOption, setSelectOption] = useState('MOON')

  const filtered = destinations.find(
    destination => destination.name.toLowerCase() === selectOption.toLowerCase()
  )
const options = destinations.map(d => d.name.toLowerCase());

  return (
    <div
      className="flex flex-col min-h-[100dvh] w-screen bg-no-repeat bg-center bg-cover
      bg-[url('/destination/background-destination-mobile.jpg')]
      sm:bg-[url('/destination/background-destination-tablet.jpg')]
      xl:bg-[url('/destination/background-destination-desktop.jpg')]"
    >
      <Navigation />

     
        {filtered && (
          <Destination
            urlImg={filtered.urlImg}
            name={filtered.name}
            description={filtered.description}
            distance={filtered.distance}
            travelTime={filtered.travelTime}
            setSelectOption={setSelectOption}
            options={options}
          />
        )}
     
    </div>
  )
}

export default DestinationPage