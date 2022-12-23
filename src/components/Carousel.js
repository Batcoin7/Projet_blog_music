import React from "react";
import { Carousel } from "react-carousel-minimal";

const MyCarousel = () => {
  const data = [
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/455/425/305/space-astronaut-nebula-galaxy-wallpaper-preview.jpg",
      caption: "",
    },
    {
      image:
        "https://coolhdwall.com/storage/202101/astronaut-floating-space-4k-wallpaper-4096x2304.jpg",
      caption: "",
    },
    {
      image:
        "https://preview.redd.it/bj8bei480pn71.png?auto=webp&s=62acc8c358859a3da1009c067543f515b54c6d1b",
      caption: "",
    }
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Carousel
          data={data}
          time={2000}
          width="100%"
          height="700px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
          style={{
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "700px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
};

export default MyCarousel;
