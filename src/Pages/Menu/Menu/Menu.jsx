import { Helmet } from "react-helmet-async";
import BannerSection from "../../Shared/BannerSection/BannerSection";
import image from "../../../assets/menu/banner.jpg";
import PopularItem from "../../Home/PopularItem/PopularItem";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import burgerImg from "../../../assets/menu/burger.jpg";
import friedImg from "../../../assets/menu/fried.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SubTitle from "../../../Components/SubTitle/SubTitle";
import Title from "../../../Components/HeadTitle/Title";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const burger = menu.filter((item) => item.category === "burger");
  const fried = menu.filter((item) => item.category === "fried");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Title title='tastyDash | menu'></Title>
      <BannerSection img={image} content={"Menu"}></BannerSection>
      {/* offer section */}
      <SubTitle
        subHeading={"---don't miss---"}
        heading={"Todays Offered"}></SubTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts section */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title={"desserts"}
        details={
          "Welcome to our delightful world of desserts, where every bite is a celebration of sweetness and creativity. Our passion for crafting extraordinary desserts is evident in every creation we offer."
        }></MenuCategory>
      {/* pizza section */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title={"pizza"}
        details={
          "Step into the enchanting realm of culinary pleasures at Pizza Delights, where every slice tells a story of flavor and innovation. Our unwavering dedication to creating exceptional pizza experiences is woven into every pie we craft."
        }></MenuCategory>
      {/* soup section */}
      <MenuCategory
        items={soup}
        img={soupImg}
        title={"soup"}
        details={
          "Dive into a world of warmth and comfort with our soul-soothing soups. From creamy classics to exotic broths, our soups are crafted to wrap you in a cozy embrace with every spoonful. Let the flavors dance on your taste buds as you savor the goodness of carefully curated ingredients."
        }></MenuCategory>
      {/* salad section */}
      <MenuCategory
        items={salad}
        img={saladImg}
        title={"salad"}
        details={
          "Elevate your greens game with our vibrant salads. Bursting with freshness and creativity, our salads are a treat for the senses. Explore a world of unique ingredients, imaginative dressings, and wholesome goodness that will leave you feeling nourished and revitalized."
        }></MenuCategory>
      {/* burger section */}
      <MenuCategory
        items={burger}
        img={burgerImg}
        title={"burger"}
        details={
          "Get ready for a burger experience like no other. Our burgers are a symphony of flavors and textures, featuring juicy patties, fresh veggies, and delectable sauces. Whether you're a fan of classic simplicity or daring combinations, our burgers promise a journey of pure satisfaction."
        }></MenuCategory>
      {/* fried section */}
      <MenuCategory
        items={fried}
        img={friedImg}
        title={"fried"}
        details={
          "Indulge in the satisfying crunch of our fried favorites. From golden chicken tenders to crispy fries, our fried delights are a testament to the art of achieving the perfect crunch. With a variety of dipping sauces to choose from, every bite is a delightful adventure."
        }></MenuCategory>
    </div>
  );
};

export default Menu;
