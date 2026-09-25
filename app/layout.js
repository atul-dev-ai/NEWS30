import { Noto_Sans_Bengali, Noto_Serif_Bengali, Inter } from "next/font/google";
import "./globals.css";
import GlobalHeader from "../components/GlobalHeader";
import BottomNav from "../components/BottomNav";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEWS30 - Bangladesh Short News Aggregator",
  description: "সব বড় খবর। সংক্ষেপে। এক জায়গায়।",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${notoSansBengali.variable} ${notoSerifBengali.variable} ${inter.variable}`}
    >
      <body className="pb-24">
        <GlobalHeader />
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
