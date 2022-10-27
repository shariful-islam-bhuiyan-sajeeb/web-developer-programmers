import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const course = useLoaderData()
    console.log(course);

    return (
        <div>
            <h2>all course.{course.length}</h2>
        </div>
    );
};

export default Categories;