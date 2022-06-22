export const SITE = {
	title: 'Sporos NFT',
	description: 'A character building NFT project.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'SporosETH',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/dimm-city/docs.sporosnft.io/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: 'Sporos NFT Project', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'How we help creators', link: 'en/creators' },
		{ text: 'How we help communities', link: 'en/communities' },
		{ text: 'Release Info', link: 'en/releases' },
		{ text: 'Token Details', link: 'en/token-details' },
		{ text: 'Blockchain Details', link: 'en/blockchain' },
		{ text: 'Roadmap', link: 'en/roadmap' },
		{ text: 'Dimm City TTRPG', header: true },
		{ text: 'What is it?', link: 'en/dimm-city-rpg' },
	],
};
