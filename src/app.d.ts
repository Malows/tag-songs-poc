// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

	}

	interface Tag {
		id: number;
		name: string;
		slug: ?string;
		is_active: ?boolean;
	}

	interface Song {
		id: number;
		name: string;
		spotify_url: ?string;
		youtube_url: ?string;
		tags: Tag[];
		is_active: ?boolean;
	}

	interface User {
		id: number;
		name: string;
		username: string;
		email: ?string;
		is_active: boolean;
		is_admin: boolean;
	}
}

export {};
