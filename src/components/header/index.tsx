// import { AlignRight } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import useScroll from "@/hooks/useScroll";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollVal = useScroll();

  const headerStyle = !scrollVal
    ? "w-full h-[120px] py-6 sticky top-0 z-2 transition-all shadow-none"
    : "w-full h-[100px]  bg-black/50 shadow-sm text-white py-4 sticky top-0 z-2 transition-all shadow-sm";
  const logoHeight = !scrollVal
    ? "h-[70px] transition-all duration-700"
    : "h-[60px]  transition-all duration-700";
  const logoImg = !scrollVal ? "logo_black.png" : "logo.png";
  return (
    <>
      <div className={headerStyle}>
        <div className="flex flex-row max-h-[145px] m-auto w-4/5 items-center justify-between">
          <div className={logoHeight}>
            <Link to="/home">
              <img src={logoImg} className="h-full" />
            </Link>
          </div>
          <div>
            <Navbar scrollVar={scrollVal as boolean} />
            {/* <Sheet>
              <SheetTrigger className=" ">
                <AlignRight size={40} color={scrollVal ? "#424645" : "white"} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
