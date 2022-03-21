/// <reference types="@sveltejs/kit" />

declare interface Tag {
  id: number;
  name: string;
  slug: ?string;
  is_active: ?boolean;
}

declare interface Song {
  id: number;
  name: string;
  spotify_url: ?string;
  youtube_url: ?string;
  tags: Tag[];
  is_active: ?boolean;
}

declare interface User {
  id: number;
  name: string;
  username: string;
  email: ?string;
  is_active: boolean;
  is_admin: boolean;
}
