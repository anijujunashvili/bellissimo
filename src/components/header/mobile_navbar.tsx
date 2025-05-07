import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight, Facebook, Instagram } from "lucide-react";
import useScroll from "@/hooks/useScroll";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

const MobileNavbar = () => {
  const scrollVal = useScroll();
  const ActiveMenu = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive
      ? "text-[#e6e3de]  border-b-3 text-2xl"
      : "text-[#e6e3de] text-2xl";
  };
  return (
    <>
      <Sheet>
        <SheetTrigger className="">
          <AlignRight size={40} color={scrollVal ? "white" : "#4a4848"} />
        </SheetTrigger>
        <SheetContent className="shadow-sm border-0 bg-black/70">
          <SheetHeader>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col px-8 space-y-6 ">
            <h2 className="text-[#e6e3de] text-center text-4xl pb-8 shadow-sm tracking-widest">
              Main Menu
            </h2>
            <div className="flex justify-center">
              <NavLink to="/home" className={ActiveMenu}>
                Home
              </NavLink>
            </div>
            <div className="flex justify-center">
              <NavLink to="/aboutus" className={ActiveMenu}>
                About us
              </NavLink>
            </div>
            <div className="flex justify-center">
              <NavLink to="/gallery" className={ActiveMenu}>
                Gallery
              </NavLink>
            </div>
            <div className="flex justify-center">
              <NavLink to="/menu" className={ActiveMenu}>
                Menu
              </NavLink>
            </div>
            <div className="flex justify-center">
              <NavLink to="/contact" className={ActiveMenu}>
                Contact
              </NavLink>
            </div>
            <div className="flex flex-row pt-12 justify-center gap-4">
              <Facebook color="white" size={24} strokeWidth={2} />
              <Instagram color="white" size={24} strokeWidth={2} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
