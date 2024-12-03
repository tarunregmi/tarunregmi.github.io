<script>
	export let id = "";
</script>

<div class="video">
	<iframe width="560" src="https://www.youtube-nocookie.com/embed/{id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	<button class="icon close"></button>
</div>

<style>
.video{
	background: #101418;
	padding: 0 var(--px);
	position: absolute;
	z-index: 5;
	inset: 0;
	display: flex;
	gap: 10vh;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
}

.close{
	cursor: pointer;
	position: relative;
}

.close::before, .close::after{
	content: "";
	position: absolute;
	left: 50%;
	top: 50%;
	width: 90%;
	height: 3px;
	background: var(--icon-color);
	border-radius: 3px;
}

.close::before{transform: translate(-50%, -50%) rotate(45deg);}
.close::after{transform: translate(-50%, -50%) rotate(-45deg);}

iframe{
	border: 1px solid #555;
	border-radius: 10px;
	max-width: 100%;
	aspect-ratio: 16/9;
}
</style>