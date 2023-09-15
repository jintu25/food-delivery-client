import CoverPages from "../../Shared/CoverPages/CoverPages";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, details }) => {
  return (
    <div>
      {title && <CoverPages img={img} title={title} details={details}></CoverPages>}
      <section className="m-auto max-w-screen-xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 lg:mx-0 my-6">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/order/${title}`} className="text-center flex justify-center">
          <button className=" border-b-4 mt-6 text-lg font-semibold py-2 px-5 rounded-2xl shadow-xl border-slate-700">
            Order Your Favorite Food
          </button>
        </Link>
      </section>
    </div>
  );
};

export default MenuCategory;
