
import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Orbitron } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","600","700"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["500","700"] });

export const metadata: Metadata = {
  title: "AI Resume Analyzer",
  description: "Front-end demo: skill extraction, role-fit scoring, and learning plan suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-bgd text-white`}>
        <div className="min-h-screen">{children}</div>
        <footer className="text-center text-xs text-white/60 py-6">
          © {new Date().getFullYear()} Kudali Karthik Sriram 
        </footer>
      </body>
    </html>
  );
}
