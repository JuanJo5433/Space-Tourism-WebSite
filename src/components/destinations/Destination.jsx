import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeOnly = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

const Destination = ({
  urlImg,
  name,
  description,
  distance,
  travelTime,
  setSelectOption,
  options,
}) => {
  const isSelectedOption = (option) => option.toUpperCase() === name;

  const OptionItem = ({ option }) => (
    <motion.li
      layout
      onClick={() => setSelectOption(option)}
      className={`cursor-pointer h-10 border-b-4 transition-colors duration-300  z-10 ${
        isSelectedOption(option)
          ? 'border-white text-white'
          : 'border-transparent text-[var(--blue-light)] hover:border-[var(--white)]/50'
      }`}
    >
      {option.toUpperCase()}
    </motion.li>
  );

  return (
    <main className="flex items-center mt-20 md:mt-10 text-[var(--white)] md:mx-15">
      <div className="w-full lg:flex">
        {/* Sección izquierda */}
        <section className="lg:w-1/2 h-[300px] md:h-auto">
          <header className="flex justify-center md:justify-start text-[16px] md:text-[20px]">
            <p className="text-preset-5 text-[var(--white)]/25 font-bold">01</p>
            <h3 className="text-preset-5 ml-5">PICK YOUR DESTINATION</h3>
          </header>

          <div className="flex justify-center my-10 lg:mt-24 relative h-[480px]">
            <AnimatePresence mode="sync">
              <motion.img
                key={urlImg}
                src={urlImg}
                alt={name}
                {...fadeOnly}
                className="absolute w-[150px] h-[150px] md:w-[457px] md:h-[457px] lg:w-[480px] lg:h-[480px] object-contain"
              />
            </AnimatePresence>
          </div>
        </section>

        {/* Sección derecha */}
        <section className="flex flex-col text-center my-5 md:mx-5 lg:w-1/2 lg:text-start">
          <nav className="flex justify-center mb-5 md:mt-24 lg:justify-start md:mx-16">
            <ul className="flex gap-x-8 text-preset-8 text-[14px] md:text-[16px]">
              {options.map((option) => (
                <OptionItem key={option} option={option}  />
              ))}
            </ul>
          </nav>

          {/* NOMBRE */}
          <div className="relative min-h-[100px] w-full">
            <AnimatePresence mode="sync">
              <motion.h2
                key={name}
                {...fadeOnly}
                className="absolute inset-0 text-preset-2 text-[56px] md:text-[80px] md:my-3 md:mx-16"
              >
                {name}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* DESCRIPCIÓN */}
          <div className="relative min-h-[130px] w-full mt-15">
            <AnimatePresence mode="sync">
              <motion.p
                key={description}
                {...fadeOnly}
                className="absolute inset-0 mx-8 md:mx-16 text-preset-9 text-[var(--blue-light)] text-[15px]/[30px] md:text-[18px]/[30px] lg:w-[500px]"
              >
                {description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex justify-center w-full my-8">
            <div className="w-full mx-5 md:w-[100%] md:mx-20 lg:mx-15 bg-[#97979741] h-[2px]" />
          </div>

          <div className="flex flex-col items-center gap-y-5 md:flex-row md:justify-between md:mx-32 lg:justify-start lg:gap-x-5 lg:mx-15 ">
            {/* DISTANCIA */}
            <div className="relative min-w-[160px] min-h-[80px]">
              <AnimatePresence mode="sync">
                <motion.div key={distance} {...fadeOnly} className="absolute inset-0">
                  <span className="text-preset-7 text-[var(--blue-light)] text-[14px] block">
                    AVG. DISTANCE
                  </span>
                  <p className="text-preset-6 text-[28px] mt-2">{distance}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* TIEMPO DE VIAJE */}
            <div className="relative min-w-[160px] min-h-[80px]">
              <AnimatePresence mode="sync">
                <motion.div key={travelTime} {...fadeOnly} className="absolute inset-0">
                  <span className="text-preset-7 text-[var(--blue-light)] text-[14px] block">
                    EST. TRAVEL TIME
                  </span>
                  <p className="text-preset-6 text-[28px] mt-2">{travelTime}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Destination;
