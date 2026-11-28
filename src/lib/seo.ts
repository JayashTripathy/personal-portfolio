export const SITE = {
	url: "https://jayash.space/",
	name: "Jayash Tripathy",
	title: "Jayash Tripathy — Software Engineer, Vision AI",
	description:
		"Software engineer building vision AI and VLM-powered systems at Intozi: real-time video pipelines, model evaluation and product features.",
	jobTitle: "Software Development Engineer",
	image:
		"https://jayash.space/jayash.jpg",
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
