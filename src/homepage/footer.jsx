function Footer() {
    return (
        <>
        <div className= "px-[16px] py-[102px] lg:px-[135px]">
        <div className="flex gap-[32px] flex-col lg:flex-row lg:gap-[82px]">
            <div>
                <p className=" font-Akshar text-[32px] text-white lg:text-40">PROJECTS</p>
                <p className="pt-[16px] text-[gray] font-Roboto text-[24px] hover:text-white"><a href="/audiolize">Audiolize</a></p>
            </div>

            <div>
                <p className=" font-Akshar text-[32px] text-white lg:text-40">ABOUT</p>
                <p className="pt-[16px] text-[gray] font-Roboto text-[24px] hover:text-white">About Iyanu</p>
                <p className="pt-[8px] text-[gray] font-Roboto text-[24px] hover:text-white"><a href="https://www.linkedin.com/in/ahmed-iyanuoluwa-b4111a26a/">Linkedin</a></p>
            </div>

            <div>
                <p className=" font-Akshar text-[32px] text-white lg:text-40">CONTACT</p>
                <p className="pt-[16px] text-[gray] font-Roboto text-[24px] hover:text-white">Email</p>
            </div>
        </div>

        </div>

        </>
    )
}

export default Footer;