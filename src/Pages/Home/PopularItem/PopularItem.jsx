import SubTitle from "../../../Components/SubTitle/SubTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularItem = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className=" m-auto max-w-screen-xl my-20">
      <SubTitle
        subHeading={"---Check it out---"}
        heading={"From our menu"}></SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 lg:mx-0 my-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className=" border-b-4 mt-6 text-lg font-semibold py-2 px-5 rounded-2xl shadow-xl border-slate-700">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularItem;
