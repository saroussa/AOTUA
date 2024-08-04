import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Slider from "react-slick";
import styled from "styled-components";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import 'swiper/modules/pagination/pagination.min.css'
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/navigation/navigation.min.css";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Bandeau from "../assets/img/Bandeau.jpg";
import slide_image from "../assets/img/slides/1.jpg";
import slide_image_1 from "../assets/img/slides/2.jpg";
import slide_image_2 from "../assets/img/slides/3.jpg";
// import slide_image_3 from "../assets/img/slides/4.jpg"
import slide_image_4 from "../assets/img/slides/5.jpg";
import slide_image_5 from "../assets/img/slides/6.jpg";
import slide_image_6 from "../assets/img/slides/7.jpg";
import slide_image_7 from "../assets/img/slides/8.jpg";

export default function Landing() {
  const settings = {
    className: "center",
    centerMode: true,
    // dots:true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
       
      <img src={Bandeau} style={{ width: "100%", marginTop: "6%" }} />
     
      <Slider {...settings}>
        <LogoWrapper className="" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <ImgStyle src={slide_image} alt="client logo" style={{width:"1500px",height:"800px",objectFit:"contain"}}/>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={slide_image_1} alt="client logo" style={{width:"1500px",height:"800px",objectFit:"contain"}}/>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={slide_image_2} alt="client logo" style={{width:"1500px",height:"800px",objectFit:"contain"}}/>
        </LogoWrapper>
        {/* <LogoWrapper className="flexCenter">
          <ImgStyle src={slide_image_3} alt="client logo" />
        </LogoWrapper> */}
        <LogoWrapper className="flexCenter">
          <ImgStyle src={slide_image_5} alt="client logo" style={{width:"1500px",height:"800px",objectFit:"contain"}}/>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={slide_image_6} alt="client logo" style={{width:"1500px",height:"800px",objectFit:"contain"}}/>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={slide_image_7} alt="client logo" style={{width:"1500px",height:"800px",objectFit:"contain"}}/>
        </LogoWrapper>
        
       
      </Slider> 
      {/* <Header />  */}
      <Services />
      {/* <Projects />
      <Blog />
      <Pricing /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
