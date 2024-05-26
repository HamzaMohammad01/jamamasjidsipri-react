import React from "react";
import { updateSalah } from "../api/prayertime";

const PrayerTime = ({ time = "5:30", name = "fajr", cb }) => {
	const handleChange = async (e) => {
		let myObj = {};
		myObj[name] = e.target.value;
		let response = await updateSalah(
			myObj,
			(progress) => {
				console.log(progress);
			},
			localStorage.getItem("token")
		);
		console.log(response.data);
		cb();
	};

	return (
		<label
			className="bg-green-500 rounded-2xl px-4 py-2 text-text-0 font-bold h-20 font-secondary cursor-pointer items-center
			md:px-6 md:py-3 lg:px-8 lg:py-4 text-xl xl:px-10 xl:py-5 grid grid-cols-3 gap-5"
		>
			<div className="rounded-full bg-white text-text-950 uppercase w-full h-full px-2 py-1 flex items-center justify-center mr-2">
				<div>{name}</div>
			</div>
			<div className="text-4xl">{time}</div>
			<details className="dropdown">
				<label htmlFor={name}>
					<summary className="btn">Change</summary>
				</label>
				<div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
					<input
						type="time"
						id={name}
						onChange={handleChange}
						// className=""
						style={{ zIndex: 10 }}
					/>
				</div>
			</details>
		</label>
	);
};

export default PrayerTime;
