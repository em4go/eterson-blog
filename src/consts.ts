// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Brand/Site
export const SITE_TITLE = 'Ernesto — Data & AI Developer';
export const SITE_DESCRIPTION =
	'Ernesto builds data-driven products using ML, optimization, and software engineering—focused on reproducibility, scalability, and business value.';

// Author
export const AUTHOR_NAME = 'Ernesto';
export const AUTHOR_URL = 'https://www.linkedin.com/in/ernestomg';
export const AUTHOR_HANDLE = 'Ernesto';

// Utility function to check if a link is external
export function isExternalLink(href: string): boolean {
	// If href is empty or undefined, it's not external
	if (!href) return false;
	
	// If it's a relative link, it's not external
	if (href.startsWith('/') || href.startsWith('#')) return false;
	
	// If it's a protocol-relative link, it's external
	if (href.startsWith('//')) return true;
	
	// If it starts with http or https, check if it's external
	if (href.startsWith('http://') || href.startsWith('https://')) {
		try {
			const url = new URL(href);
			const currentDomain = window.location.hostname;
			return url.hostname !== currentDomain;
		} catch {
			// If URL parsing fails, assume it's external for safety
			return true;
		}
	}
	
	// For all other cases, assume it's not external
	return false;
}
