import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MenuSection = () => {
  return (
    <>
      <div className="w-full  lg:h-[700px] flex flex-col lg:flex-wrap">
        <div className="lg:w-1/2 border flex items-center  ">
          <div className="my-8 lg:my-20 w-4/5 m-auto  flex flex-col space-y-8  ">
            <h1 className="text-2xl text-center  bg-gradient-to-r from-green-200  via-blue-300 to-pink-400 bg-clip-text text-transparent">
              Welcome to Bellissimo – A Taste of Italy
            </h1>
            <p className="text-center text-[#4a4848]">
              Experience the true taste of Italy with every bite. Our menu
              features fresh, authentic Italian dishes—from handcrafted pastas
              and stone-baked pizzas to rich risottos and classic desserts.
              Simple, delicious, and made with love—just like in Italy.
            </p>
            <p className="text-center text-[#4a4848]">Buon appetito!</p>
            <Link to="/menu" className="m-auto">
              <Button
                className="bg-[#bad8d0] w-[150px] h-[45px] hover:bg-[#4a4848] shadow-sm m-auto"
                style={{ fontSize: "18px" }}
              >
                Explore Menu
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 h-[700px]  ">
          <img
            src="https://img.taste.com.au/-vg9OuKx/taste/2016/11/mango-panna-cotta-25208-1.jpeg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default MenuSection;
