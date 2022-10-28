import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import programming from "../../image/programming.jpg";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const Header = () => {
	const [open, setOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	return (
		<div>
			<div className="navbar  shadow-2xl flex justify-between px-2 sm:px-10 mb-10 sticky z-20">
				<div>
					<img
						className="sm:w-14 w-8 sm:mr-4 rounded-full"
						src={programming}
						alt=""
					/>
					<Link
						to="/"
						className="btn btn-ghost normal-case sm:text-xl hover:bg-emerald-400 text-white  ">
						Web Programmers
					</Link>
				</div>

				<div>
					<ul
						className={`md:flex left-0 md:bg-transparent bg-gray-700  w-full justify-center duration-500 ease-in-out  md:static absolute gap-5 ${
							open ? "top-16 p-4   rounded" : "-top-32"
						}`}>
						<li>
							<Link to="/course">Course</Link>{" "}
						</li>

						<li tabIndex={0}>
							<Link to="/FAQ">FAQ</Link>
						</li>
						<li tabIndex={0}>
							<Link to="/blog"> Blog</Link>
						</li>
					</ul>
					<div className="md:hidden" onClick={() => setOpen(!open)}>
						{open ? (
							<>
								<FaTimes />
							</>
						) : (
							<>
								<FaBars />
							</>
						)}
					</div>
					<div className="pl-4 flex items-center gap-3">
						<div>
							{user?.uid ? (
								<div className="mr-2">
									<button onClick={logOut}>LogOut</button>
								</div>
							) : (
								<div>
									<Link to="/login" className="mr-2">
										Login
									</Link>
									<Link to="/register" className="mr-2">
										Register
									</Link>
								</div>
							)}
						</div>
						<div className="cursor-pointer w-10">
							{user?.uid ? (
								<div>
									<img
										title={user.displayName}
										className="w-10 h-10  rounded-full"
										src={user?.photoURL}
										alt=""
									/>
								</div>
							) : (
								<div title="No user found">
									<FaUser />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
