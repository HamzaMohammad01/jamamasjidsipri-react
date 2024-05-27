import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import MyFooter from "../components/MyFooter";
import Map from "../components/Map";

export default function Contact() {
	return (
		<>
			<Navbar />
			<Title text="Contact" />
			<div className="w-full p-5 space-y-5 flex">
				<div className="max-w-md mx-auto">
					<div className="daisy-card p-8 space-y-6 bg-primary rounded-2xl mb-10">
						<h2 className="daisy-heading text-2xl font-bold">
							Contact Details
						</h2>
						<div className="space-y-4">
							<div>
								<label className="daisy-label block text-sm font-bold">
									Name
								</label>
								<p className="daisy-text block">
									Jama Masjid, Sipri Bazar Jhansi
								</p>
							</div>
							<div>
								<label className="daisy-label block text-sm font-bold">
									Address
								</label>
								<p className="daisy-text block">
									11, Tandon Rd, Chaman Ganj, Sipri Bazar,
									Jhansi, Uttar Pradesh 284003
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <Map /> */}
				<Map />
			</div>
			<MyFooter />
		</>
	);
}
