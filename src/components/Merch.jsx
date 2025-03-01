import React from "react";

const merch = [
  {
    name: "RAJA MEISSNER T-SHIRT",
    img: "/img/merch/merch1.webp",
    href: "https://krasserstoff.com/raja-meissner/products/raja-meissner-logo-t-shirt-schwarz",
    desc: "BLACK / WHITE LOGO"
  },
  {
    name: "RAJAMEISSNER TANK TOP",
    img: "/img/merch/merch2.webp",
    href: "https://krasserstoff.com/raja-meissner/products/raja-meissner-logo-tanktop-schwarz",
    desc: "BLACK / WHITE LOGO"
  },
  {
    name: "RAJA MEISSNER CAP",
    img: "/img/merch/merch3.webp",
    href: "https://krasserstoff.com/raja-meissner/products/raja-meissner-logo-cap-schwarz",
    desc: "BLACK / RED LOGO"
  },
];

const Merch = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {merch.map((item, index) => (
        <div data-aos="fade-up" key={index} className="box pb-4 border-2 overflow-hidden border-black/50 text-[0.9rem] rounded-3xl text-center w-[300px]">
          <img src={item.img} alt={item.name} className="w-full h-[300px] object-cover" />
          <p className="text-black font-bold m-1">{item.name}</p>
          <p className="text-black mb-3">{item.desc}</p>
          <span>
            <a target="_blank" href={item.href} className="bg-black text-white px-10 py-1.5 rounded-full">Buy <i class="fa-solid fa-shop pl-1"></i></a>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Merch;