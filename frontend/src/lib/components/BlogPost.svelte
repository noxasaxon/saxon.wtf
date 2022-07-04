<script>
	export let title;
	export let description;
	export let tags;
	export let date_created;
	export let date_last_updated;
	export let author;
	export let header_image;
</script>

<article>
	<h1>{title}</h1>
	<slot />
</article>
