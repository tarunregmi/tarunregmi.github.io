<script>
	export let project;
</script>

<div class="card">
	<img class="thumbnail" src="{project.thumbnail}" alt="Thumbnail" />
	<div class="card-content">
		<h2>{project.title}</h2>
		<p>{project.description}</p>
		<div>
			<button class="button">Preview</button>
			<button class="button">
				<a href="{project.code}" target="_blank">Source Code</a>
			</button>
		</div>
	</div>
</div>

<style>
.card{
	border: 1px solid;
	display: flex;
	flex-flow: column nowrap;
	min-width: 320px;
	max-width: 1000px;
	border-radius: 10px;
	overflow: hidden;
}

.thumbnail{
	height: 200px;
	object-fit: cover;
	object-position: center;
}

.button{
	margin-top: 20px;
}

button:disabled{
	cursor: not-allowed;
}

.card-content{
	padding: 10px;
}

@media (min-width: 768px) {
	.card{
		flex-flow: row nowrap;
	}
}
</style>