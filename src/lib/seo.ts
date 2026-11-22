export const SITE = {
	url: "https://jayash.vercel.app",
	name: "Jayash Tripathy",
	title: "Jayash Tripathy — Software Engineer, Vision AI",
	description:
		"Jayash Tripathy is a software engineer building vision AI and VLM-powered systems at Intozi: video pipelines, model evaluation and the product features built on top of them.",
	jobTitle: "Software Development Engineer",
	image:
		"https://res.cloudinary.com/jayash/image/upload/v1708275065/portfolio/jayash.png",
	twitterHandle: "@jayash_tripathy",
	sameAs: [
		"https://github.com/JayashTripathy",
		"https://x.com/jayash_tripathy",
		"https://www.linkedin.com/in/jayash-tripathy/",
	],
} as const;

export const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: SITE.name,
	url: SITE.url,
	image: SITE.image,
	jobTitle: SITE.jobTitle,
	description: SITE.description,
	worksFor: {
		"@type": "Organization",
		name: "Intozi",
		url: "https://intozi.io/",
	},
	knowsAbout: [
		"Computer Vision",
		"Vision-Language Models",
		"Video Streaming",
		"TypeScript",
		"Go",
	],
	sameAs: SITE.sameAs,
};
