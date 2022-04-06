import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../Images/onBech.jpg'


const Home = () => {
    return (
        <div className='w-full pl-64 bg-gradient-to-r from-cyan-100 via-slate-300 to-blue-100 pb-36'>
            {/* this is tittle section */}
            <div className='flex justify-around pt-20'>
                <div>
                    <h3 className='text-2xl text-slate-600 font-[arial]'>Hello! I am</h3>
                    <h1 className='font-extrabold text-6xl text-slate-500 cursor-pointer'>Sujon Sheikh</h1><br />
                    <h2 className='text-3xl font-bold text-gray-600 font-[roboto]'>Full Stack Developer</h2>

                    <div className='space-y-2 mt-4'>
                        <li className='text-xl font-semibold text-emerald-900 cursor-pointer hover:text-pink-600'>Web Developer</li>
                        <li className='text-xl font-semibold text-emerald-900 cursor-pointer hover:text-pink-600'>Programmer</li>
                        <li className='text-xl font-semibold text-emerald-900 cursor-pointer hover:text-pink-600'>Frontend Developer</li>
                        <li className='text-xl font-semibold text-emerald-900 cursor-pointer hover:text-pink-600'>MERN Stack Developer</li> <br /> <br />
                    </div>

                    {/* this is button section */}
                    <div>
                     {/* button section */}
                     <Link className='space-x-4 text-xl font-semibold border-pink-100 shadow-lg rounded-lg text-white px-4 py-2 bg-pink-700 mx-2 hover:bg-pink-600' to='/resume'>Get Resume</Link>
                    
                    <Link className='space-x-4 text-xl font-semibold border-pink-100 shadow-lg rounded-lg text-white px-4 py-2 bg-purple-700 mx-2 hover:bg-purple-600' to='/contact'>Contact</Link>
                    </div>

                </div>

                <div className='w-3/6 shadow-2xl rounded-2xl'>
                <img className='border rounded-2xl' src={Picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;