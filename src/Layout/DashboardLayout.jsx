import { useContext } from "react";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import { AiFillGolden, AiFillHome, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import {
  FaHandPointRight,
  FaUtensils,
  FaUsers,
  FaUtensilSpoon,
  FaBook,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();

  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open bg-slate-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col py-10 px-6 ">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 border-r-2 border-b-slate-600 h-full mr-6 bg-[#2d53da]">
          {isAdmin ? (
            <>
              <li>
                <Link
                  to="/dashboard/myCart"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <AiFillHome></AiFillHome>
                  </span>{" "}
                  Admin Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allUsers"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <FaUtensils></FaUtensils>
                  </span>
                  Add items
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myCart"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <FaHandPointRight></FaHandPointRight>
                  </span>
                  Manage Items
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allUsers"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <FaBook></FaBook>
                  </span>
                  Manage Books
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allUsers"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <FaUsers></FaUsers>
                  </span>
                  All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/dashboard/myCart"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <AiFillHome></AiFillHome>
                  </span>{" "}
                  Users Home
                  <span className=" font-semibold text-orange-400">
                    +{cart?.length || 0}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allUsers"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <FaListUl></FaListUl>
                  </span>
                  Reservation
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myCart"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <FaHandPointRight></FaHandPointRight>
                  </span>
                  Payment History
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/myCart"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <AiFillHome></AiFillHome>
                  </span>{" "}
                  My Cart
                  <span className=" font-semibold text-orange-400">
                    +{cart?.length || 0}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allUsers"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <FaUsers></FaUsers>
                  </span>
                  Add Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myCart"
                  className="text-lg font-semibold text-slate-200">
                  <span>
                    <AiFillHome></AiFillHome>
                  </span>{" "}
                  My Booking
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200">
              <span>
                <AiFillHome></AiFillHome>
              </span>{" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
              <span>
                <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
              </span>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
                <span><BiMenu></BiMenu></span>
              Our Menu
            </Link>
          </li>
          <li>
            <Link
              to="/order/desserts"
              className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
                <span><AiFillGolden></AiFillGolden></span>
              Order
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-orange-500 text-[16px] font-semibold text-zinc-200 ">
                <span><BiPhoneCall></BiPhoneCall></span>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
