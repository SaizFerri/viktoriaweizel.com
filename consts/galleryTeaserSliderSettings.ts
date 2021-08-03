const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: 0,
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "linear",
  className: "gallery-teaser-slider",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
      },
    },
  ],
};

export default sliderSettings;
