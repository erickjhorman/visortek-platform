
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './ProductFeatured.css'


const btnStyle = {
};

const h1Style = {
  marginLeft: '35px',
};

const helmets = [
  {
    id: 1,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 2,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 3,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 4,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 5,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 6,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 7,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 8,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  },
  {
    id: 9,
    title: "Vs helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png"
  }
];

export const ProductFeatured = () => {
  return (
    <>
      <h2 style={h1Style}>Ultimos cascos:</h2>
      <div className='swiper-div'>
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          className="myswiper"
          autoplay={{ delay: 2500 }}
          speed={2500}
          watchSlidesProgress={true}
          parallax={true}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{}}
        >
          {helmets.map((helmet, index) => (
            <SwiperSlide key={index}>
              <div class="card">
                <img src={helmet.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{helmet.title}</h5>
                  <a type="button" className="btn btn-success" style={btnStyle} data-bs-toggle='modal' data-bs-target="#myModal">Conoce más</a>
                </div>
              </div>
              {/* <img src='https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg'></img> */}
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </>

  )
}