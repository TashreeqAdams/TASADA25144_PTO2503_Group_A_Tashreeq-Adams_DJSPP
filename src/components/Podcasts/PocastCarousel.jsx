import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";
import PodcastCard from "./PodcastCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function FeaturedCarousel() {
  const { podcasts } = useContext(PodcastContext);

  if (!podcasts?.length) return null;

  return (
    <Carousel
      swipeable
      draggable
      showDots
      responsive={responsive}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-3"
    >
      {podcasts.slice(0, 12).map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </Carousel>
  );
}
