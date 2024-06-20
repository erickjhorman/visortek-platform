
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons';

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
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 2,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 3,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 4,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 5,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 6,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 7,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 8,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
  },
  {
    id: 9,
    title: "VS helmet 700",
    image: "https://res.cloudinary.com/dequvdgav/image/upload/v1718832961/test_aajeon.png",
    price: 130000,
    star: 3,
    rating: "Excelente"
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
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio : ${helmet.price}</li>
                    <li class="list-group-item"> <FontAwesomeIcon icon={faHeart} /> Me gusta: {helmet.star}</li>
                    <li class="list-group-item fs-6">Calificación: {helmet.rating}</li>
                  </ul>
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