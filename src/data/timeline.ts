import navyLogo from '$lib/assets/navy-logo.svg';
import ecpiLogo from '$lib/assets/ecpi.png';
import codeLogo from '$lib/assets/code.png';

type TimelineData = {
	header: string;
	content: string;
	imgSrc: string;
	imgAlt: string;
};

export const timelineData: TimelineData[] = [
	{
		header: 'U.S. Navy',
		content:
			'I began my IT journey by joining the U.S. Navy, where I learned Systems Adminstration and Network Adminstration, focusing heavily on Linux Systems.',
		imgSrc: navyLogo,
		imgAlt: 'U.S. Navy'
	},
	{
		header: 'College',
		content:
			'After leaving the Navy, I finished my degree in Computer Science, with a major in Software Development. During this time, I found a passion for web development.',
		imgSrc: ecpiLogo,
		imgAlt: 'ECPI University'
	},
	{
		header: 'Software Developer',
		content:
			'After completing my degree, I got my first Software Development job as a Full-Stack developer working with the PERN Stack. Since my first job as a junior developer, I have had the privilege of working with several great companies and have done some freelancing, primarily working on React-based projects.',
		imgSrc: codeLogo,
		imgAlt: 'Software Developer'
	}
];
