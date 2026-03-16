import type { Metadata } from "next";
import { Kanit, Poppins, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import "@fortawesome/fontawesome-free/css/all.min.css"
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Carlos Personal Trainer",
  description: "Carlos é personal trainer em Pompéu-MG e região, formado em educação física e especialista na área, oferece acompanhamento personalizado e consultoria online.",
  authors: [{ name: "Carlos Henrique Santos Oliveira", url: "https://www.carlospersonal.com.br" }],
  keywords: [
    "Personal Trainer em pompéu",
    "Academias em pompéu",
    "personal trainer perto de mim Pompéu",
    "Academia perto de mim Pompéu"
  ],
  openGraph: {
    title: "Carlos Henrique | Especialista Personal Trainer em Pompéu e região",
    description: "Carlos é personal trainer em Pompéu-MG e região, formado em educação física e especialista na área, oferece acompanhamento personalizado e consultoria online.",
    images:[
      {
        url:"/logo/academia-em-pompeu.png",
        width:512,
        height:512,
      }
    ]
  }

};

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--kanit-font"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--poppins-font"
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--lato-font"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${kanit.variable} ${poppins.variable} ${lato.variable}`}>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
