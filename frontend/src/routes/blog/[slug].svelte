<script context="module" lang="ts">
	import { posts_sorted_by_date_created, type BlogPostWithHTML } from '$lib/utils/blog_posts';

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
	import { page } from '$app/stores';
	import type { LoadEvent } from '@sveltejs/kit';

	export let found_post: BlogPostWithHTML;
</script>

<svelte:component this={found_post.render} />
{$page.params.slug}
