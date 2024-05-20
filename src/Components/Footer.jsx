import React from "react";

function Footer() {

    return(
        <div className="w-full ">
            <div className="max-w-screen-xl mx-auto py-10 flex gap32">
                <div className="basis-1/2 ">
                    <h1 className="text-[9rem] font-semi-bold tracking-tight leading-none">RefokuS.</h1>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/2 ">
                        <h1 className="mb-10 text-white capitalize">Socials</h1>
                        {["instagram", "twitter (X?)", "Linkdin"].map((item, index) => <a key={index} className="block mt-2 border-r-2 border-zinc-700 capitalize text-zinc-700">{item}</a>)}
                    </div>
                    <div className="basis-1/2 ">
                        <h1 className="mb-10 text-white capitalize">Socials</h1>
                        {["FaceBook", "Instagram ", "Tiktok"].map((item, index) => <a key={index} className="block mt-2 capitalize text-zinc-700">{item}</a>)}
                    </div>
                    <div className="text-zinc-600  basis-1/1   px-2 rounded-lg">
                        <p className="text-white">Refokus is a forward-thinking web agency that combines Web Design, Webflow Development, and Creative Development to create cool websites that help brands position themselves as market leaders.</p>
                        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" className="w-32 mt-6" alt="" />
                    </div>
                </div>
             

            </div>

            <div className="flex items-center justify-center border-t-2 py-2 border-zinc-700">
                 <p className="text-semiblod gap-2 tracking-tight">Made By Rao Farhad 🖤 Copyright@ 2024</p>
                </div>

        </div>
    )
}
export default Footer;