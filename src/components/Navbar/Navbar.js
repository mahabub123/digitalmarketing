import React,{useState} from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'

const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => {setClick(!click)}
    return (
        <header className="bg-primary text-white py-5 sticky top-0">
            <nav className={`container flex items-center relative`}>
                {/* logo */}
                <div>
                    <a href="#">Mytecnic</a>
                </div>
                {/* menu */}
                <ul className={` hidden md:flex md:flex-1 md:justify-end gap-10 ${click?'menu-show':'-left-6'}` } onClick={handleClick}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <div><button className="btn-primary w-1/3 md:w-full">Check now</button></div>
                </ul>
                {/* mobile menu */}
                <div className="md:hidden flex flex-1 justify-end px-3 text-2xl" onClick={handleClick}>
                    {click?<FaTimes/>:<FaBars/>}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
