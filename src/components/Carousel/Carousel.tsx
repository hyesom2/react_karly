import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/ProductCard";
import { useCallback, useRef } from "react";
import Button from "@/components/Button";

interface CarouselProps {
  type: string;
}

function Carousel({ type }: CarouselProps) {
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

  const BannerSettings = {
    dots: false,
    className: "relative w-screen",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  const ProductsSettings = {
    dots: false,
    className: "relative w-full",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  switch (type) {
    case "banner": {
      return (
        <div className="slide-container relative">
          <Slider {...BannerSettings} ref={slickRef}>
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
      )
    }
    case "products": {
      return (
        <div className="slide-container relative">
          <Slider {...ProductsSettings} ref={slickRef}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Slider>
          <Button className="absolute top-120 -left-32" purpose="banner-product" onClick={previous}>
            <span className="icon icon-arrow_left text-xl text-content"></span>
          </Button>
          <Button className="absolute top-120 -right-16" purpose="banner-product" onClick={next}>
            <span className="icon icon-arrow_right text-xl text-content"></span>
          </Button>
        </div>
      )
    }
  }
}

export default Carousel;