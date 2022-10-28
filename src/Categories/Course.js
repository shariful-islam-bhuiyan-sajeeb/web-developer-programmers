import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../Home/CourseCard";

const Course = () => {
	const courses = useLoaderData();

	return (
		<div className="flex">
			<div className="w-[450px] h-[350px] py-4   bg-blue-600">
				{
					courses.map(course =>(
						<p className="ml-10  text-xl  text-black mb-2" key={course.id}>
							<Link to={`/details/${course.id}`}>
								 {course.category}
							</Link>
						</p>
					))
				}
			</div>
			<div className="  ">
				<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 ">
					{courses.map(course => (
						<CourseCard key={course.id} course={course}></CourseCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Course;
