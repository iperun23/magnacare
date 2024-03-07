import Image from "next/image";

const NavigationBar = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="Navigation">
			<div className="navbar_logo">
				<Image
					src="/magnacare_logo.png"
					alt="Magnacare Logo"
					width={234.18}
					height={26.16}
				/>
			</div>
			<div className="navbar_menu">
				<div className="navbar_menu-icon">
					<div className="navbar_line"></div>
					<div className="navbar_line-short"></div>
					<div className="navbar_line"></div>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
