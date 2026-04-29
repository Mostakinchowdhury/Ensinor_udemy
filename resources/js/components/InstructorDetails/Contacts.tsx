import { Globe2, MessageCircle, Phone, MapPin } from "lucide-react";
import React from "react";

const Contacts = () => {
  return (
    <div className="bg-white px-4 py-6">

      <div className="flex flex-col gap-3 text-sm">
        
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-slate-500" />
          <span className="text-slate-500">Address:</span>
          <span className="font-medium">Dhaka, Bangladesh</span>
        </div>

        <div className="flex items-center gap-3">
          <MessageCircle size={18} className="text-slate-500" />
          <span className="text-slate-500">Email:</span>
          <span className="font-medium">tonmoy.a009@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="text-slate-500" />
          <span className="text-slate-500">Phone:</span>
          <span className="font-medium">+8801700962184</span>
        </div>

        <div className="flex items-center gap-3">
          <Globe2 size={18} className="text-slate-500" />
          <span className="text-slate-500">Website:</span>
          <span className="font-medium">www.tonmoy.com</span>
        </div>

      </div>
    </div>
  );
};

export default Contacts;