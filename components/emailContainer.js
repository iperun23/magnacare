import Image from "next/image";

const EmailContainer = () => {
	return (
		<div className="email_container">
			<div className="email_absolute_image">
				<Image
					src="/plus-sign.png"
					alt="Plus Sign"
					width={126.88}
					height={126.88}
				/>
			</div>
			<div className="email_input_container">
				<input
					id="email"
					type="email"
					className="email_input"
					placeholder="Email Address"
				/>
				<button type="submit" className="email_input_learn-more-btn">
					LEARN MORE
				</button>
			</div>
			<p className="email_paragraph">
				{`Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.`}
			</p>
		</div>
	);
};

export default EmailContainer;
