import React from "react";
import banner from "../../../assets/about/pexels-craig-adderley-1631896.jpg";
import girlImg from "../../../assets/about/pizza.png";
import { FaHamburger, FaTruck } from 'react-icons/fa';
import { BiSolidCookie } from 'react-icons/bi';

const WhyChoose = () => {
  return (
    <div
      className="px-10 py-10 bg-cover bg-center bg-fixed flex justify-center items-center bg-opacity-100"
      style={{ backgroundImage: `url(${banner})` }}>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto max-w-screen-xl justify-center items-center gap-8">
        <div>
          <img className="w-full h-full" src={girlImg} alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-sky-500 mb-8">
            Why People Choose Us?
          </h2>
          <div className="flex items-center gap-3 mb-6">
              <div className="mr-2 bg-slate-200 p-4 rounded-full">
                <span className=" text-4xl text-orange-500 "><FaHamburger></FaHamburger></span>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-2">
                  Choose your Favorite
                </h3>
                <p className="text-slate-200 text-lg font-sens">
                  Our user-friendly website makes ordering your favorite meals a
                  breeze, with just a few clicks
                </p>
              </div>
          </div>
          <div className="flex items-center gap-3 mb-6">
              <div className="mr-2 bg-slate-200 p-4 rounded-full ">
               <span className="text-4xl text-orange-500"><FaTruck></FaTruck></span>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-2">
                  We Deliver Your Male
                </h3>
                <p className="text-slate-200 text-lg font-sens">
                We prioritize the safety of our customers and staff, following strict hygiene and food safety standards.
                </p>
              </div>
          </div>
          <div className="flex items-center gap-3">
              <div className="mr-2 bg-slate-200 p-4 rounded-full">
                <span className="text-4xl text-orange-500"><BiSolidCookie></BiSolidCookie></span>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-2">
                  Grab Your Delicious Food
                </h3>
                <p className="text-slate-200 text-lg font-sens">
                  Our user-friendly website makes ordering your favorite meals a
                  breeze, with just a few clicks
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
