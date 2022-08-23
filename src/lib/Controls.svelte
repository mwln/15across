<script>
	import { MAPPINGS } from "./store";
	console.log(Object.entries(MAPPINGS));
</script>

<div class="wrapper">
	{#each Object.entries(MAPPINGS) as [key, data]}
		<div>
			<kbd>{key}</kbd>
			<span>{data.desc.toLowerCase()}</span>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
