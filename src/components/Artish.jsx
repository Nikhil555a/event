
import React from 'react';
import art1 from "../assets/art1.jpg"
import art2 from "../assets/art2.webp"
import art3 from "../assets/art3.webp"
import art4 from "../assets/art4.webp"
import art5 from "../assets/art5.jpg"
import art6 from "../assets/art6.jpg"

const artists = [
  { name: 'Aditya Gadhvi', profession: 'Gujarati Garba', image: art1 },
  { name: 'Ishani Dave', profession: 'Singer', image: art2 },
  { name: 'Kinjal Dave', profession: 'Gujarati Garba', image: art3 },
  { name: 'Osman Mir', profession: 'Gujarati Garba', image: art4 },
  { name: 'Bhumik Shah', profession: 'Singer', image: art5 },
  { name: 'Akon', profession: 'Dance Pop', image: art6 },
];

const Artish = () => {
  return (
    <div className='w-[1200px] mx-auto'>
      <div className="container mx-auto p-4 md:p-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">Artists on tour near Jaipur</h2>

        {/* Filter buttons - Now horizontally scrollable */}
        <div className="flex flex-nowrap overflow-x-auto gap-6 mb-8 scrollbar-hide">
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-blue-500 bg-blue-500 text-white">Popular</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Gujarati Pop</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Gujarati Garba</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Filmi</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Modern Bollywood</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Comedian</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Dance Pop</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Singer</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Sufi</button>
          <button className="flex-none px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">Punjabi Pop</button>
        </div>

        {/* Artists scrollable row */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {artists.map((artist, index) => (
            <div key={index} className="flex flex-col items-center text-center min-w-[150px]">
              <div className="relative w-[170px] h-[170px] rounded-full overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-200 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-900">{artist.name}</p>
              <p className="text-xs text-gray-500">{artist.profession}</p>
              <button className="mt-2 px-4 py-1 text-xs font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artish;