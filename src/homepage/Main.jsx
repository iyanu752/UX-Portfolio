import { motion} from "framer-motion"

// import { motion } from "framer-motion"
// import meSm from '../assets/me-mobile.png';
// import meBg from '../assets/me-pc.png';
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

//   const fadeInLeft = {
//     hidden: { opacity: 0, x: 15 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };


const listVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.6,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 4,
      },
    }),
  };
  
  

function Main() {
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });
 

    return (
        <>
            <div className="px-[16px] flex  flex-col items-start lg:px-[135px]">
                <div className="flex flex-col mt-[116px] text-left items-start lg:items-end lg:gap-[32px] lg:flex-row lg:mt-[120px]">
                    <motion.p 
                     initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className='font-Akshar tracking-[2px] leading-[60px] text-white font-extra-bold text-[60px] text-left pb-[38px] lg:leading-[150px] lg:text-[150px]'
                    >
                    Hello<span className='text-[red]'>.</span><br/>
                    I am Iyanu
                    </motion.p>
                    <ul className="text-white font-Akshar text-[16px] lg:text-[24px] font-semibold">
                    {["SOFTWARE DEVELOPER", "UX DESIGNER", "YOUR FRIENDLY NEIGHBOURHOOD SPIDERMAN", "🤫"].map(
                    (item, index) => (
                        <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={listVariants}
                        >
                        {item.includes("SPIDERMAN") ? (
                            <>
                            YOUR FRIENDLY NEIGHBOURHOOD <span className="text-[red]">SPIDERMAN</span>
                            </>
                        ) : (
                            item
                        )}
                        </motion.li>
                    )
                    )}
                    </ul>
                </div>
                <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                className='text-white text-[16px] font-semibold'
                >
                <a href='/audiolize'>
                <motion.button 
                 whileHover={{
                            y: -5,
                            transition: { duration: 0.2 },
                        }}
                         className='w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(40,46,217)] transform hover:translate-y-[-5px]'>
                VIEW RESUME
                </motion.button>
            </a>
                </motion.div>
            </div>
        </>
    );
}

export default Main;