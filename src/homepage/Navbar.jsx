import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Home() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenu]);

    return (
        <>
            <nav className="h-[48px] px-[16px] bg-black flex items-center justify-between lg:px-[135px] lg:h-[64px]"> 
                <a href="/" className="text-white font-Akshar text-[32px]"> IYANU AHMED </a> 
                <ul className="flex lg:hidden" alt="Menu">
                    <button onClick={toggleMobileMenu}>
                        {mobileMenu ? <img src={close} alt="Close"/> : <img src={menu} alt="Menu"/>}
                    </button>
                </ul>
                <ul className="hidden lg:flex text-white font-Akshar text-[24px]">
                    <a href="/project" className="pr-[32px] hover:text-[gray]">PROJECTS</a>
                    <a href="/about" className="pr-[32px] hover:text-[gray]">ABOUT</a>
                    <a href="mailto:iyanu752@gmail.com" className='hover:text-[gray]'>CONTACT</a>
                </ul>
            </nav>
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className='fixed top-0 right-0 bottom-0 left-0 bg-black z-50 lg:hidden flex flex-col items-center justify-center'>
                        <button className="absolute top-4 right-4" onClick={toggleMobileMenu}>
                            <img src={close} alt="Close"/>
                        </button>
                        <ul className='text-white flex flex-col items-center font-Akshar text-[32px]'>
                            <motion.a 
                             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                             className='pb-[48px] hover:text-[gray]' href="/project">PROJECTS</motion.a>
                            <motion.a 
                             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className='pb-[48px] hover:text-[gray]' href="/about">ABOUT</motion.a>
                            <motion.a 
                             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className='hover:text-[gray]' href='mailto:iyanu752@gmail.com'>CONTACT</motion.a>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Home;