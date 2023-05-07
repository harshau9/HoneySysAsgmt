import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Home.module.css";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";

function Carousel1() {
  return (
    <>
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        centerMode={false}
        className=""
        containerClass="container"
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        // minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        autoPlay={true}
        autoPlaySpeed={5000}
  
      >
        <div className={styles.cardwidth}>
          <Box
            w={"full"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"250.25px"}
              w={"233.46"}
              src={
                "https://cdn.ratnadeep.online/undefined-section/EWm50M74DGroup%202177.webp?tr=w-480,cm-pad_resize"
              }
              objectFit={"fit"}
            />
          </Box>
        </div>
        <div>
          <Box
            w={"full"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"250.25px"}
              w={"233.46"}
              src={
                "https://cdn.ratnadeep.online/undefined-section/5wdTzpgWdGroup%201681.webp?tr=w-480,cm-pad_resize"
              }
              objectFit={"fit"}
            />
          </Box>
        </div>
        <div>
          <Box
            w={"full"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"250.25px"}
              w={"233.46"}
              src={
                "	https://cdn.ratnadeep.online/undefined-section/W-Jkso7k3Group%201689.webp?tr=w-480,cm-pad_resize"
              }
              objectFit={"fit"}
            />
          </Box>
        </div>
        <div>
          <Box
            w={"full"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"250.25px"}
              w={"233.46"}
              src={
                "https://cdn.ratnadeep.online/undefined-section/oNZbzXAFWGroup%201683.webp?tr=w-480,cm-pad_resize"
              }
              objectFit={"fit"}
            />
          </Box>
        </div>
        <div>
          <Box
            w={"full"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"250.25px"}
              w={"233.46"}
              src={
                "	https://cdn.ratnadeep.online/undefined-section/Eus_KKPcVGroup%201682.webp?tr=w-480,cm-pad_resize"
              }
              objectFit={"fit"}
            />
          </Box>
        </div>
      </Carousel>
      </div>
      
    </>
  );
}

export default Carousel1;