import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Categories/Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div className='background-images h-screen'>
            
            <Header></Header>
            <div className='flex'>
            
                <div className='w-48 mr-7'>
                  
                </div>

                <div className='w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
           
            
        </div>
    );
};

export default Main;