<script>
	import { data } from './data';
	import { page } from '$app/stores';
	import { sidebarOpen } from '$lib/store';

	const style = {
		title: `mx-4 text-sm whitespace-pre dark:text-dark-text text-light-text`,
		active: `bg-neutral-500/70 dark:bg-neutral-600 rounded-full`,
		link: `flex items-center justify-start my-1 p-3 w-full hover:text-white whitespace-pre`,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`
	};
</script>

<ul class="md:pl-3">
	<li>
		{#each data as item (item.title)}
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
