<script lang="ts">
	import { posts_sorted_by_date_created, type BlogPostWithHTML } from '$lib/utils/blog_posts';
</script>

<ul>
	{#each posts_sorted_by_date_created as post}
		<li>
			<a href={`blog/${post.slug}`}>
				{post.title}
			</a>
		</li>
	{/each}
</ul>
