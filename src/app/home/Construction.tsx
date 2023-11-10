import Button from "@/components/common/Button";
import React from "react";

function Construction() {
  return (
    <section className="bg-gray-400 md:mb-[70px] mb-10">
      <div className="container md:py-24 py-8">
        <div className="flex md:flex-row flex-col lg:gap-28 gap-8">
          <div>
            <div className="md:text-lg text-base text-orange-600 font-bold mb-4 font-roboto">
              WELCOME TO
            </div>
            <div className="md:text-3xl text-2xl font-bold font-oswald md:mb-7 mb-5">
              Construction Company
            </div>
            <hr className="h-2 md:w-[36%] w-[80%] bg-orange-600 md:mb-7 mb-5" />
            <div className="md:text-lg text-base text-gray-200 italic">
              We are the leader with 25 years of experience in the construction
              market!
            </div>
          </div>
          <div className="md:text-sm text-xs max-w-[529px]">
            <div className="md:mb-7 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maece
              gravida cursus eleifend. Nullam ornare sapien quis vulputate
              cursus. Vivamus vel pellentesque purus, sed dignissim elit.
              Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in
              nibh risus. Phasellus ut cursus sem. Vestibulum feugiat eros
              lorem,. Sed tempor, arcu non sodales gravida, sapien dui iaculis
              felis, vels sapien nisi non orci. Ut laoreet ante tellus, vel
              hendrerit lorem tincidunt sed.
            </div>
            <div className="mb-5">
              Donec porttitor turpis eu mi tempus facilisis. Maecenas id
              ullamcorper elit, quis tempus enim. In dignissim dolor in accumsan
              tincidunt. Donec vel diam vitae risus elementum congue. Cras
              varius, enicondimentum mattis, erat lacus
            </div>
            <div>
              <Button name="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Construction;
