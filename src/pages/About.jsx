
export default function About () {
    return (
        <div className=" px-[16px] lg:px-[135px]"> 
            <div className="flex flex-col items-center">
                <div>
                    <h1 className=" font-Roboto text-[20px] max-w-[867px] text-center lg:text-[40px] font-black pt-[103px] text-white pb-[24px]">
                    Iyanu is a UX designer and a software developer who loves art and creativity
                    </h1>
                </div>

                <div className=" flex flex-col items-center lg:flex-row gap-[32px]">
                    <div className="w-[358px] h-[322px] lg:w-[400px] lg:h-[400px] bg-white"> </div>
                            <div className=" flex flex-col text-white gap-[16px] max-w-[653px] font-Roboto text-[16px] lg:text-[24px]">
                            <article>
                                Iyanu is a freelance UX designer and a software
                                developer with a year of hands on experience,
                                Iyanu has collaborated with talented teams 
                                from Notch cx and Devpally and delivered 
                                exceptional services.
                            </article>

                            <article>
                                As a UX designer, Iyanu specializes in wireframing,
                                prototyping, user research, crafting engaging 
                                mockups and using appealing typography.
                            </article>

                            <article>
                                Beyond Designing and Coding,
                                Iyanu has a passion for 2D animation and 
                                He uses his spare time to create cartoons.
                            </article>
                            
                            <button className='w-[136px] h-[48px] border-2 border-white mt-[32px] hover:bg-white font-Akshar text-[16px] text-white hover:text-black '>
                                VIEW RESUME
                            </button>
                            </div>
                </div>
            
            </div>
        
           


        <div className="mt-[64px] flex flex-col lg:flex-row gap-[16px] lg:justify-between text-[16px] text-white font-Roboto">
            <div>
                <ul>
                    <li className="text-[32px] font-Akshar font-medium">Design skillset</li>
                    <li className="text-[16px] font-Roboto font-normal">Wireframing</li>
                    <li className="text-[16px] font-Roboto font-normal">Interactive Prototyping</li>
                    <li className="text-[16px] font-Roboto font-normal">User Research</li>
                    <li className="text-[16px] font-Roboto font-normal">User Experience design</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className="text-[32px] font-Akshar font-medium">Development skillset</li>
                    <li className="text-[16px] font-Roboto font-normal">HTML</li>
                    <li className="text-[16px] font-Roboto font-normal">Tailwind CSS</li>
                    <li className="text-[16px] font-Roboto font-normal">Javascript</li>
                    <li className="text-[16px] font-Roboto font-normal">React js</li>
                    <li className="text-[16px] font-Roboto font-normal">Angular js</li>
                </ul>
            </div>


            <div>
                <ul>
                    <li className="text-[32px] font-Akshar font-medium">Experience</li>
                    <li className="text-[16px] font-Roboto font-normal">UX designer</li>
                    <li className="text-[16px] font-Roboto font-normal">Software developer</li>
                    <li className="text-[16px] font-Roboto font-normal">2D Animator</li>
                    <li className="text-[16px] font-Roboto font-normal">Graphics designer</li>
                </ul>
            </div>
        </div>

      
        </div>
    )
 } 
