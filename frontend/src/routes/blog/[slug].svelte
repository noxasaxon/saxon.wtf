<script context="module" lang="ts">
	import { posts_sorted_by_date_created, type BlogPostWithHTML } from '$lib/utils/blog';

	export function load({ params }: LoadEvent) {
		const { slug } = params;
		const found_post = posts_sorted_by_date_created.find((p) => {
			return p.slug.toLowerCase() === slug.toLowerCase();
		});

		return {
			props: {
				found_post: found_post
			}
		};
	}
</script>

<script lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';

	export let found_post: BlogPostWithHTML;
</script>

<title>wtf is {found_post.title}?</title>

<svelte:component this={found_post.render} />

<!-- {$page.params.slug} -->
