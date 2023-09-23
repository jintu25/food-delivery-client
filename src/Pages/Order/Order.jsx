import React from "react";
import { Helmet } from "react-helmet-async";
import BannerSection from "../Shared/BannerSection/BannerSection";
import image from "../../assets/banner/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import FoodCards from "../../Components/FoodCards/FoodCards";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import Title from "../../Components/HeadTitle/Title";

const Order = () => {
  const categories = ['desserts', 'pizza', 'soup', 'salad', 'burger', 'fried']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
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
      <Title title='tastyDash | order'></Title>
      <BannerSection img={image} content={"Home | Order"}></BannerSection>
      <section className="py-20 max-w-screen-xl m-auto">
        <div className="text-center">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}>
            <TabList>
              <Tab>Desserts</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Salad</Tab>
              <Tab>Burger</Tab>
              <Tab>Fried</Tab>
            </TabList>

            <TabPanel>
              <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={burger}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={fried}></OrderTab>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Order;
