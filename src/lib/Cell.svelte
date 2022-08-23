<script>
	import { watch } from "./store";
	export let id;
</script>

<div class:selected={id === $watch.x + $watch.y}>
	{id}
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		color: darkgrey;
		width: 50px;
		height: 50px;
		margin: 2px;
		background-color: blue;
	}
	.selected {
		background-color: lightgreen;
	}
</style>
