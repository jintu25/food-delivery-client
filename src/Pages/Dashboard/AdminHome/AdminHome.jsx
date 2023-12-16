import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { HiUserGroup } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";
import { BsBusFrontFill } from "react-icons/bs";

const AdminHome = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-zinc-900 font-semibold text-5xl mb-6">Hi Welcome, {user?.displayName}</h2>

      <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 lg:mx-0">
        <div className="bg-gradient-to-r text-center from-purple-500 via-pink-300 to-white px-5 py-4 rounded-lg text-white">
          <div className="text-4xl text-center flex  justify-center mb-2">
          <BiMoney className="text-white" />
          </div>
          <div className="text-3xl font-bold">{stats.revenue}</div>
          <div className="text-xl font-semibold text-center">Revenue</div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-100 text-center px-5 py-4 rounded-lg text-white">
          <div className="text-4xl text-center flex  justify-center mb-2">
          <HiUserGroup className="text-white" />
          </div>
          <div className="text-3xl font-bold">{stats.users}</div>
          <div className="text-xl font-semibold text-center">Customers</div>
        </div>

        <div className="bg-gradient-to-r from-green-400 via-green-500 to-gray-100 w-full h-40 text-center px-5 py-4 rounded-lg text-white">
          <div className="text-4xl text-center flex  justify-center mb-2">
          <MdFoodBank className="text-white" />
          </div>
          <div className="text-3xl font-bold">{stats.products}</div>
          <div className="text-xl font-semibold text-center">Products</div>
        </div>

        <div className="bg-gradient-to-r from-sky-400 via-blue-400 to-blue-200 w-full h-40 text-center px-5 py-4 rounded-lg text-white">
          <div className="text-4xl text-center flex  justify-center mb-2">
          <BsBusFrontFill className="text-white" />
          </div>
          <div className="text-3xl font-bold">{stats.orders}</div>
          <div className="text-xl font-semibold text-center">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
