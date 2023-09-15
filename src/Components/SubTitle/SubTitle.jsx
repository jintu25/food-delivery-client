
const SubTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-10 m-auto md:w-4/12">
            <p className="text-[#ffd167] font-medium text-lg mb-3">{subHeading}</p>
            <h2 className=" border-y-2 py-4 border-slate-500 text-3xl lg:text-4xl font-semibold uppercase">{heading}</h2>
        </div>
    );
};

export default SubTitle;