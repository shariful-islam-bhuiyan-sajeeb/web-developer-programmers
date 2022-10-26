import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories , setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/learn')
        .then(res => res.json())
        .then(data =>setCategories(data));
    },[])
    

    return (
        <div className='text-white text-xl font-semibold'>
            <h2>All Categories :{categories.length}</h2>
        </div>
    );
};

export default Categories;