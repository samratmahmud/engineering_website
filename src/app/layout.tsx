import type {Metadata} from "next";
import "@/style/globals.css";
import Layout from "@/components/global/Layout";

export const metadata: Metadata = {
  title: "Engineering Website",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
