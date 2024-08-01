<script>
	export let classes = '';
</script>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg {classes}">
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead
			class="text-xs text-primary-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
		>
			<tr>
				<th scope="col" class="py-3 px-6">Nome</th>
				<th scope="col" class="py-3 px-6">Idade</th>
				<th scope="col" class="py-3 px-6">Altura</th>
				<th scope="col" class="py-3 px-6">Peso</th>
				<th scope="col" class="py-3 px-6">Posição</th>
				<th scope="col" class="py-3 px-6">Dominância</th>
				<th scope="col" class="py-3 px-6">Editar</th>
			</tr>
		</thead>
		<tbody>
			<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
				<th
					scope="row"
					class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
				>
					Nome do Jogador
				</th>
				<td class="py-4 px-6">22</td>
				<td class="py-4 px-6">1,76</td>
				<td class="py-4 px-6">74 Kg</td>
				<td class="py-4 px-6">Defensor</td>
				<td class="py-4 px-6">Direito</td>
				<td class="py-4 px-6">
					<a href="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mt-5 flex items-center justify-start">
	<a
		href="/"
		class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
	>
		Previous
	</a>
	<a
		href="/"
		class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
	>
		Next
	</a>
</div>
