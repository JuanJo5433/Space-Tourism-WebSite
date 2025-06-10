import React, { useState } from 'react'
import Navigation from '../../components/navigations/Navigation'
import Technology from '../../components/technology/Technology'
const technologyData = [
    {
        name: "Launch vehicle",
        images: {
            portrait: "/technology/image-launch-vehicle-portrait.jpg",
            landscape: "/technology/image-launch-vehicle-landscape.jpg"
        },
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        name: "Spaceport",
        images: {
            portrait: "/technology/image-spaceport-portrait.jpg",
            landscape: "/technology/image-spaceport-landscape.jpg"
        },
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        name: "Space capsule",
        images: {
            portrait: "/technology/image-space-capsule-portrait.jpg",
            landscape: "/technology/image-space-capsule-landscape.jpg"
        },
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]
const TechnologyPage = () => {
    const [selectOption, setSelectOption] = useState('Launch vehicle')

    const filtered = technologyData.find(
        technology => technology.name.toLowerCase() === selectOption.toLowerCase()
    )

    const options = technologyData.map(d => d.name.toLowerCase());
    return (
        <div
            className="flex flex-col min-h-[100dvh] w-screen bg-no-repeat bg-center bg-cover
      bg-[url('/technology/background-technology-mobile.jpg')]
      sm:bg-[url('/technology/background-technology-tablet.jpg')]
      xl:bg-[url('/technology/background-technology-desktop.jpg')]"
        >
            <Navigation />
            {filtered && (
                <Technology
                    images={filtered.images}
                    name={filtered.name}
                    description={filtered.description}
                    setSelectOption={setSelectOption}
                    options={options}
                />
            )}
        </div>
    )
}

export default TechnologyPage          