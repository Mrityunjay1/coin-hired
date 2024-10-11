"use client";

import { useEffect, useState } from "react";
import { BarChart, Filter, CreditCard, Settings, Phone } from "lucide-react";

const navItems = [
  { icon: <BarChart className="w-6 h-6" />, label: "헤외 마케팅" },
  { icon: <Filter className="w-6 h-6" />, label: "퍼블리셔" },
  { icon: <CreditCard className="w-6 h-6" />, label: "캐드원(제도사)" },
  { icon: <Settings className="w-6 h-6" />, label: "헤외 세일즈" },
  { icon: <Phone className="w-6 h-6" />, label: "앱 개발자" },
];

export default function MotionNav() {
  const [items] = useState([...navItems, ...navItems]);

  return (
    <div className="w-full p-8 overflow-hidden ">
      <div className="flex animate-scroll">
        {items.map((item, index) => (
          <NavItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex-shrink-0 w-64 px-2">
      <div className="flex flex-col items-center">
        <div className="bg-white/20 shadow-md px-6 py-3 flex gap-2 items-center rounded-lg mb-2 w-full">
          <span className="bg-white/20 p-2 rounded-lg text-white">{icon}</span>
          <span className=" font-semibold text-lg text-white text-center">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
