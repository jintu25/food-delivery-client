import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const token = localStorage.getItem("access-token");

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (user) => {
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
          `https://food-delivery-server-lyeo2f351-jintu45.vercel.app/users/${user._id}`,
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

  const handleMakeAdmin = (user) => {
    fetch(
      `https://food-delivery-server-lyeo2f351-jintu45.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-white p-8 shadow-2xl rounded-xl">
      <div className="flex justify-evenly mb-4">
        <h2 className="text-sky-600 font-semibold text-xl">
          total Users: {users.length}
        </h2>
        {/* <h3 className="text-xl font-bold text-slate-600">total Price: ${total}</h3>
        <button className="btn btn-primary btn-sm">pay</button> */}
      </div>

      <div className="overflow-x-auto">
        <table className="table p-10">
          {/* head */}
          <thead>
            <tr className="bg-[#6759fe] text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id} user={user}>
                <td>{index + 1}</td>
                <td className="text-[16px] font-medium">{user.name}</td>
                <td className="text-[16px] font-medium">{user.email}</td>
                <td className="font-bold text-sky-600">
                  {user?.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-accent text-white btn-sm text-lg">
                      <FaUserEdit></FaUserEdit>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-error text-white btn-sm">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
