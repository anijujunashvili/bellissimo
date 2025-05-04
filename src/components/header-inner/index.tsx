import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderInner = () => {
  return (
    <>
      <div className="w-full h-[100px] shadow-sm">
        <div className="flex w-4/5 m-auto h-full items-center justify-between">
          <Link to="/home">
            <img src="logo.png" className="h-[60px] lg:h-[70px]" />
          </Link>

          <div>
            <div className="hidden lg:block">
              <Navbar />
            </div>
            <div className="block lg:hidden">
              <Sheet>
                <SheetTrigger className=" ">
                  <AlignRight size={40} color="#4a4848" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderInner;
