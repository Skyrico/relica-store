import "./globals.css";
import { Cinzel, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Relica Collectibles",
  description: "Because every pack tells a story.",
  icons: {
    icon: "/images/favicon.png",
  },
  metadataBase: new URL("https://relica.no"),
  openGraph: {
    title: "Relica Collectibles",
    description: "Because every pack tells a story.",
    url: "https://relica.no",
    siteName: "Relica",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "no_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen w-screen font-sans bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Floating top-right theme toggle */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          {/* Centered logo */}
          <header className="w-full flex items-center justify-center py-2">
            <Image
              src="/images/relica-logo.png"
              alt="Relica logo"
              width={240}
              height={240}
              className="object-contain"
              priority
            />
          </header>

          {/* Page content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
