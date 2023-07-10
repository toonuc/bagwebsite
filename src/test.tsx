/* SIZE IS NOT GREAT FOR MOBILE */
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Test() {
    const slides = [
        {
            url: 'https://drive.google.com/uc?export=view&id=1YUvslaAIhSeRAysurLRA2pIyvoLLLCvx',
        },
        {
            url: 'https://drive.google.com/uc?export=view&id=1vf6uH7xxbG3_yDItgPtkaC2K_px9w4Ru',
        },
        {
            url: 'https://drive.google.com/uc?export=view&id=1awL82udW37E0_OUw15XJkjaLF7BolZ-C',
        },
        {
            url: 'https://drive.google.com/uc?export=view&id=1ZJ4bzJg6AZjTr9J6Z3r-5yhj3sbwm9U5',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const firstPic = currentIndex;
    const secondPic = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    const thirdPic = secondPic === slides.length - 1 ? 0 : secondPic + 1;
    return (
        <div className="bg-cover bg-[url('https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')]">
            <div className="flex flex-col md:flex-row justify-between text-left bg-black/70 md:p-28 p-10 md:space-x-8">
                <section className="flex flex-col md:w-1/3 lg:w-1/2 w-full space-y-10">
                    <div className="flex flex-col">
                        <h2 className="font-pacifico text-white text-s3 lg:text-s2 underline underline-offset-8">
                            Our Collections
                        </h2>
                        <p className="font-pacifico text-white text-s4 lg:text-s3">
                            Choose the right bags for your style.
                        </p>
                        <div className="w-auto flex justify-end mt-2">
                            <img
                                className="w-52 hidden md:block"
                                src="https://drive.google.com/uc?export=view&id=1-Z4uv2oLt80Jcu0ROsJhDF0HorxhyZ3H"
                                alt=""
                            />
                        </div>
                    </div>
                    <section className="flex-row space-x-10 relative group hidden md:flex">
                        <div>
                            <img
                                src={slides[firstPic].url}
                                alt=""
                                className="w-60"
                            />
                        </div>
                        <div>
                            <img
                                src={slides[secondPic].url}
                                alt=""
                                className="w-60"
                            />
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src={slides[thirdPic].url}
                                alt=""
                                className="w-60"
                            />
                        </div>
                        {/* ARROWS */}
                        <div className="absolute group-hover:block hidden text-white bg-black/40 rounded-full -translate-x-full top-1/2 cursor-pointer">
                            <BsChevronCompactLeft
                                size={30}
                                onClick={prevSlide}
                            />
                        </div>
                        <div className="absolute group-hover:block hidden text-white bg-black/40 rounded-full right-0 translate-y-auto top-1/2 cursor-pointer">
                            <BsChevronCompactRight
                                size={30}
                                onClick={nextSlide}
                            />
                        </div>
                    </section>
                </section>
                <div className="md:w-1/2 w-auto aspect-square">
                    <img
                        src="https://drive.google.com/uc?export=view&id=1ZJ4bzJg6AZjTr9J6Z3r-5yhj3sbwm9U5"
                        alt=""
                    />
                </div>
                {/* COLLAPSED SLIDER */}
                <section className="flex flex-row space-x-5 md:space-x-10 mt-5 group md:hidden">
                    <div>
                        <img
                            src={slides[firstPic].url}
                            alt=""
                            className="w-60"
                        />
                    </div>
                    <div>
                        <img
                            src={slides[secondPic].url}
                            alt=""
                            className="w-60"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <img
                            src={slides[thirdPic].url}
                            alt=""
                            className="w-60"
                        />
                    </div>
                    {/* ARROWS */}
                    <div className="absolute group-hover:block hidden text-white bg-black/40 rounded-full -translate-x-full top-1/2 cursor-pointer">
                        <BsChevronCompactLeft size={30} onClick={prevSlide} />
                    </div>
                    <div className="absolute group-hover:block hidden text-white bg-black/40 rounded-full right-0 translate-y-auto top-1/2 cursor-pointer">
                        <BsChevronCompactRight size={30} onClick={nextSlide} />
                    </div>
                </section>
            </div>
        </div>
    );
}
