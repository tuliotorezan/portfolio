import React from 'react'
import PropTypes from 'prop-types'

function Work(props) {
    return (
        <section className="bg-gray-200 dark:bg-zinc-800">
            <div className="max-w-6xl px-6 pt-10 pb-6 mx-auto bg-main-color">
            <div className='mx-auto mb-4 w-fit border-2 border-black dark:border-white'><h1 className='m-1 mx-2 text-2xl font-semibold text-zinc-800 capitalize lg:text-3xl dark:text-gray-200'>EXPERIENCE</h1></div>
                <div className='px-8'>
                <ol className="relative border-l-4 border-zinc-700 dark:border-zinc-200">
                    <li className="mb-10 ml-6 ">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Data Analyst and Python Developer</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">Petrobras - University of Uberlandia - 2019 to 2022</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">Worked for 2 years and 9 months at a joint research project between the University of Uberlandia and Petrobras (Brazil’s biggest oil company). My main role was as a data analyst and neural network developer, using TensorFlow in python, where our team combined multiple algorithms in order to automate data analysis of the monitored industry’s machinery. I was also responsible for developing electromagnetic circuits and helping on challenges related to electrical engineering when needed.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Junior Developer</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">Datahome - 2018 to 2019</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">I was at DataHome from 1st of April 2018 until 31st of March 2019, during the first three months I was an intern for my work term, required by the university, then I kept working there for the rest of the year for the salary and the work experience I would get. During this year, I was even promoted to project lead of the project I began working into, and I worked mostly with shell scripts, HTML5, Microsoft Web Forms Framework and .NET Core. However, I also got some familiarity with Argular.js, Xamarin and SQL.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Undergrad Research Assistant</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">Biolab - Awarded grant by "Institutional Program for Scientific Initiation Grants" - 2018 to 2019</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">This grant was awarded to the application I begun developing on the previous year, which was the software and hardware for supporting research on motor skills learning by paretic post-stroke patients. The goal was to enable a physiotherapist PhD student to run all the designed tests and provide statistics, like learning curves, strength recovery of the patient, accuracy of the movement and the development of each patient through time. Providing a better understanding on how the acquisition of new motor skills happen on imparied patients, in order to develop better strategies for their rehabilitation in the clinical steps of treatment.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Undergrad Research Assistant</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">Biolab - Volunteer - 2017 to 2018</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">As I returned from my time as an Exchange student, I went back to working with Professor Alcimar B. Soares but now as a volunteer at his lab. During this year I mostly helped out the younger students on their struggles, teached a condensated className on electromyography signal processing on C#, (certificate here) built a game for the competition of a conference and got awarded as Winner - Brazilian National Conference on Electromyography and Kinesiology Competition, studied to enhance my own skills and then started building the software and hardware for the application we submitted for a grant on the next year.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Summer Intern</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">University of California, Santa Cruz - 2016</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">I spent a couple of months (11 weeks) in UCSC as a summer intern at Professor Josh Stuart's lab in the Biomolecular Engineering Department, worked with C and C++ graph network code development for data analysis. There, I learned about genetic pathways, cancer genomics, and enhanced my programming skills, algorithm and datascience knowledge regarding big datasets.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Exchange Student</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">University Of Colorado, Boulder - Awarded Full Scholarship - 2015 to 2016</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">From august 2015 to may 2016 I was an exchange student on Electrical Engineering major at CU Boulder, I was awarded full scholarship for tuition and housing by a grant called "science without borders". During which time I got a GPA of 3.627</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Undergrad Research Assistant</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">University of Uberlandia, Awarded grant by "Institutional Program for Technological Development and Inovation Grants" - 2014 to 2015</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">Thats year, I applied for a grant for technology development and innovation with Professor Adriano A. Pereira, and our project was awarded with the grant. This research was based on the development a system, including both software and hardware to study the correlation between musclular pain and the trajectory of the executed movement in martial arts. The movement trajectory was calculated using multiple cells with a magnetometer and a accelerometer in each, attached to the volunteers limbs.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full mt-2 -left-2 ring-8 ring-zinc-700 dark:ring-zinc-200 dark:bg-zinc-800"/>
                        <h2 className="flex items-center mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Undergrad Research Assistant</h2>
                        <time className="block mb-2 text-sm font-normal leading-none text-zinc-700 dark:text-zinc-200">Biolab - 2013 to 2014</time>
                        <p className="mb-4 text-base font-normal text-gray-800 dark:text-white">As I got into college, I talked to Professor Alcimar B. Soares about my interest in his field of study, he took me in for tutoring at his biomedical engineering lab (BioLab). There, I learned C# programming and got involved in a project about making the three dimensional model of human head (I used 3dsMax for this) and a C# app to apply Electroencephalography (EEG) mapping results over the model 3d for better medical visualization.</p>
                    </li>
                </ol>
                </div>
            </div>
        </section>
    )
}


export default Work
