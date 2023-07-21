import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
// @ts-ignore
import two_bags from '@/assets/two_bags.png?format=webp';

export default function Brag() {
    const lightweight = useRef(null);
    const secure = useRef(null);
    const durable = useRef(null);
    function useIntersectViewport(ref: RefObject<any>) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
            () =>
                new IntersectionObserver(
                    ([entry]) => {
                        if (!entry.isIntersecting) return;
                        setTimeout(() => {
                            setIsIntersecting(entry.isIntersecting);
                        }, 200);
                    },
                    { root: null, rootMargin: '0px', threshold: 0.5 }
                ),
            []
        );

        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }

    return (
        <div className="items-center p-10 lg:p-32 md:p-24 sm:p-20 bg-Isabelline min-h-screen w-auto pt-10">
            <div className="flex flex-col">
                <div className="text-end font-pacifico text-BerkelyBlue text-p1 sm:text-s3 lg:text-s2">
                    Why our bags?
                </div>
                <div className="flex flex-col md:flex-row gap-8 mt-12">
                    <div
                        ref={lightweight}
                        className="group relative md:w-1/3 overflow-hidden"
                    >
                        <div className="aspect-square object-cover">
                            <img
                                className={`h-full object-cover object-left blur-[2px] group-hover:blur-none ${
                                    !useIntersectViewport(lightweight) &&
                                    'blur-none'
                                } transition-all`}
                                src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            className={`${
                                !useIntersectViewport(lightweight) &&
                                'opacity-0 blur-xl'
                            } absolute inset-0 bg-white/60 group-hover:-translate-y-full group-hover:opacity-0 duration-500 p-6 lg:p-12 transition-all`}
                        >
                            <h1 className="font-inter font-medium text-h5 sm:text-h3 lg:text-h2 pb-3 sm:p-0 text-BerkelyBlue uppercase">
                                Lightweight
                            </h1>
                            <p className="font-inter font-medium text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5 break-words">
                                Our products are designed to be lightweight and
                                easy to carry, making them perfect for travel or
                                everyday use.
                            </p>
                        </div>
                    </div>
                    <div
                        ref={secure}
                        className="group relative md:w-1/3 overflow-hidden"
                    >
                        <div className="aspect-square object-cover">
                            <img
                                className={`h-full object-cover object-left blur-[2px] group-hover:blur-none ${
                                    !useIntersectViewport(secure) && 'blur-none'
                                } transition-all`}
                                src="https://images.unsplash.com/photo-1564209510114-d98212b0e861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            className={`${
                                !useIntersectViewport(secure) &&
                                'opacity-0 blur-xl'
                            } absolute inset-0 bg-white/60 group-hover:-translate-y-full group-hover:opacity-0 duration-500 p-6 lg:p-12 transition-all`}
                        >
                            <h1 className="font-inter font-medium text-h5 sm:text-h3 lg:text-h2 pb-3 sm:p-0 text-BerkelyBlue uppercase">
                                Secure
                            </h1>
                            <p className="font-inter font-medium text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5 break-words">
                                Protect your valuables with our secure luggage,
                                featuring built-in locks and tamper-proof
                                materials.
                            </p>
                        </div>
                    </div>
                    <div
                        ref={durable}
                        className="group relative md:w-1/3 overflow-hidden"
                    >
                        <div className="aspect-square object-cover">
                            <img
                                className={`h-full object-cover object-left blur-[2px] group-hover:blur-none ${
                                    !useIntersectViewport(lightweight) &&
                                    'blur-none'
                                } transition-all`}
                                src={two_bags}
                                alt=""
                            />
                        </div>
                        <div
                            className={`${
                                !useIntersectViewport(durable) &&
                                'opacity-0 blur-xl'
                            } absolute inset-0 bg-white/60 group-hover:-translate-y-full group-hover:opacity-0 duration-500 p-6 lg:p-12 transition-all`}
                        >
                            <h1 className="font-inter font-medium text-h5 sm:text-h3 lg:text-h2 pb-3 sm:p-0 text-BerkelyBlue uppercase">
                                Durable
                            </h1>
                            <p className="font-inter font-medium text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5 break-words">
                                Built to last, our luggage is tough and
                                long-lasting, with reinforced corners and sturdy
                                zippers.
                            </p>
                        </div>
                    </div>

                    {/* SHRINKED DOWN */}
                    {/* <section className="flex md:flex-row flex-col md:hidden">
                        <div className="md:w-1/2 aspect-square object-cover">
                            <img
                                className="h-full object-cover object-left"
                                src="https://images.unsplash.com/photo-1564209510114-d98212b0e861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 p-0 md:pr-20 flex flex-col justify-center">
                            <h1 className="font-inter text-h5 sm:text-h3 lg:text-h2 py-3 sm:p-0 text-BerkelyBlue uppercase">
                                Secure
                            </h1>
                            <p className="font-inter text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5">
                                Protect your valuables with our secure luggage,
                                featuring built-in locks and tamper-proof
                                materials.
                            </p>
                        </div>
                    </section> */}
                    {/*                     <section className="flex flex-row">
                        <div className="w-1/2 pr-20 flex flex-col justify-center text-right">
                            <h1 className="font-inter text-h2 text-BerkelyBlue uppercase">Secure</h1>
                            <p className="font-inter text-p2 text-BerkelyBlue mt-5">Protect your valuables with our secure luggage, featuring built-in locks and tamper-proof materials.</p>
                        </div>
                        <div className="w-1/2 aspect-square object-cover">
                            <img className="h-full object-cover object-left" src="https://images.unsplash.com/photo-1564209510114-d98212b0e861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
                        </div>
                    </section> */}

                    {/* <section className="flex md:flex-row flex-col">
                        <div className="md:w-1/2 aspect-square object-cover">
                            <img
                                className="h-full object-cover object-left"
                                src="https://drive.google.com/uc?export=view&id=1ZJ4bzJg6AZjTr9J6Z3r-5yhj3sbwm9U5"
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 p-0 md:pl-20 flex flex-col justify-center">
                            <h1 className="font-inter text-h5 sm:text-h3 lg:text-h2 py-3 sm:p-0 text-BerkelyBlue uppercase">
                                Durable
                            </h1>
                            <p className="font-inter text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5">
                                Built to last, our luggage is tough and
                                long-lasting, with reinforced corners and sturdy
                                zippers.
                            </p>
                        </div>
                    </section> */}
                </div>
            </div>
        </div>
    );
}
