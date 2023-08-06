// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './Banner.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//             <img src="bg1.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="bg2.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="bg3.jpg" alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Banner.css';
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="bg1.jpg" alt="" />
            <div className="slide-overlay text-start">
              <h2 className='sm:text-3xl lg:text-6xl'>EVOLVE YOUR <span className='text-green-500'>GAMING</span> <br /> EXPERIENCE</h2>
              <p className='my-3 text-gray-400'>Play with friends or compete against rivals from around the world</p>
              <button className='btn btn-success'>Join Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="bg2.png" alt="" />
              <div className="slide-overlay text-start">
                <h2 className='sm:text-3xl lg:text-6xl'>EVOLVE YOUR <span className='text-green-500'>GAMING</span> <br /> EXPERIENCE</h2>
                <p className='my-3 text-gray-400'>Play with friends or compete against rivals from around the world</p>
                <button className='btn btn-success'>Join Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="bg3.jpg" alt="" />
            <div className="slide-overlay text-start">
              <h2 className='sm:text-3xl lg:text-6xl'>EVOLVE YOUR <span className='text-green-500'>GAMING</span> <br /> EXPERIENCE</h2>
              <p className='my-3 text-gray-400'>Play with friends or compete against rivals from around the world</p>
              <button className='btn btn-success'>Join Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
