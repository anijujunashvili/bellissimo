import Navbar from "./navbar";
import { Link } from "react-router-dom";

const HeaderInner = () => {
  return (
    <>
      <div className="w-full h-[100px] shadow-sm">
        <div className="flex w-4/5 m-auto h-full items-center justify-between">
          <Link to="/home">
            <img src="logo.png" className="h-[70px]" />
          </Link>

          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderInner;
