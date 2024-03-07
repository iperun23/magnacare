import BackgroundWrapper from "@/components/backgroundWrapper";
import Banner from "@/components/banner";
import DetailsContainer from "@/components/detailsContainer";
import EmailContainer from "@/components/emailContainer";
import HeroContent from "@/components/heroContent";
import NavigationBar from "@/components/navigationbar";
import SectionContainer from "@/components/sectionContainer";

const Home = () => {
	return (
		<>
			<Banner />
			<SectionContainer>
				<BackgroundWrapper>
					<NavigationBar />
					<HeroContent />
					<EmailContainer />
				</BackgroundWrapper>
				<DetailsContainer />
			</SectionContainer>
		</>
	);
};

export default Home;
