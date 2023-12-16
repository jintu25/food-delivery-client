import BannerSection from "../Shared/BannerSection/BannerSection";
import image from '../../assets/contact/contact.jpg'
import ContactSec from "../Home/ContactSec/ContactSec";
import Title from "../../Components/HeadTitle/Title";

const Contact = () => {
    return (
        <div>
            <Title title='tastyDash | contactUs'></Title>
             <BannerSection img={image} content={'Contact Us'}></BannerSection>
             <ContactSec></ContactSec>
        </div>
    );
};

export default Contact;