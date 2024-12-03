import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	compilerOptions: {
		cssHash: ({ hash, css, name, filename }) => `tr-${hash(css)}`,
	},
}
