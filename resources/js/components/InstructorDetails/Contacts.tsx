import { Globe2, MessageCircle, Phone, MapPin } from "lucide-react";
import React from "react";

const Contacts = () => {
  return (
    <div className="bg-white px-4 py-6">

      <div className="flex flex-col gap-3 text-[16px] text-[#606060]">
        
        <div className="flex items-center gap-3">
          <MapPin size={18} />
          <span className="font-medium">Address:</span>
          <span >Dhaka, Bangladesh</span>
        </div>

        <div className="flex items-center gap-3">
          <MessageCircle size={18}/>
          <span className="font-medium">Email:</span>
          <span>tonmoy.a009@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18}/>
          <span className="font-medium">Phone:</span>
          <span>+8801700962184</span>
        </div>

        <div className="flex items-center gap-3">
          <Globe2 size={18}/>
          <span className="font-medium">Website:</span>
          <span>www.tonmoy.com</span>
        </div>

      </div>
    </div>
  );
};

export default Contacts;