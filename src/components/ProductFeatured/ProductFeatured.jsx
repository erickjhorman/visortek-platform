
import './ProductFeatured.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction",
    rating: 8.8
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
    rating: 9.3
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
    rating: 9.2
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
    rating: 9.0
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
    rating: 8.9
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
    genre: "Fantasy",
    rating: 8.9
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    genre: "Drama",
    rating: 8.8
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
    rating: 8.8
  },
  {
    title: "The Matrix",
    directors: ["Lana Wachowski", "Lilly Wachowski"],
    year: 1999,
    genre: "Science Fiction",
    rating: 8.7
  },
  {
    title: "The Empire Strikes Back",
    director: "Irvin Kershner",
    year: 1980,
    genre: "Science Fiction",
    rating: 8.7
  }
];

console.log(movies);

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

console.log(helmets);
const h1Style = {
  marginLeft: '35px',
};



export const ProductFeatured = () => {
  return (
    <>

    
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movies.map((slide) => (
          <SwiperSlide key={slide.year}>Slide 1
          </SwiperSlide>
      ) )}
    </Swiper> */}
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
        breakpoints={{

        }}
      >
        {helmets.map((helmet, index) => (
          <SwiperSlide key={index}>
              <div class="card">
                <img src={helmet.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{helmet.title}</h5>
                  <a class="btn btn-primary" type="button" className="btn btn-primary" data-bs-toggle='modal' data-bs-target="#myModal">Conoce más</a>
                </div>
              </div>
          
            {/* <img src='https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg'></img> */}
          </SwiperSlide>

        ))}
      </Swiper>
      </div>
      {/* <div className="scrollcardsec">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          className="myswiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          direction="horizontal"
          loop={true}
          speed={1200}
          watchSlidesProgress={true}
          parallax={true}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{

          }}
        >
          <div className="scrollcards">
              {movies.map((movie) => {
                return <SwiperSlide key={movie.title}>
  
                </SwiperSlide>
              })}
       
          </div>
        </Swiper>
      </div> */}


      {/* 
           <div class="row px-2 pb-3">
         <h2 className='px-2 p '> Cascos VS Helmet</h2> 
  <div class="col-auto">
<div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a class="btn btn-primary" type="button" className="btn btn-primary" data-bs-toggle='modal' data-bs-target="#myModal">Conoce más</a>
  </div>
</div>
  </div>
  <div class="col-auto">
  <div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a href="#" class="btn btn-primary">Conoce más</a>
  </div>
</div>
  </div>
  <div class="col-auto">
  <div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a href="#" class="btn btn-primary">Conoce más</a>
  </div>
</div>
  </div>
  <div class="col-auto">
  <div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a href="#" class="btn btn-primary">Conoce más</a>
  </div>
</div>
  </div>
  <div class="col-auto">
  <div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a href="#" class="btn btn-primary">Conoce más</a>
  </div>
</div>
  </div>
  <div class="col-auto">
  <div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a href="#" class="btn btn-primary">Conoce más</a>
  </div>
</div>
  </div>
  <div class="col-auto">
  <div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a href="#" class="btn btn-primary">Conoce más</a>
  </div>
</div>
  </div>
  <div class="col-auto">
  <div class="card">
  <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716668008/IMG_3572_y12bf2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VS Helmet 700</h5>
    <a href="#" class="btn btn-primary">Conoce más</a>
  </div>
</div>
  </div>
</div>  */}

    </>

  )
}