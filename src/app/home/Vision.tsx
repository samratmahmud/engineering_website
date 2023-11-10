import Button from "@/components/common/Button";
import React from "react";

function Vision() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(transparent 22%,#F48024 20%,#F48024 20%,#F48024 20%,#F48024 18%)",
      }}
    >
      <div className="container pb-[60px]">
        <div className="md:text-lg text-md md:text-center max-w-[630px] m-auto mb-7">
          Eget egestas purus viverra accumsan in nisl nisi. Viverra ipsum nunc
          aliquet bibendum enim. Ac tortor vitae purus faucibus ornare
          suspendisse sed nisi lacus. Platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim cras. Id semper risus in
          hendrerit.
        </div>
        <div className="flex justify-center md:mb-44 mb-8">
          <Button name="LEARN MORE" />
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-between">
          <div className="md:text-3xl text-2xl text-white font-bold font-roboto-Condensed md:max-w-[537px] mt-3 lg:mt-0">
            Expert, Efficient, Collaborative. Build With Experience
          </div>
          <div>
            <img
              src="/images/5e46484b-67ce-4b77-a22e-91badb8078c4 1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="xl-mt-[8%] -mt-[3%]">
          <img
            src="/images/b040b88d-6b52-4485-b452-164ef24c8fe6 1.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-end -mt-[17%]">
          <div className="translate-x-8">
            <img src="/images/Exclude.svg" alt="" />
          </div>
          <div className="bg-white pt-5 pb-12 pl-8 pr-6 max-w-[483px] -translate-x-[71px] ">
            <div className="text-2xl font-bold">OUR VISION</div>
            <div className="text-sm mb-5">
              We thrive on new challenges and are at our best when a project is
              technically or logistically demanding and requires smart planning.
            </div>
            <div className="text-sm mb-5">
              Images from <span className="underline">Freepik</span>
            </div>
            <div>
              <Button name="CONTUCT US" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
