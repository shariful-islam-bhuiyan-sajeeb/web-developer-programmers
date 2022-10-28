import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Login = () => {
	const [error,setError]=useState('');
	const { singInUser, providerLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';


	const loginUser = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		singInUser(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
				setError('');
				form.reset();
				navigate(from,{replace: true});
			})
			.catch(error => {
				console.error(error);
				setError(error.message)
			});
	};

	const googleProvider = new GoogleAuthProvider();
	const continueWithGoogle = () => {
		providerLogin(googleProvider)
			.then(result => {
				const user = result.user;
				console.log(user);
				navigate("/");
			})
			.catch(error => {
				console.error(error);
			});
	};
	const githubProvider = new GithubAuthProvider();
	const continueWithGithub = () => {
		providerLogin(githubProvider)
			.then(result => {
				const user = result.user;
				console.log(user);
				navigate("/");
			})
			.catch(error => {
				console.error(error);
			});
	};
	return (
		<div className="flex justify-center">
			<div className="bg-white rounded shadow-2xl p-7 sm:p-10">
				<h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
					Login
				</h3>
				<form onSubmit={loginUser}>
					<div className="mb-1 sm:mb-2">
						<label htmlFor="email" className="inline-block mb-1 font-medium">
							E-mail
						</label>
						<input
							placeholder="Type your Email Id"
							required
							type="text"
							className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
							id="email"
							name="email"
						/>
					</div>
					<div className="mb-1 sm:mb-2">
						<label htmlFor="password" className="inline-block mb-1 font-medium">
							Password
						</label>
						<input
							placeholder="type your password"
							required
							type="password"
							className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
							id="password"
							name="password"
						/>
					</div>
					<div className="mt-4 mb-2 sm:mb-4">
						<button
							type="submit"
							className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-green-600 focus:shadow-outline focus:outline-none">
							Login
						</button>
					</div>
					<p className="text-xs text-gray-600 sm:text-sm">
						Don't have an Account ? please{" "}
						<Link
							className="text-blue-400 border-b-2 font-bold hover:border-none border-gray-400"
							to="/register">
							Register
						</Link>
					</p>
					<div className="text-center text-gray-600">
						<p>-----or-----</p>
						<div className="flex gap-4 justify-center pt-3">
							<p>
								<button onClick={continueWithGoogle}>
									<FaGoogle />
								</button>
							</p>
							<p>
								<button onClick={continueWithGithub}>
									<FaGithub />
								</button>
							</p>
						</div>
						 <h3 className="text-red-600"> {error}</h3>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
<h2> login page.</h2>;
