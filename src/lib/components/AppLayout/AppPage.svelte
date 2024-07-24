<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import AppHeader from './AppHeader.svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';
	import Overlay from '../sidebar/Overlay.svelte';
	import { sidebarOpen } from '$lib/store';

	let isSideMenuOpen = false;
	let isPagesMenuOpen = false;
	let isNotificationsMenuOpen = false;
	let isProfileMenuOpen = false;
	let isDarkTheme = false;

	const style = {
		default: `flex flex-1 flex-col shadow-none h-screen fixed w-full lg:w-3/4 transition-all duration-200 ease-in-out`,
		close: `ml-16`,
		open: `ml-64`
	};

	function getThemeFromLocalStorage() {
		if (window.localStorage.getItem('isDarkTheme')) {
			return JSON.parse(window.localStorage.getItem('isDarkTheme') as any);
		}

		return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function setThemeToLocalStorage(value: boolean) {
		window.localStorage.setItem('isDarkTheme', value as any);
	}

	function toggleTheme() {
		isDarkTheme = !isDarkTheme;
		document.documentElement.classList.toggle('dark');
		setThemeToLocalStorage(isDarkTheme);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isNotificationsMenuOpen = false;
			isProfileMenuOpen = false;
		}
	}
	//absolute right-0 w-40 mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300
	onMount(() => {
		isDarkTheme = getThemeFromLocalStorage();
		window.addEventListener('keydown', handleKeyDown);
		sidebarOpen.subscribe((value) => {
			isSideMenuOpen = value;
		});
	});

	onDestroy(() => {
		if (import.meta.env.SSR === false) {
			window.removeEventListener('keydown', handleKeyDown);
		}
	});
</script>

<svelte:head>
	<script>
		// 	function getThemeFromLocalStorage() {
		// 		if (window.localStorage.getItem('isDarkTheme')) {
		// 			return JSON.parse(window.localStorage.getItem('isDarkTheme'));
		// 		}

		// 		return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		// 	}

		// 	if (getThemeFromLocalStorage()) {
		// 		document.documentElement.classList.add('dark');
		// 	} else {
		// 		document.documentElement.classList.remove('dark');
		// 	}
		//
	</script>
</svelte:head>

<div class="flex h-screen dark:bg-dark-background bg-gray-200 overflow-hidden w-screen">
	<!-- <Overlay /> -->
	<Sidebar mobileOrientation="end" />

	<div class={`${style.default} ${$sidebarOpen ? style.open : style.close}`}>
		<AppHeader
			bind:isSideMenuOpen
			props={{
				toggleTheme: toggleTheme,
				isDarkTheme: isDarkTheme,
				isNotificationsMenuOpen: isNotificationsMenuOpen,
				isProfileMenuOpen: isProfileMenuOpen
			}}
		/>
		<main
			class="bg-light-background mr-4 shadow-md dark:text-dark-text dark:shadow-none dark:bg-gray-700 rounded-xl m-4 text-light-text h-full"
		>
			<slot />
		</main>
	</div>
</div>

<style>
	.sidebar-open {
		margin-left: 256px; /* adjust this value based on your sidebar width */
		transition: margin-left 0.5s ease;
	}

	.sidebar-closed {
		margin-left: 90px;
		/* adjust this value based on your sidebar width */
		transition: margin-left 1.5s ease;
	}

	/* .main-content {
		margin-left: 0;
	}
	.main-content.ml-64 {
		margin-left: 256px; /* adjust this value based on your sidebar width */
</style>
