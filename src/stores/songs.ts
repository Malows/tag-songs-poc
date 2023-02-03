import { createGenericStore } from './generic'

import services from "../services";

export const songs = createGenericStore<Song, SongCreate>(services.user.songs);
