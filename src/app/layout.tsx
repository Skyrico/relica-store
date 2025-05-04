import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relica Collectibles",
  description: "Because every pack tells a story.",
  metadataBase: new URL("https://relica.no"),
  icons: {
    icon: "/favicon.ico",
  },
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full flex items-center justify-center py-6">
            <Image
              src="/images/logo-temp.png"
              alt="Relica logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
