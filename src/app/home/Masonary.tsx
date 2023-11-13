"use client";
import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const pictureGroup = [
  {
    image:
      "/images/modern-business-building-scenery-touching-sky_181624-5785 1.jpg",
  },
  {
    image: "/images/ec4a23ed-c632-4209-8ecf-55d1286e1c03 1.jpg",
  },
  {image: "/images/smiling-female-architect-with-helmet_23-2147702529 1.jpg"},
  {image: "/images/concrete-bridge_1127-2099 1.jpg"},
  {
    grid: "md:row-start-2 md:row-end-4 md:col-start-2 md:col-end-4",
    image: "/images/cf851855-9c1b-4325-a168-755bb76a721e 1.jpg",
  },
  {
    image: "/images/01e85b91-3e7f-4ec2-ae2d-e89cdddba19e 1.jpg",
  },
];

function Masonary() {
  return (
    <section className="relative z-0">
      <div className="bg-orange-500 w-[78%] h-[30%] absolute top-[35%] right-0 -z-10" />
      <div className="container md:mb-[60px] mb-10 z-0">
        <div className="md:text-5xl text-2xl font-bold text-orange-600 mb-5 font-oswald">
          How We Work
        </div>
        <div className="md:text-sm text-xs italic mb-10 max-w-[786px]">
          Viverra nam libero justo laoreet sit. Nisl nunc mi ipsum faucibus. Ut
          ornare lectus sit amet est placerat in egestas. Felis donec et odio
          pellentesque. Eget arcu dictum varius duis at consectetur lorem donec
          massa. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tellus
          pellentesque eu tincidunt tortor aliquam nulla. Amet consectetur
          adipiscing elit duis tristique sollicitudin nibh sit.
        </div>
        <div className="grid lg:grid-cols-3  md:gap-7 gap-4 md:mr-[13%]">
          {pictureGroup.map(({image, grid}, index) => (
            <div key={index} className={grid}>
              <img className="w-full" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Masonary;
