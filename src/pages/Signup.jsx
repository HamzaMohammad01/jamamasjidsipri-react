import React, { useState } from "react";

import { registerNewUser } from "../api/users";
import Title from "../components/Title";
import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEnvelope, FaKey, FaUser, FaUserPlus } from "react-icons/fa";
import MyFooter from "../components/MyFooter";

function Signup() {
	const schema = yup.object().shape({
		name: yup
			.string()
			.min(3, "Name should be minimum of 3 characters")
			.max(50, "Name can be maximum of 50 characters")
			.required("Name is required"),
		email: yup
			.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: yup
			.string()
			.min(8, "Password should be minimum of 8 characters")
			.matches(
				/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
				"Password must contain at least one uppercase letter, one lowercase letter, and one number"
			)
			.required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [progress, setProgress] = useState(0);

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const response = await registerNewUser(data, (progress) =>
				setProgress(progress)
			);
			localStorage.setItem("token", response.headers["x-auth-token"]);
			if (response && response.status === 400) {
				setError("email", {
					type: "manual",
					message: response.data,
				});
			} else {
				navigate("/");
			}
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return (
		<>
			<Navbar />
			<Title text="SIGNUP" />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-5 px-2 space-y-3 flex flex-col"
			>
				<TextInput
					label={"name"}
					placeholder={"Name"}
					icon={<FaUser className="w-4 h-4 opacity-70" />}
					register={register}
					registerOptions={{ required: true }}
					errors={errors}
				/>
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
					<FaUserPlus />
					<input type="submit" className="hidden" />
				</button>
			</form>
			<div className="mt-7 text-text-0 text-xl mx-auto lg:absolute lg:bottom-5 lg:right-1/3 text-center">
				<span>Already account yet? </span>
				<span
					className="text-[dodgerblue] cursor-pointer"
					onClick={() => navigate("/login")}
				>
					Login
				</span>
			</div>
			<MyFooter />
		</>
	);
}

export default Signup;
