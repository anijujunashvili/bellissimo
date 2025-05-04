import { Link } from "react-router";

const FooterMenu = () => {
  return (
    <>
      <ul className="lg:flex lg:justify-center uppercase  hidden ">
        <li className="">
          <Link
            style={{ color: "white" }}
            className="text-white text-3xls border-[#fff] border-r-2 px-6  hover:text-blue-800"
            to="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className=" border-white border-r-2 px-6"
            to="#"
            style={{ color: "white" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className=" border-white border-r-2 px-6"
            to="/gallery"
            style={{ color: "white" }}
          >
            Gallery
          </Link>
        </li>
        <li className=" ">
          <Link
            style={{ color: "white" }}
            className="text-[#424645] border-white border-r-2 px-6 hover:text-blue-800"
            to="/menu"
          >
            Menu
          </Link>
        </li>
        <li className="">
          <Link
            className="text-gray-400  px-6 "
            to="#"
            style={{ color: "white" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FooterMenu;
