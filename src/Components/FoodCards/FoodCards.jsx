import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCards = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const {user} = useContext(AuthContext)
  const [cart, refetch] = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const handleAddToCart = item => {
    if (user && user.email) {
      const cartItem = {menuId: _id, name, price, image, email: user.email }
      // Send a POST request with the item data to add it to the cart
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(cartItem), // Serialize the item object to JSON
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch() //cart item update 
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Add To Cart Add Successfully...',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    } 
    else {
      Swal.fire({
        title: 'you are not login?',
        text: "Please login first",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'login now'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            navigate('/login', {state: {from: location}})
          )
        }
      })
    }
  };
  return (
    <div>
      <div className="max-w-2xl m-auto mx-4 lg:mx-0">
        <div className="bg-white shadow-md rounded-lg  dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg p-8" src={image} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl mb-2 tracking-tight dark:text-white">
                {name}
              </h3>
            </a>
            <h3 className="text-gray-900 mb-2 text-lg tracking-tight dark:text-white">
              {recipe.length > 80 ? `${recipe.substring(0, 80)}...` : recipe}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
              <button onClick={() =>  handleAddToCart(item)} className="border-b-4 mt-6 text-lg font-semibold py-2 px-5 rounded-2xl shadow-xl border-yellow-500 text-[#BB8506] uppercase hover:bg-black hover:text-[#BB8506] delay-150 hover:delay-300">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
