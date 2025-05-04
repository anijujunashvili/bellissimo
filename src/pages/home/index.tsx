import ContactInfo from "./contact_info";
import Gallery from "./gallery";
import MenuSection from "./menu_section";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <MenuSection />
        <Gallery />
        <ContactInfo />
      </div>
    </>
  );
};

export default HomePage;
