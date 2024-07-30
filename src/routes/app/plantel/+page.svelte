<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import type { PageData } from './$types';
	import Table from './_Table.svelte';
	import { goto } from '$app/navigation';
	export let data: PageData;
</script>

<main class="p-2">
	<PageTitle name="Plantel" />
	<div class="mt-4 mx-4">
		<div class="mb-2">
			<button on:click={() => goto('/app/atleta/form')}
				class="inline-flex items-center px-4 py-2 text-center text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-300"
				>ADICIONAR ATLETA</button
			>
		</div>

		<Table />
	</div>
</main>
