import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {
	const course = useLoaderData();
	const { Duration, id, picture, rating, title, totalView, lecture, category } =
		course;
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className="flex mx-2 justify-center">
			<div className="card sm:w-96 bg-base-100 shadow-white shadow-xl">
				<div ref={componentRef}>
					<figure>
						<img className="h-52 w-full" src={picture} alt={title} />
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							{title}
							<div className="badge badge-secondary">NEW</div>
						</h2>{" "}
						<p>Category: {category}</p>
						<p>Lectures: {lecture} videos</p> <p>Durations: {Duration}</p>
						<div className=" flex justify-between items-center pt-2">
							<div>
								<button className="border-b  text-gray-400 hover:text-white py-1 px-4 rounded">
									Get Premium Courses
								</button>
							</div>
							<div className="card-actions justify-end">
								<div className="badge badge-outline">{rating}</div>
								<div className="badge badge-outline">{totalView}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="p-2 px-4 flex justify-between">
					<Link to={`/course`}>
						<button className="bg-orange-500 text-gray-900 py-1 px-4 rounded">
							back courses
						</button>
					</Link>
					<button
						onClick={handlePrint}
						className="bg-orange-500 text-gray-900 py-1 px-4 rounded">
						Download pdf
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
