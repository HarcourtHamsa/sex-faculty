import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Container, Box } from "@chakra-ui/react";
import Slider from "react-slick";
import ProductCardList from "../components/ProductCardList";
import FloatingButton from "../components/FloatingButton";

import BannerImg from "../assets/images/banner.webp";
import DailyDealImg from "../assets/images/dailydeal.jpg";

function Landing() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar />

      {/* jumbotron */}
      <Container maxW="6xl">
        <Slider {...settings}>
          <Box
            h={{ base: "40", md: "md" }}
            w="full"
            borderWidth="1px"
            my={{ base: "5", md: "5" }}
            backgroundImage={BannerImg}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
          ></Box>
        </Slider>
      </Container>

      <Container maxW={{ base: "100%", md: "6xl" }}>
        <ProductCardList />
      </Container>

      <Container maxW="6xl">
        <Slider {...settings}>
          <Box
            h={{ base: "40", md: "sm" }}
            w="full"
            // borderWidth="1px"
            my={{ base: "5", md: "5" }}
            backgroundImage={DailyDealImg}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
          ></Box>
        </Slider>
      </Container>

      <FloatingButton />
      <Footer />
    </div>
  );
}

export default Landing;
