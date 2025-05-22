import "@/app/_styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
