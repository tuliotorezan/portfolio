import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <section className="bg-gray-200 dark:bg-zinc-800">
                <div className="max-w-6xl px-6 py-8 mx-auto bg-main-color2">
                    <div className='mx-auto mb-6 w-fit border-2 border-black dark:border-white'><h1 className='m-1 mx-2 text-2xl font-semibold text-zinc-800 capitalize lg:text-3xl dark:text-gray-200'>SKILLS</h1></div>
                    <div className='px-8 grid grid-cols-3 gap-4'>
                        <div class="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg inline">
                                <div class="px-4 py-4 flex justify-center">
                                    <div class="font-bold text-xl">Advanced</div>
                                </div>
                                <div class="px-4 pb-4 flex justify-center flex-wrap">
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">C#</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Python</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Javascript</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Data Analysis</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Data Visualization</span>
                                </div>
                        </div>
                        <div class="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg inline">
                                <div class="px-4 py-4 flex justify-center">
                                    <div class="font-bold text-xl">Intermediate</div>
                                </div>
                                <div class="px-4 pb-4 flex justify-center flex-wrap">
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">C++</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">GIT</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">SQL</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">React</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Restful APIs</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Bash Scripting</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Data Structures</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Machine Learning</span>
                                </div>
                        </div>
                        <div class="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg inline">
                                <div class="px-6 py-4 flex justify-center">
                                    <div class="font-bold text-xl">Basic</div>
                                </div>
                                <div class="px-4 pb-4 flex justify-center flex-wrap">
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Agile</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">My SQL</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Node.js</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Mongo DB</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Tailwindcss</span>
                                    <span class="inline-block bg-main-color rounded-full px-3 pb-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">Restful APIs</span>
                                </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
