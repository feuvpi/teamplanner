<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import type { Link } from '$lib/interfaces/link';
	import Icon from '@iconify/svelte';

	export let isOpen = true,
		links: Link[] = [];

	async function logout() {
		console.log('uhul');

		const response = await fetch('/logout', {
			method: 'GET'
		});
		if (response.ok) {
			// Redirect to login page
			window.location.href = '/login';
		} else {
			// Handle error
			console.error('Logout failed');
		}
	}
</script>

<div class="relative text-black">
	<button type="button" on:click|stopPropagation>
		<slot />
	</button>
	<div
		use:clickoutside
		id="dropdown"
		class="absolute {isOpen
			? ''
			: 'hidden'} right-0 border-2 z-50 shadow-md bg-white p-4 w-64 rounded-xl"
	>
		<div class="flex items-start gap-3 border-b pb-3 mb-3">
			<img
				src="/favicon.png"
				class="w-14 h-14 aspect-square rounded-full border border-gray-300"
				alt="Username"
			/>
			<div>
				<p class="font-semibold">John Doe</p>
				<p class="text-xs">johndoe@gmail.com</p>
				<p class="text-xs bg-primary-200 w-fit py-1 px-3 rounded-full mt-1.5">Admin</p>
			</div>
		</div>
		<ul>
			{#each links as link}
				<li>
					<a class="py-2 px-2.5 rounded-md hover:bg-gray-100 flex items-center" href={link.path}>
						<Icon icon={link.icon.inactive} class="mr-1 text-2xl" />
						{link.name}</a
					>
				</li>
			{/each}
			<li class="border-t mt-2 pt-3">
				<form method="POST">
					<button
						type="button"
						class="w-full bg-red-500/60 cursor-pointer hover:bg-red-600/60 rounded-md place-content-center align-middle flex"
						on:click={logout}
					>
						Logout
						<Icon icon="solar:logout-linear" class="ml-1 text-2xl" />
					</button>
				</form>
			</li>
		</ul>
	</div>
</div>
