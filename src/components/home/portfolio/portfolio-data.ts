import { Github, Linkedin } from 'lucide-react';

export const navItems = [
	{ href: '#home', label: 'Home' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#about', label: 'About' },
	{ href: '#contact', label: 'Contact' },
] as const;

export const socialLinks = [
	{ href: 'https://github.com/yonatan-amir', label: 'GitHub', icon: Github },
	{ href: 'https://linkedin.com/in/yamir1', label: 'LinkedIn', icon: Linkedin },
] as const;

export const projects = [
	{
		title: 'Mixed by Yonatan',
		description:
			'A client-facing platform built for my music business, featuring authentication, submissions, admin workflows, and booking integration. Designed to support a real operational workflow, not a demo.',
		tags: [
			'Next.js',
			'React',
			'Tailwind CSS',
			'Authentication',
			'Admin flows',
			'Booking',
		],
		href: 'https://mixedbyyonatan--mixed-by-yonatan.us-east4.hosted.app/',
		ctaLabel: 'Visit live site',
		imageSrc: '/mixed_by_yonatan.png',
		imageAlt: 'Mixed by Yonatan project screenshot',
	},
	{
		title: '42Berlin',
		description:
			'A repository documenting my progress through the 42 Berlin curriculum, from low-level C and systems thinking to newer work in Python and AI-related topics. It reflects the foundations I am actively strengthening.',
		tags: ['C', 'Python', 'Systems', 'Software foundations', '42 Berlin'],
		href: 'https://github.com/yonatan-amir/42Berlin',
		ctaLabel: 'View on GitHub',
		imageSrc: '/42_Berlin.png',
		imageAlt: '42Berlin repository screenshot',
	},
] as const;

export const focusPoints = [
	'Berlin-based developer working across music and software.',
	'Building applications shaped by real workflows, operational needs, and repeatable systems.',
	'Currently deepening engineering foundations through 42 Berlin, with a focus on backend, systems, and infrastructure.',
] as const;
