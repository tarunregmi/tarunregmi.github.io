<script>
	import me from "/assets/img/img-me.png";
	import { fade } from "svelte/transition";
</script>

<div class="home box" in:fade={{delay: 250, duration: 300}}>
	<div class="hero">
		<div>
			<h4 class="hello">HELLO</h4>
			<h1 class="intro">I'm <span class="mark">Tarun Regmi</span></h1>
			<p>Backend-focused full-stack engineer with 2+ years building production systems. Experienced across the stack with deep expertise in scalable backend architecture.</p>
			<button class="button"><a href="#download">DOWNLOAD CV</a></button>
		</div>
	</div>
	<div class="photo">
		<img class="me" src={me} alt="IMG" loading="eager" />
	</div>
</div>