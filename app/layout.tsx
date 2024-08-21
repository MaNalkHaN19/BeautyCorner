import React from "react";
import "./globals.css";
import MainHeader from "../components/Header/main-header";
import Footer from "../components/Footer/page"

export const metadata = {
  title: "Beauty Corner",
  description: "Enhance your beauty by using our products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body-background">
        <MainHeader />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
