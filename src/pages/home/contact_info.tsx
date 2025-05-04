import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const ContactInfo = () => {
  const [open, setOpen] = useState(false);
  const position = { lat: 35.18463640594077, lng: 33.37591636814594 };

  return (
    <>
      <div className="w-full text-[#424645]">
        <div className="m-auto flex  flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2">
            <APIProvider
              apiKey={"AIzaSyDGF4skmrSLgdJLfMYruCeKEwKlLDZBz48"}
              onLoad={() =>
                console.log("AIzaSyDGF4skmrSLgdJLfMYruCeKEwKlLDZBz48")
              }
            >
              <Map
                style={{ width: "100%", height: "600px" }}
                zoom={12}
                center={position}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                mapId={"API key 1"}
              >
                <AdvancedMarker
                  position={position}
                  onClick={() => setOpen(!open)}
                >
                  <Pin
                    background={"#bad8d0"}
                    borderColor={"gray"}
                    glyphColor={"white"}
                  />
                </AdvancedMarker>
                {open && (
                  <InfoWindow
                    position={position}
                    onCloseClick={() => setOpen(false)}
                  >
                    <div>Welcome to Bellissimo</div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>
          <div className="mb-8 lg:mb-0 lg:w-1/2  pl-8 lg:pl-12 pt-12 flex flex-col space-y-6">
            <h2 className="border-l-6 mb-12 pl-3 font-bold text-4xl border-[#bad8d0]">
              Contact info
            </h2>
            <div className="flex gap-3">
              <h3 className="pt-1">
                <MapPin size={20} />
              </h3>
              <span>Cyprus, Limassol</span>
            </div>
            <div className="flex gap-3">
              <h3 className="pt-1">
                <Phone size={20} />
              </h3>
              <span>phone: +35799288992</span>
            </div>
            <div className="flex gap-3">
              <h3 className="pt-1">
                <Mail size={20} />
              </h3>
              <span>bellissimo@gmail.com</span>
            </div>
            <h4 className="font-bold text-xl mt-8">Working hours</h4>
            <div className="flex flex-col space-y-2">
              <span>Monday - Friday: 08:00 - 17:00</span>
              <span>Saturday & Sunday: 08:00 - 12:00</span>
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <Link to="#">
                <div className="bg-[#bad8d0]  w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Facebook color="white" size={24} strokeWidth={2} />
                </div>
              </Link>
              <Link to="#">
                <div className="bg-[#bad8d0]  w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Instagram color="white" size={24} strokeWidth={2} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
