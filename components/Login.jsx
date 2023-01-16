import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "@/features/user";

function Login() {
	const dispatch = useDispatch();
	return (
		<div>
			<h1>
				<button
					onClick={() => {
						dispatch(
							login({ name: "Pedro", age: 20, email: "pedro@gmail.com" }),
						);
					}}
				>
					Login
				</button>
				<button onClick={() => {
					dispatch(logout())
				}}>
					Logout
				</button>
			</h1>
		</div>
	);
}

export default Login;
