<script lang="ts">
	import AppDesktopSideMenu from './AppDesktopSideMenu.svelte';
	import AppMobileSideMenu from './AppMobileSideMenu.svelte';

	interface DashboardSideMenuProps {
		isPagesMenuOpen: boolean;
		isSideMenuOpen: boolean;
	}

	export let props: DashboardSideMenuProps;
</script>

<!-- Desktop sidebar -->
<AppDesktopSideMenu {props} />
<!-- Mobile sidebar -->
{#if props.isSideMenuOpen}
	<AppMobileSideMenu {props} />
{/if}
