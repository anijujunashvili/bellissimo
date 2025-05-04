import { Outlet } from "react-router-dom";

import HeaderInner from "@/components/header-inner";
import Footer from "@/components/footer";
import { CircleChevronUp } from "lucide-react";
import useScroll from "@/hooks/useScroll";

const InnerPagesLayout = () => {
  const scrollVal = useScroll();

  const arrowClasses = scrollVal
    ? "fixed transition-all duration-500 bottom-10 -tracking-wider right-20 cursor-pointer w-[60px] text-center h-[70px] z-4 "
    : "fixed transition-all duration-500 bottom-10 -tracking-wider   -right-20 cursor-pointer w-[60px] text-center h-[70px] z-4 ";

  return (
    <>
      <main className="transition-all duration-500 relative ">
        <HeaderInner />

        <div
          className={arrowClasses}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <CircleChevronUp
            size={50}
            fill="#bad8d0"
            color="white"
            strokeWidth={1}
          />
        </div>
        <div className="min-h-svh">
          <Outlet />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default InnerPagesLayout;
