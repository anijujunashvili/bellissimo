import Navbar from "./navbar";
import { Link } from "react-router-dom";
import MobileNavbarInner from "./mobile_navbar";

const HeaderInner = () => {
  return (
    <>
      <div className="w-full h-[100px] shadow-sm">
        <div className="flex w-4/5 m-auto h-full items-center justify-between">
          <Link to="/home">
            <img src="/logo.png" className="h-[60px] lg:h-[70px]" />
          </Link>

          <div>
            <div className="hidden lg:block">
              <Navbar />
            </div>
            <div className="block lg:hidden">
              <MobileNavbarInner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderInner;
