import React from 'react';
import { FaGithub,FaFacebook,FaLinkedinIn } from 'react-icons/fa';


const Contact = () => {
    return (
        <div className='pl-64 h-full bg-gradient-to-r from-cyan-100 via-orange-100 to-pink-100'>

        <div className='flex justify-evenly'>
           <div className='w-3/6 pt-40'>
           <h1 className='text-3xl underline underline-offset-8 hover:text-slate-800 cursor-pointer text-slate-600 font-bold pt-8'>Contact With Me</h1><br />

            <p className='text-2xl text-slate-700 font-[poppins] font-medium'>
            I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
            </p><br />

            <div className='flex space-x-4'>
                    <a href="https://www.facebook.com/"><FaFacebook className='w-10 h-10 text-slate-600 hover:text-slate-800'/></a>
                    <a href="https://github.com/sujonphero"><FaGithub className='w-10 h-10 text-slate-600 hover:text-slate-800'/></a>
                    <a href="https://www.linkedin.com/in/sujon-sheikh/"><FaLinkedinIn className='w-10 h-10 text-slate-600 hover:text-slate-800'/></a>
            </div>
           </div>

        {/* form section here */}
            <div className='w-6/8 pt-20'>
                <h2 className='text-xl font-semibold text-slate-600 py-2'>Name</h2>
                <input className='w-80 h-10 rounded-lg pl-2 ' type="text" placeholder='Write Your Name' /><br />

                <h2 className='text-xl font-semibold text-slate-600 py-2'>E-mail</h2>
                <input className='w-80 h-10 rounded-lg pl-2 ' type="mail" placeholder='Write Your Email'/><br />

                <h2 className='text-xl font-semibold text-slate-600 py-2'>Subject</h2>
                <input className='w-80 h-10 rounded-lg pl-2 ' type="text" placeholder='Mention Your Subject'/><br />

                <h2 className='text-xl font-semibold text-slate-600 py-2'>Tell Something</h2>
                <textarea className='w-80 h-10 rounded-lg pl-2' placeholder='Write Something'></textarea><br /><br />

                <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-medium px-5 py-2.5 mr-2 mb-2">Send Message</button>
            </div>
        </div>
        </div>
    );
};

export default Contact;