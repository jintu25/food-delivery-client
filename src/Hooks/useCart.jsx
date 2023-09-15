import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const useCart = () =>{
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json()
        }
        
      })
      return [cart, refetch, isLoading]
}

export default useCart;