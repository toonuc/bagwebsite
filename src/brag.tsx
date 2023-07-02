export default function Brag() {
    return (
        <div className="items-center p-10 lg:p-32 md:p-24 sm:p-20 bg-Isabelline min-h-screen w-auto pt-10">
            <div className="flex flex-col">
                <div className="text-end font-pacifico text-BerkelyBlue text-p1 sm:text-s3 lg:text-s2">Why our bags?</div>
                <div className="flex flex-col space-y-8 md:space-y-28 mt-4">
                    <section className="flex md:flex-row flex-col">
                        <div className="md:w-1/2 aspect-square object-cover">
                            <img className="h-full object-cover object-left" src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                        </div>
                        <div className="md:w-1/2 p-0 md:pl-20 flex flex-col justify-center">
                            <h1 className="font-inter text-h5 sm:text-h3 lg:text-h2 py-3 sm:p-0 text-BerkelyBlue uppercase">Lightweight</h1>
                            <p className="font-inter text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5">Our products are designed to be lightweight and easy to carry, making them perfect for travel or everyday use.</p>
                        </div>
                    </section>

                    <section className="md:flex-row flex-col hidden md:flex">
                        <div className="md:w-1/2 p-0 flex flex-col justify-center">
                            <h1 className="font-inter text-h5 sm:text-h3 lg:text-h2 py-3 sm:p-0 text-BerkelyBlue uppercase">Secure</h1>
                            <p className="font-inter text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5">Protect your valuables with our secure luggage, featuring built-in locks and tamper-proof materials.</p>
                        </div>
                        <div className="md:w-1/2 aspect-square object-cover">
                            <img className="h-full object-cover object-left" src="https://images.unsplash.com/photo-1564209510114-d98212b0e861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
                        </div>
                    </section>
                    {/* SHRINKED DOWN */}
                    <section className="flex md:flex-row flex-col md:hidden">
                        <div className="md:w-1/2 aspect-square object-cover">
                            <img className="h-full object-cover object-left" src="https://images.unsplash.com/photo-1564209510114-d98212b0e861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
                        </div>
                        <div className="md:w-1/2 p-0 md:pr-20 flex flex-col justify-center">
                            <h1 className="font-inter text-h5 sm:text-h3 lg:text-h2 py-3 sm:p-0 text-BerkelyBlue uppercase">Secure</h1>
                            <p className="font-inter text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5">Protect your valuables with our secure luggage, featuring built-in locks and tamper-proof materials.</p>
                        </div>
                    </section>
{/*                     <section className="flex flex-row">
                        <div className="w-1/2 pr-20 flex flex-col justify-center text-right">
                            <h1 className="font-inter text-h2 text-BerkelyBlue uppercase">Secure</h1>
                            <p className="font-inter text-p2 text-BerkelyBlue mt-5">Protect your valuables with our secure luggage, featuring built-in locks and tamper-proof materials.</p>
                        </div>
                        <div className="w-1/2 aspect-square object-cover">
                            <img className="h-full object-cover object-left" src="https://images.unsplash.com/photo-1564209510114-d98212b0e861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
                        </div>
                    </section> */}

                    <section className="flex md:flex-row flex-col">
                        <div className="md:w-1/2 aspect-square object-cover">
                            <img className="h-full object-cover object-left" src="https://drive.google.com/uc?export=view&id=1ZJ4bzJg6AZjTr9J6Z3r-5yhj3sbwm9U5" alt="" />
                        </div>
                        <div className="md:w-1/2 p-0 md:pl-20 flex flex-col justify-center">
                            <h1 className="font-inter text-h5 sm:text-h3 lg:text-h2 py-3 sm:p-0 text-BerkelyBlue uppercase">Durable</h1>
                            <p className="font-inter text-p5 sm:text-p4 lg:text-p2 text-BerkelyBlue lg:mt-5">Built to last, our luggage is tough and long-lasting, with reinforced corners and sturdy zippers.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}