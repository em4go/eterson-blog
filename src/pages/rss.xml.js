import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	// Group by canonical key to avoid duplicate entries
	const groups = new Map();
	for (const p of posts) {
		const key = p.data.canonicalSlug ?? p.id;
		const arr = groups.get(key) ?? [];
		arr.push(p);
		groups.set(key, arr);
	}
	// Prefer English version in RSS else first available
	const deduped = Array.from(groups.values()).map((arr) => arr.find((p) => (p.data.lang ?? 'en') === 'en') ?? arr[0]);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: deduped.map((post) => ({
			...post.data,
			link: `/blog/${post.data.lang ?? 'en'}/${post.data.canonicalSlug ?? post.id}/`,
		})),
	});
}
