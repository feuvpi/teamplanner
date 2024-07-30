<script lang="ts">
	import type { PageData } from './$types';
	import type { Atleta } from '$lib/types';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ProfilePicture from './_ProfilePicture.svelte';

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
	let profileImage: string = '';

	function formatDate(date: Date): string {
		if (date instanceof Date && !isNaN(date.getTime())) {
			return date.toISOString().split('T')[0];
		}
		return '';
	}
</script>

<PageTitle name={'Adicionar Novo Atleta'} />
<form method="post" class="bg-white max-w-xl mx-auto my-auto p-4 rounded-md shadow-lg" on:submit|preventDefault={handleSubmit} >

	<ProfilePicture bind:image={profileImage} />


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


<!-- <div x-show.transition.in="step === 1">
	<div class="mb-5 text-center">
		<div class="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
			<img id="image" class="object-cover w-full h-32 rounded-full" :src="image" />
		</div>
		
		<label 
			for="fileInput"
			type="button"
			class="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
				<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
				<circle cx="12" cy="13" r="3" />
			</svg>						
			Browse Photo
		</label>

		<div class="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

		<input name="photo" id="fileInput" accept="image/*" class="hidden" type="file" @change="let file = document.getElementById('fileInput').files[0]; 
			var reader = new FileReader();
			reader.onload = (e) => image = e.target.result;
			reader.readAsDataURL(file);">
	</div>

	<div class="mb-5">
		<label for="firstname" class="font-bold mb-1 text-gray-700 block">Firstname</label>
		<input type="text"
			class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
			placeholder="Enter your firstname...">
	</div>

	<div class="mb-5">
		<label for="email" class="font-bold mb-1 text-gray-700 block">Email</label>
		<input type="email"
			class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
			placeholder="Enter your email address...">
	</div>

</div> -->
