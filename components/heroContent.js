import Image from "next/image";

const HeroContent = () => {
	return (
		<div className="hero_container" aria-label="Main">
			<header className="hero_text hero_choose-text">Choose your</header>
			<div className="hero_text hero_access-text">
				<span className="hero_acc">ACC</span>
				<br />
				<span className="hero_ess">ESS</span>
			</div>
			<div>
				<p className="hero_expand-text">
					Expand your provider network <em>anywhere </em>
					in the country.
					<br />
					Or lease just the network locations you need. With
					<br />
					MagnaCare Access, <strong>the choice is yours.</strong>
				</p>
			</div>
			<div className="hero_top-right-image">
				<Image
					src="/top-right-image.png"
					alt="Doctor examining files"
					width={332.77}
					height={391.66}
				/>
			</div>
			<div className="hero_bottom-left-image">
				<Image
					src="/bottom-left-image.png"
					alt="Nurse performing a check up"
					width={369.24}
					height={508.87}
				/>
			</div>
			<div className="hero_overlay-image hero_acc-overlay" aria-hidden="true">
				<Image
					src="/R52.png"
					alt="acc text of access"
					width={709.4}
					height={79.54}
				/>
			</div>
			<div className="hero_overlay-image hero_ess-overlay" aria-hidden="true">
				<Image
					src="/R51.png"
					alt="ess text of access"
					width={709.4}
					height={86.51}
				/>
			</div>
		</div>
	);
};

export default HeroContent;
