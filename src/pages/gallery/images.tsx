import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ImageGallery = () => {
  const [index, setIndex] = useState<number>();
  const [open, setOpen] = useState(false);

  const slides = [
    { src: "gallery/1.jpeg", id: 1 },
    { src: "gallery/2.webp", id: 2 },
    { src: "gallery/3.jpg", id: 3 },
    { src: "gallery/4.jpg", id: 4 },
  ];

  return (
    <>
      <div className="flex flex-wrap">
        {slides.map((img) => {
          return (
            <div
              key={img.id}
              className="w-1/4 h-[300px] relative overflow-hidden"
            >
              <div
                className="absolute z-1 top-0 left-0  w-full h-full transition-all hover:bg-black/40 hover:scale-100"
                onClick={() => {
                  setIndex(img.id - 1);
                  setOpen(true);
                }}
              ></div>
              <img
                src={img.src}
                className="w-full h-full object-cover scale-100 hover:scale-120 transition-all"
              />
            </div>
          );
        })}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Thumbnails]}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
            },
            thumbnail: {
              padding: 0,
              margin: 0,
              height: "60px",
              width: "80px",
            },
          }}
          animation={{ fade: 500, swipe: 1000, navigation: 1000 }}
          thumbnails={{
            position: "bottom", // or 'top', 'start', 'end'
            width: 80,
            height: 60,
            border: 3,
            borderColor: "black",
            borderRadius: 0,
            padding: 0,
            gap: 6,
            imageFit: "cover",
          }}
          controller={{
            aria: true,
            closeOnBackdropClick: true,
          }}
        />
      </div>
    </>
  );
};
export default ImageGallery;
