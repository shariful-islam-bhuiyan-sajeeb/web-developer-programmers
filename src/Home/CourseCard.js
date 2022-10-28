import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
	console.log(course);

	const { Duration, id, picture, rating, title, totalView, category } = course;
	return (
		<div className="card mx-3 sm:w-96 bg-base-100 shadow-white shadow-xl">
			<figure>
				<img className="h-52 w-full" src={picture} alt={title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">NEW</div>
				</h2>

				<div className=" flex justify-between items-center pt-2">
					<div>
						<Link to={`/details/${id}`}>
							<button className="bg-orange-500 text-gray-900 py-1 px-4 rounded">
								details
							</button>
						</Link>
					</div>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">{rating}</div>
						<div className="badge badge-outline">{totalView}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
