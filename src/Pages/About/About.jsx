
import Title from '../../Components/HeadTitle/Title';
import image from '../../assets/about/hero_about_us.jpg'
import BannerSection from '../Shared/BannerSection/BannerSection';
import AboutProduct from './AboutProduct/AboutProduct';
import WhyChoose from './NewMenu/WhyChoose';
import NewMenu from './NewMenu/WhyChoose';
const About = () => {
    return (
        <div>
            <Title title='tastyDash | aboutUs'></Title>
            <BannerSection img={image} content={'About Us'}></BannerSection>
            <AboutProduct></AboutProduct>
            {/* <NewMenu></NewMenu> */}
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default About;