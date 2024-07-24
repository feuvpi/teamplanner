import HomeIcon from './icons/HomeIcon.svelte';
import StatusIcon from './icons/StatusIcon.svelte';
import CreditsIcon from './icons/CreditsIcon.svelte';
import ArchivesIcon from './icons/ArchivesIcon.svelte';
import SettingsIcon from './icons/SettingsIcon.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		title: 'Resumo',
		icon: HomeIcon,
		link: '/app'
	},
	{
		title: 'PlantelStatus',
		icon: StatusIcon,
		link: '/app/plantel'
	},
	{
		title: 'Times',
		icon: ArchivesIcon,
		link: '/app/times'
	},
	{
		title: 'Desempenho',
		icon: CreditsIcon,
		link: '/app/desempenho'
	},
	{
		title: 'Partidas',
		icon: SettingsIcon,
		link: '/app/partidas'
	}
];
