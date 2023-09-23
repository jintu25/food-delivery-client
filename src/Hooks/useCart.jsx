import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, isLoading, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure it's in the correct format
          },
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        return res.json();
      } catch (error) {
        console.error('Error fetching cart data:', error);
        // Handle the error and provide feedback to the user
      }
    },
  });
return [cart, refetch, isLoading]
};
// const { refetch, isLoading, data: cart = [] } = useQuery({
//     queryKey: ['carts', user?.email],
//     queryFn: async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
//           headers: {
//             Authorization: `Bearer ${token}`, // Ensure it's in the correct format
//           },
//         });

//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }

//         return res.json();
//       } catch (error) {
//         console.error('Error fetching cart data:', error);
//         // Handle the error and provide feedback to the user
//       }
//     },
//   });
export default useCart;
