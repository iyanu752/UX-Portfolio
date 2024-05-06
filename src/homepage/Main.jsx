import meSm from '../assets/me-mobile.png'
import arrowAnim from '../assets/downArrow.gif'
import meBg from '../assets/me-pc.png'

function Main () {
    return (
        <>
        <div className=" px-[16px] flex flex-col items-center lg:px-[135px]">
            <div className="flex flex-col mt-[116px] text-center items-center  lg:flex-row lg:mt-[120px]">
            <article className=" font-Roboto text-white font-extra-bold text-[32px] text-left pb-[38px] lg:text-[40px]">
                Iyanu is a UX designer and a software
                developer who loves art and
                creativity
            </article>
            <img src={meSm} alt="me" className=' lg:hidden'/>
            <img src={meBg} alt='me' className='hidden lg:flex'/>
            </div>
             <img className='w-[82px] h-[82px] mt-[59px]' src ={arrowAnim} alt='Down'/>
        </div>
        </>
    ) 
}

export default Main;