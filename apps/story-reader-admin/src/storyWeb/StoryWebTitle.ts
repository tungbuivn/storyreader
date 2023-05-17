import { StoryWeb as TStoryWeb } from "../api/storyWeb/StoryWeb";

export const STORYWEB_TITLE_FIELD = "link";

export const StoryWebTitle = (record: TStoryWeb): string => {
  return record.link || String(record.id);
};
