<script lang="ts">
	import type { PageData } from './$types';

	/** @type {import('./$types').ActionData} */
	export let form;

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="bg-gray-200 min-h-screen flex flex-col justify-center py-2 sm:px-6 lg:px-8 px-6">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<div class="self-center mx-auto my-ayto flex bg-orange-500 shadow-lg w-fit p-2 rounded-lg">
			<svg
				class="h-16"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
				<g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="ic_fluent_board_24_filled" fill="#212121" fill-rule="nonzero">
						<path
							d="M11.499,9.49917736 L11.5,21.0011774 L6.25005624,21.0018356 C4.51701151,21.0018356 3.10075697,19.6455145 3.00514494,17.9363661 L3,17.7519391 L3,9.49917736 L11.499,9.49917736 Z M12.999,15.4991774 L21.5,15.4991774 L21.5008077,17.7519229 C21.5005988,19.5467519 20.0455893,21.0018356 18.2507042,21.0018356 L13,21.0011774 L12.999,15.4991774 Z M18.2513521,2.49817736 C19.9843968,2.49817736 21.4006513,3.85452629 21.4962634,5.56367469 L21.5014083,5.74810161 L21.5,13.9991774 L12.999,13.9991774 L13,2.49817736 L18.2513521,2.49817736 Z M11.5,2.49817736 L11.499,7.99917736 L3,7.99917736 L3.00060063,5.74811784 C3.00080955,3.9532889 4.45581897,2.49817736 6.25064792,2.49817736 L11.5,2.49817736 Z"
							id="🎨-Color"
						/>
					</g>
				</g>
			</svg>
		</div>

		<h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
			Acesse sua conta
		</h2>
		<p class="mt-2 text-center text-sm leading-5 text-orange-500 max-w">
			<a
				href="/registro"
				class="font-medium text-orange-500 hover:text-orange-400 focus:outline-none focus:underline transition ease-in-out duration-150"
			>
				Não possui conta? Criar uma agora.
			</a>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form method="POST">
				<label for="email" class="block text-sm font-medium leading-5 text-gray-700"
					>Endereço de E-mail
					<input
						name="email"
						placeholder="E-mail"
						type="email"
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
					/>
					<div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</label>
				<label for="password" class="block text-sm font-medium leading-5 text-gray-700 mt-4"
					>Senha
					<div class="mt-1 rounded-md shadow-sm">
						<input
							placeholder="Senha"
							name="password"
							type="password"
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</label>
				<div class="mt-6 flex items-center justify-between">
					<div class="flex items-center">
						<input
							name="remember"
							type="checkbox"
							value="1"
							class="form-checkbox h-4 w-4 text-orange-600 transition duration-150 ease-in-out"
						/>
						<label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"
							>Lembrar-me</label
						>
					</div>

					<div class="text-sm leading-5">
						<a
							href="#"
							class="font-medium text-orange-500 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150"
						>
							Esqueceu sua senha?
						</a>
					</div>
				</div>

				<div class="mt-6">
					<span class="block w-full rounded-md shadow-sm">
						<button
							class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition duration-150 ease-in-out"
						>
							Entrar
						</button>
					</span>
				</div>
			</form>
			{#if form != undefined && !form?.success}
				<p class="flex justify-center text-center my-auto pt-4 text-sm text-red-500">
					Credenciais invalidas!
				</p>
			{/if}
		</div>
	</div>
</div>
