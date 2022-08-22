<script>
	import Cell from "./Cell.svelte";

	let MAX_SIZE = 25;
	let MIN_SIZE = 5;

	let cols = 15;
	$: size = cols ** 2;

	function add() {
		cols < MAX_SIZE ? (cols += 1) : cols;
	}
	function reset() {
		cols = 15;
	}
	function reduce() {
		cols > MIN_SIZE ? (cols -= 1) : cols;
	}
</script>

<div class="grid-config">
	<button on:click={add}> add cells </button>
	<button on:click={reset}> reset cells </button>
	<button on:click={reduce}> reduce cells </button>
	<div>total cells: {size} width: {cols}</div>
</div>
<div class="cell-container" style="--cols:{cols}">
	{#each { length: size } as _, i}
		<Cell id={i + 1} />
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
