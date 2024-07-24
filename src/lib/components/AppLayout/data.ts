import HomeIcon from './icons/HomeIcon.svelte';
import MediasIcon from './icons/MediasIcon.svelte';


export const data = [
	{
		title: 'Resumo',
		icon: HomeIcon,
		link: '/app'
	},
	{
		title: 'Plantel',
		icon: HomeIcon,
		link: '/app/plantel'
	},
	{
		title: 'Times',
		icon: MediasIcon,
		link: '/app/times'
	},
	{
		title: 'Desempenho',
		icon: MediasIcon,
		link: '/app/desempenho'
	},
	{
		title: 'Partidas',
		icon: MediasIcon,
		link: '/app/partidas'
	}
];


// export const data = [
// 	{
// 		section: 'MENU PRINCIPAL',
// 		content: [
// 			{
// 				title: 'Plantel',
// 				icon: HomeIcon,
// 				grouping: true,
// 				sublinks: [
// 					{
// 						title: 'Lista',
// 						link: '/app/plantel'
// 					},
// 					{
// 						title: 'Form',
// 						link: '/app/atleta/form'
// 					}
// 				]
// 			},
// 			{
// 				title: 'Times',
// 				icon: MediasIcon,
// 				link: '/app/times'
// 			},
// 			{
// 				title: 'Partidas',
// 				icon: MediasIcon,
// 				link: '/app/partidas'
// 			},
// 			{
// 				title: 'Desempenho',
// 				icon: MediasIcon,
// 				link: '/app/desempenho'
// 			}
// 		]
// 	},
// ]