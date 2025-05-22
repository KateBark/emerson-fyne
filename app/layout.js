import { Caudex } from "next/font/google";
// import { 1885 Germinal.otf } from "next/font/local";

import "@/app/_styles/globals.css";

const caudex = Caudex({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: {
    template: "%s Emerson Fyne",
    default: "Home of Emerson Fyne",
  },
  description: "Digital home of composer, singer, audio engineer Emerson Fyne)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${caudex.className}`}>{children}</body>
    </html>
  );
}
