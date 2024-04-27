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
        <a href="#" className="lg: text-white font-Akshar font text-[32px]"> IYANU AHMED </a> 
        <ul className="flex lg:hidden" alt="Menu" >
            <button onClick={toggleMobileMenu}>
            {mobileMenu ? <img src={close} alt="Close"/> : <img src={menu} alt="Menu"/>}
            </button>
        </ul>
        <ul className="hidden lg:flex text-white font-Akshar text-[24px]">
            <a href="#" className="pr-[32px]">HOME</a>
            <a href="#" className="pr-[32px]">ABOUT</a>
            <a href="#">CONTACT</a>
        </ul>
        </nav>
        {mobileMenu && (
            <div className='transform transition-transform duration-300 ease-in-out  bg-black flex justify-center h-screen lg:hidden'>
                <ul className=' text-white flex flex-col items-center justify-center font-Akshar text-[32px]'>
                    <a className='pb-[48px]' href='#'>HOME</a>
                    <a className='pb-[48px]' href='#'>ABOUT</a>
                    <a href='#'>CONTACT</a>
                </ul>
            </div>
        )}

        <div>
            <p>
                Iyanu is a UX designer and a software
                developer who loves art and
                creativity
            </p>
        </div>

       
        </>

    )
}
export default Home;