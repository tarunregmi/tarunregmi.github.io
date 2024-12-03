<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
	import Header from "./components/Header.svelte";
	import DevMsg from "./components/DevMsg.svelte";
</script>

<DevMsg />
<Header />
<main class="width-full box">
	<Router {routes} />
</main>