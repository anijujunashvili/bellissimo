const MenuHero = () => {
  return (
    <>
      <div className="relative w-full h-[250px]">
        <div className="absolute z-1 bg-black/10 w-full h-[250px] top-0 left-0  ">
          <div className="w-4/5 m-auto space-y-3 flex mt-32 lg:mt-8 flex-col text-2xl lg:text-5xl text-[#e6e3de] ">
            <span>A Taste of Italy,</span>
            <span>From Our Heart to Your Plate</span>
          </div>
        </div>
        <img src="/menu_cover.jpg" className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default MenuHero;
