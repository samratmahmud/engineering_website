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
        <div className="text-lg text-center max-w-[630px] m-auto mb-7">
          Eget egestas purus viverra accumsan in nisl nisi. Viverra ipsum nunc
          aliquet bibendum enim. Ac tortor vitae purus faucibus ornare
          suspendisse sed nisi lacus. Platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim cras. Id semper risus in
          hendrerit.
        </div>
        <div className="flex justify-center mb-44">
          <Button name="LEARN MORE" />
        </div>
        <div className="flex gap-20 justify-between">
          <div className="text-3xl text-white font-bold font-roboto-Condensed max-w-[537px]">
            Expert, Efficient, Collaborative. Build With Experience
          </div>
          <div>
            <img
              src="/images/5e46484b-67ce-4b77-a22e-91badb8078c4 1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="-mt-[8%]">
          <img
            src="/images/b040b88d-6b52-4485-b452-164ef24c8fe6 1.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-end -mt-[17%]">
          <div className="translate-x-8 -translate-y-6">
            <img src="/images/Exclude.svg" alt="" />
          </div>
          <div className="bg-white pt-5 pb-12 pl-8 pr-6 max-w-[483px] -translate-x-[71px] ">
            <div className="text-2xl text-orange-600 font-bold">
              Build With Us
            </div>
            <div className="text-sm mb-5">
              Our vision is to inspire an organization of professionals to
              complete high-value, high-quality projects that positively impact
              communities — and it is our approach and our culture that sets us
              apart.
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
