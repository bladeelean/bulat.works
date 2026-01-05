import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers, TanstackProvider } from "@/common/providers";
import { Footer, Header } from "@/components";
import { inter, sf_pro } from "@/styles/fonts";

const titleSite = "Ruslan ✦ Creative product designer";
const descriptionSite = "Based in Kazan, hands-on by nature, with a systems mindset, strong product vision, and empathy as a core strength";

export const metadata: Metadata = {
	title: titleSite,
	description: descriptionSite,
	authors: {
		name: "DCiel | Vingrig",
		url: "https://github.com/faes763",
	},
	creator: "dciel",
	openGraph: {
		title: titleSite,
		description: descriptionSite,
		siteName: "DCiel",
		locale: "ru-RU",
		type: "website",
		images: [
			{
				url: "/other/preview.png",
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
		<html className="" lang="en">
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
