import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;