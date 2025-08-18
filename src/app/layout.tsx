import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import Header from "@/src/components/ui/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jayash Tripathy Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(poppins.className, "bg-background text-secondary dark")}
    >
      <body className=" transition ">
        <Header />
        <main className="flex flex-col justify-center items-center mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
