import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers, TanstackProvider } from "@/common/providers";
import { Footer, Header } from "@/components";
import { inter, sf_pro } from "@/styles/fonts";

const titleSite = "Bulat ✦ Creative product manager";
const descriptionSite = "Казань, PM: связываю бизнес, пользователей и разработку, навожу порядок в требованиях и доставляю ценность итерациями";

export const metadata: Metadata = {
	title: titleSite,
	description: descriptionSite,
	openGraph: {
		title: titleSite,
		description: descriptionSite,
		siteName: titleSite,
		locale: "ru-RU",
		type: "website",
		images: [
			{
				url: "/other/preview.svg",
				width: 800,
				height: 600,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="dark" lang="en">
			<body className={`${sf_pro.className} ${sf_pro.variable} antialiased`}>
				<TanstackProvider>
					{/* <Header /> */}
					{children}
					{/* <Footer /> */}
					<Providers />
				</TanstackProvider>
			</body>
		</html>
	);
}
