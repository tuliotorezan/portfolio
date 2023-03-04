import React from 'react'

function Education({education}) {
    return (
        <section ref={education} className="bg-gray-200 dark:bg-zinc-800">
            <div className="max-w-6xl px-6 pt-8 pb-2 mx-auto bg-main-color2">
                <div className='mx-auto mb-4 w-fit border-2 border-black dark:border-white'><h1 className='m-1 mx-2 text-2xl font-semibold text-zinc-800 capitalize lg:text-3xl dark:text-gray-200'>EDUCATION</h1></div>
                <div className='mx-6 grid grid-cols-1 divide-y divide-solid divide-black dark:divide-white'>
                    <div  className='py-4 m-1 text-zinc-800 dark:text-gray-200'>
                        <h2 className='text-xl font-semibold inline capitalize lg:text-2xl'>Graduate Certificate</h2><h3 className='text-lg capitalize inline lg:text-xl'> - Nova Scotia Community College (2022-2023)</h3>
                        <p className='mt-4'>After a few year working as a data analyst and developer, I decided to take the Full Stack Application Development course at NSCC because up to this point all my programming knowledge was either self though or from advice and getting help from more experienced people. Therefore, taking a formal course was helpful to strengthen my foundation and and provide me with better programming practices.</p>
                    </div>
                    <div  className='py-4 m-1 text-zinc-800 dark:text-gray-200'>
                        <h2 className='text-xl font-semibold inline capitalize lg:text-2xl'>Exchange Student</h2><h3 className='text-lg capitalize inline lg:text-xl'> - University of Colorado Boulder (2015-2016)</h3>
                        <p className='mt-4'>While still an Undergrad student, I got awarded one year of full scholarship at the Colorado University, Boulder by a grant called "Science Without Borders" and therefore spent one year in Boulder as an international exchange student.</p>
                    </div>
                    <div  className='py-4 m-1 text-zinc-800 dark:text-gray-200'>
                        <h2 className='text-xl font-semibold inline capitalize lg:text-2xl'>Bachelor's Degree</h2><h3 className='text-lg capitalize inline lg:text-xl'> - Universidade Federal De Uberlândia (2012-2019)</h3>
                        <p className='mt-4'>I lived in a city with approximately 700k inhabitants and this was its best and most competitive university to be approved to. I took the test just for practice at my second year in highschool and got approved for Electrical Engineering. However, since I was still midway through the second year of highschool, I had to remain for one and a half years on highschool and college simultaneously.</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Education
