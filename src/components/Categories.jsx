
import React from 'react';
import musicImg from "../assets/Music-Events.webp";
import businessImg from "../assets/Business-Events.webp";
import concertImg from "../assets/Concerts-1_1_11zon.webp";
import partiesImg from "../assets/Parties_4_11zon.webp";
import comedyImg from "../assets/Comedy-Shows.webp";
import carftImg from "../assets/Crafts-Events.webp";
import datingImg from "../assets/Dating-Events.webp";
import festivalImg from "../assets/Festivals.webp";
import danceImg from "../assets/Dance-Events.webp";

// Reusable Card Component (Updated with hover effect)
const Card = ({ imgUrl, bgColor }) => {
  return (
    <div
      className="relative w-[190px] h-[100px] rounded-xl overflow-hidden shadow-md flex items-center justify-center
                 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      style={{ background: bgColor }}
    >
      {imgUrl && (
        <img
          src={imgUrl}
          alt="Category"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
    </div>
  );
};

// Main Categories Component
const Categories = () => {
  const categories = [
    { imgUrl: musicImg, bgColor: 'linear-gradient(to right, #eaf9eb, #d1f4d3)' },
    { imgUrl: businessImg, bgColor: 'linear-gradient(to right, #e8f0ff, #c3d9ff)' },
    { imgUrl: concertImg, bgColor: 'linear-gradient(to right, #f2eaff, #e0c8ff)' },
    { imgUrl: partiesImg, bgColor: 'linear-gradient(to right, #fff1e5, #ffdec8)' },
    { imgUrl: comedyImg, bgColor: 'linear-gradient(to right, #f2eefd, #e0d7fa)' },
    { imgUrl: carftImg, bgColor: 'linear-gradient(to right, #e8f9fd, #c8f4ff)' },
    { imgUrl: datingImg, bgColor: 'linear-gradient(to right, #fff4f4, #ffdede)' },
    { imgUrl: festivalImg, bgColor: 'linear-gradient(to right, #f7f1ff, #f0e6ff)' },
    { imgUrl: danceImg, bgColor: 'linear-gradient(to right, #f7e6ff, #f0d0ff)' },
  ];

  return (
    <div className='w-[1200px] mx-auto'>
      <div className="p-10 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Jaipur's Most-Loved</h2>

        <div className="flex flex-wrap gap-5 justify-start">
          {categories.map((category, index) => (
            <Card
              key={index}
              imgUrl={category.imgUrl}
              bgColor={category.bgColor}
            />
          ))}
          {/* 'View All' Card updated with hover effect */}
          <div className="w-[190px] h-[100px] rounded-xl shadow-md bg-gray-100 flex items-center justify-center text-center font-semibold text-gray-700
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            View All <br /> Categories
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;