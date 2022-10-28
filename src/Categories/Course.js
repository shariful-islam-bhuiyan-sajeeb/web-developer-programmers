import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Home/CourseCard";

const Course = () => {
	const courses = useLoaderData();

	return (
		<div className="flex justify-center">
			<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 ">
				{courses.map(course => (
					<CourseCard key={course.id} course={course}></CourseCard>
				))}
			</div>
		</div>
	);
};

export default Course;
