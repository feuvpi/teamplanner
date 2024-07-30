<script lang="ts">
	let image: string = '';

	function handleFileChange(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			const file = input.files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				image = e.target?.result as string;
			};
			reader.readAsDataURL(file);
		}
	}
</script>

<div class="mb-5 text-center">
	<div class="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inner">
		{#if image}
			<img class="object-cover w-full h-full rounded-full" src={image} alt="Profile Picture" />
		{/if}
	</div>

	<label
		for="fileInput"
		class="cursor-pointer inline-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
			<path d="M5 7h1a2 2 0 0 0 2 -2 1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
			<circle cx="12" cy="13" r="3" />
		</svg>						
		Browse Photo
	</label>

	<div class="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

	<input id="fileInput" accept="image/*" class="hidden" type="file" on:change={handleFileChange}>
</div>
