import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { RiBarChartHorizontalFill } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex  items-center justify-between px-6 py-6 text-4xl">
        <section>Hepta</section>

        {open && (
          <section>
            <ul className="bg-white text-black h-screen w-full absolute top-0 left-0 flex flex-col justify-center items-center space-y-9 text-5xl font-sm">
              <li className="text-[#65C0BA]">Home</li>
              <li className="hover:text-[#65C0BA]">Hostels</li>
              <li className="hover:text-[#65C0BA]">About Us</li>
              <li className="hover:text-[#65C0BA]">gallery</li>
              <li className="hover:text-[#65C0BA]">Blog</li>
              <li className="hover:text-[#65C0BA]">Contact</li>
            </ul>
          </section>
        )}
        <section className="absolute z-50 top-6 right-6">
          {open ? (
            <ImCross onClick={() => setOpen(!open)} className="text-2xl m-2 text-black"/>
          ) : (
            <RiBarChartHorizontalFill onClick={() => setOpen(!open)}/>
          )}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
