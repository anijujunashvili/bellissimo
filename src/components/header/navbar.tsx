import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavLink, NavLinkRenderProps } from "react-router";
type PropsType = {
  scrollVar: boolean;
};

const Navbar = (props: PropsType) => {
  const selectStyle = props.scrollVar
    ? "rounded-full bg-[#bad8d0] text-white"
    : "rounded-full bg-[#4a4848] text-white";
  const navbarStyle = props.scrollVar ? "text-white" : "text-[#4a4848]";
  const ActiveMenu = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive ? "text-black" : navbarStyle;
  };

  return (
    <>
      <ul className="flex flex-row items-center font-semibold   space-x-12 transition-all cursor-pointer">
        <li className="hover:text-black">
          <NavLink to="/home" className={ActiveMenu}>
            Home
          </NavLink>
        </li>
        <li className="hover:text-black">
          <NavLink to="/aboutus" className={ActiveMenu}>
            About Us
          </NavLink>
        </li>
        <li className=" hover:text-black">
          <NavLink to="/gallery" className={ActiveMenu}>
            Gallery
          </NavLink>
        </li>
        <li className=" hover:text-black">
          <NavLink to="/menu" className={ActiveMenu}>
            Menu
          </NavLink>
        </li>
        <li className=" hover:text-black">
          <NavLink to="/contact" className={ActiveMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <Select>
            <SelectTrigger className={selectStyle}>
              <SelectValue placeholder="En" className="text-white" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">En</SelectItem>
              <SelectItem value="gr">Gr</SelectItem>
              <SelectItem value="rus">Rus</SelectItem>
            </SelectContent>
          </Select>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
