<script>
	// import Card from "./Card.svelte";
	import Card1 from "./Card1.svelte";

	async function getProjects() {
		const response = await fetch("/assets/json/projects.json");
		const object = await response.json();
		return object;
	}
</script>

<div class="projects box">
	{#await getProjects()}
		loading ...
	{:then projects}
		{#each projects as project}<Card1 object={project} />{/each}
	{:catch}
		<p>Error during loading projects!</p>
	{/await}
</div>

<style>
.projects{
	padding: 40px 0;
	overflow: hidden auto;
	scroll-behavior: smooth;
	display: flex;
	gap: 45px;
	flex-flow: row wrap;
	justify-content: center;
}
</style>