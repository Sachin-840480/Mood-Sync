import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="bg-white ">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Home
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="/Teams" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Teams
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="/Contact" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="/DeleteAccount" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Delete Account
                            </a>
                        </div>
                    </nav>

                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2021 SomeCompany, Inc. All rights reserved.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Footer
