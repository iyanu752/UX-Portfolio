import ClearA from '../assets/clearallurereach.jpg'
import Allurereach2 from '../assets/allurereach2.jpg'
import brand from '../assets/brand.jpg'
import sitemap from '../assets/sitemap.jpg'
import mobilew from '../assets/mobilew.jpg'
import desktop from '../assets/desktop.jpg'
import finald from '../assets/finald.jpg'
import finalm from '../assets/finalm.jpg'

import { motion} from "framer-motion"

export default function Allurereach () {

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
        <>
             <div className='px-[16px] py-[62px] text-white lg:py-[119px] lg:px-[135px]'>

                    <div>
                        <motion.h1  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className='text-center text-[60px] lg:text-[120px] font-Akshar font-bold  pb-[24px]'> Allurereach </motion.h1>
                        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className='text-[16px] pb-[24px] text-center font-Roboto lg:text-[24px]'>  REDESIGNING AND DEVELOPING A SOCIAL MEDIA MARKETING WEB PAGE </motion.p>
                        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                        className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={ClearA} alt='audiolizeImg'/>
                    </div>




                    <div className=' py-[24px]'>
                    <motion.article
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className='text-[16px] lg:w-[700px] font-Roboto lg:text-[20px]'>
                        Allurereach is a social media marketing agency that offers social media marketing strategies to increase your companies visibility through advertisements.

                        </motion.article>
                        <motion.ul
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                        className='pt-[24px] font-Roboto'>
                            <li> Role: UI + UX Designer + Web Developer</li>
                            <li>Client: Oluwafemi Saliu(Founder of Allurereach)</li>
                            <li>Project Duration: 5 weeks</li>
                        </motion.ul>

                        <a 
                        href='https://www.allurereach.info'>
                            <motion.button 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}  whileHover={{y: -5,transition: { duration: 0.2 }}}
                            className='w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(40,46,217)] transform hover:translate-y-[-5px] '>
                            VIEW SITE
                            </motion.button>
                        </a>


                        <motion.h2 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className='pt-[48px] pb-[16px] font-Akshar  text-[24px] lg:text-[48px]'>MY ROLE</motion.h2>
                        <motion.article
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className='pb-[24px] lg:w-[700px] font-Roboto text-[16px] lg:text-[20px]'>
                           As Allurereach experienced growth, they needed a redesign and a redevelopment of their site
                          to offer a better user experience, hav better functionality and responsivness, I was responsible for helping Allure reach marketing agency redesign their website and develop it.
                        </motion.article>


                        <motion.img
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                        className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={Allurereach2} alt='audiolizeImg2'/>
                    </div>

                 <div className='py-[48px]'>
                    <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className='text-[24px] lg:text-[48px] font-Akshar  pb-[16px]'>CHALLENGES</motion.h2>
                    <motion.ul 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                    className='font-Roboto text-[16px] lg:w-[700px]  lg:text-[20px]'>
                        <p className='pb-[16px]'>
                        On starting the Allurereach reach redesign, i was faced with the following challenges:
                        </p>
                        <li className='pb-[8px]'>
                        1.) Allurereach wanted a redesign of their site but they wanted to maintain the same brand colours and patterns
                        </li>
                        <li className='pb-[8px]'>
                            2.) A lot of the images and logos given to me for the site were not high fidelity
                        </li>
                    </motion.ul>
               </div>

               <div className='py-[48px]'>
                    <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className='text-[24px] lg:text-[48px] font-Akshar  pb-[16px]'>SOLUTION</motion.h2>
                    <motion.ul 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                    className='font-Roboto text-[16px] lg:w-[700px]  lg:text-[20px]'>
                        <p className='pb-[16px]'>
                        I solved thoes challenges by doing the followinng:
                        </p>
                        <li className='pb-[8px]'>
                        1.) I found ways to adapt and reintegrate Allurereach’s brand colours to fit the design i was going for
                        </li>
                        <li className='pb-[8px]'>
                        2.) I used AI to enhance the logos and photos i was given to make them look sharper 
                        </li>
                    </motion.ul>
               </div>

               <div className='pt-[71px]'>
                <motion.h1
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='text-center font-Akshar font-bold text-[40px]  lg:text-[100px]'>BRANDING</motion.h1>
                <motion.p
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='py-[24px] lg:w-[700px] font-Roboto text-[16px] lg:text-[20px]'>
                   I worked with Allurereach’s internal designer and their brand guide. 
                   We pulled together the provided fonts, colors, and patterns to create 
                   the structure and ecosystem of Allure reach.
                </motion.p>

                <motion.img
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                        className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={brand} alt='brand1'/>
            </div>
                    

            <div className='pt-[71px]'>
                <motion.h1
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='text-center font-Akshar font-bold text-[40px]  lg:text-[100px]'>UX/UI</motion.h1>
                <motion.p
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className='py-[24px] lg:w-[700px] font-Roboto text-[16px] lg:text-[20px]'>
            After extensive UX audits, competitor analyses, and client workshops, I created iterative sitemaps that served 
            as the foundation for the website build. I used this birdseye view to establish site hierarchy and taxonomy,
             and to determine the number of unique page templates that would need to be designed and  built. 
                </motion.p>

                <motion.img
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                        className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={sitemap} alt='allurereach brand2'/>
            </div>


            <div className='pt-[71px]'>
                <motion.h1 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='text-center font-Akshar font-bold text-[40px] lg:text-[100px] pb-[24px]'>WIREFRAMES</motion.h1>
                <motion.img 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className=' border-white mb-[24px] border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)] '  src={desktop} alt='audiolizeImg'/>

                <motion.img 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className=' border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)] '  src={mobilew} alt='audiolizeImg'/>
                <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='pt-[16px] text-[#9ca3af] text-[16px]'>Desktop and mobile wireframe</motion.p>
            </div>

            <div className='pt-[71px]'>
                <motion.h1 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='text-center font-Akshar font-bold text-[40px] lg:text-[100px] pb-[24px]'>HIGH FIDELITY DESIGNS</motion.h1>
                <motion.img
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                 className='border-white border-2 mb-[24px] shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={finald} alt='final design'/>

                <motion.img
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                 className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(40,46,217)]' src={finalm} alt='final design'/>
                   <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className='pt-[16px] text-[#9ca3af] text-[16px]'>Desktop and mobile high fidelity designs</motion.p>
            </div>

            <div className='pt-[71px]'>
            <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className='text-[24px] lg:text-[48px] font-Akshar pt-[48px]  pb-[16px]'>LOOKING FOWARD</motion.h2>
                <motion.article 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className='font-Roboto text-[16px] lg:w-[700px] lg:text-[20px] pb-[24px]'>    
                While working on Allure reach, i tried to pay as much attention to detail as podssible and use the best assets available,
                 i am proud of Allure reach and going foward, I would like to implement some new features to the site, possibly adding a 
                 custom loader and some new animations and a pricing page.
                </motion.article>
            </div>

                    
                    




             </div>
        </>
    )
}