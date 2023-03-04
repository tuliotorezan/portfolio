import React from 'react'

function Header({about, skills, experience, education, portfolio}) {
    const goTo = (reference) => {
        console.log(reference.current.offsetTop)
        window.scrollTo({
            top: reference.current.offsetTop -50,
            behavior: 'smooth',
        })
    }

    return (
        <header className="header sticky z-50 top-0 bg-zinc-200 shadow-md flex items-center justify-between px-8 py-02 dark:bg-zinc-800 dark:text-gray-200">
            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center">
                    <li onClick={(e)=> {e.preventDefault(); goTo(about)}} className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">
                        <a href="">About Me</a>
                    </li>
                    <li onClick={(e)=> {e.preventDefault(); goTo(skills)}} className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
                        <a href="">Skills</a>
                    </li>
                    <li onClick={(e)=> {e.preventDefault(); goTo(experience)}} className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
                        <a href="">Experience</a>
                    </li>
                    <li onClick={(e)=> {e.preventDefault(); goTo(education)}} className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
                        <a href="">Education</a>
                    </li>
                    <li onClick={(e)=> {e.preventDefault(); goTo(portfolio)}} className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
                        <a href="">Portfolio</a>
                    </li>
                </ul>
            </nav>
        </header >
  )
}
export default Header