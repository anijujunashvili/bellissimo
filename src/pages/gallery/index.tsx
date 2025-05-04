import ImageGallery from "./images";

const GalleryInner = () => {
  return (
    <>
      <div className="w-full  h-[700px] flex flex-col">
        <div>
          <h2 className=" text-center mt-12 mb-12 text-[#424645] font-semibold text-4xl border-[#bad8d0]">
            Gallery
          </h2>
          <ImageGallery />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default GalleryInner;
