<script>
	import Cell from "./Cell.svelte";
	import { keylog, grid, movement, highlighter } from "./store";

	let incr = 1;
	function handleKeydown(event) {
		keylog.log(event);
		highlighter.move($grid, $movement);
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="grid-config">
	<button on:click={() => grid.add(incr)}> add cells </button>
	<button on:click={grid.reset}> reset cells </button>
	<button on:click={() => grid.reduce(incr)}> reduce cells </button>
	<div>total cells: {$grid ** 2} width: {$grid}</div>
</div>
<div class="cell-container" style="--cols:{$grid}">
	{#each { length: $grid } as _, i}
		{#each { length: $grid } as _, j}
			<Cell idx={j} idy={i} />
		{/each}
	{/each}
</div>

<style>
	.cell-container {
		width: 100%;
		display: grid;
		align-items: center;
		justify-content: center;
		grid-template-columns: repeat(var(--cols), auto);
		grid-template-rows: auto;
	}
</style>
