import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const {user, loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
      queryKey: ['isAdmin', user?.email],
      enabled: !loading,
      queryFn: async () => {
          const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          return res.data.admin;
      }
  })
  return [isAdmin, isAdminLoading]
}
// const useAdmin = () => {
//   const {user, loading} = useContext(AuthContext);
//   const [axiosSecure] = useAxiosSecure();
//   const token = localStorage.getItem('access-token')
//   const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//       queryKey: ['isAdmin', user?.email],
//       enabled: !loading,
//       queryFn: async () => {
//           const res = await axiosSecure.get(`/users/admin/${user?.email}`,
//           {
//             headers: {
//               Authorization: `bearer ${token}`
//             }
//           });
//           return res.data.admin;
//       }
//   })
//   return [isAdmin, isAdminLoading]
// }

export default useAdmin;
