import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../ContactSec/ContactSec";
import Feature from "../Feature/Feature";
import HeadTitle from "../HeadTitle/HeadTitle";
import PopularItem from "../PopularItem/PopularItem";
import Testimonial from "../Testimonial/Testimonial";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../../Order/OrderTab/OrderTab";
import SubTitle from "../../../Components/SubTitle/SubTitle";
import ContactSec from "../ContactSec/ContactSec";
import Title from "../../../Components/HeadTitle/Title";

const Home = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Title title='tastyDash | home'></Title>
      <Banner></Banner>
      <Category></Category>
      <HeadTitle></HeadTitle>
      <PopularItem></PopularItem>
      <div className="m-auto max-w-screen-xl">
        <SubTitle
          subHeading={"---Should Try---"}
          heading={"CHEF RECOMMENDS"}></SubTitle>
        <OrderTab items={offered}></OrderTab>
      </div>
      <Feature></Feature>
      <ContactSec></ContactSec>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
