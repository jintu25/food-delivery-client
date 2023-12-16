import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const toggleMenu = () => {
    // Toggle the menu visibility when the button is clicked
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuOptions = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Our Menu
        </Link>
      </li>
      <li>
        <Link
          to="/order/desserts"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Order
        </Link>
      </li>

      <li>
        <Link
          to="/contact"
          className="hover:text-orange-500 text-[16px] font-semibold ">
          Contact Us
        </Link>
      </li>
        <li className="mr-4">
          <Link to="/dashboard/myCart">
            <button className="flex ">
              <h1 className="text-2xl">
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
              </h1>
              <div className="top-[-8px] right-[0px] font-semibold absolute">{cart?.length || 0}</div>
            </button>
          </Link>
        </li>
      {user ? (
        <>
          <li>
            <button
              onClick={handleLogOut}
              to="/login"
              className="btn btn-neutral btn-sm">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white">
        <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
              {/* Use the toggleMenu function on button click */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Conditionally render the menu based on isMenuOpen */}
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded-box w-52"
              >
                <a className="normal-case text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5bf755] to-[#ffa12d] hover:scale-105 transform transition-transform duration-300 ease-in-out  animate-float shadow-lg ">
            TastyDash
          </a>
                {menuOptions}
              </ul>
            )}
          </div>
          <a className="normal-case text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5bf755] to-[#ffa12d] hover:scale-105 transform transition-transform duration-300 ease-in-out  animate-float shadow-lg hidden lg:flex">
            TastyDash
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1">{menuOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
