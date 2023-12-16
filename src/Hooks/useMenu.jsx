import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   fetch("https://food-delivery-server-lyeo2f351-jintu45.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //      setMenu(data)
  //      setLoading(false)
  //     });
  // }, [])
  const {
    data: menu = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        "https://food-delivery-server-lyeo2f351-jintu45.vercel.app/menu"
      );
      const data = await res.json();
      return data;
    },
  });
  return [menu, loading, refetch];
};
export default useMenu;
