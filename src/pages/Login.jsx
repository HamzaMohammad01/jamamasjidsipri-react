import React, { useState } from "react";

import { login } from "../api/auth.js";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../components/TextInput.jsx";
import Navbar from "../components/Navbar.jsx";
import { FaEnvelope, FaKey } from "react-icons/fa";
import Title from "../components/Title.jsx";
import { FaRightFromBracket, FaRightToBracket } from "react-icons/fa6";
import MyFooter from "../components/MyFooter.jsx";

function Login() {
	const schema = yup.object().shape({
		email: yup
			.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: yup.string().required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const navigate = useNavigate();
	const [progress, setProgress] = useState(0);

	const onSubmit = async (data) => {
		try {
			const response = await login(data, (progress) => {
				setProgress(progress);
			});
			if (response && response.status === 400) {
				setError("email", {
					type: "manual",
					message: response.data,
				});
			} else {
				localStorage.setItem("token", response.data);
				// navigate("/account");
			}
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	return (
		<>
			<Navbar />
			<Title text="LOGIN" />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-5 px-2 space-y-3 flex flex-col"
			>
				<TextInput
					label={"email"}
					placeholder={"Email"}
					icon={<FaEnvelope className="w-4 h-4 opacity-70" />}
					register={register}
					registerOptions={{ required: true }}
					errors={errors}
				/>
				<TextInput
					label={"password"}
					placeholder={"Password"}
					icon={<FaKey className="w-4 h-4 opacity-70" />}
					type={"password"}
					registerOptions={{ required: true }}
					register={register}
					errors={errors}
				/>
				<button className="btn btn-primary self-center text-primary">
					LOGIN
					<FaRightToBracket />
					<input type="submit" className="hidden" />
				</button>
			</form>
			<div className="mt-7 text-text-0 text-xl mx-auto lg:absolute lg:bottom-5 lg:right-1/3 text-center">
				<span>Don’t have an account yet? </span>
				<span
					className="text-[dodgerblue] cursor-pointer"
					onClick={() => navigate("/signup")}
				>
					Create New Account
				</span>
			</div>
			<MyFooter />
		</>
	);
}

export default Login;
