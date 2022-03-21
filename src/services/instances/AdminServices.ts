import Generic from "../Generic";
import { ADMIN_SONGS_URL, ADMIN_TAGS_URL, ADMIN_USERS_URL } from "../api";

class SongService extends Generic<Song> {
  _url = ADMIN_SONGS_URL;
}

class TagService extends Generic<Tag> {
  _url = ADMIN_TAGS_URL;
}

class UserService extends Generic<User> {
  _url = ADMIN_USERS_URL;
}

export const songs = new SongService();
export const tags = new TagService();
export const users = new UserService();
