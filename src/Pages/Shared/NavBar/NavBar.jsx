import { Link } from "react-router-dom";

const NavBar = () => {
  const menuOptions = (
    <>
      <li>
        <Link to='/' className="hover:text-orange-500 text-[16px] font-semibold ">Home</Link>
      </li>
      <li>
        <Link to='/about' className="hover:text-orange-500 text-[16px] font-semibold ">
          About Us
        </Link>
      </li>
      <li>
        <Link to='/' className="hover:text-orange-500 text-[16px] font-semibold ">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to='/contact' className="hover:text-orange-500 text-[16px] font-semibold ">
          Contact Us
        </Link>
      </li>
      <li>
        <a className="hover:text-orange-500 text-[16px] font-semibold ">
          Our Menu
        </a>
      </li>
      <li>
        <a className="hover:text-orange-500 text-[16px] font-semibold ">
          Our Shop
        </a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuOptions}
            </ul>
          </div>
          <a className="normal-case text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5bf755] to-[#ffa12d] hover:scale-105 transform transition-transform duration-300 ease-in-out inline-block animate-float shadow-lg">
            TastyDash
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
