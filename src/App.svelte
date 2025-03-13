<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
	import Header from "./components/Header.svelte";
</script>

<Header />
<main class="width-full box">
	<Router {routes} />
</main>