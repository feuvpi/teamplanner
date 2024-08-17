<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// let plugins = [TimeGrid, List];
	// let options = {
	// 	view: 'timeGridWeek',
	// 	events: [
	// 		// your list of events
	// 	]
	// };

	class Time {
		Descricao: string;

		constructor(descricao: string) {
			this.Descricao = descricao;
		}
	}

	class Partida {
		Data: Date;
		Adversario: string;
		Time: Time;
		Mando: boolean;
		Local: string;
		GolsAFavor: number | undefined;
		GolsContra: number | undefined;

		constructor(
			data: Date,
			adversario: string,
			time: Time,
			local: string,
			golsAFavor: number | undefined,
			golsContra: number | undefined,
			mando: boolean
		) {
			this.Data = data;
			this.Adversario = adversario;
			this.Time = time;
			this.Local = local;
			this.GolsAFavor = golsAFavor;
			this.GolsContra = golsContra;
			this.Mando = mando;
		}
	}

	const time1 = new Time('Sub-17');
	const time2 = new Time('Sub-15');

	const partida1 = new Partida(
		new Date('2022-01-01'),
		'Adversario A',
		time1,
		'Stadium 1',
		undefined,
		undefined,
		false
	);
	const partida2 = new Partida(
		new Date('2022-01-02'),
		'Adversario C',
		time1,
		'Stadium 2',
		undefined,
		undefined,
		false
	);
	const partida3 = new Partida(
		new Date('2022-01-03'),
		'Adversario A',
		time2,
		'Stadium 3',
		undefined,
		undefined,
		false
	);
	const partidas: Partida[] = [partida1, partida2, partida3];
</script>

<div>
	<div class="mx-4">
		{#each partidas as partida}
			<Card type="border" class="mb-5">
				<div class="flex justify-between">
					<p class="text-gray-500 mr-2 text-sm hover:text-gray-700 hover:font-semibold">
						{partida.Data.toLocaleDateString('en-GB', {
							day: '2-digit',
							month: '2-digit',
							year: '2-digit'
						})}
					</p>
					{#if partida.Mando}
						<div class="match-details lg:flex text-xl font-semibold">
							<h2 class="team-name mx-4">{partida.Time}</h2>
							<p class="invisible lg:visible">X</p>
							<h2 class="team-name mx-4">{partida.Adversario}</h2>
						</div>
					{:else}
						<div class="match-details lg:flex text-xl font-semibold">
							<h2 class="team-name mx-4">{partida.Adversario}</h2>
							<p class="invisible lg:visible">X</p>
							<h2 class="team-name mx-4">{partida.Time.Descricao}</h2>
						</div>
					{/if}
					<p class="text-sm text-gray-500 hover:text-gray-700 hover:font-semibold">
						{partida.Local}
					</p>
				</div>
			</Card>
		{/each}
	</div>
	// UPDATE INCLUDING A CALENDAR HERE, WE ARE USING TAILWIND. PUT THE CALENDAR SIDE BY SIDE WITH THE
	CARD LIST
</div>
