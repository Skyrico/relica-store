import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relica Collectibles",
  description: "A Norwegian TCG store for Riftbound, MTG, and sealed products.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
