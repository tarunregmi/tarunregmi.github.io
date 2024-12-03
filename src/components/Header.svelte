<script>
	import logo from "/assets/img/icon-logo.svg";
	import linkedin from "/assets/img/icon-linkedin.svg";
	import github from "/assets/img/icon-github.svg";

	const toggleNavigations = () => {
		document.querySelector(".navigations").classList.toggle("flex");
	};
</script>

<header class="width-full row">
	<img class="icon" src="{logo}" alt="TR"/>
	<button class="icon cross" on:click={toggleNavigations}>
		<span></span>
	</button>
	<div class="navigations">
		<nav class="routes">
			<span><a on:click={toggleNavigations} href="/#/">Home</a></span>
			<span><a on:click={toggleNavigations} href="/#/projects">Projects</a></span>
			<span><a on:click={toggleNavigations} href="/#/about">About</a></span>
			<span><a on:click={toggleNavigations} href="/#/contact">Contact</a></span>
		</nav>
		<i class="sep"></i>
		<div class="socials">
			<a target="_blank" href="https://linkedin.com/in/tarunregmi/" title="LinkedIn"><img class="icon" src={linkedin} alt="LinkedIn"></a>
			<a target="_blank" href="https://github.com/tarunregmi/" title="GitHub"><img class="icon" src={github} alt="GitHub"></a>
		</div>
	</div>
</header>