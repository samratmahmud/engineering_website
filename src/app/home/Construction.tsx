import Button from "@/components/common/Button";
import React from "react";

function Construction() {
  return (
    <section className="bg-gray-400 mb-[70px]">
      <div className="container py-24">
        <div className=" flex gap-28">
          <div>
            <div className="text-lg text-orange-600 font-bold mb-4 font-roboto">
              WELCOME TO
            </div>
            <div className="text-3xl font-bold font-oswald mb-7">
              Construction Company
            </div>
            <hr className="h-2 w-[36%] bg-orange-600 mb-7" />
            <div className="text-lg text-gray-200 italic">
              We are the leader with 25 years of experience in the construction
              market!
            </div>
          </div>
          <div className="text-sm max-w-[529px]">
            <div className="mb-7">
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
