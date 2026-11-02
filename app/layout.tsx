import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Interva — AI Interview Practice", description: "Practice interviews with a personalized AI interviewer." };
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}