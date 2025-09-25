// import React from "react";
// import taj from "../assets/taj.jpeg"; // replace with the image you uploaded



// export default function Hero() {
//   return (
//     <div className="flex items-center justify-center">
//       <section className="px-6 mt-6 min-w-[1250px]">
//         <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-10 flex flex-col md:flex-row items-center justify-between">
          
//           {/* Left */}
//           <div className="max-w-xl space-y-4">
//             <h1 className="text-3xl md:text-4xl font-bold">Events in Jaipur</h1>
//             <p className="text-sm md:text-base leading-relaxed">
//               Your eyes cannot see enough of the beauty of the pink city of India.
//               Jaipur has its flair and charm, which boosts its heritage worldwide.
//               Events in Jaipur are diverse, beautiful, and aesthetically pleasing at
//               any time of the year. Festivals and events in Jaipur, like the Jaipur
//               Literature Festival and International Film Festival, are the heart and
//               soul of the festivals. Explore the events in Jaipur with us today!
//             </p>
//             <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100">
//               Join the community +
//             </button>
//           </div>

//           {/* Right */}
//           <img
//             src={taj}
//             alt="jaipur"
//             className="w-72 md:w-96 mt-8 md:mt-0"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }



import React from "react";
import taj from "../assets/taj.jpeg"; // replace with the image you uploaded

export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      {/* Mobile-first approach: `min-w-[1250px]` is now removed for mobile and applied only for large screens */}
      <section className="lg:px-6 lg:mt-6 w-full lg:min-w-[1250px]">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white lg:rounded-xl p-10 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left */}
          <div className=" max-w-xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Events in Jaipur</h1>
            <p className="text-sm md:text-base leading-relaxed">
              Your eyes cannot see enough of the beauty of the pink city of India.
              Jaipur has its flair and charm, which boosts its heritage worldwide.
              Events in Jaipur are diverse, beautiful, and aesthetically pleasing at
              any time of the year. Festivals and events in Jaipur, like the Jaipur
              Literature Festival and International Film Festival, are the heart and
              soul of the festivals. Explore the events in Jaipur with us today!
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100">
              Join the community +
            </button>
          </div>

          {/* Right */}
          <img
            src={taj}
            alt="jaipur"
            className=" w-full lg:w-72 md:w-96 mt-8 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}



