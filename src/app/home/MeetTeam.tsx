import React from "react";

function MeetTeam() {
  return (
    <section
      style={{backgroundImage: "linear-gradient(transparent 55%,#F48024 45%)"}}
    >
      <div className="container">
        <div className="text-6xl font-oswald mb-6">
          Meet the <span className="text-orange-600 font-bold">team</span>
        </div>
        <div className="text-sm max-w-[756px] mb-[52px]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div>
          <div className="flex gap-5 pb-[60px]">
            <img
              src="/images/b14e5d94-b789-4411-b526-fee4dbe5b1a9 1.jpg"
              alt=""
            />
            <img
              src="/images/878ed624-6dd1-40f9-a324-ce66376170e6 1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTeam;
