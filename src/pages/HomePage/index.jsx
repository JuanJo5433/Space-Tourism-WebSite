import React from 'react';
import Navigation from '../../components/navigations/Navigation';

const HomePage = () => {
    return (
        <div
  className="flex flex-col min-h-[100dvh] w-screen bg-no-repeat bg-center bg-cover
  bg-[url('/home/background-home-mobile.jpg')]
  sm:bg-[url('/home/background-home-tablet.jpg')]
  xl:bg-[url('/home/background-home-desktop.jpg')]"


        >
            <Navigation />

            <main className="flex-grow flex items-center mt-20 md:mt-0">
                <div className="flex flex-col-reverse xl:flex-row items-center md:justify-between w-full px-6 xl:px-40 pt-0 md:pt-16 pb-52 gap-16">
                    <HeroText />
                    <ExploreButton />
                </div>
            </main>
        </div>
    );
};

const HeroText = () => (
    <div className="w-full xl:w-1/2 text-center xl:text-left order-2 xl:order-1">
        <h2 className="text-[var(--blue-light)] text-[20px] md:text-[28px] text-preset-5">
            SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-[var(--white)] text-[80px] md:text-[144px] my-6 leading-none text-preset-1">
            SPACE
        </h1>
        <p className="text-[var(--blue-light)] text-[16px] md:text-[18px] leading-relaxed 
      xl:max-w-[450px] md:max-w-[600px] max-w-[350px] mx-auto xl:mx-0 text-preset-9"
        >
            Let’s face it; if you want to go to space, you might as well genuinely go to outer
            space and not hover kind of on the edge of it. Well sit back, and relax because
            we’ll give you a truly out of this world experience!
        </p>
    </div>
);

const ExploreButton = () => (
    <a href='/destination'
        className="order-1 xl:order-2 group relative flex justify-center items-center
        w-[144px] h-[144px] md:w-[272px] md:h-[272px] cursor-pointer"
    >
        <div
            className="pointer-events-none absolute w-[272px] h-[272px] md:w-[500px] md:h-[500px]
            rounded-full transition-all duration-700 ease-in-out opacity-0
            group-hover:opacity-100 bg-[var(--white)]/10"
        ></div>

        <div className="flex w-full h-full bg-[var(--white)] rounded-full justify-center items-center transition-transform duration-500">
            <p className="text-preset-4 text-[var(--blue-dark)] text-[18px] md:text-[32px]">
                EXPLORE
            </p>
        </div>
    </a>
);

export default HomePage;
