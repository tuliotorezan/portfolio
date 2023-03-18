import React from 'react'

function Intro({about}) {
    return (
        <section ref={about} className="bg-gray-200 dark:bg-zinc-800">
            <div className="max-w-6xl bg-main-color px-6 py-6 mx-auto">
                    <div className="w-full  md:flex items-center md:bg-transparent md:p-0 lg:px-8 md:justify-evenly">
                        <img className="h-32 w-32 object-cover rounded-full md:rounded shadow-md md:h-[18rem] md:w-[26rem]" src="/me.jpg"/>
                        <div className="mt-2 md:ml-6">
                            <div>
                            <h1 className="mt-2 text-2xl font-semibold text-zinc-800 capitalize lg:text-3xl dark:text-gray-200">Hi I'm Túlio Torezan</h1>
                                <p className="text-gray-800 dark:text-gray-300">Developer, Data Analyst and Electrical Engineer</p>
                            </div>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-800 md:text-xl dark:text-gray-200">A Brazilian passionate about programming, data analysis and its applications to help people. Worked as a data analyst and neural network developer for about 3 years in a joint research project between the University of Uberlandia and Petrobras with the goal of automating machinery monitoring and database cleansing. I now moved to Halifax, Canada and took a one year Full Stack App Dev course in order to get a better foundation on application development and programming in ganeral.</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}


export default Intro
