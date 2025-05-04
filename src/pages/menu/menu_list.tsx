import { useState } from "react";
import { categories, menu_list } from "./menu_data";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MenuList = () => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <div className="w-4/5 m-auto flex flex-col mb-8">
        <ToggleGroup
          type="single"
          className="flex space-x-3 flex-wrap space-y-10"
        >
          <div className="flex space-x-3 flex-wrap space-y-10">
            {categories.map((c) => {
              return (
                <ToggleGroupItem
                  value={c.title}
                  className="border px-4 rounded-full border-[#4a4848] text-[#4a4848] hover:bg-[#4a4848] hover:text-[#e6e3de] transition-all "
                  key={c.title}
                  onClick={() => setCategory(c.id)}
                >
                  {c.title}
                </ToggleGroupItem>
              );
            })}
          </div>
        </ToggleGroup>

        <div className="grid grid-cols-2 gap-8 transition duration-700 ease-in-out">
          {menu_list
            .filter((c) => {
              if (category != 0) return c.catId == category;
              return c;
            })
            .map((ml) => {
              return (
                <div
                  className="grid grid-cols-6 gap-4  min-h-[70px] cursor-pointer  border-b border-dashed border-[#4a4848] "
                  key={ml.id}
                >
                  <div className="w-[10s0%] h-full mb-2">
                    <img
                      className="rounded-sm shadow-2xl w-full h-[70px] object-cover"
                      src={`menu/${ml.image}`}
                    />
                  </div>
                  <div className="col-span-4 mb-2 ">
                    <div className="flex flex-col  ">
                      <span className="font-bold text-2xl">{ml.title}</span>
                      <span className="text-xs">{ml.ingredients}</span>
                    </div>
                  </div>
                  <div className="font-semibold flex items-center justify-end mb-2">
                    ${ml.price}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MenuList;
