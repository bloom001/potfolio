import type { Metadata, Viewport } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shehzibah Ashraf | Cybersecurity Analyst & Blockchain Developer Portfolio",
  description: "Motivated IT Graduate, Cybersecurity Analyst, and Blockchain Developer. Discover projects in smart contracts, network security, penetration testing, and ethical hacking.",
  keywords: [
    "Shehzibah Ashraf",
    "Cybersecurity Analyst",
    "Blockchain Developer",
    "Solidity Smart Contracts",
    "Ethical Hacking",
    "Penetration Testing",
    "IT Graduate",
    "Portfolio"
  ],
  authors: [{ name: "Shehzibah Ashraf" }],
  creator: "Shehzibah Ashraf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shehzibahashraf.dev",
    title: "Shehzibah Ashraf | Cybersecurity & Blockchain Specialist",
    description: "Building secure, decentralized solutions using Solidity, Web3.js, React, and Kali Linux.",
    siteName: "Shehzibah Ashraf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shehzibah Ashraf | Cybersecurity & Blockchain Specialist",
    description: "IT Graduate and developer building secure digital solutions.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${firaCode.variable} dark`}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to prevent theme flashing on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
