import React from "react";
import { FaBell, FaRegBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeChange from "../components/ThemeChange";

export default function Navbar() {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<details className="dropdown">
					<summary
						// tabIndex={0}
						// role="button"
						className="btn btn-ghost btn-circle"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</summary>
					<ul
						// tabIndex={0}
						className="menu menu-lg dropdown-content mt-3 bg-transparent backdrop-blur font-bold z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link to={"/"}>Namaz Time</Link>
						</li>
						<li>
							<Link to={"/about"}>About</Link>
						</li>
						<li>
							<Link to={"/contact"}>Contact</Link>
						</li>
						<li>
							<Link to={"/donate"}>Donate</Link>
						</li>
						<li>
							<Link to={"/login"}>
								<button className="btn btn-primary">
									<FaUser className="h-5 w-5" />
									Login
								</button>
							</Link>
						</li>
					</ul>
				</details>
			</div>
			<div className="navbar-center">
				<Link to={"/"} className="btn btn-ghost text-xl flex">
					Jama Masjid
					<span className="text-xs">Sipri Bazar</span>
				</Link>
			</div>
			<div className="navbar-end">
				<ThemeChange />
				<button className="btn btn-ghost btn-circle">
					<div className="indicator">
						<FaRegBell className="h-5 w-5" />
						<span className="badge badge-xs badge-primary indicator-item"></span>
					</div>
				</button>
			</div>
		</div>
	);
}
