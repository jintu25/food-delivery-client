
const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className=" flex space-x-4">
            <img style={{borderRadius: '0px 250px 250px 250px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h2 className=" text-[20px]">{name} -------------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 text-lg font-semibold">${price}</p>
            
        </div>
    );
};

export default MenuItem;