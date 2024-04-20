import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css"

const font = ABeeZee(
  { subsets: ["latin"] ,
  weight: "400"
});

export const metadata: Metadata = {
  title: "KaryaKram-Hub",
  description: "Book or create any events for the public",
  icons: {
    icon: '/favico.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-gray-900">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
