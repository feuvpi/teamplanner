<script lang="ts">
	import { sidebarOpen } from '$lib/store';
	import SidebarItems from './SidebarItems.svelte';
	import SidebarHeader from './SidebarHeader.svelte';

	const style = {
		mobileOrientation: {
			start: 'left-0 ',
			end: 'right-0 lg:left-0'
		},
		container: `pb-32 lg:pb-12`,
		close: ` absolute duration-200 hidden transition-all lg:w-24`,
		open: `absolute duration-200 z-50  transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
		default: `z-50 shadow-xl bg-sky-700/70  dark:bg-dark-background dark:text-dark-text h-screen overflow-y-auto text-white top-0 lg:block fixed rounded-none ease-in-out  transition-all`
	};

	export let mobileOrientation: 'start' | 'end' = 'end';
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar`}
>
	<div class={style.container}>
		<SidebarHeader />
		<SidebarItems />
	</div>
	<div class={`${$sidebarOpen ? 'shadow-effect' : ''}`}></div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}

	/* Style the pseudo-element for the shadow */
</style>
