<script>
	import { highlighter } from "./store";
	export let idx;
	export let idy;
</script>

<div class:selected={idx === $highlighter.x && idy === $highlighter.y}>
	{idx},{idy}
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
