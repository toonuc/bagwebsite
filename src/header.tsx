import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'LUGGAGE', href: '#' },
    { name: 'BACKPACK', href: '#' },
    { name: 'SHOULDER BAGS', href: '#' },
    { name: 'ACCESSORIES', href: '#' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80')]">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5 ">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://drive.google.com/uc?export=view&id=1ZDYIXwnwE5S3IwTKr_3-zWTZSqol-ATe" alt="" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-inter leading-6 text-white/70 hover:text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-inter leading-6 text-white/70 hover:text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>

                {/* menu */}
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-Isabelline/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5 ">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://drive.google.com/uc?export=view&id=1ZDYIXwnwE5S3IwTKr_3-zWTZSqol-ATe" alt="" />
                        </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-Isabelline mr-0.5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-p4 font-inter font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-p3 font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>


            <div className="relative isolate px-6 pt-14 lg:px-8 bg-black/80 min-h-screen flex items-center">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-h5 font-bold tracking-tight text-Vanilla sm:text-h2">
                            Give yourself the best experience
                        </h1>
                        <p className="mt-10 text-p5 leading-8 text-Isabelline sm:text-p3">
                        Discover your perfect fit. Shop our stylish collection for the latest trends and timeless classics.
                        </p>
                        <div className="mt-28 flex items-center justify-center gap-x-10">
                            <a
                                href="#"
                                className="rounded-md bg-UranianBlue/70 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-UranianBlue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-UranianBlue"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 p-1 rounded border-UranianBlue text-UranianBlue hover:border-2">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
