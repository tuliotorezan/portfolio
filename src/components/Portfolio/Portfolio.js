import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NeuralNetworks from './Items/NeuralNetworks'
import ResumeCreator from './Items/ResumeCreator'
import StrategyGame from './Items/StrategyGame'
import ThisSite from './Items/ThisSite'

function Portfolio({ portfolio }) {
    return (
        <section ref={portfolio} className="bg-gray-200 dark:bg-zinc-800">
            <div className="max-w-6xl px-6 py-8 mx-auto bg-main-color">
                <div className='mx-auto mb-6 w-fit border-2 border-black dark:border-white'><h1 className='m-1 mx-2 text-2xl font-semibold text-zinc-800 capitalize lg:text-3xl dark:text-gray-200'>Portfolio</h1></div>
                
                <BrowserRouter>
                <div className='flex justify-around'>
                    <Link className="text-xl bg-zinc-600 text-white pb-1 px-2 rounded-full hover:text-orange-200 hover:bg-zinc-700" to="/" >This Page</Link> <Link className="text-xl bg-zinc-600 text-white pb-1 px-2 rounded-full hover:text-orange-200 hover:bg-zinc-700" to="/resumeCreator">Resume Creator</Link> <Link className="text-xl bg-zinc-600 text-white pb-1 px-2 rounded-full hover:text-orange-200 hover:bg-zinc-700" to="/unityGame">Unity Game</Link> <Link className="text-xl bg-zinc-600 text-white pb-1 px-2 rounded-full hover:text-orange-200 hover:bg-zinc-700" to="/neuralNetworks">Neural Networks</Link>
                </div>
                    <Routes>
                        <Route path="/" element={<ThisSite />} />
                        <Route path="/resumeCreator" element={<ResumeCreator />} />
                        <Route path="/unityGame" element={<StrategyGame />} />
                        <Route path="/neuralNetworks" element={<NeuralNetworks />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </section>
    )
}


export default Portfolio
