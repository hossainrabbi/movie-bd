import { Carousel } from 'flowbite-react';
import { carousels } from '../data/data';

export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="carousel__style">
        {carousels.map((carousel) => (
          <img
            src={carousel.image}
            alt={`carousel-${carousel.id}`}
            className="w-full h-full"
            key={carousel.id}
          />
        ))}
      </Carousel>
    </div>
  );
}
