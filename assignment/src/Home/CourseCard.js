import React from 'react';

const CourseCard = ({course}) => {
    console.log(course);

    const { Duration, picture, rating, title, totalView, lecture, category}=course
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{rating}</div>
                    <div className="badge badge-outline">{totalView}</div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;