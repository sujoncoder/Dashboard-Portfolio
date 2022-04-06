import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../../../Images/smile.jpg'
import { ImHome } from 'react-icons/im';
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills} from 'react-icons/gi';
import { FaProjectDiagram} from 'react-icons/fa';
import { MdContactMail} from 'react-icons/md';
import { ImBlog} from 'react-icons/im';
import { CgMoreR} from 'react-icons/cg';

const Navigation = () => {
    return (
        <div className='fixed top-0 left-0 h-full w-64 bg-gray-600'>
            {/* this is image section */}
            <div className='pt-4'>
                <img className='h-40 w-40 mx-auto rounded-full border-4 border-gray-300 shadow-2xl cursor-pointer' src={Photo} alt="" />
            </div> <br />

            {/* this is navigation section */}
            <div className='font-[roboto] uppercase'>
               <Link className='flex text-xl font-semibold text-white items-center my-1 px-10 py-3 bg-slate-700 hover:bg-slate-800 focus:bg-slate-900 ' to='/home'><ImHome className='w-10 mr-2'/>Home</Link>

               <Link className='flex text-xl font-semibold text-white items-center my-1 px-10 py-3 hover:bg-slate-800 focus:bg-slate-900 ' to='/about'><SiAboutdotme className='w-10 mr-2'/>About</Link>

               <Link className='flex text-xl font-semibold text-white items-center my-1 px-10 py-3 hover:bg-slate-800 focus:bg-slate-900 ' to='/skill'><GiSkills className='w-10 mr-2'/>Skill</Link>

               <Link className='flex text-xl font-semibold text-white items-center my-1 px-10 py-3 hover:bg-slate-800 focus:border-l-pink-500 focus:bg-slate-900 ' to='/portfolio'><FaProjectDiagram className='w-10 mr-2'/>Portfolio</Link>

               <Link className='flex text-xl font-semibold text-white items-center my-1 px-10 py-3 hover:bg-slate-800 focus:bg-slate-900 ' to='/contact'><MdContactMail className='w-10 mr-2'/>Contact</Link>

               <Link className='flex text-xl font-semibold text-white items-center my-1 px-10 py-3 hover:bg-slate-800 focus:bg-slate-900 ' to='/blog'><ImBlog className='w-10 mr-2'/>Blog</Link>

               <Link className='flex text-xl font-semibold text-white items-center my-1 px-10 py-3 hover:bg-slate-800 focus:bg-slate-900 ' to='/more'><CgMoreR className='w-10 mr-2'/>More</Link>
            </div>
        </div>
    );
};

export default Navigation;