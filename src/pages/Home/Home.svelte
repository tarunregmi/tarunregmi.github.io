<script>
	import me from "/assets/img/img-me.png";
	import { fade } from "svelte/transition";
</script>

<div class="home box" in:fade={{delay: 250, duration: 300}}>
	<div class="hero">
		<div>
			<h4 class="hello">HELLO</h4>
			<h1 class="intro">I'm <span class="mark">Tarun Regmi</span></h1>
			<p>A motivated and aspiring Software Engineer{#if true}ing student{/if} with a strong foundation in coding, problem-solving, and team collaboration.</p>
			<button class="button"><a href="#download">DOWNLOAD CV</a></button>
		</div>
	</div>
	<div class="photo">
		<img class="me" src={me} alt="IMG" loading="eager" />
	</div>
</div>