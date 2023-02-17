import React from 'react'

function Intro(props) {
    return (
        <section className="bg-gray-200 dark:bg-zinc-700">
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-main-color -z-10 md:h-96 rounded-2xl"></div>
                    <div className="w-full p-6 bg-main-color md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img className="h-2 4 w-24 solid md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[22rem] lg:w-[26rem] md:rounded-2xl" src="/me.jpeg" alt="client photo" />
                        <div className="mt-2 md:mx-6">
                            <div>
                            <h1 className="mt-2 text-2xl font-semibold text-zinc-800 capitalize lg:text-3xl dark:text-gray-200">Hi I'm Túlio Torezan</h1>
                                <p className="text-gray-800 dark:text-gray-300">Developer, Data Analyst and Electrical Engineer</p>
                            </div>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-800 md:text-xl dark:text-gray-200">A Brazilian passionate about programming, data analysis and its applications to help people. Worked as a data analyst and neural network developer for about 3 years in a joint research project between the University of Uberlandia and Petrobras with the goal of automating machinery monitoring and database cleansing. I now moved to Halifax, Canada and took a one year Full Stack App Dev course in order to get a better foundation on application development and programming in ganeral.</p>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}


export default Intro
