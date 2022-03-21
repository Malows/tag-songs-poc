import Generic from "../Generic";
import { SONGS_URL, TAGS_URL } from "../api";

class SongService extends Generic<Song> {
  _url = SONGS_URL;
}

class TagService extends Generic<Tag> {
  _url = TAGS_URL;
}

export const songs = new SongService();
export const tags = new TagService();
