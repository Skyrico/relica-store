import "./globals.css";
import { Cinzel, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

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
    icon: "/favicon.ico?v=2", // You’ve got this already
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
      <body className="font-sans bg-black text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full flex items-center justify-center py-6">
            <Image
              src="/images/logo-temp.png"
              alt="Relica logo"
              width={96}
              height={96}
              className="rounded-full object-cover"
              priority
            />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
