import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import MyFooter from "../components/MyFooter";

export default function Contact() {
	return (
		<>
			<Navbar />
			<Title text="Contact" />
			<div className="w-full p-5 space-y-5">
				<div className="max-w-md mx-auto">
					<div className="daisy-card p-8 space-y-6 bg-primary rounded-2xl text-black mb-10">
						<h2 className="daisy-heading text-2xl font-bold">
							Contact Details
						</h2>
						<div className="space-y-4">
							<div>
								<label className="daisy-label block text-sm text-gray-700 font-bold">
									Name
								</label>
								<p className="daisy-text block text-gray-900">
									Jama Masjid, Sipri Bazar Jhansi
								</p>
							</div>
							<div>
								<label className="daisy-label block text-sm font-bold text-gray-700">
									Address
								</label>
								<p className="daisy-text block text-gray-900">
									11, Tandon Rd, Chaman Ganj, Sipri Bazar,
									Jhansi, Uttar Pradesh 284003
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <Map /> */}
				<div className="block">
					<iframe
						title="address"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5129274926994!2d78.54812087616023!3d25.454542677546275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397771269427c6fd%3A0xc07d3339393a9f26!2zSmFtYSBNYXNqaWQgLSDYrNin2YXYuSDZhdiz2KzYrw!5e0!3m2!1sen!2sin!4v1716642003948!5m2!1sen!2sin"
						width="600"
						height="450"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full h-96 rounded-2xl"
					></iframe>
				</div>
			</div>
			<MyFooter />
		</>
	);
}
