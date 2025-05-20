import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
type PropsType = {
  scrollVar: boolean;
};
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Navbar = (props: PropsType) => {
  const { t } = useTranslation();
  const selectStyle = props.scrollVar
    ? "rounded-full bg-[#bad8d0] text-white"
    : "rounded-full bg-[#4a4848] text-white";
  const navbarStyle = props.scrollVar ? "text-white" : "text-[#4a4848]";
  // const ActiveMenu = (props: NavLinkRenderProps) => {
  //   const { isActive } = props;
  //   return isActive ? "text-white" : navbarStyle;
  // };

  const path = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    const newPath = path.pathname.replace(`/${lang}/`, `/${lng}/`);
    navigate(newPath + path.search);
  };

  const handleLngChange = (value: string) => {
    changeLang(value);
  };

  return (
    <>
      <ul className="flex flex-row items-center font-semibold   space-x-12 transition-all cursor-pointer">
        <li className="hover:text-black">
          <NavLink to="home" className={navbarStyle}>
            {t("home.home")}
          </NavLink>
        </li>
        <li className="hover:text-black">
          <NavLink to="aboutus" className={navbarStyle}>
            {t("home.about")}
          </NavLink>
        </li>
        <li className=" hover:text-black">
          <NavLink to="gallery" className={navbarStyle}>
            {t("home.gallery")}
          </NavLink>
        </li>
        <li className=" hover:text-black">
          <NavLink to="menu" className={navbarStyle}>
            {t("home.menu")}
          </NavLink>
        </li>
        {/* <li className=" hover:text-black">
          <NavLink to="/contact" className={navbarStyle}>
            {t("home.contact")}
          </NavLink>
        </li> */}
        <li>
          <Select onValueChange={handleLngChange}>
            <SelectTrigger className={selectStyle}>
              <SelectValue placeholder="En" className="text-white" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">En</SelectItem>
              <SelectItem value="gr">Gr</SelectItem>
              <SelectItem value="ru">Ru</SelectItem>
            </SelectContent>
          </Select>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
