import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { useState } from 'react';
function Home() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }
    return (
        <>
        <nav className="h-[48] px-[16px] bg-black flex items-center justify-between lg:px-[135px] lg:h-[64px]"> 
        <a href="/" className="lg: text-white font-Akshar font text-[32px]"> IYANU AHMED </a> 
        <ul className="flex lg:hidden" alt="Menu" >
            <button onClick={toggleMobileMenu}>
            {mobileMenu ? <img src={close} alt="Close"/> : <img src={menu} alt="Menu"/>}
            </button>
        </ul>
        <ul className="hidden lg:flex text-white font-Akshar text-[24px]">
            <a href="/project" className="pr-[32px] hover:text-[gray]">PROJECTS</a>
            <a href="/about" className="pr-[32px] hover:text-[gray]">ABOUT</a>
            <a href="#" className='hover:text-[gray]'>CONTACT</a>
        </ul>
        </nav>
        {mobileMenu && (
            <div className=' bg-black flex justify-center h-screen lg:hidden'>
                <ul className=' text-white flex flex-col items-center justify-center font-Akshar text-[32px]'>
                    <a className='pb-[48px] hover:text-[gray]' href="/project">PROJECTS</a>
                    <a className='pb-[48px] hover:text-[gray]' href="/about">ABOUT</a>
                    <a className='hover:text-[gray]' href='#'>CONTACT</a>
                </ul>
            </div>
        )}       
        </>

    )
}
export default Home;