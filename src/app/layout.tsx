import "@styles/globals.css";

import { Vazirmatn } from "next/font/google";

import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html dir="rtl" lang="fa-IR" className={vazirmatn.variable}>
    <body className="grid place-items-center h-screen text-3xl font-black">
      {children}
    </body>
  </html>
);

export const metadata: Metadata = {
  title: "نگهبان",
  description: "ناظر سایت و گزارشگر خرابی.",
};

export default RootLayout;
