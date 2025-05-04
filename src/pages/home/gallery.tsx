import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:h-[700px]  ">
        <div className="lg:w-1/2 flex flex-wrap">
          <img
            src="https://i2-prod.nottinghampost.com/whats-on/food-drink/article690205.ece/ALTERNATES/s615/JO2JPG.jpg"
            className="w-1/2 h-1/2 object-cover"
          />
          <img
            src="https://lh3.googleusercontent.com/proxy/U7Cz5_f_EMa8-bInB77v89lMucHzJhRMdbh3IPUaa-n_oR-OyZUmcquXmX91UlBTf8yK68JjU1q_ys0h_6ZWZe56V9yHqyfIOmtPt4F8oFk"
            className="w-1/2 h-1/2 object-cover"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5d74478c4854dc338b2c19e9/1592354485909-OA9E9EFKRRLSZMVNXLM3/patio"
            className="w-1/2 h-1/2 object-cover"
          />
          <img
            src="https://images.getbento.com/accounts/2f1b610ad9b21009b952b954a4cf578a/media/images/55930caffe_gelato_with_chocolate.jpg?w=1200&fit=max&auto=compress,format&cs=origin"
            className="w-1/2 h-1/2 object-cover"
          />
        </div>
        <div className="lg:w-1/2 relative">
          <img
            src="https://www.shutterstock.com/image-photo/beautiful-table-setting-eustoma-flowers-600nw-2464690441.jpg"
            className="w-full h-full object-cover"
          />
          <div className="pl-6 absolute top-0 left-0 z-1 bg-[#bad8d0]/45 w-full h-full flex  items-center">
            <div className="lg:ml-30  lg:w-1/2 flex space-y-8 flex-col text-black">
              <h2 className="text-2xl lg:text-4xl font-bold">
                Benvenuti a Bellissimo
              </h2>
              <p className="font-normal">
                Welcome to Bellissimo – where Italian tradition meets warm
                hospitality. Please wait to be seated. We’re delighted to have
                you here and look forward to serving you a delicious taste of
                Italy.
              </p>
              <Button
                className="bg-[#bad8d0] w-[150px] h-[45px] font-large hover:bg-[#4a4848] shadow-sm"
                style={{ fontSize: "18px" }}
              >
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
