import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "./Carousel";
import Carousel2 from "./Carousel2";

import { Image, Grid, GridItem } from "@chakra-ui/react";

function Home() {
  return (
    <div>
      {/* banner */}
      <Carousel1 />

      {/* offers */}
      <div className="deals">
        <div>
          <h1>Today's Deals</h1>
          <h4>Best Deal Everyday</h4>
        </div>
        <h2>See All</h2>
      </div>

      {/* products section */}
      <Carousel2 />

      {/* last section */}
      <Grid mt={3} templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 3, lg: 2, xl: 1 }}>
          <Image
            borderRadius="lg"
            // width={{ md: 40 }}
            src="https://cdn.ratnadeep.online/undefined-section/aoewpps9eGroup%201685.webp"
          />
        </GridItem>

        <GridItem colSpan={{ base: 3, lg: 2, xl: 1 }}>
          <Image
            borderRadius="lg"
            // width={{ md: 40 }}
            src="https://cdn.ratnadeep.online/undefined-section/mLzfOXoXxGroup%201686.webp"
          />
        </GridItem>
        <GridItem colSpan={{ base: 3, lg: 2, xl: 1 }}>
          <Image
            borderRadius="lg"
            // width={{ md: 40 }}
            src="	https://cdn.ratnadeep.online/undefined-section/TPWn4gcpoGroup%201684.webp"
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Home;
