import { createGenericStore } from './generic'

import services from "../services";

export const tags = createGenericStore<Tag, TagCreate>(services.user.tags);
