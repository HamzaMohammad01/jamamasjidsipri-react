import React from "react";
import { FaMosque } from "react-icons/fa";
import Map from "../components/Map";
import { TbHexagonLetterH } from "react-icons/tb";

export default function MyFooter() {
	return (
		<footer className="footer p-10 bg-base-200 text-base-content">
			<aside>
				<FaMosque className="h-20 w-20 " />
				<p className="text-2xl">
					Jama Masjid, Sipri Bazar, Jhansi
					<br />
					Since 1992
				</p>
			</aside>
			<nav>
				<Map otherStyles={"h-full"} />
			</nav>
			<div className="flex text-center text-lg items-center justify-center">
				Created and Maintained by <br /> Hamza Mohamamd
				<a
					href="//hamzamohammad.vercel.app"
					rel="noreferrer"
					target="_blank"
				>
					<TbHexagonLetterH className="text-[#00A3FF] cursor-pointer h-36 w-36" />
				</a>
			</div>
		</footer>
	);
}
