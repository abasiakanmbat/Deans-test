"use client"
import React, { useRef, useEffect } from 'react';

function Trusties() {
  const images = [
    "realms.png",
    "island.png",
    "pubkey.png",
    "solana.png",
    "coloseum.png",
    "gib.png",
    "image 63.png",
    "image 188.png",
    "image 207.png",
    "image 208.png",
    "image 212.png",
    "image 213.png",
    "image 217.png",
    "image 222.png",
    "image 223.png",
    "image 225.png",
    "image 226.png",
    "image 230.png",
  ];

  return (
    <div className="w-screen bg-[#1a0d2d] h-40 flex justify-center items-center text-white">
      <div className="w-[1000px] flex flex-col items-center pt-12">
        <h6 className="text-white text-sm font-semibold mb-4">
          We've been trusted by <em>founders</em> from
        </h6>
        <div className="overflow-hidden w-full">
          {/* Scrolling container */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* Original images */}
            <ul className="flex items-center ">
              {images.map((img, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-4 px-2 py-2"
                >
                  <img
                    src={img}
                    alt={img.split(".")[0]}
                    className="w-10 h-10"
                  />
                </li>
              ))}
            </ul>
            {/* Duplicate images for seamless looping */}
            <ul className="flex items-center">
              {images.map((img, index) => (
                <li
                  key={`duplicate-${index}`}
                  className="flex items-center justify-between gap-4 px-2 py-2"
                >
                  <img
                    src={img}
                    alt={img.split(".")[0]}
                    className="w-10 h-10"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusties;
