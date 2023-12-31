import React from "react";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Title from "../../../Components/HeadTitle/Title";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const { email } = cart;
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this food..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://food-delivery-server-lyeo2f351-jintu45.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <Title title="tastyDash | dashboard | myCart"></Title>
      <div className="bg-white p-8 shadow-2xl rounded-xl">
        <div className="flex justify-evenly mb-4">
          <h2 className="text-sky-600 font-semibold text-xl">
            total Food: {cart.length}
          </h2>
          <h3 className="text-xl font-bold text-slate-600">
            total Price: ${total}
          </h3>
          <Link to="/dashboard/payment">
            <button className="btn btn-primary btn-sm">pay</button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table p-10">
            {/* head */}
            <thead>
              <tr className="bg-[#6759fe] text-white">
                <th>#</th>
                <th>Food</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id} item={item}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td className="text-[16px] font-medium">{item.name}</td>
                  <td className="text-lg font-bold text-orange-400">
                    $ {item.price}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-error btn-sm">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCart;
