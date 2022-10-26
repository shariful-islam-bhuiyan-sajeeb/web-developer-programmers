import React from 'react';
import { Link } from 'react-router-dom';
import programming from '../../image/programming.jpg'

const Header = () => {
    return (
        <div>
            <div className="navbar shadow-2xl px-10 mb-10 sticky z-20">
                <div className="flex-1">
                    <img className='w-14 mr-5 rounded-full' src={programming} alt="" />
                    <a className="btn btn-ghost normal-case text-xl hover:bg-emerald-400 text-white  ">Web Programmers</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-white p-0">
                        <li><Link to='/course'>Course</Link> </li>
                        
                        <li tabIndex={0}>
                            <Link to='/FAQ'>FAQ</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link to='/blog'> Blog</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;