import React from "react";

export default function Map({ height = "450", width = "600", otherStyles }) {
	return (
		<div className="">
			<iframe
				title="address"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5129274926994!2d78.54812087616023!3d25.454542677546275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397771269427c6fd%3A0xc07d3339393a9f26!2zSmFtYSBNYXNqaWQgLSDYrNin2YXYuSDZhdiz2KzYrw!5e0!3m2!1sen!2sin!4v1716642003948!5m2!1sen!2sin"
				width={width}
				height={height}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className={"w-full h-96 rounded-2xl " + otherStyles}
			></iframe>
		</div>
	);
}
