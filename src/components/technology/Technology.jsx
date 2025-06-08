import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const fadeOnly = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

const Technology = ({ images, name, description, setSelectOption, options }) => {
  return (
    <>
      {/* Header solo visible en XL */}
      <header className="xl:flex text-[var(--white)] xl:text-[28px] hidden xl:ml-24">
        <p className="text-preset-5 text-[var(--white)]/25 font-bold">03</p>
        <h3 className="text-preset-5 ml-5">SPACE LAUNCH 101</h3>
      </header>

      <main className="flex flex-col xl:flex-row items-center mt-10 md:mt-0 text-[var(--white)] xl:ml-32">
        {/* Header móvil/tablet */}
        <header className="xl:hidden flex justify-center md:justify-start text-preset-6 md:text-preset-6 mb-8 md:mb-10">
          <p className="text-preset-6 text-[var(--white)]/25 font-bold">03</p>
          <h3 className="text-preset-6 ml-4">SPACE LAUNCH 101</h3>
        </header>

        {/* Contenedor principal */}
        <div className="w-full xl:flex xl:flex-row-reverse relative">
          {/* Sección de imagen */}
          <div className="xl:w-1/3 flex justify-center relative z-0">
            <div className="relative w-full h-[170px] md:h-[310px] xl:h-[480px] z-0">
              <AnimatePresence mode="wait">
                {images?.portrait && (
                  <motion.img
                    key={`portrait-${images.portrait}`}
                    src={images.portrait}
                    alt={name}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    variants={fadeOnly}
                    className="hidden xl:block w-full h-full object-contain z-0"
                  />
                )}

                {images?.landscape && (
                  <motion.img
                    key={`landscape-${images.landscape}`}
                    src={images.landscape}
                    alt={name}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    variants={fadeOnly}
                    className="block xl:hidden w-full h-full object-contain z-0"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Contenido textual */}
          <section className="xl:w-2/3 flex flex-col xl:flex-row items-center mt-8 md:mt-12 xl:mt-0">
            {/* Navegación */}
            <nav className="flex justify-center mb-5 md:mt-24 xl:justify-start md:mx-16 xl:mt-0 z-10 relative">
              <ul className="flex gap-x-4 text-preset-8 md:text-preset-4 xl:flex-col xl:items-center xl:gap-y-10">
                {options.map((option, index) => {
                  const isActive = option.toLowerCase() === name.toLowerCase();
                  return (
                    <li key={option}>
                      <button
                        onClick={() => setSelectOption(option)}
                        className={`w-10 h-10 md:w-14 md:h-14 rounded-full border border-[var(--white)]/25 text-[18px] font-medium transition-colors duration-500 ease-linear cursor-pointer
                          ${isActive ? 'bg-[var(--white)] text-[var(--blue-dark)]' : 'text-preset-4 hover:border-[var(--white)]'}`}
                        aria-label={`Select ${option}`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Información técnica */}
            <div className="text-center xl:text-left px-6 md:px-16 xl:px-0 xl:ml-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={name}
                  {...fadeOnly}
                  className="min-h-[300px] md:min-h-[250px]"
                >
                  <h2 className="text-preset-4 text-[18px] md:text-[24px] md:my-3 text-[var(--white)]/50 uppercase tracking-wide">
                    The Terminology…
                  </h2>

                  <h2 className="text-preset-3 text-[24px] md:text-[40px] md:my-3 uppercase">
                    {name}
                  </h2>

                  <p className="text-preset-9 text-[var(--blue-light)] text-[15px] leading-[30px] md:text-[16px] xl:w-[500px] mt-4">
                    {description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Technology;
