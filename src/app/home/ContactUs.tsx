import Button from "@/components/common/Button";
import React from "react";

function ContactUs() {
  return (
    <section
      className="pt-16 pb-[190px] mb-32"
      style={{backgroundImage: "linear-gradient(#E0E5EB 55%,#F48024 45%)"}}
    >
      <div className="container">
        <div className="relative">
          <div className="flex justify-center">
            <img src="/images/def 1.png" alt="" />
          </div>
          <div className="absolute bottom-0 translate-y-[90px]">
            <img
              src="/images/227f0f5b-bd4e-986c-8df1-dd316754190b 1.png"
              alt=""
            />
          </div>
          <div className="max-w-[620px] bg-white pt-10 pr-[53px] pb-[60px] pl-10 absolute bottom-0 translate-y-[120px] right-0">
            <div className="text-2xl text-orange-600 font-bold">
              Build With Us
            </div>
            <div className="text-sm mb-5">
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
