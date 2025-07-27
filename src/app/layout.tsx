import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

export const metadata = {
  title: "Larry Park | Portfolio",
  description:
    "Game/UI Developer Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-hidden h-full">
      <body className="flex flex-col h-full overflow-hidden font-sans antialiased bg-white text-black">
        <Navbar />
        <main className="flex-1 overflow-hidden">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
