import React from "react";

export default function TextInput({
	icon,
	otherStyles,
	placeholder,
	type,
	label,
	register,
	errors,
	registerOptions,
}) {
	return (
		<>
			<label
				className={
					"input input-bordered flex items-center gap-2 " +
					otherStyles
				}
			>
				{icon}
				<input
					label={label}
					type={type}
					className="grow"
					placeholder={placeholder}
					{...register(label, registerOptions)}
				/>
			</label>
			{errors[label] && (
				<div className="text-red-500">{errors[label].message}</div>
			)}
		</>
	);
}
