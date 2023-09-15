import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation()
   
    const isLocation = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {isLocation || <NavBar></NavBar>}
            <Outlet></Outlet>
            { isLocation || <Footer></Footer>}
        </div>
    );
};

export default Main;