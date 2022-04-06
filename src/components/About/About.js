import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../Images/standPic.JPG'

const About = () => {
    return (
        <div className='pl-60 bg-gradient-to-r from-cyan-100 via-slate-200 to-orange-100'>

           <div className='py-16 flex justify-evenly items-center'>

               {/* about section */}
                <div className='w-[500px]'>
                    <h1 className='text-3xl font-semibold font-[roboto] text-slate-500 hover:underline cursor-pointer'>About Me !</h1><br />

                    <p className='text-2xl font-[poppins] text-slate-600'>Hello! I'm Sujon Sheikh, a passionate web developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am study bachelor's from Magura H.S.S goverment collage Magura Bangladesh. I am available for any kind of job opportunity that suits my interests.</p>
                    <br /><br />

                    {/* button section */}
                    <Link className='space-x-4 text-xl font-semibold border-pink-100 shadow-lg rounded-lg text-white px-4 py-2 bg-pink-700 mx-2 hover:bg-pink-600' to='/resume'>Get Resume</Link>
                    
                    <Link className='space-x-4 text-xl font-semibold border-pink-100 shadow-lg rounded-lg text-white px-4 py-2 bg-purple-700 mx-2 hover:bg-purple-600' to='/contact'>Contact</Link>
                </div>

               {/* about image section */}
                <div>
                    <img className='w-80 border h-90 rounded-2xl shadow-2xl' src={picture} alt="" />
                </div>
           </div>
            
        </div>
    );
};

export default About;