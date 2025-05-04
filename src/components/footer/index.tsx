import { Link } from "react-router";
import FooterMenu from "./menu";

const Footer = () => {
  return (
    <>
      <div className="w-full shadow-sm bg-[#3e3c3c] ">
        <div className="  flex flex-col shadow-sm">
          <div className=" h-auto border-b border-[#4a4848] py-10">
            <div className="w-3/5 m-auto flex flex-col  text-center space-y-10">
              <div>
                <img src="logo.png" className="w-[200px] m-auto" />
              </div>
              <div>
                <FooterMenu />
              </div>
            </div>
          </div>
          <div className="text-center py-6 w-4/5 m-auto">
            <p className="text-white">
              &#x00A9; Copyright 2025. Bellissimo. All Rights Reserved.
              Developed by{" "}
              <Link to="#" className="text-gray-800" style={{ color: "gray" }}>
                Ani Zhuzhunashvili
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
