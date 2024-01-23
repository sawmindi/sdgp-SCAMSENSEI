import React from 'react';
import Image from 'next/image';
import login from '../../public/login/img1.png';

function Page() {
    return (
        <div className="flex flex-row min-h-screen">
            <div className="flex-1 bg-gradient-to-r from-purple-700 to-blue-500 p-8">
                <h1 className=" text-3xl font-bold mb-4 flex justify-center text-blue-500 ">Why Choose Us?</h1>
                <Image src={login} alt="login" className="mx-auto mb-4"/>
                <h2 className="text-white text-2xl font-bold mb-2 justify-center flex">Secure Your Life</h2>
                <h3 className="text-white mb-4 justify-center flex">With an advanced AI and a dedicated community that constantly provides updates on the latest scams,
                    we commit ourselves to protect you from scams, ensuring a safe experience.</h3>
                <p className="text-white mb-8 justify-center flex">Become part of an active community that prevents scams together.</p>
            </div>
            <div className="flex-1 p-[5%] text-blue-950 bg-white justify-center flex flex-col">
                <h1 className="text-4xl font-bold mb-8 ">Get Started Now!</h1>
                <form className="flex flex-col">

                    <input type="text" id="fullName" name="fullName" className="border rounded-md p-2 mb-8"
                           placeholder={'Full Name'}/>


                    <input type="email" id="email" name="email" className="border rounded-md p-2 mb-8"
                           placeholder={'Email'}/>


                    <input type="password" id="password" name="password" className="border rounded-md p-2 mb-8"
                           placeholder={'Password'}/>
                    <input type="password" id="password" name="password" className="border rounded-md p-2 mb-8"
                           placeholder={'Confirm Password'}/>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mb-16 w-3/4 flex mx-auto justify-center">Submit</button>
                    <button  className="bg-white text-black p-2 rounded-md border-2 mt-4 w-3/4 flex mx-auto justify-center">Signup with Google</button>
                    <button  className="bg-white text-black p-2 rounded-md border-2 mt-4 w-3/4 flex mx-auto justify-center">Signup with Facebook</button>
                </form>
            </div>
        </div>
    );
}

export default Page;
