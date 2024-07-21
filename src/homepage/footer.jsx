import { motion} from "framer-motion"
// import { useRef } from 'react';

const fadeInRight = {
    hidden: { opacity: 0, x: 15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

function Footer() {
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });
    return (
        <>
        <div 
         className= "px-[16px] py-[102px] lg:px-[135px]">
        <div className="flex gap-[32px] flex-col lg:flex-row lg:gap-[82px]">
            <motion.div
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
            // initial={{ x: 100, opacity: 0 }}
            // animate={isInView ? { x: 0, opacity: 1 } : {}}
            // transition={{ duration: 0.5 , ease: "easeOut" }}
            // ref={ref}
            >
                <p
                 className=" font-Akshar text-[32px] text-white lg:text-40"
                 >
                 PROJECTS
                 </p>

                 <p
                className="pt-[16px] text-[gray] font-Roboto text-[24px] hover:text-white"><a href="/allurereach"
                >
                Allure reach</a>
                </p>

                <p
                className="pt-[16px] text-[gray] font-Roboto text-[24px] hover:text-white"><a href="/audiolize"
                >
                Audiolize</a>
                </p>

           
            </motion.div>

            <motion.div
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
            // initial={{ x: 100, opacity: 0 }}
            // animate={isInView ? { x: 0, opacity: 1 } : {}}
            // transition={{ duration: 0.5 , ease: "easeOut" }}
            // ref={ref}
            >
                <p
                 className=" font-Akshar text-[32px] text-white lg:text-40"
                >
                 ABOUT
                 </p>

                <p
           
                 className="pt-[16px] text-[gray] font-Roboto text-[24px] hover:text-white"
                 ><a href="/about">About Iyanu</a></p>


                <p 
              className="pt-[8px] text-[gray] font-Roboto text-[24px] hover:text-white"><a href="https://www.linkedin.com/in/ahmed-iyanuoluwa-b4111a26a/">Linkedin</a></p>
            </motion.div>

            <motion.div
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
            >
                <p
                 className=" font-Akshar text-[32px] text-white lg:text-40"
                >
                 CONTACT
                 </p>
                 <a href="mailto:iyanu752@gmail.com">
                 <p
                className="pt-[16px] text-[gray] font-Roboto text-[24px] hover:text-white"
                >Email</p>
                 </a>
               
            </motion.div>
        </div>

        </div>

        </>
    )
}

export default Footer;