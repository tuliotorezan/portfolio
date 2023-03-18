import React from 'react'

function ResumeCreator() {
  return (
    <div className='flex flex-row'>
    <img className="h-full basis-1/4 object-cover rounded-full md:rounded shadow-md md:h-full md:w-32" src="/resumecat.png"/>
    <div className="basis-1/2 px-6 text-justify">
      <h2 className="mb-1 text-xl font-semibold text-zinc-800 dark:text-white">Resume.cat</h2>
      <p>On the left side of the page we have a simple form to gather data from the user, while on the right side we display that data in our own resume template. </p>
      <p>This project was made alongside a friend using a shared github repository. Where he was responsible for creating the form to acquire data while I created a resume teplate and used said data to populate it.</p>
      <p> Our goals were to practice using react, storing and retrieving data from a JSON structure and lastly improve our css skills a bit.</p>
      <a className='text-orange-700 hover:text-zinc-700' href='https://github.com/tuliotorezan/resumecat' target="_blank"> This is a link to the project's github repository.</a><br/>
      <a className='text-orange-700 hover:text-zinc-700' href='' target="_blank"> And here it is working, in case you are interested to dabble with it.</a>
       
    </div>
    <img className="h-full basis-1/4 object-cover rounded-full md:rounded shadow-md md:h-full md:w-32" src="/resumecat2.png"/>
    </div>
  )
}

export default ResumeCreator