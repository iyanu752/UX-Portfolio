import ClearA from '../assets/clearaudiolize.jpg'
import Audiolize2 from '../assets/audiolize2.jpg'
import Flow from '../assets/userflow.jpg'
import Flow2 from '../assets/flow2.jpg'
import Flow3 from '../assets/flow3.jpg'
import Sketch from '../assets/sketch.jpg'
import Wireframe from '../assets/wireframe.jpg'
import DesignSystem from '../assets/designsystem.jpg'
import Final from '../assets/final.jpg'
import Cert from '../assets/cert.jpg'
import Ref from '../assets/ref.jpg'
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

  const fadeInDown = {
    hidden: { opacity: 0, y: -100 },
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
  

export default function Audiolize() {
    return (
        <>
            <div className='px-[16px] py-[24px] text-white lg:py-[119px] lg:px-[135px]'>

            <div>
                <motion.h1  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='text-center text-[60px] lg:text-[120px] font-Akshar font-bold  pb-[24px]'> Audiolize </motion.h1>
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='text-[16px] pb-[24px] text-center font-Roboto lg:text-[24px]'>Enhancing Mobile Reading Experience Using A PDF To Audiobook Feature</motion.p>
                <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={ClearA} alt='audiolizeImg'/>
            </div>

            <div className=' py-[24px]'>
            <motion.article
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className='text-[16px] lg:w-[700px] font-Roboto lg:text-[20px]'>
                Audiolize is a mobile application which not only allows users to listen to audio books on the go,  it
                also enables users to convert their pdf novels into audio books.
                Audiolize is my final project for the level 2 UX design bootcamp.
                </motion.article>
                <motion.ul
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                  className='pt-[24px] font-Roboto'>
                    <li> Role: UI + UX Designer</li>
                    <li>Client: Entry level bootcamp(level 2 UX design)</li>
                    <li>Project Duration: 4 weeks</li>
                </motion.ul>

                <a 
                 href='https://www.figma.com/proto/RUa75sqGxafTval8y0pM3r/Untitled?node-id=5-3&t=PRclU5s6fjgNUfo2-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A3'>
                    <motion.button 
                     initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}  whileHover={{y: -5,transition: { duration: 0.2 }}}
                      className='w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(40,46,217)] transform hover:translate-y-[-5px] '>
                    VIEW PROTOTYPE
                    </motion.button>
                </a>


                <motion.h2 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='pt-[48px] pb-[16px]  font-Akshar  text-[24px] lg:text-[48px]'>MY ROLE</motion.h2>
                <motion.article
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='pb-[24px] lg:w-[700px] font-Roboto text-[16px] lg:text-[20px]'>
                    During my time with entry level, i was assigned to submit a UX design project  by the end of the 
                    bootcamp. After a lot of brain storming on possible projects to build, i decided to build a project 
                    to solve problems which i encountered, Hence Audiolize was created
                </motion.article>
                <motion.img
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={Audiolize2} alt='audiolizeImg2'/>
            </div>

            <div className='pt-[71px]'>
                <motion.h1
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='text-center font-Akshar font-bold text-[40px]  lg:text-[100px]'>DISCOVERY</motion.h1>
                <motion.p
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='py-[24px] lg:w-[700px] font-Roboto text-[16px] lg:text-[20px]'>
                    An Audiobook is a recording of books or other works being read out aloud. Audiolize aims to 
                    enable people to read audiobooks and also convert their books downloaded as PDF into
                    audiobooks using a realistic sounding text to speech bot.
                </motion.p>
            </div>

            <div className='py-[48px] flex flex-col lg:flex-row gap-[52px] items-center'>

                <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
                    <h2 className='text-[24px] font-Akshar lg:text-[48px]  pb-[16px]'> UNDERSTANDING THE MARKET </h2>
                    <article className=' lg:w-[700px] font-Roboto text-[16px] lg:text-[20px]'>
                        For this project, i conducted market and competitive 
                        research to understand the needs of an audiobook 
                        application. I also conducted various interviews 
                        with prospective users of the application to know
                        the problems with current audiobook applications
                        they use and features they would like in their
                        application.
                    </article>
                </motion.div>

                <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} 
                className=' bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]'>
                    <p className='pb-[16px] font-Roboto text-[16px] text-black '>My research process involved the following:</p>
                    <ul className='text-[14px] font-bold font-Roboto lg:text-[16px] text-[#5D9771] '>
                        <li>1.) Define objectives & plan</li>
                        <li>2.) Outline hypotheses & assumptions</li>
                        <li>3.) Select methods to fill gaps in knowledge</li>
                        <li>4.) Conduct research and gather data</li>
                        <li>5.) Synthesize findings</li>
                    </ul>
                </motion.div>
            </div>

            <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className='text-[24px] font-Akshar lg:text-[48px]  pb-[16px]'>TALKING TO PROSPECTIVE CUSTOMERS</h2>
                <article className='text-[16px] lg:w-[700px] font-Roboto lg:text-[20px]'>
                To gather more qualitative data about our potiential user’s motivations,  pain points, and needs, I 
                interviewed 4 different people who are constant readers of web novels and listeners of 
                audiobooks.
                </article>
            </motion.div>
            <motion.ul 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className='pt-[24px] pb-[16px] font-bold font-Roboto text-[#5D9771] text-[14px] lg:text-[16px]  flex flex-row gap-[32px] lg:gap-[52px] '>
                <li className='max-w-[400px] bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]'>
                “I enjoy listening to audiobooks but
                the subscription fee is way too high”
                                                                    -N
                </li>

                <li className='max-w-[400px]  bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]'>
                “Audiobooks are great,  I do not have to strain
                my eyes reading  because i can just listen”
                                                                                  -I
                </li>
            </motion.ul>
            <motion.ul 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}
            className='pt-[24px] font-bold  font-Roboto text-[#5D9771]  pb-[16px] text-[14px] lg:text-[16px] flex flex-row gap-[32px] lg:gap-[52px] '>
                <li className='max-w-[400px]  bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]'>
                    “Because of my busy schedule i am
                    unable to sit down to read a book,
                    but with audiobooks, i can listen on the 
                    go.”
                                                                        -K
                </li>
                <li className='max-w-[400px]  bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]'>
                    “I wish the book continued from where
                    i stopped reading.”
                                                                        -C
                </li>
            </motion.ul>

            <div className='py-[48px]'>
                <motion.h2
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                   className='text-[24px] lg:text-[48px] font-Akshar  pb-[16px]'>INSIGHTS AND ISSUES</motion.h2>
                <motion.ul 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px]'>
                      1.) Audiobooks are nice and convinient  but subscription is expensive, most users opt out of using 
                        audiobooks because of this
                    </li>
                    <li className='pb-[8px]'>
                       2.) Not all books are available,  because of this, users would rather download the book from 
                        another source online
                    </li>
                    <li className='pb-[8px]'>
                        3.) Inability to choose the reader  voice 
                    </li>
                    <li>
                        4.) Inability to read the book while listening to the audio
                    </li>
                </motion.ul>
                <a href='https://docs.google.com/presentation/d/1NuOk9_btsxO4KuogxtoCYgFALSe1BqAaN6A5oxlOePA/edit?usp=sharing'>
                    <motion.button 
                     initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}  whileHover={{y: -5,transition: { duration: 0.2 }}}
                     className='w-[232px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(40,46,217)] transform hover:translate-y-[-5px]'>
                        VIEW RESEARCH SLIDE DECK
                    </motion.button>
                </a>
            </div>

            <div className='pt-[71px]'>
                <motion.h1
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='text-center font-Akshar font-bold pb-[24px] text-[40px] lg:text-[100px]'>INFORMATION ARCHITECTURE</motion.h1>
       
                <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                   className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>SITE MAP</motion.h2>
                <motion.article
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='font-Roboto text-[16px] lg:w-[700px] lg:text-[20px] pb-[24px] '>
                    I created a site map for Audiolize that incorporated the core content for listening to audiobooks,
                    adding downloaded audiobooks into Audiolize, and choosing the voice for the reader.
                </motion.article>
                <motion.img 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className='py-[24px] border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)] ' src={Flow} alt='user flow'/>
                <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>USER FLOW</motion.h2>
                <motion.article 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className=' font-Roboto text-[16px] lg:w-[700px] lg:text-[20px] pb-[24px]'>
                    Using the sitemap, I created a user flow for a scenario where the user wants to save and listen to an audio book and when 
                    a user wants to convert their PDF to an audio book 
                </motion.article>
                <motion.img
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]  py-[24px]' src={Flow2} alt='userflow2'/>
                <motion.img
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={Flow3}/>
            </div>

            <div className='pt-[71px]'>
                <motion.h1 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='text-center font-Akshar font-bold text-[40px] lg:text-[100px] pb-[24px]'>SKETCHES AND WIREFRAMES</motion.h1>
                <motion.img 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className='py-[24px] border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)] '  src={Sketch} alt='audiolizeImg'/>
                <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='pt-[16px] text-[#9ca3af] text-[16px]'>Brainstorm sketches on early concepts of content layout </motion.p>
                <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>WIREFRAMES</motion.h2>
                <motion.article
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                   className='font-Roboto text-[16px] lg:w-[700px] lg:text-[20px] pb-[24px]'>    
                When creating the wireframe of Audiolize, I was more focused on the layout as it was said to be my weakness and one of the most challenging aspects of design for me.
                I was meticulous about things like spacing, grids and colums, icons and more, my end goal was to create a layout that was not only user friendly but also aesthetically 
                pleasing
                </motion.article>
                <motion.img 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={Wireframe}/>

            </div>

            <div className='pt-[71px]'>
                <motion.h2  
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>DESIGN SYSTEM</motion.h2>
                <motion.article 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='font-Roboto text-[16px] lg:w-[700px] lg:text-[20px] pb-[24px]'>    
                Using the wireframes layouts, i created a design system to ease the flow of creation and provide uniformity when creating the high fidelity design,
                Here i was able to decide on what colour pallete to use for Audiolize.
                </motion.article>
                <motion.img 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={DesignSystem}/>

            </div>

            <div className='pt-[71px]'>
                <motion.h1 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='text-center font-Akshar font-bold text-[40px] lg:text-[100px] pb-[24px]'>HIGH FIDELITY DESIGNS</motion.h1>
                <motion.img
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={Final} alt='final design'/>
            </div>

            <div className='pt-[71px]'>
            <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>LOOKING FOWARD</motion.h2>
                <motion.article 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='font-Roboto text-[16px] lg:w-[700px] lg:text-[20px] pb-[24px]'>    
                Audiolize is a project i decided to venture into as my submition project for entry level bootcamp,
                It is a project which i also fonud to solve a personal problemm of mine so going foward my next steps with 
                audiolize will most likely be to 
                </motion.article>
                <motion.ul 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px]'>1.) Improve on the user interface and layout of Audiolize.</li>
                    <li className='pb-[8px]'>2.) Develop a functioning app for Audiolize.</li>
                </motion.ul>
            </div>


            <div className='pt-[71px]'>
            <motion.h2  
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>PERSONAL LEARNINGS</motion.h2>
                <motion.ul 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px] font-bold'>1.) Research first, Deaign after</li>
                    <article className='pb-[48px] lg:w-[700px]'>
                    One major mistake I made when carrying out this project was not having a proper flow of research before 
                    working on the sketches and the wireframes, this lead me to go back and make changes based on user needs which 
                    consumed more time. On working on this project, I have have been able to make out the workflow from the research to the design.
                    </article>           
                </motion.ul>

                <motion.ul 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                 className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px] font-bold'>2.) Comunicating with users and interviewing users</li>
                    <article className='pb-[48px] lg:w-[700px]'>
                    During this project, i had to talk to several people who had used audiobook applications, i discovered features they would like
                    in an audiobook app which i was able to implement, I also enjoyed talking to people from different diversities.
                    </article>   
                </motion.ul>

                <motion.ul 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px] font-bold'>3.)Working against time</li>
                    <article className='pb-[48px] lg:w-[700px]'>
                    For our project for entry level bootcamp we had a time limit which i had to work with, it was challenging but i was able to deliver 
                    before the deadline.
                    </article>   
                </motion.ul>
            </div>

            <div className='pt-[71px]'>
                <motion.h1
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='text-center font-Akshar font-bold text-[40px] lg:text-[100px] pb-[24px]'>CERTIFICATE AND RECOMMENDATION</motion.h1>
                <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>CERTIFICATE</motion.h2>
                <motion.img
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={Cert} alt='Certificate'/>
                <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>LETTER OF RECOMMENDATION</motion.h2>
                <motion.img 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={Ref} alt='final design'/>
            </div>
            
            </div>
        </>
    )
}

