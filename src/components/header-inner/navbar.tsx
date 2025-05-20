import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NavLink,
  NavLinkRenderProps,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const ActiveMenu = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive ? "text-black " : "hover:text-black text-[#4a4848]";
  };
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
      <ul className="flex flex-row items-center font-semibold text-[#4a4848] space-x-12 transition-all cursor-pointer">
        <li>
          <NavLink to="home" className={ActiveMenu}>
            {t("home.home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="gallery" className={ActiveMenu}>
            {t("home.about")}
          </NavLink>
        </li>
        <li>
          <NavLink to="gallery" className={ActiveMenu}>
            {t("home.gallery")}
          </NavLink>
        </li>
        <li>
          <NavLink to="menu" className={ActiveMenu}>
            {t("home.menu")}
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="#" className={ActiveMenu}>
            Contact
          </NavLink>
        </li> */}
        <li>
          <Select onValueChange={handleLngChange}>
            <SelectTrigger className="rounded-full bg-[#b9d8d0] text-white">
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
