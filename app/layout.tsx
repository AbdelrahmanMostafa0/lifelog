import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProfileIntializer from "@/components/ProfileIntializer";
import { GlobalNav } from "@/components/GlobalNav";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Lifelog",
  description: "Track your life and achieve your goals",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          <style>{`
            [style*="opacity"],[style*="transform"]{opacity:1!important;transform:none!important}
          `}</style>
        </noscript>
      </head>
      <body>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <noscript>
            <div className="flex w-full fixed flex-col top-16 md:top-20  text-center justify-center items-center left-0 bg-red-500 z-50 text-white p-4 ">
              <p className="text-2xl font-bold  text-white">
                JavaScript is required to run this app.
              </p>
              <p className="text-2xl font-bold text-white">
                Please enable JavaScript in your browser.
              </p>
            </div>
          </noscript>
          <ReactQueryProvider>
            <GlobalNav />
            <div className="root pt-16">{children}</div>
            <ProfileIntializer></ProfileIntializer>
          </ReactQueryProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
