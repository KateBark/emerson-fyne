import "@/app/_styles/globals.css";
import { Caudex } from "next/font/google";
import { germinal } from "./fonts/germinal";
import Head from "next/head";
import Header from "@/app/_components/Header";
import Footer from "./_components/Footer";

const caudex = Caudex({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.emersonfyne.com"),
  title: {
    template: "%s Emerson Fyne",
    default: "Home of Emerson Fyne",
  },
  description:
    "Digital home of composer, singer, writer and audio engineer Emerson Fyne.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <body
        className={`${caudex.className} antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
