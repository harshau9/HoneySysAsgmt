import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { RiHeartAddLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const Carousel2 = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("https://honeysys-amber.vercel.app/prod")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProd(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
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
          {prod
            ? prod.map((ele) => {
                return (
                  <div>
                    <Box p="1" borderWidth="1px">
                      <Flex mt={2}>
                        <Badge background="#34c58f" color="white" pr="7">
                          {ele.dis}
                        </Badge>
                        <Spacer />
                        <RiHeartAddLine color="red" fontSize="1.5em" />
                      </Flex>

                      <Image
                        borderRadius="md"
                        boxSize="80%"
                        m="auto"
                        objectFit="cover"
                        src={ele.image}
                      />

                      <Text
                        ml={2}
                        mt="4"
                        fontSize="md"
                        fontWeight="semibold"
                        color="black.400"
                      >
                        {ele.name}
                      </Text>

                      <Text
                        mt={7}
                        ml={2}
                        display="flex"
                        alignItems="left"
                        fontSize="sm"
                        fontWeight="semibold"
                        lineHeight="short"
                        color="red.400"
                      >
                        {ele.qty}
                      </Text>

                      <Flex mt={3}>
                        <Box>
                          <Text fontSize="md">
                            <b>{ele.price}</b>
                          </Text>
                          <Text as="s" mt={1} fontSize="xs">
                            {ele.s_price}
                          </Text>
                        </Box>
                        <Spacer />
                        <Button
                          color="#ea3639"
                          size="sm"
                          border="1px solid #BDBDBD"
                          background="white"
                        >
                          Add
                        </Button>
                      </Flex>
                      <Text
                        mt={2}
                        fontSize="xs"
                        color="#20cd98"
                        display="flex"
                        alignItems="left"
                      >
                        {ele.save}
                      </Text>
                    </Box>
                  </div>
                );
              })
            : null}
        </Carousel>
      </div>
    </>
  );
};

export default Carousel2;
