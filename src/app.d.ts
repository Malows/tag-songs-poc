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

	type TagCreate = Pick<Tag, ['name']>

	interface Song {
		id: number;
		name: string;
		spotify_url: ?string;
		youtube_url: ?string;
		tags: Tag[];
		is_active: ?boolean;
	}

	type SongCreate = Pick<Song, ['name', 'spotify_url', 'youtube_url', 'tags']>

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
