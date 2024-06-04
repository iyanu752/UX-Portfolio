import Audiolize from '../assets/Audiolize.png'
import Audiolize1 from '../assets/audiolize1.jpg'


function Projects() {
    return(
        <>
        <div className=" px-[16px] flex flex-col items-center">
        {/*  */}
        {/* AUDIOLIZE modal start */}
        <div className="w-[358px] bg-[grey] px-[16px] py-[24px]  mt-[32px] lg:w-[1170px] lg:py-[64px] lg:px-[70px]  hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] transform hover:translate-y-[-5px]"style={{backgroundImage: `url(${Audiolize1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} >
            <div className='flex flex-row items-center'>
                <img src={Audiolize} alt='audiolize-banner'/>
                <p className=' font-Open-Sans pl-[8px] font-bold text-[32px] text-white'>AUDIOLIZE</p>
            </div>
            <div className=' flex flex-col'>
            <p className='text-[20PX] font-normal text-white mt-[86px] font-Akshar'>UI/UX DESIGN</p>
            <p className=' text-[32px] w-[276px] font-bold text-white font-Akshar mt-[32px] lg:text-[36px] lg:w-[446px]'> ENHANCING MOBILE READING EXPERIENCE USING A PDF TO AUDIOBOOK FEATURE</p>
            <p className='text-white w-[265px] font-Roboto text-[16px] mt-[32px] lg:w-[331px]'>
            I designed a mobile app to help users listen to audiobooks 
            and convert their pdf books into audiobooks.   
            </p>
            <div>
            <a href='/audiolize'>
            <button  className='w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black '>
            VIEW CASE STUDY
            </button>
            </a>
           
            </div>
            </div>
        </div>
        {/* AUDIOLIZE modal end */}


        </div>
            
        </>
    )
}

export default Projects;