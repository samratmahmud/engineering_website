import React from "react";

const meetPic = [
  "/images/b14e5d94-b789-4411-b526-fee4dbe5b1a9 1.jpg",
  "/images/878ed624-6dd1-40f9-a324-ce66376170e6 1.jpg",
];

function MeetTeam() {
  return (
    <section
      style={{backgroundImage: "linear-gradient(transparent 55%,#F48024 45%)"}}
    >
      <div className="container">
        <div className="md:text-6xl text-3xl font-oswald mb-6">
          Meet the <span className="text-orange-600 font-bold">team</span>
        </div>
        <div className="text-sm max-w-[756px] md:mb-[52px] mb-7">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div>
          <div className="flex md:flex-row flex-col gap-5 md:pb-[60px] pb-10">
            {meetPic.map((item) => (
              <div>
                <img className="w-full" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTeam;
