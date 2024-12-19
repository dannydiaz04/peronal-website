import "./globals.css";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Diaz - Machine Learning Engineer, Data Scientist, and AI Researcher',
  description: 'Pushing the frontier through the laws of physics and nature in the universe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}