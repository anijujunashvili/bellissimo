import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

const Navbar = () => {
  const ActiveMenu = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive ? "text-black " : "hover:text-black text-[#4a4848]";
  };
  return (
    <>
      <ul className="flex flex-row items-center font-semibold text-[#4a4848] space-x-12 transition-all cursor-pointer">
        <li>
          <NavLink to="/home" className={ActiveMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={ActiveMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={ActiveMenu}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={ActiveMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <Select>
            <SelectTrigger className="rounded-full bg-[#b9d8d0] text-white">
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
