
import image from '../../assets/about/hero_about_us.jpg'
import BannerSection from '../Shared/BannerSection/BannerSection';
const About = () => {
    return (
        <div>
            <BannerSection img={image} content={'About Us'}></BannerSection>
        </div>
    );
};

export default About;