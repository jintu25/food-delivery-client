import SubTitle from "../../../Components/SubTitle/SubTitle";
import feature from "../../../assets/home/featured.jpg";
const Feature = () => {
  return (
    <div
      className="px-10 py-12 bg-cover bg-center bg-fixed justify-center items-center my-20 bg-black
         z-10 w-full p-2 text-white shadow-2xl"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${feature})`,
      }}>
        <SubTitle
            subHeading={'---Check it out---'}
            heading={'From our menu'}
         >

        </SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
        <div>
          <img className="rounded-xl" src={feature} alt="" />
        </div>
        <div className="p-4 w-full md:w-4/5 ml-0 md:ml-6">
          <h2 className="font-semibold text-2xl">March 20, 2023</h2>
            <h1 className="text-3xl font-semibold mt-1 mb-4">WHERE CAN I GET SOME?</h1>
          <p className="text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className=" border-b-4 mt-6 text-lg font-semibold py-2 px-5 rounded-2xl shadow-xl">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
