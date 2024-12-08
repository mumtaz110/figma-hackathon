import React from "react";

const Footer = () => {
  return (
    <footer className="w-[1441px] h-[589px] py-10 bg-[#F0F0F0] mt-[40px]">
      <div className=" container mx-auto px-4 py-[225px] justify-around grid grid-flow-col-1 sm:grid-flow-col-2 md:grid-cols-5 gap-[40px]">
        <div className="flex space-x-3">
          
          <div>
            <h1 className="font-bold text-3xl">SHOP.CO</h1>
            <p className="mt-4">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#000000]">Company</h3>
          <p className="text-[#000000] font-medium mt-3">About</p>
          <p className="text-[#000000] font-medium mt-3">Features</p>
          <p className="text-[#000000] font-medium mt-3">Works</p>
          <p className="text-[#000000] font-medium mt-3">Career</p>
          
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#000000]">Help</h3>
          <p className="text-[#000000] font-medium mt-3">Customer Support</p>
          <p className="text-[#000000] font-medium mt-3">Delivery Details</p>
          <p className="text-[#000000] font-medium mt-3">Terms & Conditions</p>
          <p className="text-[#000000] font-medium mt-3">
          Privacy Policy
          </p>
          
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#000000]">FAQ</h3>
          <p className="text-[#000000] font-medium mt-3">Account</p>
          <p className="text-[#000000] font-medium mt-3">Manage Deliveries</p>
          <p className="text-[#000000] font-medium mt-3">Orders</p>
          
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#000000]">Resources</h3>
          <p className="text-[#000000] font-medium mt-3">Free eBooks</p>
          <p className="text-[#000000] font-medium mt-3">Development Tutorial</p>
          <p className="text-[#000000] font-medium mt-3">How to - Blog</p>
          
        </div>
        
      </div>
      <div className=" w-full text-center">
        <p className="text-sm">© 2024 SHOP.COM All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
