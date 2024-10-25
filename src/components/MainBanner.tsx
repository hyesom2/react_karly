import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useRef } from "react";
import Button from "@/components/Button";

function MainBanner() {
  const slickRef = useRef<Slider | null>(null);

  const previous = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  }, []);

  const next = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  }, []);

  const settings = {
    dots: false,
    className: "relative w-screen",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slide-container relative">
      <Slider {...settings} ref={slickRef}>
        <div className="banner banner-01"></div>
        <div className="banner banner-02"></div>
        <div className="banner banner-03"></div>
        <div className="banner banner-04"></div>
      </Slider>
      <Button purpose="banner" className="absolute top-1/2 left-100 -translate-y-1/2 z-50" onClick={previous}>
        <span className="icon icon-arrow_left text-45 text-white"></span>
      </Button>
      <Button purpose="banner" className="absolute top-1/2 right-100 -translate-y-1/2 z-50" onClick={next}>
        <span className="icon icon-arrow_right text-45 text-white"></span>
      </Button>
    </div>
  );
}

export default MainBanner;