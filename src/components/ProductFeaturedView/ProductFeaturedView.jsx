
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


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

const WhatsAppLink = () => {
  const phoneNumber = '573137363975';
  const message = 'Hello there! I would like to inquire about your services.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} /> Habla con nosotros en WhatsApp
    </a>
  );
};


export const ProductFeaturedView = () => {
  return (
    <>
      <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">Vs 700 Helmet</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Swiper
                spaceBetween={1}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {helmets.map((slide) => (
                  <SwiperSlide key={slide.image}>
                    <img src={slide.image} />
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* <a href="https://wa.me/573165613232" className="btn btn-success" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} /> Habla con nosotros en WhatsApp
            
                             </a> */}
              <WhatsAppLink></WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default ProductFeaturedView;
