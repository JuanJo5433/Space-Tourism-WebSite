import React, { useState } from 'react'
// Import the Navigation component
import Navigation from '../../components/navigations/Navigation'
// Import the Member component to display each crew member
import Member from '../../components/crew/Member'

// Array of crew members with their image, role, name, and description
const members = [
    {
        urlImg: "/crew/image-douglas-hurley.webp",
        rol: "COMMANDER",
        name: "DOUGLAS HURLEY",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
        urlImg: "/crew/image-mark-shuttleworth.webp",
        rol: "MISSION SPECIALIST",
        name: "MARK SHUTTLEWORTH",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
        urlImg: "/crew/image-victor-glover.webp",
        rol: "PILOT",
        name: "VICTOR GLOVER",
        description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
        urlImg: "/crew/image-anousheh-ansari.webp",
        rol: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
]

const CrewPage = () => {
    // State to manage the currently selected crew member
    const [selectOption, setSelectOption] = useState('DOUGLAS HURLEY')

    // Find the crew member that matches the selected name
    const filtered = members.find(
        members => members.name.toLowerCase() === selectOption.toLowerCase()
    )

    // Create an array of all member names in lowercase for navigation options
    const options = members.map(d => d.name.toLowerCase());

    return (
        <div
            className="flex flex-col min-h-[100dvh] w-screen bg-no-repeat bg-center bg-cover
      bg-[url('/crew/background-crew-mobile.jpg')]
      sm:bg-[url('/crew/background-crew-tablet.jpg')]
      xl:bg-[url('/crew/background-crew-desktop.jpg')]"
        >
            {/* Render the top navigation bar */}
            <Navigation />

            {/* If a crew member is selected, render their details */}
            {filtered && (
                <Member
                    urlImg={filtered.urlImg}
                    rol={filtered.rol}
                    name={filtered.name}
                    description={filtered.description}
                    setSelectOption={setSelectOption}
                    options={options}
                />
            )}
        </div>
    )
}

export default CrewPage
