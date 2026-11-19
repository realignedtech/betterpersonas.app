export const titles = {
	intro: 'Introduction',
	setup: 'Setup',
	'building-persona': 'Building your persona',
	'linking-issues': 'Linking issues',
	'searching-issues': 'Searching for issues',
	'bias-free-personas': 'Bias free personas',
	support: 'Support',
	privacy: 'Privacy',
	eula: 'End User License Agreement'
};

export const PersonaTitles = titles;

export const PersonaNav = [
	{ link: '/', title: titles.intro },
	{ link: '/setup', title: titles.setup },
	{ link: '/building-persona', title: titles['building-persona'] },
	{ link: '/linking-issues', title: titles['linking-issues'] },
	{ link: '/searching-issues', title: titles['searching-issues'] },
	{ link: '/bias-free-personas', title: titles['bias-free-personas'] },
	{
		link: '/support', title: titles.support, children: [
			{ link: '/support/privacy', title: titles.privacy },
			{ link: '/support/eula', title: titles.eula }
		]
	}
];

export default PersonaNav;
