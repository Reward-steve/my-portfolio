import ClientOnly from "../components/clientOnly";
import LoadingProvider from "./context/loadingProvider";
import { ThemeProvider } from "next-themes";
import Navigation from "../components/navbar";
import PageHolder from "../components/pageHolder";
import "./style/globals.css";

export const metadata = {
  title: "Reward Stephen | Frontend Developer",
  description:
    "I'm Reward Stephen, a frontend developer building beautiful and functional web applications.",
  keywords: [
    "Reward Stephen",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
    "React Developer",
    "Next.js",
  ],
  openGraph: {
    title: "Reward Stephen | Frontend Developer",
    description:
      "Explore Reward Stephen's portfolio, showcasing projects and skills as a frontend developer.",
    url: "https://my-portfolio-website-chi-kohl.vercel.app/",
    type: "website",
    images: [
      {
        url: "../app/asset/website.png",
        width: 1200,
        height: 630,
        alt: "Reward Stephen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Reward Stephen | Frontend Developer",
    description:
      "Explore Reward Stephen's portfolio, showcasing projects and skills as a frontend developer.",
    images: ["../app/asset/website.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#ffffff] text-[#0f172b] dark_bg dark_tx">
        <ClientOnly>
          <LoadingProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={true} // Enable system preference
            >
              <Navigation />
              <PageHolder>{children}</PageHolder>
            </ThemeProvider>
          </LoadingProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
