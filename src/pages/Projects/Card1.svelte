<script>
	export let object = {};
</script>

<div class="card">
	<div class="thumbnail">
		<img src="{object.thumbnail}" alt="Thumbnail">
	</div>
	<div class="card-body">
		<div class="card-content">
			<h3>{object.title}</h3>
			<p>{object.description}</p>
		</div>
		<div class="card-actions">
			<button class="button"><a href="{object.preview}" target="_blank">Preview</a></button>
			<button class="button">
				<a href="{object.code}" target="_blank">Source Code</a>
			</button>
		</div>
	</div>
</div>

<style>
.card{
	width: 95%;
	border-radius: 10px;
	overflow: hidden;
	background: rgb(15, 25, 36);
	border: 1px solid #1F262E;
	display: flex;
	flex-flow: column nowrap;
}

img{
	width: 100%;
	display: block;
}


.card-body{
	padding: 10px;
}

h3{
	font-weight: 500;
}

p{
	color: rgb(255 255 255 / 0.7);
}

.card-actions{
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 40px;
}

@media (min-width: 550px) and (max-width: 769px) {
	.card{
		width: 95%;
		flex-flow: row nowrap;
	}

	.thumbnail{
		width: 50%;
	}

	.card-body{
		width: 50%;
	}
}

@media (min-width: 769px) {
	.card{
		width: 40%;
	}
}
</style>