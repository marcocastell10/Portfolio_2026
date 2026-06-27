import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";
import { LanguageProvider } from "../context/LanguageContext";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marco Castellana — Art Director",
  description:
    "Portfolio di Marco Castellana, Art Director. Brand identity, editorial design, visual identity e packaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"){document.documentElement.setAttribute("data-theme","dark")}}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <CustomCursor />
          <LoadingScreen>{children}</LoadingScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}
