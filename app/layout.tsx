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
      {" "}
      <body>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
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
