<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { data } from './data';
	import { sidebarOpen } from '$lib/store';

	interface DesktopSideMenuProps {
		isPagesMenuOpen: boolean;
	}

	export let props: DesktopSideMenuProps;
	const style = {
		title: `mx-4 text-sm whitespace-pre`,
		active: `bg-gray-700 rounded-full`,
		link: `flex items-center justify-start my-1 p-3 w-full hover:text-white whitespace-pre`,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`
	};
	// const style = {
	// 	title: `mx-4 text-sm text-white whitespace-pre`,
	// 	section: `font-thin pl-5 text-white mb-6 uppercase lg:pl-6`,
	// 	active: `backdrop-blur-md bg-gradient-to-r from-orange-400/70 to-orange-600/70 mx-2 rounded-md font-bold shadow-md lg:border-l-0 backdrop-filter backdrop-blur-lg`,
	// 	inactive: `backdrop-blur-md mx-2 my-1 hover:bg-gradient-to-r hover:from-orange-300/70 hover:to-orange-400/70 rounded-lg backdrop-filter backdrop-blur-lg`,
	// 	link: `hover:shadow-sm rounded-md hover:bg-white/10 flex items-center text-gray-200 justify-start my-2 p-3 w-full hover:text-white backdrop-filter backdrop-blur-lg`,
	// 	close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
	// 	open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
	// 	item: `relative px-6 py-3 dark:text-white text-black`
	// };
</script>

<aside
	class="z-20 shadow-lg hidden w-64 flex-shrink-0 overflow-y-auto border-r-[1px] border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 md:block"
>
	<div class="py-4 content-center">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/">Meu Time</a>
		<!-- Desktop sidebar menu -->
		<ul class="md:pl-3">
			<li>
				{#each data as item (item.title)}
					{item.title}
					<a class={style.link} href={item.link}>
						<div class={`p-2 ${item.link === $page.url.pathname ? style.active : ''}`}>
							<span><svelte:component this={item.icon} /></span>
						</div>
						<span class={`${style.title} ${$sidebarOpen ? style.open : style.close}`}>
							{item.title}
						</span>
					</a>
				{/each}
			</li>
		</ul>

		<div class="my-6 px-6">
			<button
				class="flex w-full items-center justify-between rounded-lg border border-transparent bg-orange-600/80 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-emerald-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
			>
				Create account
				<span class="ml-2" aria-hidden="true">+</span>
			</button>
		</div>
	</div>
</aside>
