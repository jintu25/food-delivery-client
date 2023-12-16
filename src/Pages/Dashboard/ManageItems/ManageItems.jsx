import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
  
  const handleDelete = (item) => {
    // console.log(menu)
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this food..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if(result.isConfirmed){
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res => {
               if(res.data.deletedCount > 0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
               }
            })
        }
        
    });
  };
  return (
    <div className="  rounded-xl">
      <div className="text-center  m-auto md:w-2/4">
        <p className="text-[#f77846] font-medium text-lg mb-3">
          ---update or delete---
        </p>
        <h2 className=" border-y-2 py-4 border-slate-500 text-3xl lg:text-4xl font-semibold uppercase">
          Manage all Items
        </h2>
      </div>

      <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-white mt-10">
        <div className="overflow-x-auto">
          <table className="table p-10">
            {/* head */}
            <thead>
              <tr className="bg-[#6759fe] text-white">
                <th>#</th>
                <th>image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item?._id} item={item}>
                  <td>{index + 1}</td>
                  <td>
                      <div className="mask rounded-full w-16 h-16">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </td>
                  <td className=" font-medium">{item.name}</td>
                  <td className=" font-medium">{item.price}</td>
                  <td className="font-bold text-sky-600">
                    {item?.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        className="btn btn-accent text-white btn-sm text-lg">
                        <BiEdit></BiEdit>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-error text-white btn-sm">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ManageItems;
