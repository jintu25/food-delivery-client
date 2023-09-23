import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //   fetch("http://localhost:5000/menu")
    //     .then((res) => res.json())
    //     .then((data) => {
    //      setMenu(data)
    //      setLoading(false)
    //     });
    // }, [])
    const {data: menu = [], refetch, isLoading: loading} = useQuery({
      queryKey: ['menu'],
      queryFn: async() => {
          const res = await fetch('http://localhost:5000/menu')
          const data = await res.json()
          return data;
      }
  })
    return [menu, loading, refetch]
}
export default useMenu;