const CoverPages = ({img, title, details,}) => {
  return (
    <div
      className="px-10 py-20 bg-cover bg-center bg-fixed flex justify-center items-center my-20 "
      style={{ backgroundImage: `url(${img})` }}>
      <div className=" w-11/12 md:w-4/5 lg:w-2/3  z-10 rounded-lg bg-opacity-60 bg-black text-white text-center p-12 lg:p-18">
        <h2 className="text-3xl mb-3">{title}</h2>
        <p>
          {details}
        </p>
      </div>
    </div>
  );
};

export default CoverPages;
