import { Inter } from "next/font/google";
import localFont from "next/font/local";
export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const sf_pro = localFont({
	src: [
		{
			path: "../../public/fonts/sfpro/SF-Pro-Display-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/sfpro/SF-Pro-Display-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/sfpro/SF-Pro-Display-Semibold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/sfpro/SF-Pro-Display-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/sfpro/SF-Pro-Display-BoldItalic.otf",
			weight: "700",
			style: "italic",
		}
	],
	display: "swap",
	variable: "--font-sf-pro",
});