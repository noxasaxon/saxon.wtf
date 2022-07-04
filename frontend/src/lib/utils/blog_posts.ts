// https://fantinel.dev/blog-development-sveltekit/#extracting-post-data

export interface BlogPost {
	title: string;
	slug: string;
	description: string;
	tags: string[];
	date_created: string;
	date_last_updated: string;
	author: string;
	header_image: string;
	hidden?: boolean;
}

export interface BlogPostWithHTML extends BlogPost {
	render: () => string;
}

// Import the markdown files for each post
export const blog_post_dir = '../../../blog_posts/';
const imported_posts = import.meta.globEager('$lib/blog_posts/*.md');

// For each of them, MDsveX will do the heavy lifting. The "metadata"
// is automatically recovered from the Frontmatter, and we're also
// asking it to render the blog post so we're able to use it
// as a component later on.
const blog_posts: BlogPostWithHTML[] = Object.entries(imported_posts).map(([key, value]) => {
	console.debug(value);
	return {
		...value.metadata,
		render: value.default
	};
});

const visible_posts = blog_posts.filter((post) => !post.hidden);

export const posts_sorted_by_date_created = visible_posts
	.sort((a, b) => {
		return new Date(b.date_created).getTime() - new Date(a.date_created).getTime();
	})
	.reverse();
