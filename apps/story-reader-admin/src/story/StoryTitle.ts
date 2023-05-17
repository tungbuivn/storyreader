import { Story as TStory } from "../api/story/Story";

export const STORY_TITLE_FIELD = "name";

export const StoryTitle = (record: TStory): string => {
  return record.name || String(record.id);
};
