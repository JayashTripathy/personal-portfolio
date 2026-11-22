import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import appCss from "../styles.css?url";
import { SITE, personJsonLd } from "../lib/seo";

import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: SITE.title },
			{ name: "description", content: SITE.description },
			{ name: "author", content: SITE.name },
			{ name: "robots", content: "index, follow" },
			{ name: "theme-color", content: "#0a0a0a" },
			{ name: "color-scheme", content: "dark" },

			{ property: "og:type", content: "profile" },
			{ property: "og:site_name", content: SITE.name },
			{ property: "og:url", content: SITE.url },
			{ property: "og:title", content: SITE.title },
			{ property: "og:description", content: SITE.description },
			{ property: "og:image", content: SITE.image },
			{ property: "og:image:alt", content: SITE.name },
			{ property: "og:locale", content: "en_US" },
			{ property: "profile:first_name", content: "Jayash" },
			{ property: "profile:last_name", content: "Tripathy" },

			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:site", content: SITE.twitterHandle },
			{ name: "twitter:creator", content: SITE.twitterHandle },
			{ name: "twitter:title", content: SITE.title },
			{ name: "twitter:description", content: SITE.description },
			{ name: "twitter:image", content: SITE.image },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "canonical", href: SITE.url },
			{ rel: "icon", href: "/favicon.ico", sizes: "any" },
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{ rel: "manifest", href: "/site.webmanifest" },
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(personJsonLd),
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark">
			<head>
				<HeadContent />
			</head>
			<body>
				<div className="min-h-screen bg-background text-foreground">
					{children}
					{import.meta.env.DEV && (
						<TanStackDevtools
							config={{
								position: "bottom-right",
							}}
							plugins={[
								{
									name: "Tanstack Router",
									render: <TanStackRouterDevtoolsPanel />,
								},
								TanStackQueryDevtools,
							]}
						/>
					)}
				</div>
				<Scripts />
			</body>
		</html>
	);
}
