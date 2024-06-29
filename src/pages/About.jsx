import Me from "../assets/me.jpg"
import {motion} from "framer-motion"
export default function About () {

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

      const fadeInLeft = {
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
      
    return (
        <div className=" px-[16px] lg:px-[135px]"> 
            <div className="flex flex-col items-start">
                <div>
                    <motion.h1
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                     className=" font-Roboto text-[20px] max-w-[867px] text-left lg:text-[40px] font-black pt-[103px] text-white pb-[24px]">
                     YOUR FRIENDLY NEIGHBOURHOOD <span className="text-[red]">SPIDERMAN</span>.
                    </motion.h1>
                </div>

                <div className=" flex flex-col items-center lg:flex-row gap-[64px]">
                    <motion.img 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                    src={Me} alt="my image" className="w-[300px] h-[100x]"/> 

                            <div className=" flex flex-col text-white gap-[16px] max-w-[653px] font-Roboto text-[16px] lg:text-[24px]">
                            <motion.article
                             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                            >
                                Hello there, I am a software developer with over one year of experience and a freelance UX designer.
                                i like art, spiderman, cars, humour and communicating with people from different parts of the world.
                            </motion.article>

                            <motion.article
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
                                As a Software developer, I specialize in writing clean code and
                               ensuring my code can be scaled and maintained.
                            </motion.article>

                            <motion.article
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
                                As a UX designer, I specialize in wireframing,
                                prototyping, user research, crafting engaging 
                                mockups and using appealing typography.
                            </motion.article>

                            <motion.article
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
                                Beyond Designing and Coding,
                                I have a passion for 2D animation and 
                                I uses my spare time to create cartoons
                                and save the world.
                            </motion.article>
                            
                         <div className=" flex  flex-row gap-[20px]">
                         <motion.button
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}   whileHover={{y: -5,transition: { duration: 0.2 }}}
                             className='w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black  hover:shadow-[5px_5px_0px_0px_rgba(40,46,217)] transform hover:translate-y-[-5px]'>
                                VIEW RESUME
                            </motion.button>
                            
                         </div>
                            </div>
                </div>
            
            </div>
        
           


        <div className="mt-[64px] flex flex-col lg:flex-row gap-[16px] lg:justify-between text-[16px] font-Roboto ">
            <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
            className=" text-black bg-white p-[20px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]">
                <ul>
                    <li className="text-[32px] font-Akshar font-medium">Design skillset</li>
                    <li className="text-[16px] font-Roboto font-normal">Wireframing</li>
                    <li className="text-[16px] font-Roboto font-normal">Interactive Prototyping</li>
                    <li className="text-[16px] font-Roboto font-normal">User Research</li>
                    <li className="text-[16px] font-Roboto font-normal">User Experience design</li>
                </ul>
            </motion.div>

            <motion.div
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className=" text-black bg-white p-[20px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]">
                <ul>
                    <li className="text-[32px] font-Akshar font-medium">Development skillset</li>
                    <li className="text-[16px] font-Roboto font-normal">HTML</li>
                    <li className="text-[16px] font-Roboto font-normal">Tailwind CSS</li>
                    <li className="text-[16px] font-Roboto font-normal">Javascript</li>
                    <li className="text-[16px] font-Roboto font-normal">React js</li>
                    <li className="text-[16px] font-Roboto font-normal">Angular js</li>
                </ul>
            </motion.div>


            <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
            className=" text-black bg-white p-[20px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]">
                <ul>
                    <li className="text-[32px] font-Akshar font-medium">Experience</li>
                    <li className="text-[16px] font-Roboto font-normal">UX designer</li>
                    <li className="text-[16px] font-Roboto font-normal">Software developer</li>
                    <li className="text-[16px] font-Roboto font-normal">2D Animator</li>
                    <li className="text-[16px] font-Roboto font-normal">Graphics designer</li>
                </ul>
            </motion.div>
        </div>

      
        </div>
    )
 } 
