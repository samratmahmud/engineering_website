import React, {ReactNode} from "react";
import Navbar from "./Navbar";

interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;
  return (
    <main className="max-w-[1920px] m-auto">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
