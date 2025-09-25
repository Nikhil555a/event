// import React from 'react';

// import phoneImage1 from '../assets/ae1-01.webp';

// import qrCode from '../assets/qr-code.webp';
// import appStore from '../assets/App-Store-Icon.webp';
// import googlePlay from '../assets/Google-Play-Icon.webp';

// const DiscoverEvent= () => {
//   return (
//     // <div className='w-full'>
//             <section className="bg-gray-100 min-h-screen w-full flex items-center justify-center py-20">
//       <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 px-4 w-full">
//         {/* Left side: Phone images */}
//         <div className="relative w-72 md:w-96 h-96">
//           <img 
//             src={phoneImage1} 
//             alt="Phone screen showing featured events" 
//             className="absolute z-10 w-full transform "
//           />
//           {/* <img 
//             src={phoneImage2} 
//             alt="Phone screen showing Max Amin Live event details" 
//             className="absolute z-20 w-full transform -rotate-3 top-4 left-16"
//           /> */}
//         </div>

//         {/* Right side: Text and download links */}
//         <div className="text-center md:text-left mt-16 md:mt-0">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
//             Discover Events. <br />
//             Anywhere, Anytime.
//           </h1>
//           <p className="mt-4 text-lg text-gray-600">
//             Download the AllEvents app to never miss out on <br />
//             the best events near you!
//           </p>
//           {/* <div className="mt-8 flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-8">
//             <img 
//               src={qrCode} 
//               alt="QR Code to download the app" 
//               className="w-32 h-32" 
//             />
//             <div className="flex flex-col items-center md:items-start space-y-4">
//               <span className="text-gray-500 font-semibold">OR</span>
//               <a href="#" className="flex items-center">
//                 <img src={googlePlay} alt="Get it on Google Play" className="h-12" />
//               </a>
//               <a href="#" className="flex items-center mt-2">
//                 <img src={appStore} alt="Download on the App Store" className="h-12" />
//               </a>
//             </div>
//           </div> */}
//           <div className="mt-8 flex flex-col items-center md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-8">
//   {/* QR Code */}
//   <img 
//     src={qrCode} 
//     alt="QR Code to download the app" 
//     className="w-32 h-32" 
//   />

//   {/* "OR" separator */}
//   <span className="text-gray-500 font-semibold text-lg md:text-xl hidden md:block">OR</span>
//   {/* "OR" for mobile, if desired. Removed for strict match, but good for accessibility. */}
//   {/* <span className="text-gray-500 font-semibold text-lg md:hidden">OR</span> */}

//   {/* App Store Buttons */}
//   <div className="flex flex-col items-center md:items-start space-y-4">
//     <a href="#" className="flex items-center">
//       <img src={googlePlay} alt="Get it on Google Play" className="h-12" />
//     </a>
//     <a href="#" className="flex items-center"> {/* Removed mt-2 here for consistent spacing */}
//       <img src={appStore} alt="Download on the App Store" className="h-12" />
//     </a>
//   </div>
// </div>
//         </div>
//       </div>
//     </section>

//     // </div>

//   );
// };

// export default DiscoverEvent;






import React from 'react';

import phoneImage1 from '../assets/ae1-01.webp';

import qrCode from '../assets/qr-code.webp';
import appStore from '../assets/App-Store-Icon.webp';
import googlePlay from '../assets/Google-Play-Icon.webp';

const DiscoverEvent = () => {
  return (
    <section className="bg-gray-100 min-h-screen lg:w-full flex items-center justify-center py-20">
      {/* Changed flex-col-reverse to flex-col */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 px-4 w-full">
        {/* Left side: Phone images */}
        <div className="relative w-72 md:w-96 h-96">
          <img 
            src={phoneImage1} 
            alt="Phone screen showing featured events" 
            className="absolute z-10 w-full transform "
          />
        </div>

        {/* Right side: Text and download links */}
        <div className="text-center md:text-left mt-16 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Discover Events. <br />
            Anywhere, Anytime.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Download the AllEvents app to never miss out on <br />
            the best events near you!
          </p>
          <div className="mt-8 flex flex-col items-center md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* QR Code */}
            <img 
              src={qrCode} 
              alt="QR Code to download the app" 
              className="w-32 h-32" 
            />

            {/* "OR" separator */}
            <span className="text-gray-500 font-semibold text-lg md:text-xl hidden md:block">OR</span>
            
            {/* App Store Buttons */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a href="#" className="flex items-center">
                <img src={googlePlay} alt="Get it on Google Play" className="h-12" />
              </a>
              <a href="#" className="flex items-center">
                <img src={appStore} alt="Download on the App Store" className="h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverEvent;


