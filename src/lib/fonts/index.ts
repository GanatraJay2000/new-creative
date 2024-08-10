import { Anton, Antonio, Bungee_Shade, DM_Serif_Display, Inter, Lora, Monoton, Poppins, Prata, Rampart_One, Space_Grotesk, Tiro_Devanagari_Sanskrit, Unna } from "next/font/google";
import localFont from 'next/font/local'

export const nudica = localFont({ src: './nudica/nudica.woff2' })

export const silka = localFont({
  src: [
    {
      path: './silka/silka-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './silka/silka-regularitalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ]
})

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

export const unna = Unna({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unna",
  weight: ["400", "700"],
});

export const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prata",
  weight: ["400"],
});

export const tiro = Tiro_Devanagari_Sanskrit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tiro",
  weight: ["400"],
});

export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

export const antonio = Antonio({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-antonio",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const bungee = Bungee_Shade({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee",
  weight: ["400"],
});

export const monoton = Monoton({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monoton",
  weight: ["400"],
});

export const rampartOne = Rampart_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rampart",
  weight: ["400"],
});

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm",
  weight: ["400"],
});

export const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
  weight: ["400"],
});