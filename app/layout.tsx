import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryWrapper from "@/context/QueryWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Morpho dashboard",
    description: "dashboard for morpho",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <QueryWrapper>
                <body className={inter.className}>{children}</body>
            </QueryWrapper>
        </html>
    );
}
