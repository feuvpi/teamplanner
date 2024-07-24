<script lang="ts">
	export let classes: string = '',
		type: string = 'shadow';
</script>

<div
	class={`p-5 my-2 ${
		type === 'shadow' ? 'shadow-lg' : 'border border-gray-300'
	} bg-white rounded-xl ${classes}`}
>
	<slot />
</div>
