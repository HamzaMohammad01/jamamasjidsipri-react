import React from "react";
import { FaMosque } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Title({
	otherStyles,
	text = "NAMAZ TIME",
	icon,
	onPress,
}) {
	const navigate = useNavigate();
	const handleOnClick = () => navigate("/");
	return (
		<div
			className={`text-primary text-6xl flex font-primary justify-center items-end xs:text-4xl cursor-pointer ${otherStyles}`}
			onClick={handleOnClick}
		>
			{icon && <FaMosque className="text-6xl" />}
			<span className="ml-2">{text}</span>
		</div>
	);
}
