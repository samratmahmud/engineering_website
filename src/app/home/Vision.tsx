import Button from "@/components/common/Button";
import React from "react";

function Vision() {
  return (
    <section>
      <div className="container md:mb-[90px] mb-12">
        <div className="md:text-lg text-md md:text-center max-w-[648px] m-auto mb-7 leading-9">
          Eget egestas purus viverra accumsan in nisl nisi. Viverra ipsum nunc
          aliquet bibendum enim. Ac tortor vitae purus faucibus ornare
          suspendisse sed nisi lacus. Platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim cras. Id semper risus in
          hendrerit.
        </div>
        <div className="flex justify-center">
          <Button name="LEARN MORE" />
        </div>
      </div>
      <div className="bg-orange-500 md:py-[60px] py-8">
        <div className="container">
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-7 justify-between">
            <div className="md:text-3xl text-xl text-white font-bold font-roboto-Condensed lg:max-w-[537px] xl:mt-9">
              Expert, Efficient, Collaborative. Build With Experience
            </div>
            <div>
              <img
                className="w-full"
                src="/images/5e46484b-67ce-4b77-a22e-91badb8078c4 1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="xl:-mt-[8%] lg:-mt-[5%] mt-4">
            <img
              src="/images/b040b88d-6b52-4485-b452-164ef24c8fe6 1.jpg"
              alt=""
            />
          </div>
          <div className="flex md:flex-row flex-col gap-2 justify-between md:items-end lg:-mt-[17%] mt-6">
            <div className="translate-x-8 hidden lg:block">
              <img src="/images/Exclude.svg" alt="" />
            </div>
            <div className="bg-white pt-5 pb-12 pl-8 pr-6 lg:max-w-[483px] lg:-translate-x-[71px]">
              <div className="text-2xl font-bold">OUR VISION</div>
              <div className="text-sm mb-5">
                We thrive on new challenges and are at our best when a project
                is technically or logistically demanding and requires smart
                planning.
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
      </div>
    </section>
  );
}

export default Vision;
