import React from 'react'
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

function chatbot() {
    return (
        <>
            <Navbar/>
        <div className={'flex flex-col items-center mt-[-8%] min-h-screen'}>
            <div className={"mt-[20%]"}>
                <h1 className={'mx-auto text-amber-50 text-6xl'}>Ask ScamSensei Anything</h1>
            </div>

            <div className={'h-[5%] w-[40%] bg-blue-400 flex flex-row rounded-2xl justify-end mt-auto py-5'}>
                <div className={'pr-[40%]'}>
                    <p>Search here</p>
                </div>
                <div className={'pr-[3%]'}> <Image src={'/chatbot/search.png'} alt={"search"} width={20} height={20} /></div>
            </div>
        </div>
        </>
    )
}


export default chatbot