import Audiolize from '../assets/Audiolize.png'
import Audiolize1 from '../assets/audiolize1.jpg'
import { motion} from "framer-motion"


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



  const fadeInRight = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
function Projects() {
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });
    return (
        <div className="px-[16px] flex flex-col items-center">
            {/* AUDIOLIZE modal start */}
            <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='font-Akshar tracking-[2px] mt-[100px] lg:mt-[200px] leading-[60px] text-white font-extra-bold text-[60px] text-left pb-[38px] lg:leading-[150px] lg:text-[150px]' 
                
            >
                PROJECTS
            </motion.p>
            <motion.div     
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                className="bg-[grey] px-[16px] py-[32px] md:w-[900px] lg:w-[1170px] lg:py-[72px] lg:px-[70px] hover:shadow-[5px_5px_0px_0px_rgba(40,46,217)] transform hover:translate-y-[-5px]"
                style={{
                    backgroundImage: `url(${Audiolize1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
               
            >
                <div className="flex flex-row items-center">
                    <img src={Audiolize} alt="audiolize-banner" />
                    <p className="font-Open-Sans pl-[8px] font-bold text-[32px] text-white">
                        AUDIOLIZE
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[20px] font-normal text-white mt-[86px] font-Akshar">
                        UI/UX DESIGN
                    </p>
                    <p className="text-[32px] w-[276px] font-bold text-white font-Akshar mt-[32px] lg:text-[36px] lg:w-[446px]">
                        ENHANCING MOBILE READING EXPERIENCE USING A PDF TO
                        AUDIOBOOK FEATURE
                    </p>
                    <p className="text-white w-[265px] font-Roboto text-[16px] mt-[32px] lg:w-[331px]">
                        I designed a mobile app to help users listen to
                        audiobooks and convert their pdf books into audiobooks.
                    </p>
                    <div>
                        <a href="/audiolize">
                            <motion.button
                             whileHover={{
                            y: -5,
                            transition: { duration: 0.2 },
                        }}
                        className="w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(40,46,217)] transform hover:translate-y-[-5px]">
                                                        VIEW CASE STUDY
                            </motion.button>
                        </a>
                    </div>
                </div>
            </motion.div>
            {/* AUDIOLIZE modal end */}
        </div>
    );
}

export default Projects;