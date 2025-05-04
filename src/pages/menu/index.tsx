import MenuHero from "./hero";
import MenuList from "./menu_list";

const MenuPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <MenuHero />
        <MenuList />
      </div>
    </>
  );
};

export default MenuPage;
