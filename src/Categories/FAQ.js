import React from 'react';

const FAQ = () => {
    return (
        <div className='  h-full'>
        <header className='lg:text-6xl  sm:text-4xl text-center  text-green-500 font-bold'>
                  <h2>Frequently Asked Questions</h2>
        </header>

            <div className='grid xl:grid-cols-2 md:grid-cols-1 w-2/3 mx-auto gap-8 text-black  mt-8'>
              <div className='bg-slate-100 p-4 rounded-xl'>
                  <h2 className='text-3xl font-semibold'>What this site about?</h2>
                  <p>Learning Hero is E-learning platform.Where you can learn Essential topics about web-development such as javasscript,html,css react js etc white an affortable price.</p>
              </div>
               <div className='bg-slate-100 p-4 rounded-xl'>
                   <h1 className='text-3xl font-semibold'>How many videos are there?</h1>
                  <p>Well each course have 400 + videos,12 assignment Weekly Zoom,24/7 support session,Quality videos eta.</p>
              </div>
               <div className='bg-slate-100 p-4 rounded-xl'>
                  <h2 className='text-3xl font-semibold'>Why learning Hero?</h2>
                 <p>We are in this particualy stage since 2015.We have came a long  way .Our support session is top notch.</p>
              </div>
                <div className='bg-slate-100 p-4 rounded-xl'>
                   <h2 className='text-3xl font-semibold'>Why learn Web-development?</h2>
                  <p>Nowa-day web development is a really good skill to have.A expirienced web developer earns so much money that  uou can think .Also you can use it for your personally work.</p>
               </div>
            </div>
        </div>
    );
};

export default FAQ; 