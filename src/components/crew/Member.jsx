import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Animation configuration for fading in and out
const fadeOnly = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
}

// Member component receives props related to a crew member and renders their profile
const Member = ({ urlImg, rol, name, description, setSelectOption, options }) => {
    return (
        <main className="flex items-center mt-20 md:mt-10 text-[var(--white)] px-5 md:px-16 xl:px-52">
            <div className="w-full xl:flex xl:items-center xl:justify-between gap-10 lg:gap-0.5">
                {/* Left section */}
                <section className="xl:w-1/2">
                    {/* Header */}
                    <header className="flex justify-center md:justify-start text-[16px] md:text-[20px] xl:text-[28px]">
                        <p className="text-preset-5 text-[var(--white)]/25 font-bold">02</p>
                        <h3 className="text-preset-6 ml-5">MEET YOUR CREW</h3>
                    </header>

                    {/* Role */}
                    <div className="relative mt-10 h-[24px] md:h-[40px] xl:mt-40">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={rol}
                                {...fadeOnly}
                                className="text-center xl:text-start text-preset-4 text-[var(--white)]/50 text-[18px] md:text-[24px] xl:text-[32px]"
                            >
                                {rol}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    {/* Name */}
                    <div className="relative h-[30px] md:mt-4 md:h-[50px] xl:w-full">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={name}
                                {...fadeOnly}
                                className="text-center xl:text-start text-preset-3 text-[24px] md:text-[40px] xl:text-[56px]"
                            >
                                {name}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    {/* Description */}
                    <div className="relative mt-10 flex justify-center xl:justify-start xl:mt-16">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={description}
                                {...fadeOnly}
                                className="w-[90%] md:w-[80%] xl:w-[60%] text-center xl:text-start text-preset-9 text-[var(--blue-light)] text-[15px]/[30px] md:text-[16px]/[30px] xl:text-[18px]/[30px]"
                            >
                                {description}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Navigation for selecting crew members */}
                    <nav className="flex justify-center xl:justify-start mt-16 md:mt-12 xl:mt-32">
                        <ul className="flex gap-x-4 xl:gap-x-8">
                            {options.map((option) => (
                                <li key={option}>
                                    <button
                                        onClick={() => setSelectOption(option)}
                                        className={`rounded-full transition-colors duration-300 cursor-pointer
                      w-[10px] h-[10px] xl:w-[15px] xl:h-[15px]
                      ${name.toLowerCase() === option.toLowerCase()
                                                ? 'bg-[var(--white)]'
                                                : 'bg-[#979797]'}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>

                {/* Right section (image) */}
                <section className="flex justify-center xl:justify-end my-5 md:my-0 xl:w-1/2 ">
                    <div className="relative w-[300px] h-[300px] md:w-[447px] md:h-[447px] xl:w-[540px] xl:h-[540px] mt-10 ">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={urlImg}
                                src={urlImg}
                                alt={name}
                                {...fadeOnly}
                                className="absolute w-full h-full object-contain "
                            />
                        </AnimatePresence>

                        {/* Bottom gradient */}
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0B0D17] to-transparent pointer-events-none md:hidden xl:block" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Member
