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
export default function Audiolize() {
    return (
        <>
            <div className='px-[16px] py-[62px] text-white lg:py-[119px] lg:px-[135px]'>

            <div>
                <h1 className='text-center text-[40px] font-Akshar font-bold  pb-[24px]'> Audiolize </h1>
                <p className='text-[16px] pb-[24px] text-center font-Roboto lg:text-[24px]'>Enhancing Mobile Reading Experience Using A PDF To Audiobook Feature</p>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={ClearA} alt='audiolizeImg'/>
            </div>

            <div className=' py-[24px]'>
            <article className='text-[16px] font-Roboto lg:text-[20px]'>
                Audiolize is a mobile application which not only allows users to listen to audio books on the go,  it
                also enables users to convert their pdf novels into audio books.
                Audiolize is my final project for the level 2 UX design bootcamp.
                </article>
                <ul className='pt-[24px] font-Roboto'>
                    <li> Role: UI + UX Designer</li>
                    <li>Client: Entry level bootcamp(level 2 UX design)</li>
                    <li>Tools: Figma</li>
                    <li>Project Duration: 4 weeks</li>
                </ul>

                <a href='https://www.figma.com/proto/RUa75sqGxafTval8y0pM3r/Untitled?node-id=5-3&t=PRclU5s6fjgNUfo2-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A3'>
                    <button  className='w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] transform hover:translate-y-[-5px] '>
                    VIEW PROTOTYPE
                    </button>
                </a>


                <h2 className='pt-[48px] pb-[16px] font-Akshar  text-[24px]'>MY ROLE</h2>
                <article className='pb-[24px] font-Roboto text-[16px] lg:text-[20px]'>
                    During my time with entry level, i was assigned to submit a UX design project  by the end of the 
                    bootcamp. After a lot of brain storming on possible projects to build, i decided to build a project 
                    to solve problems which i encountered, Hence Audiolize was created
                </article>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={Audiolize2} alt='audiolizeImg2'/>
            </div>

            <div className='pt-[71px]'>
                <h1 className='text-center font-Akshar font-bold text-[40px]'>DISCOVERY</h1>
                <p className='py-[24px] font-Roboto text-[16px] lg:text-[20px]'>
                    An Audiobook is a recording of books or other works being read out aloud. Audiolize aims to 
                    enable people to read audiobooks and also convert their books downloaded as PDF into
                    audiobooks using a realistic sounding text to speech bot.
                </p>
            </div>

            <div className='py-[48px] flex flex-col lg:flex-row gap-[52px] items-center'>

                <div>
                    <h2 className='text-[24px] font-Akshar  pb-[16px]'> UNDERSTANDING THE MARKET </h2>
                    <article className=' lg:w-[634px] font-Roboto text-[16px] lg:text-[20px]'>
                        For this project, i conducted market and competitive 
                        research to understand the needs of an audiobook 
                        application. I also conducted various interviews 
                        with prospective users of the application to know
                        the problems with current audiobook applications
                        they use and features they would like in their
                        application.
                    </article>
                </div>

                <div className=' bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>
                    <p className='pb-[16px] font-Roboto text-[16px] text-black '>My research process involved the following:</p>
                    <ul className='text-[14px] font-bold font-Roboto lg:text-[16px] text-[#5D9771] '>
                        <li>1.) Define objectives & plan</li>
                        <li>2.) Outline hypotheses & assumptions</li>
                        <li>3.) Select methods to fill gaps in knowledge</li>
                        <li>4.) Conduct research and gather data</li>
                        <li>5.) Synthesize findings</li>
                    </ul>
                </div>
            </div>

            <div >
                <h2 className='text-[24px] font-Akshar  pb-[16px]'>TALKING TO PROSPECTIVE CUSTOMERS</h2>
                <article className='text-[16px] font-Roboto lg:text-[20px]'>
                To gather more qualitative data about our potiential user’s motivations,  pain points, and needs, I 
                interviewed 4 different people who are constant readers of web novels and listeners of 
                audiobooks.
                </article>
            </div>
            <ul className='pt-[24px] pb-[16px] font-bold font-Roboto text-[#5D9771] text-[14px] lg:text-[16px]  flex flex-row gap-[32px] lg:gap-[52px] '>
                <li className='max-w-[400px] bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>
                “I enjoy listening to audiobooks but
                the subscription fee is way too high”
                                                                    -N
                </li>

                <li className='max-w-[400px]  bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>
                “Audiobooks are great,  I do not have to strain
                my eyes reading  because i can just listen”
                                                                                  -I
                </li>
            </ul>
            <ul className='pt-[24px] font-bold  font-Roboto text-[#5D9771]  pb-[16px] text-[14px] lg:text-[16px] flex flex-row gap-[32px] lg:gap-[52px] '>
                <li className='max-w-[400px]  bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>
                    “Because of my busy schedule i am
                    unable to sit down to read a book,
                    but with audiobooks, i can listen on the 
                    go.”
                                                                        -K
                </li>
                <li className='max-w-[400px]  bg-white p-[8px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>
                    “I wish the book continued from where
                    i stopped reading.”
                                                                        -C
                </li>
            </ul>

            <div className='py-[48px]'>
                <h2  className='text-[24px] font-Akshar  pb-[16px]'>INSIGHTS AND ISSUES</h2>
                <ul className='font-Roboto text-[16px] lg:text-[20px]'>
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
                </ul>
                <a href='https://docs.google.com/presentation/d/1NuOk9_btsxO4KuogxtoCYgFALSe1BqAaN6A5oxlOePA/edit?usp=sharing'>
                    <button  className='w-[232px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] transform hover:translate-y-[-5px]'>
                        VIEW RESEARCH SLIDE DECK
                    </button>
                </a>
            </div>

            <div className='pt-[71px]'>
                <h1 className='text-center font-Akshar font-bold pb-[24px] text-[40px]'>INFORMATION ARCHITECTURE</h1>
       
                <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>SITE MAP</h2>
                <article className='font-Roboto text-[16px] lg:text-[20px] pb-[24px] '>
                    I created a site map for Audiolize that incorporated the core content for listening to audiobooks,
                    adding downloaded audiobooks into Audiolize, and choosing the voice for the reader.
                </article>
                <img className='py-[24px] border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] ' src={Flow} alt='user flow'/>
                <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>USER FLOW</h2>
                <article className=' font-Roboto text-[16px] lg:text-[20px] pb-[24px]'>
                    Using the sitemap, I created a user flow for a scenario where the user wants to save and listen to an audio book and when 
                    a user wants to convert their PDF to an audio book 
                </article>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]  py-[24px]' src={Flow2} alt='userflow2'/>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={Flow3}/>
            </div>

            <div className='pt-[71px]'>
                <h1 className='text-center font-Akshar font-bold text-[40px] pb-[24px]'>SKETCHES AND WIREFRAMES</h1>
                <img className='py-[24px] border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] '  src={Sketch} alt='audiolizeImg'/>
                <p className='pt-[16px] text-[#9ca3af] text-[16px]'>Brainstorm sketches on early concepts of content layout </p>
                <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>WIREFRAMES</h2>
                <article className='font-Roboto text-[16px] lg:text-[20px] pb-[24px]'>    
                When creating the wireframe of Audiolize, I was more focused on the layout as it was said to be my weakness and one of the most challenging aspects of design for me.
                I was meticulous about things like spacing, grids and colums, icons and more, my end goal was to create a layout that was not only user friendly but also aesthetically 
                pleasing
                </article>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={Wireframe}/>

                <article className='font-Roboto text-[16px] lg:text-[20px]'>
                  
                </article>

            </div>

            <div className='pt-[71px]'>
                <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>DESIGN SYSTEM</h2>
                <article className='font-Roboto text-[16px] lg:text-[20px] pb-[24px]'>    
                Using the wireframes layouts, i created a design system to ease the flow of creation and provide uniformity when creating the high fidelity design,
                Here i was able to decide on what colour pallete to use for Audiolize.
                </article>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={DesignSystem}/>

            </div>

            <div className='pt-[71px]'>
                <h1 className='text-center font-Akshar font-bold text-[40px] pb-[24px]'>HIGH FIDELITY DESIGNS</h1>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={Final} alt='final design'/>
            </div>

            <div className='pt-[71px]'>
            <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>LOOKING FOWARD</h2>
                <article className='font-Roboto text-[16px] lg:text-[20px] pb-[24px]'>    
                Audiolize is a project i decided to venture into as my submition project for entry level bootcamp,
                It is a project which i also fonud to solve a personal problemm of mine so going foward my next steps with 
                audiolize will most likely be to 
                </article>
                <ul className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px]'>1.) Improve on the user interface and layout of Audiolize.</li>
                    <li className='pb-[8px]'>2.) Develop a functioning app for Audiolize.</li>
                </ul>
            </div>


            <div className='pt-[71px]'>
            <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>PERSONAL LEARNINGS</h2>
                <ul className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px] font-bold'>1.) Research first, Deaign after</li>
                    <article className='pb-[48px]'>
                    One major mistake I made when carrying out this project was not having a proper flow of research before 
                    working on the sketches and the wireframes, this lead me to go back and make changes based on user needs which 
                    consumed more time. On working on this project, I have have been able to make out the workflow from the research to the design.
                    </article>           
                </ul>

                <ul className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px] font-bold'>2.) Comunicating with users and interviewing users</li>
                    <article className='pb-[48px]'>
                    During this project, i had to talk to several people who had used audiobook applications, i discovered features they would like
                    in an audiobook app which i was able to implement, I also enjoyed talking to people from different diversities.
                    </article>   
                </ul>

                <ul className='font-Roboto text-[16px] lg:text-[20px]'>
                    <li className='pb-[8px] font-bold'>3.)Working against time</li>
                    <article className='pb-[48px]'>
                    For our project for entry level bootcamp we had a time limit which i had to work with, it was challenging but i was able to deliver 
                    before the deadline.
                    </article>   
                </ul>
            </div>

            <div className='pt-[71px]'>
                <h1 className='text-center font-Akshar font-bold text-[40px] pb-[24px]'>CERTIFICATE AND RECOMMENDATION</h1>
                <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>CERTIFICATE</h2>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={Cert} alt='Certificate'/>
                <h2   className='text-[24px] font-Akshar pt-[48px]  pb-[16px]'>LETTER OF RECOMMENDATION</h2>
                <img className='border-white border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={Ref} alt='final design'/>
            </div>
            
            </div>
        </>
    )
}

