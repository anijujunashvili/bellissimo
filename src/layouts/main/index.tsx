import { Outlet } from "react-router-dom";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import useScroll from "@/hooks/useScroll";
import { CircleChevronUp } from "lucide-react";

const MainLayout = () => {
  const scrollVal = useScroll();

  const arrowClasses = scrollVal
    ? "fixed transition-all duration-500 bottom-10 -tracking-wider right-20 cursor-pointer w-[60px] text-center h-[70px] z-4 "
    : "fixed transition-all duration-500 bottom-10 -tracking-wider  -right-20 cursor-pointer w-[60px] text-center h-[70px] z-4 ";

  return (
    <>
      <main className="transition-all duration-500 relative">
        <Header />
        <div style={{ marginTop: "-120px" }}>
          <Banner />
        </div>

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
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
