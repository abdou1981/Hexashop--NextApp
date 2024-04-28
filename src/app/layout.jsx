import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {Montserrat} from "next/font/google";
import { ThemeProvider } from "@/Context/ThemeContext";

const bodyFont = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400' , '900', '700']
});

export const metadata = {
  title: "Hexashop",
  description: "Discover a world of endless shopping possibilities at our online store. browse,choose,and order your favorite products from the comfort of your home"
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  ); 
}
