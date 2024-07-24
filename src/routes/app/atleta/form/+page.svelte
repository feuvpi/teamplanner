<script lang="ts">
	import type { PageData } from './$types';
	import type { Atleta } from '$lib/types';
	import PageTitle from '$lib/components/PageTitle.svelte';

	let atleta: Atleta = {
		nome: '',
		nascimento: new Date(),
		idade: 0,
		altura: 0,
		peso: 0,
		dominancia: '',
		posicao: '',
		minutagem: 0,
		gols: 0,
		assistencias: 0,
		cartoesAmarelos: 0,
		cartoesVermelhos: 0
	};

	async function handleSubmit(event: Event) {
		const formData = new FormData(event.target as HTMLFormElement);
		const atletaData = Object.fromEntries(formData.entries()) as unknown as Atleta;
		atletaData.nascimento = new Date(atletaData.nascimento);

		// Handle form submission here
		// For example, you could make a POST request to your API to create a new atleta
		const response = await fetch('/api/atletas', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(atletaData)
		});

		// ... handle response
	}

	export let data: PageData;

	function formatDate(date: Date): string {
		if (date instanceof Date && !isNaN(date.getTime())) {
			return date.toISOString().split('T')[0];
		}
		return '';
	}
</script>

<PageTitle name={'Adicionar Novo Atleta'} />
<form method="post" class="max-w-xl mx-auto p-4 rounded-md" on:submit|preventDefault={handleSubmit}>
	<div class="mb-4">
		<label for="nome" class="block font-extrabold text-black">Nome</label>
		<input
			id="nome"
			type="text"
			bind:value={atleta.nome}
			class="mt-1 p-2 w-full border rounded-md"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="nascimento" class="block text-black font-extrabold">Data de Nascimento</label>
		<input
			id="nascimento"
			type="date"
			bind:value={atleta.nascimento}
			class="mt-1 p-2 w-full border rounded-md"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="altura" class="block text-black font-extrabold">Altura (m)</label>
		<input
			id="altura"
			type="number"
			step="0.01"
			bind:value={atleta.altura}
			class="mt-1 p-2 w-full border rounded-md"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="peso" class="block text-black font-extrabold">Peso (kg)</label>
		<input
			id="peso"
			type="number"
			bind:value={atleta.peso}
			class="mt-1 p-2 w-full border rounded-md"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="dominancia" class="block text-black font-extrabold">Dominância</label>
		<input
			id="dominancia"
			type="text"
			bind:value={atleta.dominancia}
			class="mt-1 p-2 w-full border rounded-md"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="posicao" class="block text-black font-extrabold">Posição</label>
		<input
			id="posicao"
			type="text"
			bind:value={atleta.posicao}
			class="mt-1 p-2 w-full border rounded-md"
			required
		/>
	</div>

	<div class="text-right">
		<button class="px-4 py-2 w-full bg-orange-500 text-white rounded-md hover:bg-orange-600"
			>Salvar</button
		>
	</div>
</form>
