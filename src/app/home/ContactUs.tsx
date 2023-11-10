import Button from "@/components/common/Button";
import React from "react";

function ContactUs() {
  return (
    <section
      className="md:pt-16 py-10 md:pb-24 md:mb-28 mb-10 z-0 relative"
      style={{backgroundImage: "linear-gradient(#E0E5EB 55%,#F48024 45%)"}}
    >
      <div className="container">
        <div className="relative">
          <div className="flex justify-center relative z-10">
            <img src="/images/def 1.png" alt="" />
          </div>
          <div className="absolute -bottom-[90px] -z-10 hidden md:block">
            <img
              src="/images/227f0f5b-bd4e-986c-8df1-dd316754190b 1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-end md:-mt-60 mt-7">
          <div className="max-w-[620px] bg-white md:pt-10 md:pr-[53px] md:pb-[60px] md:pl-10 p-6 z-20">
            <div className="md:text-2xl text-xl text-orange-600 font-bold">
              Build With Us
            </div>
            <div className="md:text-sm text-xs mb-5">
              Our vision is to inspire an organization of professionals to
              complete high-value, high-quality projects that positively impact
              communities — and it is our approach and our culture that sets us
              apart.
            </div>
            <div className="text-sm text-gray-500 mb-5">
              Images from <span className="text-black underline">Freepik</span>
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

export default ContactUs;
