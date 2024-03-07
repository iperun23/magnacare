import Image from "next/image";

const DetailsContainer = () => {
	return (
		<div className="details_main_container" role="complementary">
			<div className="details_container">
				<div className="details_left_image">
					<Image
						src="/nurseimage.png"
						alt="Nurse smiling"
						width={928.24}
						height={672.98}
					/>
				</div>
				<div className="details_right_image">
					<Image
						src="/dots.png"
						alt="square of dots"
						width={254.13}
						height={264.09}
					/>
				</div>
			</div>
			<section className="details_second_container">
				<h2>
					Need to offer <em>nationwide</em> access to health care providers?
				</h2>
				<div className="details_text-and-svg_container">
					<p>
						MagnaCare has an extensive PPO network that includes all 50 states
						and Puerto Rico, with top-rated doctors and hospitals, as well as
						inpatient and outpatient services such as rehab centers, urgent care
						centers and ambulatory surgery centers.
					</p>
					<div className="details_svg_container">
						<svg
							width="100%"
							height="395.2"
							viewBox="0 0 640 395.2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<image href="/usa.svg" width="640" height="395.2" />
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 50 100"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<image href="/circle.svg" width="100%" height="100%" />
							</svg>
						</svg>
					</div>
				</div>
				<div className="details_contact-us">
					<a href="#">CONTACT US</a>
				</div>
			</section>
		</div>
	);
};

export default DetailsContainer;
