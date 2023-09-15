import BannerSection from "../Shared/BannerSection/BannerSection";
import image from '../../assets/contact/contact.jpg'
import ContactSec from "../Home/ContactSec/ContactSec";

const Contact = () => {
    return (
        <div>
             <BannerSection img={image} content={'Contact Us'}></BannerSection>
             <ContactSec></ContactSec>
        </div>
    );
};

export default Contact;