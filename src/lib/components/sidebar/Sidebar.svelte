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
		close: ` absolute duration-700 ease-out hidden transition-all lg:w-24`,
		open: `absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
		default: `shadow-lg bg-light-background text-black text-black dark:bg-dark-background dark:text-dark-text h-screen overflow-y-auto text-white top-0 bg-gray-900 lg:block lg:z-40 mr-1 fixed rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden`
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
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
